import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video bg-gradient-to-r from-black absolute text-white">
      <div className="mt-40 ml-10">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="my-2 text-l w-1/4">{overview}</p>
        <div className="my-4">
          <button className="px-6 py-4 bg-gray-400 rounded-md text-xl font-bold text-white bg-opacity-30">
            {" "}
            ▶️ Play
          </button>
          <button className="px-6 py-4 bg-gray-400 rounded-md text-xl font-bold text-white mx-2 bg-opacity-30">
            {" "}
            ℹ️ More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
