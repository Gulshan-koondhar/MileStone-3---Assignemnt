import { SearchIcon } from "lucide-react";
import React from "react";

const Search = () => {
  return (
    <form action="" className="bg-[#F4F4F5] flex px-3 py-2 rounded w-full">
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent outline-none md:w-96 lg:w-full"
      />
      <SearchIcon />
    </form>
  );
};

export default Search;
