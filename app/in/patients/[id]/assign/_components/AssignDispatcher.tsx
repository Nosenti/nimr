import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React, { useState } from "react";

const drivers = [
  { id: "1", name: "John Doe", location: "Yaba", deliveries: 33 },
  { id: "2", name: "Jane Smith", location: "Yaba", deliveries: 10 },
  { id: "3", name: "Mike Johnson", location: "Unassigned", deliveries: 10 },
  // Add more drivers as needed
];

export const AssignDispatcher: React.FC = () => {
  const [selectedDriver, setSelectedDriver] = useState<string>("1");

  return (
    <div>
      {/*  */}
      <div className="flex space-x-8 mb-10">
        <button className="px-2 py-1 bg-blue-500/10 border border-blue-900/10 text-blue-900">
          All (33)
        </button>
        <button className="px-2 py-1 bg-blue-500/10 border border-blue-900/10 text-blue-900">
          Yaba Riders (10)
        </button>
        <button className="px-2 py-1 bg-blue-500/10 border border-blue-900/10 text-blue-900">
          Unassigned Riders (10)
        </button>
      </div>
      {/*  */}
      <RadioGroup
        defaultValue={selectedDriver}
        onChange={(e) => setSelectedDriver}
        className="space-y-4"
      >
        {drivers.map((driver) => (
          <div className="border p-2 flex items-center flex-nowrap justify-between gap-x-3">
            <RadioGroupItem
              key={driver.id}
              value={driver.id}
              className="block rounded-full"
            ></RadioGroupItem>
            <div className="flex items-center px-4 justify-between w-full">
              <div>
                <div className="text-sm text-gray-500">
                  DIspatch Rider's Name
                </div>
                <div className="font-bold text-lg">{driver.name}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Delivery Areas</div>
                <div className="font-bold text-lg">{driver.location}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">
                  Number of Deliveries
                </div>
                <div className="font-bold text-lg">{driver.deliveries}</div>
              </div>
            </div>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};
