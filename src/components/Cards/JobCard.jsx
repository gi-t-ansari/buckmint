import React from "react";

const JobCard = ({ bg, text, name, count, status }) => {
  return (
    <div
      className={`${bg} h-[136px] md:basis-[32%] basis-[100%] rounded-lg p-4 mb-4 flex flex-col justify-between`}
    >
      <p className="text-[18px] text-heading font-semibold">{name}</p>
      <p className="text-[36px] text-heading font-semibold">{count}</p>
      <p className={`${text} text-[16px]`}>{status}</p>
    </div>
  );
};

export default JobCard;
