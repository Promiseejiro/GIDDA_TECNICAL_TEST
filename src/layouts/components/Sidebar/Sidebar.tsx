import logo from "../../../assets/svg/Logo.svg";
import dashboardIcon from "../../../assets/svg/Dashboard.svg";
import dropdownIcon from "../../../assets/svg/dropdown.svg";
import propertiesIcon from "../../../assets/svg/Layer 2 (1).svg";
import { EllipsisVertical } from "lucide-react";

const ProfileSection = () => {
  return (
    <div>
      <div className="bg-white mx-4  p-2 rounded flex items-center gap-2">
        <div>
          <div className="w-[29px] h-[29px] bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
            N
          </div>
        </div>
        <div className="flex flex-col gap-0">
          <h4 className="text-[12px] font-bold text-primary">
            James Mensah ...
          </h4>
          <p className="text-[11px] text-primary font-semibold">
            Jamesmensah@gmail.com
          </p>
        </div>
        <button className="h-4 w-4 ml-[-5px]">
          <EllipsisVertical height={16} width={16} />
        </button>
      </div>
    </div>
  );
};
export const Sidebar = () => {
  const data = [
    {
      name: "Dashboard",
      hasDropdown: false,
      icon: dashboardIcon,
      active: false,
    },
    {
      name: "Properties",
      hasDropdown: false,
      icon: propertiesIcon,
      active: true,
    },
    {
      name: "Dashboard",
      hasDropdown: true,
      icon: dashboardIcon,
      active: false,
    },
    {
      name: "Dashboard",
      hasDropdown: true,
      icon: dashboardIcon,
      active: false,
    },
    {
      name: "Dashboard",
      hasDropdown: true,
      icon: dashboardIcon,
      active: false,
    },
  ];

  return (
    <div className="flex flex-col justify-between pb-4 min-h-[90vh] bg-primary w-[233px] relative">
      <div className="">
        <div className="py-8 flex flex-col gap-5 mx-6">
          {data.map((item) => (
            <button
              className={`flex items-center text-sm font-medium py-2 rounded pr-4 gap-4 ${
                item.active
                  ? "bg-white text-primary pl-6"
                  : "bg-transparent text-white"
              }`}
            >
              <img src={item.icon} height={23} width={19} />
              {item.name}
              {item.hasDropdown && <img src={dropdownIcon} />}
            </button>
          ))}
        </div>
      </div>
      <div className="fixed left-0 bottom-2">
        {" "}
        <ProfileSection />
      </div>
    </div>
  );
};
