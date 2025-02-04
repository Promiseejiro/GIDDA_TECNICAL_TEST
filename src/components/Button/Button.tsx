import { LoaderCircle, MoveUpRight } from "lucide-react";
import { FC, ReactNode } from "react";

type Variant = "default" | "primary" | "destructive" | "outline" | "icon";

type Size = "default" | "sm" | "medium" | "icon";

interface ButtonProperties {
  type?: "submit" | "button" | "reset";
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  leftIcon?: ReactNode;
  children?: ReactNode;
  isLoading?: boolean;
  isIconOnly?: boolean;
  isRightIconVisible?: boolean;
  isDisabled?: boolean;
  className?: string;
  onClick?: () => void;
}
export const CustomButton: FC<ButtonProperties> = ({
  type = "button",
  variant,
  size = "default",
  children,
  isLoading = false,
  icon,
  leftIcon,
  isDisabled = false,
  isIconOnly = false,
  className,
  onClick,
  isRightIconVisible,
}) => {
  const buttonContent = (
    <>
      {isLoading && (
        <LoaderCircle
          className="h-[1rem] w-[1rem] animate-spin"
          data-testid="loading-spinner"
        />
      )}
      {!isIconOnly && children}
      {!isIconOnly && !children && isLoading && "Loading"}
    </>
  );

  return (
    <>
      <button
        disabled={isDisabled}
        className={`rounded font-bold  flex items-center justify-center cursor-pointer ${
          size === "default"
            ? "py-4 text-base px-6"
            : size === "sm"
            ? "text-xs py-2  px-4"
            : variant === "icon"
            ? "p-0 "
            : "text-xs py-3  px-4"
        } ${
          variant === "primary"
            ? "bg-primary text-white hover:bg-primary/90"
            : variant === "outline"
            ? "border-solid border-primary border-2 bg-white text-primary"
            : variant === "icon"
            ? "rounded-full bg-lightGray flex items-center justify-center"
            : ""
        } ${className}`}
        onClick={onClick}
        role="button"
      >
        <span>{leftIcon && leftIcon}</span>
        {buttonContent}
        {isRightIconVisible && (
          <span
            className={`${
              variant === "outline" ? "bg-primary" : "bg-white"
            }  rounded-full w-5 h-5 flex items-center justify-center`}
          >
            <MoveUpRight
              className={`
                ${variant === "outline" ? "text-white" : "text-primary"}
               text-primary w-[14.39px] h-[14.56px] font-[900]`}
            />
          </span>
        )}
      </button>
    </>
  );
};
