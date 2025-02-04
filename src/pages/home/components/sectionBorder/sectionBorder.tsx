import { FC, ReactNode } from "react";

interface SectionBorderProps {
  children: ReactNode;
  className?: string;
}
export const SectionBorder: FC<SectionBorderProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`w-full rounded-tr-[30px] rounded-tl-[30px]  lg:rounded-tr lg:rounded-tl bg-gradient-to-r from-[#EAA315]  to-[#335F32] ${className} pt-[1.5px]`}
    >
      <div className="w-full h-full  rounded-tl-[30px]  rounded-tr-[30px]  bg-white lg:rounded-tr lg:rounded-tl  bg-gradient-to-tl from-[#FFFFFB] via-[#F6FDF4] to-[#FFEDCB] pb-10">
        {" "}
        {children}
      </div>
    </div>
  );
};
