import { Check } from "lucide-react";
import { FC } from "react";
interface ServiceComponentProps {
  type: "primary" | "secondary" | "white" | "fourth";
  text: string;
}
export const ServiceComponent: FC<ServiceComponentProps> = ({ type, text }) => {
  return (
    <div className="inline-block">
      {" "}
      <div
        className={`rounded-[100px]  flex items-center gap-2 p-6 border-primary border border-solid text-body   ${
          type === "white"
            ? "bg-white"
            : type === "secondary"
            ? "bg-secondary"
            : type === "primary"
            ? "bg-primary-100"
            : "bg-primary-200"
        }`}
      >
        <span
          className={`${
            type !== "secondary" ? "bg-primary" : "bg-white"
          } w-4 h-4 rounded-full flex items-center justify-center p-[2px]`}
        >
          <Check
            className={`w-4 h-4 ${
              type === "secondary" ? "text-secondary" : "text-white"
            }`}
          />
        </span>
        <p
          className={`text-xs font-bold ${
            type !== "secondary" ? "text-primary" : "text-white"
          }`}
        >
          {text}
        </p>
      </div>
    </div>
  );
};
