import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[40%] md:pt-[20%] px-6 md:px-24 absolute text-white bg-linear-to-r from-black">
      <h1 className="text-lg md:text-6xl font-bold">{title}</h1>
      <p className="py-2 md:py-6 text-xs md:text-lg w-full md:w-1/4">{overview}</p>
      <div className="my-0 md:my-4">
        <button className="bg-white text-black rounded-lg text-lg py-2 px-4 md:py-4 md:px-12 font-bold hover:bg-white/80 cursor-pointer">
          ▶ Play
        </button>
        <button className="mx-4 bg-gray-500/50 text-white rounded-lg text-lg py-2 px-4 md:py-4 md:px-12 font-bold cursor-pointer">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
