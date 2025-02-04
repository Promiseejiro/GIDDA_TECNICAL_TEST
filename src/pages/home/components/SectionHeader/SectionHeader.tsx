import { FC } from "react";

interface SectionHeaderProps {
  title: string;
  description: string;
}

export const SectionHeader: FC<SectionHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 max-w-[412px] mx-auto mb-10">
      <h4 className="text-4xl text-center font-custom mt-20">{title}</h4>
      <div className="w-[93px] h-[2.5px] block bg-primary rounded mb-3 mt-1"></div>
      <p className="text-base text-center">{description}</p>
    </div>
  );
};
