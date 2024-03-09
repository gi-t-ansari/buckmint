import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { MENU } from "../../config/consts";
import { Link, useLocation } from "react-router-dom";

const MobileSidebar = () => {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>
      <div className={`text-gray lg:hidden`} onClick={openDrawer}>
        <RxHamburgerMenu className="text-2xl" />
      </div>

      <Drawer
        open={open}
        onClose={closeDrawer}
        
        className={`p-4 lg:hidden md:absolute md:-left-20 ${open ? "bg-white":""}` }
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="black" className="pl-4">
            WeHR
          </Typography>
          <IconButton variant="text" color="red" onClick={closeDrawer}>
            <IoMdClose className="text-2xl"  />
          </IconButton>
        </div>

        <div className="w-full mb-4">
          <Typography
           
            className="uppercase text-xs pl-3  text-lightGray"
          >
            MAIN MENU
          </Typography>
          <ul>
            {MENU.MAIN.map((item) => (
              <Link to={item.url} key={item.name}>
                <li
                  className={` md:text-[18px] ${
                    location.pathname === item.url
                      ? "text-primary"
                      : "text-gray"
                  } flex items-center gap-4 px-3 py-2 my-2`}
                  onClick={closeDrawer}
                >
                  <item.icon className="text-2xl" />

                  <span>{item.name}</span>
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div className="w-full">
          <Typography
            
            className="uppercase text-xs pl-3  text-lightGray"
          >
            other
          </Typography>
          <ul>
            {MENU.OTHER.map((item) => (
              <Link to={item.url} key={item.name}>
                <li
                  className={` md:text-[18px] ${
                    location.pathname === item.url
                      ? "text-primary"
                      : "text-gray"
                  } flex items-center gap-4 px-3 py-2 my-2`}
                >
                  <item.icon className="text-2xl" />

                  <span>{item.name}</span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default MobileSidebar;
