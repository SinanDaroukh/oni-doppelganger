import React from "react";

export default function SortByFilter({ filters }: any) {
  return (
    <div>
      <select className="rounded-lg  border-none bg-zinc-800 text-sm text-gray-400 placeholder-gray-600 outline-none">
        {filters.map((filter: any, index: number) => (
          <option key={index} className="bg-zinc-800" value={filter.value}>
            {filter.text}
          </option>
        ))}
      </select>
    </div>
  );
}
