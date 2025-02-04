import { FC } from "react";

interface DashedHeaderProps {
  text: string;
}

export const DashedHeader: FC<DashedHeaderProps> = ({ text }) => {
  return (
    <div
      className={`border-t-[1.5px] border-dashed border-grayBorder w-full relative mt-8`}
    >
      <span
        className={`bg-white absolute  translate-y-[-15px] pr-4  font-bold text-xl`}
      >
        {text}
      </span>
    </div>
  );
};
