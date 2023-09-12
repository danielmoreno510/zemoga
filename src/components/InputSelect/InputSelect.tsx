import { OPTIONS } from "@/types/inputs";
import { useState } from "react";

const InputSelect: React.FC<{ value: OPTIONS; setValue: (value: OPTIONS) => void }> = ({ value, setValue }) => {
  const [open, setOpen] = useState<boolean>(false);

  const changeValue = (option: OPTIONS) => {
    setOpen(false)
    setValue(option)
  }

  return (
    <div>
      <button
        data-testid="open"
        id="dropdownDelayButton"
        data-dropdown-toggle="dropdownDelay"
        data-dropdown-delay="500"
        data-dropdown-trigger="hover"
        className="text-black border-2 border-black border-solid outline-none font-medium text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button"
        onClick={() => setOpen(!open)}
      >
        {value}{" "}
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {open && (
        <div
          id="dropdownDelay"
          className="z-10 bg-white divide-y divide-gray-100 border-2 border-black border-solid border-t-white shadow"
        >
          <ul
            className="py-2 text-sm text-gray-700"
            aria-labelledby="dropdownDelayButton"
          >
            <li
              data-testid="list"
              className="block px-4 py-2 text-black cursor-pointer"
              onClick={() => changeValue(OPTIONS.LIST)}
            >
              List
            </li>
            <li
              data-testid="grid"
              className="block px-4 py-2 text-black cursor-pointer"
              onClick={() => changeValue(OPTIONS.GRID)}
            >
              Grid
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default InputSelect;
