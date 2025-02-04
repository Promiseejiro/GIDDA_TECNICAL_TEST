import { Plus } from "lucide-react";
import { CustomButton } from "../../../../../components";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface SectionHeaderProps {
  title: string;
  btnText: string;
  btnIcon?: any;
}
export const SectionHeader: FC<SectionHeaderProps> = ({
  title,
  btnText,
  btnIcon,
}) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between">
      <h4 className="text-2xl">{title}</h4>
      <CustomButton
        onClick={() => {
          navigate("/create");
        }}
        isRightIconVisible={false}
        variant="primary"
        icon={
          <Plus />
          // btnIcon
        }
        children={<div className="flex items-center gap-4 px-4">{btnText}</div>}
      />
    </div>
  );
};
