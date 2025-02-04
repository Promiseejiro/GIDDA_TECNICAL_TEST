import { FC } from "react";

interface DetailsNavProps {
  data: string[];
  action: (is: string) => void;
}
export const DetailsNav: FC<DetailsNavProps> = ({ data, action }) => {
  return (
    <div
      className={`
      } py-8 px-5 rounded-t-[18px] flex justify-between items-center  `}
    >
      <div className="flex justify-between items-center border-grayBorder border-b-[0] lg:border-b-[1.2px] border-solid mb-[-2px] w-full">
        <div className={`flex justify-between items-center`}>
          {data.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                action("Id");
              }}
              className={`${item} `}
            >
              <div className="flex items-center justify-between cursor-pointer">
                <p></p>
                {/* <Image src={closeIcom} alt="" /> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
