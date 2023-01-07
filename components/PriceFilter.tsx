import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function PriceFilter({ name }: any) {
  const [isDropdownVisible, setVisible] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  function handleClick() {
    setVisible(!isDropdownVisible);
  }

  return (
    <div>
      <button
        id="filterButton"
        className="relative mx-4 text-sm font-medium text-gray-400 underline-offset-2 hover:underline"
        onClick={handleClick}
      >
        {name}
        <FontAwesomeIcon icon={faAngleDown} className="pl-2" />
      </button>
      {isDropdownVisible ? (
        <div
          ref={dropdownRef}
          id="dropdownInformation"
          className="absolute z-10 mt-5 w-80  divide-y divide-gray-600 rounded-xl border border-gray-600 bg-zinc-800"
        >
          <div className="flex place-content-between px-6 py-4 text-sm text-gray-300 ">
            <div className="">Le prix le plus élevé est de €58.00</div>
            <button className="underline underline-offset-2 hover:font-bold">
              Réinitialiser
            </button>
          </div>
          <div className="flex justify-center py-4">
            <div className="flex items-center px-4 py-2 ">
              <p className="">€</p>
              <input
                name="field_name"
                className="mx-1  w-24 rounded-3xl border-2 border-gray-500 bg-zinc-800 px-4 py-2"
                type="text"
                placeholder="De"
              />
            </div>
            <div className="flex items-center px-4 py-2">
              <p className="">€</p>
              <input
                name="field_name"
                className="mx-1 w-24 rounded-3xl border-2 border-gray-500 bg-zinc-800 px-4 py-2"
                type="text"
                placeholder="À"
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
