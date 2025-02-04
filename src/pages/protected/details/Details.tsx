import { Plus } from "lucide-react";
import { CustomButton, CustomInput } from "../../../components";
import {
  DashedHeader,
  DetailsItem,
  DetailsNav,
  EstateCard,
} from "./components";
import imageUrl from "../../../assets/images/authScreenImage.png";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getRequest } from "../../../api/request";

export const Details = () => {
  const { id } = useParams();
  useEffect(() => {
    const getState = async () => {
      try {
        const response = await getRequest(`/developer/estate/${id}`);
        console.log(response);
      } catch (error) {}
    };

    getState();
  }, []);
  return (
    <div>
      <div></div>
      <DetailsNav data={["Helloe"]} action={(item) => {}} />
      <div className="px-[40px] ">
        <div className="grid grid-cols-3 gap-4 mt-8">
          <EstateCard imageUrl={imageUrl} />
          <EstateCard imageUrl={imageUrl} />
          <EstateCard imageUrl={imageUrl} />
        </div>
      </div>

      <div className="px-[40px]">
        {" "}
        <DashedHeader text="Estate Details" />
        <div className="grid gap-4 grid-cols-4  mt-6">
          <DetailsItem title="title" des="Descrition" />
          <DetailsItem title="title" des="Descrition" />
          <DetailsItem title="title" des="Descrition" />
          <DetailsItem title="title" des="Descrition" />
          <DetailsItem title="title" des="Descrition" />
          <DetailsItem title="title" des="Descrition" />
          <DetailsItem title="title" des="Descrition" />
          <DetailsItem title="title" des="Descrition" />
        </div>
      </div>
    </div>
  );
};
