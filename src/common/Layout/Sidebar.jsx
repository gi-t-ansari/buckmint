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
  console.log(location.pathname);

  return (
    <Card className="h-[100vh]  max-w-[20rem] p-4 pr-8 ">
      <div className="mb-2 p-4 pt-0 text-center ">
        <Typography variant="h3" className="text-black text-[36px]">
          WeHR
        </Typography>
      </div>

      <div className="w-full">
        <Typography
          variant="p"
          className="uppercase text-xs pl-3 text-lightGray"
        >
          MAIN MENU
        </Typography>
        <ul>
          {MENU.MAIN.map((item) => (
            <Link to={item.url}>
              <li
                className={` md:text-[18px] ${
                  location.pathname === item.url ? "text-primary" : "text-gray"
                } flex items-center gap-4 px-3 py-2 my-2`}
              >
                <item.icon className="text-xl" />

                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="w-full">
        <Typography
          variant="p"
          className="uppercase text-xs pl-3 text-lightGray"
        >
          other
        </Typography>
        <ul>
          {MENU.OTHER.map((item) => (
            <Link to={item.url}>
              <li
                className={` md:text-[18px] ${
                  location.pathname === item.url ? "text-primary" : "text-gray"
                } flex items-center gap-4 px-3 py-2 my-2`}
              >
                <item.icon className="text-xl" />

                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default Sidebar;
