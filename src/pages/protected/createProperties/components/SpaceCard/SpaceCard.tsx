import { Pencil, Plus } from "lucide-react";
import image from "../../../../../assets/images/authScreenImage.png";
import { CustomButton } from "../../../../../components";

export const SpaceCard = () => {
  return (
    <div className="flex  flex-col items-center">
      <div className="relative">
        <img className="w-[60px] h-[52px] rounded-[5px] " src={image} />
        <div className="absolute w-[60px] h-full top-0 left-0 bg-[rgba(0,0,0,.3)] rounded-[5px] flex items-end justify-end gap-1 p-1">
          <CustomButton
            className="w-[19px] h-[19px] "
            size="icon"
            variant="icon"
            children={<Pencil className="text-primary  w-[9.8px] h-[9.8px]" />}
          />
          <CustomButton
            className="w-[19px] h-[19px] "
            size="icon"
            variant="icon"
            children={<Pencil className="text-primary w-[9.8px] h-[9.8px]" />}
          />
        </div>
      </div>
      <p className="text-primary text-sm font-bold">Parlour</p>
    </div>
  );
};
