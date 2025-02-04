import { Facebook, Instagram } from "lucide-react";
import { CustomButton, CustomInput } from "../../../components";
import whatSappIcon from "../../../assets/svg/whatsapp.svg";
import { footerData } from "./data";
import { MdOutlineWhatsapp } from "react-icons/md";

const socials = [<Instagram />, <Facebook />];

export const Footer = () => {
  return (
    <footer className="bg-primary px-4 lg:px-36 py-20">
      <div className="block lg:flex items-center justify-between">
        <div className="flex flex-col gap-3">
          <h5 className="text-lg font-bold text-white">Join Our Newsletter</h5>
          <p className="text-xs  text-white">
            Stay up to date with news and updates by subscribing to our
            newsletter
          </p>
        </div>
        <div className="flex gap-6 items-center justify-end">
          <div className="w-full lg:w-[334px]">
            <CustomInput
              onChange={() => {}}
              placeholder="Johndoe@gmail.com"
              name="email"
              type="text"
              required={true}
              size="sm"
            />
          </div>
          <CustomButton variant="outline" children="Subscribe" size="medium" />
        </div>
      </div>
      <div className="lg:flex justify-between w-full mt-10 mx-4">
        {footerData.map((item) => (
          <div className="flex flex-col gap-2 ">
            <h4 className="text-[13px] font-bold text-white text-center lg:text-start">
              {item.title}
            </h4>
            {item.lists.map((list) => (
              <p className="text-[13px]  text-white text-center lg:text-start">
                {list}
              </p>
            ))}
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center py-14">
        <div className="flex items-center gap-4">
          {socials.map((item) => (
            <span className="h-8 w-8 flex items-center justify-center bg-white rounded-full text-primary ">
              {item}
            </span>
          ))}
        </div>
        <CustomButton
          leftIcon={<MdOutlineWhatsapp width={32} height={32} />}
          className="mt-8"
          isRightIconVisible={true}
          variant="outline"
          children={
            <div className="flex items-center gap-4 px-4">
              Join Our Community
            </div>
          }
        />
      </div>
      <div className="border-solid border-t-2 border-white flex justify-between py-4">
        <div>
          <h4 className="font-bold text-white">Property of Giddaa Inc.</h4>
        </div>
        <div className="flex items-center gap-4">
          <a className="text-white text-xs">Privacy Policy</a>
          <a className="text-white text-xs">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};
