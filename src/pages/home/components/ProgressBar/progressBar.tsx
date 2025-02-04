"use client";
import { Check } from "lucide-react";
import moment from "moment";
import { FC } from "react";

export const ProgressBar: FC = ({}) => {
  const steps: {
    step: number;
    passed: boolean;
  }[] = [
    {
      step: 1,
      passed: true,
    },
    { step: 2, passed: true },
    {
      step: 3,
      passed: false,
    },
    {
      step: 4,
      passed: false,
    },
  ];
  const currentStep = 2;
  return (
    <div className="w-full max-w-[485px] mx-auto mt-6 mb-8 flex flex-col">
      {steps.map((item, index) => (
        <div className="h-[161px] w-[67px] flex flex-col items-center">
          <div
            className={` ${
              index + 1 < steps.length
                ? "h-[92px] w-[60px]"
                : "h-[60px] w-[60px]"
            }   rounded-full flex items-center justify-center font-bold ${
              currentStep > item.step ? "bg-primary text-white" : "bg-[#D9D9D9]"
            }`}
          >
            {currentStep > item.step ? item.step : ""}
          </div>
          {index + 1 < steps.length && (
            <div className="w-[7px] h-full  bg-[#D9D9D9]"></div>
          )}
        </div>
      ))}
    </div>
  );
};
