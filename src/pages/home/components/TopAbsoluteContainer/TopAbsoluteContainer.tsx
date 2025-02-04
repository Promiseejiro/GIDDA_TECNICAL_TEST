import wavingHand from "../../../../assets/images/Waving Hand.png";

export const TopAbsoluteContainer = () => {
  return (
    <div className=" bg-gradient-to-r from-[#EAA315]  to-[#335F32] rounded-[16px] p-[2px] overflow-hidden w-[309px]">
      <div className="w-full h-full flex py-6 px-6 bg-[#F9FAFB] rounded-[16px] gap-4">
        <div>
          <img src={wavingHand} width={60} height={60} />
        </div>
        <div className="flex flex-col items-start gap-2">
          <h4 className="font-bold text-start">
            You’re Now on Giddaa <span className="text-primary">Buy</span>
          </h4>
          <p className="text-xs text-start">
            Find and buy your dream home on various purchase plans.
          </p>
        </div>
      </div>
    </div>
  );
};
