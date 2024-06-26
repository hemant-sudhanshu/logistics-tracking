import React, { useState } from "react";
import { DownArrow } from "../../../../assets/svgs";

export const SortingDropdown = React.memo(
  ({ activeOption, options, handleSortingClick }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleClick = (filter) => {
      handleSortingClick(filter);
      setIsDropdownOpen(false);
    };

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

    return (
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
            onClick={toggleDropdown}
          >
            {activeOption.title}
            <DownArrow className="h-5 w-5 fill-black group-hover:fill-color ml-2" />
          </button>
        </div>

        {isDropdownOpen && (
          <div
            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            <div className="py-1" role="none">
              {options.map((option) => (
                <button
                  key={option.sortKey}
                  onClick={() => handleClick(option)}
                  className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100 focus:outline-none"
                >
                  {option.title}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
);
