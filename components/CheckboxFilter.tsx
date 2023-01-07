import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function CheckboxFilter({ name, filters }: any) {
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
          className="absolute z-10 mt-5 w-80 divide-y  divide-gray-600 rounded-xl border border-gray-600 bg-zinc-800"
        >
          <div className="flex place-content-between px-6 py-4 text-sm text-gray-300 ">
            <div className="">{0} selectionnés</div>
            <button className="underline underline-offset-2 hover:font-bold">
              Réinitialiser
            </button>
          </div>
          <ul
            className="py-2 text-sm text-gray-300"
            aria-labelledby="dropdownInformationButton"
          >
            {filters.map((filter: any, index: number) => (
              <li className="flex items-center px-6 py-2">
                <input
                  key={index}
                  type="checkbox"
                  id={filter.value}
                  name="A3-confirmation"
                  value={filter.value}
                  className="absolute h-6 w-6 opacity-0"
                />
                <div className="bg-green mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-sm border border-gray-400 focus-within:border-gray-500">
                  <svg
                    className="pointer-events-none hidden h-3 w-3 fill-current text-gray-600"
                    version="1.1"
                    viewBox="0 0 17 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <g
                        transform="translate(-9 -11)"
                        fill="#9ca3af"
                        fill-rule="nonzero"
                      >
                        <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                      </g>
                    </g>
                  </svg>
                </div>
                <label htmlFor="A3-yes" className="select-none pl-2">
                  {filter.text}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
