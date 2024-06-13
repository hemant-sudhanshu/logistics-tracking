export const FilterButtons = ({ activeFilter, handleFilterClick, options }) => {
  return (
    <div className="flex space-x-2 ">
      {options.map((filter) => (
        <button
          key={filter}
          onClick={() => handleFilterClick(filter)}
          className={`px-4 py-2 rounded-full focus:outline-none ${
            activeFilter === filter
              ? "bg-primary text-color"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};
