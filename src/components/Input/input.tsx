import { Asterisk, Search } from "lucide-react";
import React from "react";
interface CustomInputProperties {
  label?: string;
  name?: string;
  usecase?: "input" | "search";
  size?: "sm" | "default";
  placeholder: string;
  type?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  required?: boolean;
  error?: any;
}

export const CustomInput: React.FC<CustomInputProperties> = ({
  name,
  label,
  placeholder,
  type = "text",
  size = "default",
  usecase,
  value,
  onChange,
  className,
  required,
  error,
}) => {
  return (
    <div className="flex flex-col gap-2 py-3 relative">
      {label && (
        <label className="flex gap-0 font-bold">
          {label} {required && <Asterisk className="text-darkRed h-2 w-2" />}
        </label>
      )}
      {usecase === "search" && (
        <Search className="absolute top-6 left-4 w-4 h-4 text-primary" />
      )}
      <input
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        className={`text-foreground focus:outline-none focus:ring-1 rounded border-solid border ${
          error ? "border-darkRed" : "border-grayBorder"
        }  w-full ${
          size === "sm" && usecase !== "search"
            ? "py-2 px-4"
            : size === "sm" && usecase === "search"
            ? "py-2 px-10"
            : "py-4 px-4"
        }  ${className}`}
      />

      {error && <div className="text-darkRed text-xs">{error}</div>}
    </div>
  );
};

export default CustomInput;
