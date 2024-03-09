import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Select,
  Option,
} from "@material-tailwind/react";
import { RiCloseLine } from "react-icons/ri";
// import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers";

const MeetingDialog = ({ open, onClose }) => {
  const [countStep, setCountStep] = useState(0);
  const [value, setValue] = React.useState(dayjs("2022-04-17"));

  const steps = ["Time", "Date", "Add Team Member"];

  const handlePrevious = () => {
    setCountStep((prev) => prev - 1);
  };

  const handleNext = () => {
    setCountStep((prev) => prev + 1);
  };

  const handleConfirm = () => {
    onClose();
    setCountStep(0);
  };

  const handleClose = () => {
    onClose();
    setCountStep(0);
  };

  return (
    <Dialog open={open}>
      <DialogHeader>
        <RiCloseLine
          className="absolute right-4 top-2 text-gray cursor-pointer"
          onClick={handleClose}
        />
      </DialogHeader>
      <DialogBody className="flex md:flex-row flex-col justify-around px-6">
        <div className="flex flex-row md:flex-col justify-between p-2">
          {steps.map((step, i) => (
            <p
              className={`text-[14px] ${
                i === countStep ? "text-primary" : "text-inherit"
              }`}
            >
              {step}
            </p>
          ))}
        </div>
        <div className="">
          {steps[countStep] === "Time" && (
            <>
              <h5 className="text-heading text-[18px] font-semibold">
                Select a time for meeting
              </h5>
              <p className="text-[14px] text-heading">
                The following time will be set for the meeting:
              </p>
              <div className="my-8 ">
                <span className="p-4 py-3 rounded-md bg-blue-gray-200 text-black mr-2">
                  0
                </span>
                <span className="p-4 py-3 rounded-md bg-blue-gray-200 text-black mr-2">
                  0
                </span>
                <span className="p-4 py-3 rounded-md bg-blue-gray-200 text-black mr-2">
                  0
                </span>
                <span className="p-4 py-3 rounded-md bg-blue-gray-200 text-black mr-2">
                  0
                </span>
                <p className="text-[10px] text-gray mt-3">
                  time in 24hr format
                </p>
              </div>
            </>
          )}
          {steps[countStep] === "Date" && (
            <>
              <h5 className="text-[18px] text-heading font-semibold">
                Select a date for meeting
              </h5>
              <p className="text-[14px] text-heading">
                The following date will be set for the meeting:
              </p>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                />
              </LocalizationProvider>
            </>
          )}
          {steps[countStep] === "Add Team Member" && (
            <>
              <h5 className="text-[18px] text-heading font-semibold">
                Add Team Member
              </h5>
              <p className="text-[14px] text-heading">
                The following users hav access to this meeting:
              </p>
              <div className="my-4">
                <p className="text-[12px] text-heading font-semibold">Team member</p>
                <Select size="md" label="Select team member" aria-multiselectable>
                  <Option>Candice Wu</Option>
                  <Option>Demi Wilkinson</Option>
                  <Option>Drew Cano</Option>
                </Select>
              </div>
            </>
          )}
          <div>
            {countStep > 0 && (
              <Button
                className="border-primary border-[1px] text-primary py-2 mr-2 rounded-sm lowercase first-letter:uppercase"
                variant="outlined"
                onClick={handlePrevious}
              >
                Prev
              </Button>
            )}
            {countStep < steps.length - 1 && (
              <Button
                className="bg-primary py-2 rounded-sm lowercase first-letter:uppercase mr-2"
                onClick={handleNext}
              >
                Next
              </Button>
            )}
            {countStep === steps.length - 1 && (
              <Button
                className="bg-primary py-2 rounded-sm lowercase first-letter:uppercase"
                onClick={handleConfirm}
              >
                Confirm
              </Button>
            )}
          </div>
        </div>
      </DialogBody>
    </Dialog>
  );
};

export default MeetingDialog;
