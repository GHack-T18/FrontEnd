import React, { useState } from "react";

function FilterC() {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="flex flex-row w-full items-center justify-start space-x-3">
    <div className="relative bg-page-col bg-opacity-5  border-none w-full rounded-[7px] ">
      <input
        className="w-full block p-3 text-sm  text-page-col text-opacity-50    bg-transparent outline-none placeholder:text-page-col placeholder:text-opacity-50"
        placeholder="Search"
        value={search}
        onChange={handleChange}
      />
      <div className="absolute inset-y-0 end-6 flex items-center ps-5 pointer-events-none">
        <svg
          className="h-4 w-4 text-page-col text-opacity-50"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
    </div>

    <div>
        <button className="text-pinkii ">
            Filter
        </button>
    </div>
    </div>
  );
}

export default FilterC;
