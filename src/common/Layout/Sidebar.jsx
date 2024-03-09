import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import { MENU } from "../../config/consts";
import { Link, useLocation } from "react-router-dom";

export const Sidebar = () => {
  const location = useLocation();
  // console.log(location.pathname);

  return (
    <Card className="h-[100vh] lg:w-[15%] md:w-[10%] hidden md:block sticky left-0 top-0  max-w-[20rem] lg:p-4 lg:pr-8 ">
      <div className="lg:mb-2 md:mb-8 md:mt-4 lg:p-4 lg:pt-0 md:p-2 text-center ">
        <Typography variant="h3" className="text-black lg:text-[36px] md:text-[20px]">
          WeHR
        </Typography>
      </div>

      <div className="w-full md:mb-4">
        <Typography
          className="uppercase lg:text-xs md:text-[10px] lg:pl-3  text-lightGray lg:text-left md:text-center"
        >
          MAIN MENU
        </Typography>
        <ul>
          {MENU.MAIN.map((item) => (
            <Link to={item.url} key={item.name}>
              <li
                className={` md:text-[18px] ${
                  location.pathname === item.url ? "text-primary" : "text-gray"
                } flex items-center lg:justify-start md:justify-center gap-4 px-3 py-2 my-2`}
              >
                <item.icon className="text-2xl" />

                <span className="hidden lg:inline">{item.name}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="w-full">
        <Typography
         
          className="uppercase lg:text-xs md:text-[10px] lg:pl-3  text-lightGray lg:text-left md:text-center"
        >
          other
        </Typography>
        <ul>
          {MENU.OTHER.map((item) => (
            <Link to={item.url} key={item.name}>
              <li
                className={` md:text-[18px] ${
                  location.pathname === item.url ? "text-primary" : "text-gray"
                } flex items-center lg:justify-start md:justify-center gap-4 px-3 py-2 my-2`}
              >
                <item.icon className="text-2xl" />

                <span className="hidden lg:inline">{item.name}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default Sidebar;
