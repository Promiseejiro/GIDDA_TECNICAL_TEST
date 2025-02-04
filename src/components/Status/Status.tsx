import { FC } from "react";

interface StatusProps {
  text: string;
  className?: string;
}
export const Status: FC<StatusProps> = ({ text, className }) => {
  return (
    <div
      className={`flex items-center justify-center rounded font-semibold text-sm  px-4 py-2 ${className}`}
    >
      {text}
    </div>
  );
};
