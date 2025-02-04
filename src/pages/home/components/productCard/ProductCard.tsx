import { FC } from "react";
import { CustomButton } from "../../../../components/Button";

interface ProductCard {
  title: string;
  description: string;
  imageUrl: string;
  btnText1?: string;
  btnText2?: string;
  align?: string;
  bg: string;
  height: string;
}
export const ProductCard: FC<ProductCard> = ({
  title,
  description,
  imageUrl,
  btnText1,
  btnText2,
  align = "row",
  bg,
  height,
}) => {
  console.log(imageUrl);
  return (
    <div
      className={`relative bg-gradient-to-r from-secondary via-primary to-primary rounded-[40px]  w-full overflow-hidden`}
      style={{ height: height }}
    >
      <div className="h-full w-full">
        <div
          className={`${
            align === "row" ? " w-[55%] " : "w-full"
          } px-5 py-8 h-full ${bg} `}
          style={{ height: height }}
        >
          <h4 className="text-black pb-4 text-2xl font-bold">{title}</h4>
          <p className="mb-6 text-base ">{description}</p>
          <div className="flex items-center justify-start gap-6">
            <CustomButton
              isRightIconVisible={true}
              variant="primary"
              children={btnText1}
              className="flex items-center gap-4 px-4  text-sm "
            />
            {btnText2 && (
              <CustomButton
                isRightIconVisible={false}
                variant="outline"
                className="flex items-center text-sm gap-4 px-4"
                children={btnText2}
              />
            )}
          </div>
        </div>
        <div
          className="h-full w-full"
          style={{
            backgroundColor: "red",
            // backgroundImage: `url(${imageUrl})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            border: "2px solid red",
          }}
        ></div>
      </div>
    </div>
  );
};
