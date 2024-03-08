import { APP_URL } from "./urls";
import { MdDashboard } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { BiSolidCalendarEvent, BiSupport } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { TbGridDots } from "react-icons/tb";
import { IoIosSettings } from "react-icons/io";

export const MENU = {
  MAIN: [
    { name: "DashBoard", url: APP_URL.DASHBOARD, icon: MdDashboard },
    { name: "Recruitment", url: APP_URL.RECRUITMENT, icon: RiContactsFill },
    { name: "Schedule", url: APP_URL.SCHEDULE, icon: BiSolidCalendarEvent },
    { name: "Employee", url: APP_URL.EMPLOYEE, icon: BsPeopleFill },
    { name: "Department", url: APP_URL.DEPARTMENT, icon: TbGridDots },
  ],
  OTHER: [
    { name: "Support", url: APP_URL.SUPPORT, icon: BiSupport },
    { name: "Setting", url: APP_URL.SETTING, icon: IoIosSettings },
  ],
};
