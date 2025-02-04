import { Plus } from "lucide-react";

export const AddEstateBtn = () => {
  return (
    <div className="h-[182px] flex items-center justify-center bg-successBg rounded-[8px]">
      <div className="flex flex-col items-center justify-center gap-5">
        <button className="flex items-center justify-center h-[50px] w-[48px] bg-primary rounded-[8px]">
          <Plus className="font-bold text-white w-[48px] h-[50px]" />
        </button>
        <p className="text-primary text-sm font-bold">add estate images</p>
      </div>
    </div>
  );
};
