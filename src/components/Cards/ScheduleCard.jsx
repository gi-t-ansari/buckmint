import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { BsFillPinAngleFill, BsPinAngle } from "react-icons/bs";

const ScheduleCard = ({ pinHidden, name, time }) => {
  const [isPinned, setIsPinned] = useState(false);

  return (
    <div className="w-full flex mb-2 justify-between items-center py-2 px-4 border-[1px] border-blue-gray-200 rounded-md">
      <div>
        <p className="text-[16px]">{name}</p>
        <p className="text-[10px] mt-2 text-gray">{time}</p>
      </div>
      <div className="flex items-center gap-2">
        {!pinHidden ? (
          isPinned ? (
            <BsFillPinAngleFill
              className="text-lg cursor-pointer"
              onClick={() => setIsPinned(!isPinned)}
            />
          ) : (
            <BsPinAngle
              className="text-lg cursor-pointer"
              onClick={() => setIsPinned(!isPinned)}
            />
          )
        ) : (
          ""
        )}
        <BsThreeDots className="text-lg " />
      </div>
    </div>
  );
};

export default ScheduleCard;
