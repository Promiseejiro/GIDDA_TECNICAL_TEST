import { CustomButton, CustomInput } from "../../../components";
import { EstateCard, SectionHeader } from "./components";
import estateImage from "../../../assets/images/estate.jpeg";
import housesImage from "../../../assets/images/houses.jpeg";
import filterIcon from "../../../assets/svg/filter.svg";
import { FC, ReactNode, useEffect, useState } from "react";
import { getRequest } from "../../../api/request";
import toast from "react-hot-toast";
import { getLocalUser } from "../../../utils.ts/sesstions";
import { EstatePropertiesData } from "../../../types";

interface ThProps {
  text: string;
  width?: number;
}
const Th: FC<ThProps> = ({ text, width }) => {
  return (
    <th className="px-2 py-4 text-xs" style={{ width: `${width}px` }}>
      <div className="flex items-center justify-start  text-dark font-semibold">
        {text}
      </div>
    </th>
  );
};

interface TdProps {
  children: ReactNode;
}

const Td: FC<TdProps> = ({ children }) => {
  return (
    <th className="px-2 py-4 text-xs">
      <div className="flex items-center justify-start  text-dark font-semibold">
        {children}
      </div>
    </th>
  );
};

export const Properties = () => {
  const [isLoading, setIsloading] = useState(true);
  const [estateProperties, setEstateProperties] = useState<
    Array<EstatePropertiesData>
  >([]);
  useEffect(() => {
    const getEstates = async () => {
      try {
        setIsloading(true);
        const response = await getRequest("/developer/estate/get-all");
        if (response.statusCode === 200) {
          setEstateProperties(
            response.value.value.data.map((estate: any) => {
              return {
                id: estate.id,
                name: estate.name,
                address: estate.address,
                houseStats: estate.houseStats.totalHouses,
              };
            })
          );
          setIsloading(false);
          // toast.success("Estate Fetched successfull");
        } else {
          toast.error(response.value.message);
        }
      } catch (error) {
        toast.error("An error occured");
      }
    };
    getEstates();
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="w-full h-72 flex items-center justify-center">
          <h4 className="font-custom text-center">Loading Page </h4>
        </div>
      ) : (
        <div className="py-4 px-[40px]">
          <SectionHeader title="Estates - 5" btnText="Create Estate" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8">
            {estateProperties.map((estate) => (
              <EstateCard
                key={estate.id}
                id={estate.id}
                name={estate.name}
                description={estate.address}
                imageUrl={estateImage}
                numberOfHouse={estate.houseStats}
              />
            ))}
          </div>
          <div className="mt-6">
            <SectionHeader title="Estates - 5" btnText="Create House" />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <div className="lg:w-[374px]">
                <CustomInput
                  usecase={"search"}
                  onChange={() => {}}
                  placeholder="Search for anything..."
                  name="Search"
                  type="text"
                  size="sm"
                />
              </div>
              <CustomButton
                className="border-gray gap-2"
                size="sm"
                variant="outline"
                leftIcon={<img src={filterIcon} />}
              >
                Filters
              </CustomButton>
            </div>
            <div className="w-full rounded-[8px] overflow-hidden mt-2">
              <table className="w-full ">
                <thead className="w-full bg-gray-100 text-dark rounded-[12px] ">
                  <tr className="">
                    <Th text="" width={87} />
                    <Th text="PROEPRTY NAME" width={171} />
                    <Th text="PROPERTY DETAILS" width={225} />
                    <Th text="PRICE" width={126} />
                    <Th text="ESTATE" width={137} />
                    <Th text="PLANS" width={100} />
                    <Th text="CUSTOMERS" width={112} />
                    <Th text="UNITS" width={119} />
                    <Th text="" width={62} />
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b-[1px] border-solid border-gray-300 bg-white ">
                    <Td>
                      <img src={housesImage} className="rounded-[8px]" />
                    </Td>
                    <Td>Gidda</Td>
                    <Td>Gidda</Td>
                    <Td>Gidda</Td>
                    <Td>Gidda</Td>
                    <Td>Gidda</Td>
                    <Td>Gidda</Td>
                    <Td>Gidda</Td>
                    <Td>Gidda</Td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
