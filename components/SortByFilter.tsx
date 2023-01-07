import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function SortByFilter({ name, filters }: any) {
  return (
    <div>
      <select className="rounded-lg  border-none bg-zinc-800 text-sm text-gray-400 placeholder-gray-600 outline-none">
        {filters.map((filter: any, index: number) => (
          <option
            key={index}
            className="m-64 bg-zinc-800 p-64"
            value={filter.value}
          >
            {filter.text}
          </option>
        ))}
      </select>
    </div>
  );
}
