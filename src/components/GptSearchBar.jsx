import React, { useRef } from "react";
import lang from "../utils/lang";
import { useDispatch, useSelector } from "react-redux";
import client from "../utils/openai";
import { API_ENDPOINTS, API_OPTIONS } from "../utils/constant";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const preferredLang = useSelector((store) => store.config.preferredLanguage);
  const searchText = useRef();
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const searchTerm = searchText.current.value;
    const response = await client.responses.create({
      model: "gpt-5.2",
      instructions: `
    		You are a movie recommendation assistant.

    		Rules:
    		- Suggest movies based on user input.
    		- Return ONLY movie names.
    		- Movie names must be comma separated.
    		- Do NOT add numbering.
    		- Do NOT add description.
    		- Do NOT add extra text.
    		- Return maximum 5 movies.
    		`,
      input: searchTerm,
    });
    console.log("User is searching for", searchTerm);
    console.log("GPT Response", response.output_text);
    // const response = {
    //   output_text:
    //     "Coolie No. 1, Saajan Chale Sasural, Hero No. 1, Dulhe Raja, Aunty No. 1",
    // };
    const moviesName = response.output_text.split(",");
    const apiResponse = moviesName.map((result) => searchInTmdb(result));
    const moviesResult = await Promise.all(apiResponse);
    dispatch(addGptMovieResult({ moviesName, moviesResult }));
  };

  const searchInTmdb = async (movie) => {
    const data = await fetch(
      API_ENDPOINTS.SEARCH_MOVIE(movie),
      API_OPTIONS.GET,
    );
    const json = await data.json();
    return json.results;
  };
  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 px-4 bg-black grid grid-cols-12"
        onSubmit={handleOnSubmit}
      >
        <input
          ref={searchText}
          text="text"
          className="py-3 px-4 my-4 bg-white col-span-9"
          placeholder={lang[preferredLang].gptSearchBarPlaceHolder}
        />
        <input
          type="submit"
          className="py-3 px-4 my-4 bg-red-700 font-semibold text-lg text-white col-span-3 cursor-pointer"
          value={lang[preferredLang].search}
        />
      </form>
    </div>
  );
};

export default GptSearchBar;
