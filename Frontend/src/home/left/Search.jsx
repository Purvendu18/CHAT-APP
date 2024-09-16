// Import React and the IoSearch icon
// import React from 'react';
import { IoSearch } from "react-icons/io5";

// Define the Search component
export default function Search() {
  return (
    <div>
      <div className="px-6 py-5">
        <form action="">
          <div className="flex space-x-1 items-center">
            <label className="border-2 border-black rounded-full flex items-center gap-2 w-full p-2">
              <input
                type="text"
                className="grow outline-none bg-slate-900 rounded-full px-4 py-2 text-white"
                placeholder="Search"
              />
            </label>
            <button className="flex items-center justify-center">
              <IoSearch
                className="text-3xl p-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 duration-300"
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}