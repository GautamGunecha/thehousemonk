import React, { useEffect, useState } from "react";
import { AiFillGithub, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

const Search = ({ searchUser }) => {
  const [text, setText] = useState("");

  const clearSearch = () => {
    setText("");
  };

  useEffect(() => {
    searchUser(text);
  }, [text, searchUser]);

  return (
    <div className="w-full p-4 tracking-widest bg-gray-200 px-8">
      <div className="flex items-center gap-4 mt-4">
        <AiFillGithub size={35} />
        <h1 className="text-2xl font-semibold">GitHub Profile Viewer</h1>
      </div>
      <div className="md:w-[35%] text-white justify-center bg-sky-400 flex items-center p-1 px-2 gap-4 mt-8 mb-5">
        <AiOutlineSearch size={25} />
        <input
          type="text"
          value={text}
          placeholder="Search User"
          onChange={(e) => setText(e.target.value)}
          className="bg-transparent p-2 w-full placeholder:text-white tracking-widest outline-none"
        />
        <AiOutlineClose
          size={25}
          className="cursor-pointer"
          onClick={clearSearch}
        />
      </div>
    </div>
  );
};

export default Search;
