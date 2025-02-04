import { useEffect, useRef, useState } from "react";
import { Asterisk, ChevronDown, LoaderCircle } from "lucide-react";
import { OptionsProps } from "../../types";
export interface SelectProps {
  label?: string;
  type?: string;
  name?: string;
  value?: string;
  customLabel?: string;
  placeholder?: string;
  borderColor?: string;
  error?: string;
  info?: string;
  onClick: (value: string, label: string) => void;
  inputPadding?: string;
  leftIcon?: string | React.ReactNode;
  icon?: string | React.ReactNode;
  onIconClick?: () => void;
  readOnly?: boolean;
  disabled?: boolean;
  noBorder?: boolean;
  options: OptionsProps[];
  isloading?: boolean;
}

export const Select = ({
  label,
  name,
  value,
  customLabel,
  placeholder,
  options = [],
  error,
  leftIcon,
  readOnly,
  disabled,
  onClick,
  isloading,
}: SelectProps) => {
  console.log(error);
  const selectElementRef = useRef<HTMLDivElement>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [textValue, setTextValue] = useState("");
  const [selectedOption, setSelectedOption] = useState<string>("");

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        selectElementRef.current &&
        !selectElementRef.current.contains(e.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    setTextValue(options.filter((option) => option.name === value)[0]?.label);
  }, [value]);

  return (
    <div className="w-full flex flex-col gap-3 ">
      {label && (
        <label className="flex gap-0 font-bold">
          {label} <Asterisk className="text-darkRed h-2 w-2" />
        </label>
      )}
      <div ref={selectElementRef} className="relative w-full">
        <div
          className={`flex items-center w-full border rounded p-4 bg-white ${
            error
              ? "border-red-500"
              : isloading
              ? "bg-gray-200"
              : "border-gray-300"
          }`}
        >
          {leftIcon || (isloading && <span className="mr-2">{leftIcon}</span>)}
          <input
            className={`w-full bg-transparent outline-none  placeholder-gray-400 ${
              isloading && "cursor-not-allowed"
            }`}
            type="text"
            name={name}
            value={textValue || ""}
            placeholder={placeholder}
            onClick={() => {
              setShowDropdown(true);
            }}
            readOnly={readOnly}
            disabled={disabled}
          />
          <button className="ml-2 text-gray-500 dark:text-gray-300">
            {isloading ? (
              <LoaderCircle
                className="h-[1rem] w-[1rem] animate-spin text-primary"
                data-testid="loading-spinner"
              />
            ) : (
              <ChevronDown size={24} />
            )}
          </button>
        </div>

        {showDropdown && (
          <div className="absolute top-full left-0 mt-1 w-full max-h-60 overflow-auto bg-white  border-gray-300  rounded-[12px] shadow-lg z-10">
            {options.length > 0 ? (
              options.map((option) => (
                <div
                  key={option.name}
                  className={`p-3 cursor-pointer hover:bg-[#FAFFFA] ${
                    selectedOption === option.name
                      ? "bg-primary text-white"
                      : ""
                  }`}
                  onClick={() => {
                    setSelectedOption(option.label);
                    setShowDropdown(false);
                    onClick(option.name, option.label);
                  }}
                >
                  {option.label}
                </div>
              ))
            ) : (
              <div className="absolute p-3 top-full left-0 mt-1 w-full max-h-60 overflow-auto bg-white  border-gray-300  rounded-[12px] shadow-lg z-10">
                No {label}
              </div>
            )}
          </div>
        )}
      </div>
      {error && <div className="text-darkRed text-xs">{error}</div>}
    </div>
  );
};
