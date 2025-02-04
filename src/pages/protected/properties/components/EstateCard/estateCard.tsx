import { FC } from "react";
import { Dropdown, Status } from "../../../../../components";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { BsHouseDoor } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
interface EstateCardProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  numberOfHouse: string;
}
export const EstateCard: FC<EstateCardProps> = ({
  id,
  name,
  description,
  imageUrl,
  numberOfHouse,
}) => {
  const navigate = useNavigate();
  const options = [
    {
      label: "View House",
      labelIcon: <Eye className="w-[16px] h-[12px]" />,
      value: "View House",
      selected: false,
      danger: false,
    },
    {
      label: "Edit Estate",
      labelIcon: <Pencil className="w-[16px] h-[12px]" />,
      value: "Edit Estate",
      selected: false,
      danger: true,
    },
    {
      label: "Add House",
      labelIcon: <BsHouseDoor className="w-[16px] h-[12px]" />,
      value: "Add House",
      selected: false,
      danger: true,
    },
    {
      label: "Delete Estate",
      labelIcon: <Trash2 className="w-[16px] h-[12px]" />,
      value: "Delete Estate",
      selected: false,
      danger: true,
    },
  ];
  return (
    <div className="relative rounded-2xl  border-solid border-grayBorder border-[1.5px] ">
      <div className="absolute top-2 left-2">
        <Status
          text={`${numberOfHouse} Houses`}
          className="bg-[#EAFFEA] border-primary"
        />
      </div>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="h-[110.67px] rounded-t-[15px]"
      ></div>
      <div className={` "w-full flex flex-col gap-4 p-6`}>
        <h4 className="text-black text-center text-base font-bold ">{name}</h4>
        <p className="mb-6 text-sm  text-center">{description}</p>
        <div className="absolute right-4 bottom-3 z-20">
          <Dropdown
            width={180}
            type="cardOptions"
            readOnly
            options={options}
            onClick={(value) => {
              console.log(value);
              if (value === "View House") {
                navigate(`/details/${id}`);
              } else if (value === "Edit Estate") {
                navigate(`/create`);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};
