import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { languagesContent } from "../utils/constants";
import openai from "../utils/openai";

const GptSearchBar = () => {
  const activeLanguage = useSelector((store) => store.config.lang);
  const searchInputText = useRef(null);
  const handleGptSearch = async () => {
    const gptQuery =
      "Act as a movie recommending system and give me top 5 movie names comma seperated with genre of " +
      searchInputText.current.value;
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log("gptResults: ", gptResults);
  };
  return (
    <div className="pt-[10%] flex justify-center ">
      <form
        className="w-1/2 bg-black grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchInputText}
          type="text"
          className="p-4 m-4 col-span-9 rounded-lg"
          placeholder={languagesContent[activeLanguage].searchBarPlaceholder}
        />
        <button
          className="py-2 m-4 rounded-lg px-4 col-span-3 bg-red-700 text-white"
          onClick={handleGptSearch}
        >
          {languagesContent[activeLanguage].searchButton}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
