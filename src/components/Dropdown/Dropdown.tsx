import { EllipsisVertical } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
interface OptionsProps {
  label: any;
  labelIcon: any;
  value: any;
  selected?: boolean;
  danger?: boolean;
}

export interface DropdownProps {
  label?: string;
  name?: string;
  value?: string;
  type?: "cardOptions" | "fields";
  customLabel?: string;
  placeholder?: React.ReactNode;
  borderColor?: string;
  onClick?: (text: string) => void;
  onChange?: (value: string, label: string) => void;
  inputPadding?: string;
  leftIcon?: string | React.ReactNode;
  icon?: React.ReactNode;
  onIconClick?: () => void;
  readOnly?: boolean;
  disabled?: boolean;
  noBorder?: boolean;
  options: OptionsProps[];
  width?: number;
  position?: "left" | "right";
}
export const Dropdown = ({
  type,
  label,
  name,
  placeholder,
  options = [],
  readOnly,
  disabled,
  position = "left",
  width,
  onClick,
}: DropdownProps) => {
  const selectElementRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [showDropdown, setShowDropdown] = useState(false);
  const [textValue, setTextValue] = useState("");

  useEffect(() => {
    const handleOutsideClick = (e: any) => {
      if (
        selectElementRef.current &&
        !selectElementRef.current.contains(e.target)
      ) {
        setShowDropdown(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div className="flex flex-col gap-2 w-full">
      {label && <label className="font-medium text-sm">{label}</label>}
      <div
        ref={selectElementRef}
        className={`relative flex items-center  w-full`}
      >
        {type !== "cardOptions" ? (
          <>
            {!showDropdown && !textValue && (
              <div className="absolute top-0 left-0 z-[-10] bg-lightGray h-full w-full rounded flex items-center">
                {placeholder}
              </div>
            )}
            <input
              type={type}
              name={name}
              value={textValue || ""}
              className={`w-full px-4 py-2 ${
                textValue
                  ? "bg-primary text-white rounded"
                  : showDropdown && !textValue
                  ? "border-solid border-primary border-[2px] rounded"
                  : "bg-transparent"
              }  focus:outline-none  text-[11px] font-bold`}
              onClick={() => setShowDropdown((prev) => !prev)}
              readOnly={readOnly}
              disabled={disabled}
              autoComplete="off"
            />
          </>
        ) : (
          <button
            className="w-8 h-8 bg-lightGray rounded-full flex items-center justify-center"
            onClick={() => setShowDropdown((prev) => !prev)}
          >
            <EllipsisVertical />
          </button>
        )}
      </div>
      {showDropdown && (
        <div
          ref={dropdownRef}
          className="absolute mt-10 max-h-60 overflow-auto border border-mideGray rounded-2xl bg-white shadow-lg z-10"
          style={{ width: `${width}px` }}
        >
          {options.map((option, index) => (
            <div
              key={index}
              className={`px-4 py-3 flex gap-2 text-[12px] font-medium items-center cursor-pointer hover:bg-lightGray ${
                index === options.length - 1 ? "text-darkRed" : "text-black"
              }`}
              onClick={() => {
                setTextValue(option.value);
                onClick && onClick(option.value);
              }}
            >
              {option.labelIcon}
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
