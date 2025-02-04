import { FC } from "react";

interface DetailsItemProps {
  title: string;
  des: string;
}

export const DetailsItem: FC<DetailsItemProps> = ({ title, des }) => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-bold">{title}</h3>
      <p className="text-[13px]">{des}</p>
    </div>
  );
};
