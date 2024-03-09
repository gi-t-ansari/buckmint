import { APP_URL } from "./urls";
import { MdDashboard } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { BiSolidCalendarEvent, BiSupport } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { TbGridDots } from "react-icons/tb";
import { IoIosSettings } from "react-icons/io";
import graph1 from "../assets/graph1.png"
import graph2 from "../assets/graph2.png"

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

export const JOB_CARDS = [
  {
    name: "Available Position",
    count: "24",
    status: "4 Urgently needed",
    bg: "bg-[#feefe6]",
    text: "text-[#fe5051]",
  },
  {
    name: "Job Open",
    count: "10",
    status: "4 Actively hiring",
    bg: "bg-[#e9f0fa]",
    text: "text-[#2784f0]",
  },
  {
    name: "New Employees",
    count: "24",
    status: "4 Departments",
    bg: "bg-[#fcebf8]",
    text: "text-[#ef60cf]",
  },
];

export const EMPLOYEE_CARD = [
  {
    heading: "Total Employees",
    count: "216",
    men: "120",
    women: "96",
    growth: "+2%",
    img: graph1
  },
  {
    heading: "Total Request",
    count: "16",
    men: "6",
    women: "10",
    growth: "+5%",
    img: graph2
  }
]
