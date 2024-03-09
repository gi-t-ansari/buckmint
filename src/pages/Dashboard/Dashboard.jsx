import React, { useState } from "react";
import { Chip, Input, Typography, Button } from "@material-tailwind/react";
import { EMPLOYEE_CARD, JOB_CARDS } from "../../config";
import {
  JobCard,
  EmployeeCard,
  DatePicker,
  ScheduleCard,
  MeetingDialog,
} from "../../components";

const Dashboard = () => {
  const [openScheduleMeeting, setOpenScheduleMeeting] = useState(false);

  return (
    <div className="p-8 py-2 w-full">
      <Typography className="text-heading font-bold text-[24px]">
        Dashboard
      </Typography>
      <div>
        <div className="flex justify-between lg:flex-row flex-col w-full">
          <div className="lg:basis-[55%] basis-[100%]">
            <div className="flex justify-between items-center w-full flex-wrap">
              {JOB_CARDS?.map((card) => (
                <JobCard
                  key={card?.name}
                  name={card?.name}
                  bg={card?.bg}
                  text={card?.text}
                  count={card?.count}
                  status={card?.status}
                />
              ))}
            </div>
            <div className="w-full flex justify-between items-center flex-wrap">
              {EMPLOYEE_CARD?.map((card) => (
                <EmployeeCard
                  key={card?.heading}
                  heading={card?.heading}
                  count={card?.count}
                  men={card?.men}
                  women={card?.women}
                  img={card?.img}
                  growth={card?.growth}
                />
              ))}
            </div>
            <div className="w-full relative border-[1px] border-blue-gray-200 rounded-md ">
              <div className="p-3 flex justify-between items-center w-full sticky top-0">
                <p className="text-heading">Announcement</p>
                <div>
                  <DatePicker />
                </div>
              </div>
              <div className="w-ful p-4 py-0 lg:h-[140px] h-[200px] overflow-y-auto">
                <ScheduleCard
                  name={"Outing schedule for every department"}
                  time={"5 Minutes ago"}
                />
                <ScheduleCard
                  name={"Meeting HR Department"}
                  time={"Yesterday, 12:30 PM"}
                />
                <ScheduleCard
                  name={"IT department need two more talents"}
                  time={"Yesterday, 09:15 AM"}
                />
              </div>
              <p className="static bottom-0 p-2 border-t-[1px] border-blue-gray-200 text-primary text-center cursor-pointer text-[14px]">
                See All Announcement
              </p>
            </div>
          </div>
          <div className="lg:basis-[40%] basis-[100%] mt-4 lg:mt-0 ">
            <div className="bg-heading  rounded-md text-white">
              <h5 className="bg-[#1b204a] py-2 px-6 text-white text-[18px] rounded-t-md">
                Recent Activity
              </h5>
              <div className="px-6 py-8">
                <p className="text-[10px] opacity-70">
                  10.40 AM, Fri 10 Sept 2021
                </p>
                <p className="text-[18px] my-2">You Posted a New Job</p>
                <p className="text-[14px] opacity-70">
                  Kindly check the requirements and terms of work and make sure
                  everything is right.
                </p>
                <div className="flex justify-between items-center mt-8">
                  <p>Schedule a call</p>
                  <Button
                    onClick={() => setOpenScheduleMeeting(true)}
                    className="bg-primary rounded-sm lowercase first-letter:uppercase text-[16px] font-normal tracking-wide py-2"
                  >
                    Schedule
                  </Button>
                </div>
              </div>
            </div>
            <div className="w-full relative border-[1px] border-blue-gray-200 rounded-md mt-4 ">
              <div className="p-3 flex justify-between items-center w-full sticky top-0">
                <p className="text-heading">Upcoming Schedule</p>
                <div>
                  <DatePicker />
                </div>
              </div>
              <div className="w-ful p-4 py-0 lg:h-[170px] h-[200px] overflow-y-auto">
                <p className="text-gray text-[10px]">Priority</p>
                <ScheduleCard
                  pinHidden={true}
                  name={"Review candidate applications"}
                  time={"Today - 11:30 AM"}
                />
                <p className="text-gray text-[10px]">Other</p>
                <ScheduleCard
                  pinHidden={true}
                  name={"Interview with candidates"}
                  time={"Today - 10:30 AM"}
                />
                <ScheduleCard
                  pinHidden={true}
                  name={"short meeting with product designer"}
                  time={"Today - 9:15 AM"}
                />
              </div>
              <p className="static bottom-0 p-2 border-t-[1px] border-blue-gray-200 text-primary text-center cursor-pointer text-[14px]">
                Create a New Schedule
              </p>
            </div>
          </div>
        </div>
      </div>
      <MeetingDialog
        open={openScheduleMeeting}
        onClose={() => setOpenScheduleMeeting(false)}
      />
    </div>
  );
};

export default Dashboard;
