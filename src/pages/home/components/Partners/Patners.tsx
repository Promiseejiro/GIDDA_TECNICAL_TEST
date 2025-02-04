import { FC } from "react";

interface PartnersProps {
  imgUrl?: string;
}

export const Partners: FC<PartnersProps> = ({ imgUrl }) => {
  return <div className="w-[106px] h-[107px] bg-gray rounded-full "></div>;
};
