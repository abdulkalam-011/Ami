import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ placeholder = "Search...", handleSearch = () => {} }) => {
  const [search, setsearch] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <form
      className="border rounded-full mt-6 text-md flex justify-between items-center overflow-hidden px-4 py-2 border-green-400 focus-within:ring-2 focus-within:ring-green-300"
      onSubmit={(e) => {
        e.preventDefault();
        if (search.trim() === "") return;
        handleSearch(search);
        setsearch("");
      }}
    >
      <input
        ref={inputRef}
        value={search}
        onChange={(e) => setsearch(e.target.value)}
        type="text"
        placeholder={placeholder}
        className="border-none outline-none grow "
      />
      <button
        type="submit"
        className="flex items-center bg-green-300 h-8 w-8 rounded-full justify-center text-xl ml-2"
      >
        <FaSearch className="text-white text-sm" />
      </button>
    </form>
  );
};

export default Search;
