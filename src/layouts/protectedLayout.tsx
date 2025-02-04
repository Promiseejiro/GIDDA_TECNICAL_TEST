import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Sidebar } from "./components";
import leftIcon from "../assets/svg/leftIcon.svg";
import rightIcon from "../assets/svg/rightIcon.svg";
import { CustomButton, CustomInput, Dropdown } from "../components";
import { Bell, ChevronDown, ChevronRight, MoveLeft } from "lucide-react";
import VideoIcon from "../assets/svg/playIcon.svg";
import houseIcon from "../assets/svg/houses.svg";
import logo from "../assets/svg/Logo.svg";
import { FC, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { getLocalUser } from "../utils.ts/sesstions";

interface UnitProps {
  text: string;
  icon: string;
}

const Units: FC<UnitProps> = ({ text, icon }) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="bg-lightGray w-8 h-8 rounded-full flex items-center justify-center">
        <img src={icon} />
      </div>
      <p className="text-xs font-semibold">{text}</p>
    </div>
  );
};

const DashboardHeader = () => {
  return (
    <div className="flex items-center gap-6 justify-between w-full ">
      <div className="flex items-center gap-8 ">
        <div className="flex items-center gap-3">
          <button className="bg-gray rounded-[5px]  w-5 h-5 flex items-center justify-center">
            <img src={leftIcon} />
          </button>
          <button className="bg-gray rounded-[5px]  w-5 h-5 flex items-center justify-center">
            <img src={rightIcon} />
          </button>
        </div>
        <h3 className="font-bold ">My Properties</h3>
      </div>
      <div className="w-[200px] lg:w-[374px]">
        <CustomInput
          usecase={"search"}
          onChange={() => {}}
          placeholder="Search for anything..."
          name="Search"
          type="text"
          size="sm"
        />
      </div>
      <div className="hidden lg:block">
        <div className="flex gap-6 items-center">
          <div className="w-[141px] mr-2">
            <Dropdown
              readOnly
              placeholder={
                <div className="w-full flex items-center gap-2 px-[2px]">
                  <img
                    src={VideoIcon}
                    height={20}
                    width={18.8}
                    className="mx-[4px]"
                  />
                  <p className="text-primary font-bold text-[11px]">
                    How It Works
                  </p>
                  <IoMdArrowDropdown width={10} height={10} />
                </div>
              }
              options={[
                {
                  label: "View House",
                  labelIcon: <ChevronDown />,
                  value: "View House",
                  selected: false,
                  danger: false,
                },
                {
                  label: "Product tour guild",
                  labelIcon: <ChevronDown />,
                  value: "Product tour guild",
                  selected: false,
                  danger: true,
                },
              ]}
            />
          </div>
          <CustomButton
            className="w-[40px] h-[40px] "
            size="icon"
            variant="icon"
            children={<Bell className="text-primary" height={16} width={16} />}
          ></CustomButton>
          <CustomButton
            className="w-[40px] h-[40px] "
            size="icon"
            variant="icon"
            children={<Bell className="text-primary" height={16} width={16} />}
          ></CustomButton>
          <CustomButton
            className="w-[40px] h-[40px] "
            size="icon"
            variant="icon"
            children={<Bell className="text-primary" height={16} width={16} />}
          ></CustomButton>
        </div>
      </div>
    </div>
  );
};

export const ProtectedLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const units: { text: string; icon: string; unit: string }[] = [
    { text: "5 ESTATES", icon: houseIcon, unit: "" },
    { text: "5 ESTATES", icon: houseIcon, unit: "7 unit" },
  ];

  useEffect(() => {
    const authenticated = getLocalUser();
    if (!authenticated) {
      navigate("/");
    }
  }, []);
  return (
    <main className="flex">
      <div className="w-[233px] bg-primary hidden lg:block">
        <div className="flex flex-col gap-4 border-solid border-b-[1px] border-deepGray p-6">
          <div>
            <img src={logo} />
          </div>
          <p className="text-white font-medium text-xs">
            Residencia Moderno Smart...
          </p>
        </div>
        <Sidebar />
      </div>

      {/* Dashboard Layout */}
      <div className=" py-[10px] w-full">
        {location.pathname === "/create" ? (
          <div className="mx-[40px]">
            <div className="w-full flex items-center gap-4 ">
              <CustomButton
                onClick={() => navigate("/dashboard")}
                isRightIconVisible={false}
                variant="outline"
                size="sm"
                className="flex items-center text-[13px] gap-2 px-2 rounded-[5px] py-2 font-bold"
                children={"Back"}
                leftIcon={
                  <MoveLeft className="text-primary w-[12px] h-[18px]" />
                }
              />
              <h1 className="font-bold text-[20px]">Creating Estate</h1>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <p className="text-sm">Estate</p>
              <ChevronRight />
              <p className="text-xl font-bold font-custom">Create Estate</p>
            </div>
          </div>
        ) : location.pathname.includes("/details") ? (
          <div className="mx-[40px] ">
            <div className="w-full flex items-center gap-4 pb-[43px]">
              <CustomButton
                onClick={() => navigate("/dashboard")}
                isRightIconVisible={false}
                variant="outline"
                size="sm"
                className="flex items-center text-[13px] gap-2 px-2 rounded-[5px] py-2 font-bold"
                children={"Back"}
                leftIcon={
                  <MoveLeft className="text-primary w-[12px] h-[18px]" />
                }
              />
              <h1 className="font-bold text-[20px] font-custom">
                The View Estate
              </h1>
            </div>
          </div>
        ) : (
          <div className="border-solid border-grayBorder border-b px-[40px] pb-[15px]">
            <DashboardHeader />
            <div>
              <div className="flex items-center gap-3 ">
                {units.map((item) => (
                  <Units {...item} />
                ))}
              </div>
            </div>
          </div>
        )}

        <Outlet />
      </div>

      {/* Create estate layout */}
    </main>
  );
};
