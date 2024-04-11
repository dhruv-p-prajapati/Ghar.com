import React from "react";

const SortComponent = ({ sortBy, setSortBy, descending, setDescending, sortedProperties }) => {
  return (
    <div className="flex flex-col gap-2 mt-5">
      <h3 className="font-semibold text-lg">Available For - </h3>
      <div className="flex justify-start items-center gap-4">
        <select
          defaultValue={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="block  py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:border-blue-500">
          <option value="default">Default</option>
          <option value="price">Price</option>
          <option value="tokenAmount">Token Amount</option>
        </select>

        {sortBy !== "default" && (
          <div className="flex gap-1 items-center justify-center cursor-pointer">
            <input type="checkbox" id="descending" checked={descending} onChange={() => setDescending((prev) => !prev)} />
            <label htmlFor="descending" className="cursor-pointer">
              Descending
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default SortComponent;