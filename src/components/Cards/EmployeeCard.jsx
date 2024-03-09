import { Chip } from "@material-tailwind/react";
import React from "react";

const EmployeeCard = ({img, heading, count, men, women, growth}) => {
  return (
    <div className="basis-[100%] md:basis-[48%]  border-[1px] border-blue-gray-200 rounded-md p-4 flex  mb-3 justify-between items-center">
      <div>
        <p className="text-heading text-[18px] font-semibold">{heading}</p>
        <h5 className="text-heading text-[48px] font-semibold">{count}</h5>
        <p className="text-gray text-[12px]">{`${men} Men`}</p>
        <p className="text-gray text-[12px]">{`${women} Women`}</p>
      </div>
      <div>
        <img src={img} alt="graph" />
        <Chip  value={`${growth} Past month`} className="text-black bg-[#feefe6] font-thin lowercase" />
      </div>
    </div>
  );
};

export default EmployeeCard;
