import { CustomButton } from "../../../../components";
import toastIcon from "../../../../assets/svg/toast.svg";
import { FC, ReactNode } from "react";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}
export const ServiceCard: FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="border-2 border-solid  rounded-xl border-primary flex flex-col gap-4 p-6">
      <img src={icon} width={37.01} height={26} />
      <h3 className="font-bold">{title}</h3>
      <p>{description}</p>
      <CustomButton
        size="medium"
        isRightIconVisible={true}
        variant="primary"
        children={
          <div className="flex items-center gap-4 px-4">Get Started Now</div>
        }
      />
    </div>
  );
};
