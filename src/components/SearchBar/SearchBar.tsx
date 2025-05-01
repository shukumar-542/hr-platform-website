"use client"
import React from "react";
import { IoSearch } from "react-icons/io5";

type SearchBarProps = {
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

const SearchBar: React.FC<SearchBarProps> = ({ handleSearch, value }) => {
  return (
    <div className="flex items-center border border-[#03346E] rounded-md px-3 py-2 w-64">
      <IoSearch className="text-[#03346E] mr-2" />
      <input
        value={value}
        onChange={handleSearch}
        type="text"
        placeholder="Search here..."
        className="outline-none w-full text-sm placeholder-gray-500"
      />
    </div>
  );
};

export default SearchBar;
