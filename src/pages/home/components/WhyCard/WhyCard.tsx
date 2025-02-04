import toastIcon from "../../../../assets/svg/toast.svg";

export const WhyCard = () => {
  return (
    <div className="border-2 border-solid  rounded-xl border-primary flex flex-col gap-4 p-6">
      <img src={toastIcon} width={32.01} height={32} />
      <h3 className="font-bold">Stay Fully Booked</h3>
      <p>Order from our vendors and restaurant up till 12am</p>
    </div>
  );
};
