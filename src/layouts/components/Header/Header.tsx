import { IoMdArrowDropdown } from "react-icons/io";
import logo from "../../../assets/svg/Logo (1).svg";
import usa from "../../../assets/svg/Group 499.svg";
import { CustomInput, Dropdown } from "../../../components";

export const Header = () => {
  const navs = [
    { text: "Buy", active: false },
    { text: "Shortlets", active: true },
    { text: "Sell", active: false },
    { text: "Invest", active: false },
    { text: "Services", active: false },
    { text: "Enterprise", active: false },
    { text: "Agents & Realtors", active: false },
  ];

  return (
    <header className="h-[81px] flex items-center justify-between w-full max-w-[1326px] mx-4 lg:mx-auto">
      <img src={logo} />
      <div className="hidden lg:flex items-center justify-center">
        <CustomInput
          usecase={"search"}
          onChange={() => {}}
          placeholder="Search for anything..."
          name="Search"
          type="text"
          size="sm"
        />
      </div>

      <div className="hidden lg:flex items-center gap-6 ">
        {navs.map((item) => (
          <div className="flex flex-col items-center justify-center gap-[-15px] ">
            <div className="flex items-center gap-1">
              <h4
                className={`text-xs text-center ${
                  item.active ? "text-primary" : "text-[#4B4B4B]"
                } `}
              >
                {item.text}
              </h4>
              <IoMdArrowDropdown />
            </div>
            {item.active && (
              <div className="w-[40%] h-[4px] block bg-primary rounded mt-[3px]"></div>
            )}
          </div>
        ))}
      </div>
      <div className=" hidden lg:flex items-center gap-6">
        <div className="border-solid border-l border-r border-grayBorder flex items-center justify-center text-primary px-8 py-1 font-medium">
          Refer & Earn
        </div>
        <div className=" w-[90px]">
          <div className="hidden lg:flex items-center justify-center">
            <Dropdown
              readOnly
              placeholder={
                <div className="w-[40px] flex items-center gap-2 px-[2px]">
                  <img
                    src={usa}
                    height={20}
                    width={18.8}
                    className="mx-[4px]"
                  />
                  <p className="text-primary font-bold text-[11px]">USD</p>
                  <IoMdArrowDropdown width={10} height={10} />
                </div>
              }
              options={[]}
            />
          </div>
        </div>
        <div className="w-8 h-8 rounded-full border-solid border border-grayBorder"></div>
      </div>
    </header>
  );
};
