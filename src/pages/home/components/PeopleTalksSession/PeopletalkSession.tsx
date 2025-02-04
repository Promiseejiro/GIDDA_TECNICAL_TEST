import { VideoContainer } from "../VideoContainer";
import poster from "../../../../assets/images/poster.jpeg";
export const PeopleTalkSession = () => {
  return (
    <div className="block lg:flex w-full rounded-3xl overflow-hidden border-solid border-primary border-2 bg-gradient-to-br from-secondary-100/60 via-white  to-white">
      <div className="flex-1 p-6 flex flex-col gap-4">
        <div
          className="w-[226px] h-179 lg:h-[226px] rounded-3xl"
          style={{
            backgroundImage: `url(${poster})`,
            backgroundPosition: "center",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <h3 className="text-bold text-2xl">Chima Okereke</h3>
        <h4 className="font-bold text-xs text-primary">
          DIRECTOR OF SALES AT BILAAD REALTY
        </h4>
        <p className="text-base leading-8">
          "I had an outstanding experience with the short-let booking service!
          From start to finish, the team made the entire process smooth and
          easy. I needed help finding the perfect place for my stay, and they
          went above and beyond to locate a property that fit all my
          requirements. Once I confirmed and made the payment, they handled the
          reservation with great efficiency.{" "}
        </p>
      </div>
      <div className="flex-1 hidden lg:block">
        <VideoContainer height="590px" />
      </div>
    </div>
  );
};
