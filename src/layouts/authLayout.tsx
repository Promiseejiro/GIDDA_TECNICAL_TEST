import { Outlet } from "react-router-dom";
import { FC } from "react";
import { ServiceComponent } from "./components";

import LeftImage from "../assets/images/authScreenImage.png";
import grouphouse from "../assets/svg/grouphouse.svg";
import { Logo } from "../components";
export const AuthLayout: FC = () => {
  return (
    <main className="w-full h-full flex">
      <div
        className={`hidden w-[45%] min-h-screen lg:flex items-center justify-center`}
        style={{
          backgroundImage: `url(${LeftImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col gap-12">
          <div className="flex items-center justify-center">
            <ServiceComponent
              type={"fourth"}
              text="Track All Customer Payments"
            />
          </div>
          <div className="flex gap-12">
            <ServiceComponent
              type={"white"}
              text="Track All Customer Payments"
            />
            <ServiceComponent
              type={"secondary"}
              text="Manage Your Organization"
            />
          </div>
          <div className="flex items-center justify-center">
            <ServiceComponent
              type={"primary"}
              text="Access Industry Insights"
            />
          </div>
        </div>
      </div>
      <div className=" w-full lg:w-[55%] relative ">
        <div className="py-14 px-12">
          <Logo />
          <h2 className="text-primary text-4xl font-custom text-center mt-10">
            Welcome Back To Giddaa For Developers
          </h2>
          <p className="text-base text-center my-5">Log in to your account.</p>
          <Outlet />
        </div>
        <img
          src={grouphouse}
          alt="grouped"
          width={"95%"}
          className="absolute bottom-0 left-2 z-[-10]"
        />
      </div>
    </main>
  );
};
