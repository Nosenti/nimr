import { RadioGroup, RadioGroupItem } from "@/app/_components/ui/radio-group";
import { Label } from "@radix-ui/react-label";
import React from "react";
import "tailwindcss/tailwind.css";

interface DrugCycleProps {
  patientName: string;
  onDrugCycleChange: (newCycle: string) => void;
}

export const DrugCycle: React.FC<DrugCycleProps> = ({
  patientName,
}) => {
  return (
    <div>
   
      <div className="px-1">
        <h2 className="my-2 py-2">{patientName} Drug Cycle</h2>
      </div>

      <RadioGroup
        name="drugCycle"
        defaultValue="option-one"
        className="space-y-6"
      >
        <div className="border border-black/10">
          <div className="flex items-center space-x-2 border-b border-black/10 p-4">
            <RadioGroupItem value="option-one" className="flex items-center" />
            <Label className="text font-semibold" htmlFor="option-one">
              Same as initial drug cycle
            </Label>
          </div>
          <div>
            <p className="py-2 px-4 text-sm text-gray-500">
              Deliver drug on 4th Feb & next set etc.
            </p>
          </div>
        </div>
       
        <div className="border border-black/10">
          <div className="flex items-center space-x-2 border-b border-black/10 p-4">
            <RadioGroupItem value="option-two" className="flex items-center" />
            <Label className="text font-semibold" htmlFor="option-two">
              Set new drug cycle
            </Label>
          </div>
          <div>
            <p className="py-2 px-4 text-sm text-gray-500">....</p>
          </div>
        </div>
      </RadioGroup>
    </div>
  );
};
