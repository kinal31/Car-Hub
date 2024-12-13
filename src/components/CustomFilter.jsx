import React from "react";

const CustomFilter = ({ title, setSortOption }) => {
  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <div className="flex flex-col">
      <label className="font-bold">{title}</label>
      <select onChange={handleSortChange} className="border rounded p-2">
        <option value="default">Select...</option>
        <option value="price">Price</option>
        <option value="year">Year</option>
        <option value="rentalRate">CarRent</option>
        {/* Add more options as needed */}
      </select>
    </div>
  );
};

export default CustomFilter;