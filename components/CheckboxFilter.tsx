import React from "react";

export default function CheckboxFilter({ name }: any) {
  const [isDropdownVisible, setVisible] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  function handleClick() {
    setVisible(!isDropdownVisible);
  }

  return (
    <div>
      <button
        id="filterButton"
        className="100 mx-4 text-sm font-semibold text-white underline-offset-2 hover:underline"
        onClick={handleClick}
      >
        {name}
      </button>
      {isDropdownVisible ? (
        <div
          ref={dropdownRef}
          id="dropdownInformation"
          className="z-10 w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
        >
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>Bonnie Green</div>
            <div className="truncate font-medium">name@flowbite.com</div>
          </div>
          <ul
            className="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownInformationButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
          </ul>
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Sign out
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
}
