import React from "react";
import lang from "../utils/lang";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const preferredLang = useSelector((store) => store.config.preferredLanguage);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 px-4 bg-black grid grid-cols-12">
        <input
          text="text"
          className="py-3 px-4 my-4 bg-white col-span-9"
          placeholder={lang[preferredLang].gptSearchBarPlaceHolder}
        />
        <button
          type="button"
          className="py-3 px-4 my-4 bg-red-700 font-semibold text-lg text-white col-span-3 cursor-pointer"
        >
          {lang[preferredLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
