import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";

export const HomeLayout = () => {
  return (
    <div>
      <div className=" mx-auto ">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
