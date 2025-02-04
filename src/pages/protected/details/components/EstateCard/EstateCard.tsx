import { Pencil, Plus } from "lucide-react";
import image from "../../../../../assets/images/authScreenImage.png";
import { CustomButton, Status } from "../../../../../components";
import { FC } from "react";

interface EstateCardProps {
  imageUrl: string;
}

export const EstateCard: FC<EstateCardProps> = ({ imageUrl }) => {
  return (
    <div className="relative rounded-2xl  border-solid border-grayBorder border-[1.5px]">
      <div className="absolute bottom-2 left-2 flex flex-col gap-2">
        <Status
          text="16 Houses"
          className="bg-white text-primary border-primary border-solid border-[2px] py-1"
        />
        <Status
          text="16 Houses"
          className="bg-primary text-white border-solid border-white border-[2px] py-1"
        />
      </div>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="h-[230px] rounded-[15px]"
      ></div>
    </div>
  );
};
