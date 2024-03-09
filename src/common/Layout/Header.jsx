import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
  Input,
  Avatar,
  MenuHandler,
  Menu,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import dp from "../../assets/dp.png";
import { RiSearchLine } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";
import { RiMessage2Fill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import MobileSidebar from "./Drawer";

const Header = () => {
  return (
    <Navbar className="sticky top-0 z-10 h-max w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between ">
        <div className="hidden md:flex items-center gap-4 ">
          <MobileSidebar  />
          <Input type="text" label="Search" icon={<RiSearchLine />} />
        </div>
        <div className="md:hidden flex items-center text-gray gap-3">
            <MobileSidebar />
            <RiSearchLine  className="text-xl" />
        </div>

        <div className="flex items-center gap-4 text-gray">
          <IoNotifications className="text-lg cursor-pointer" />
          <RiMessage2Fill className="text-lg cursor-pointer" />
          <div className="flex items-center gap-4">
            <Avatar src={dp} alt="pic" />
            <Menu placement="bottom-start" className="min-w-fit">
              <MenuHandler>
                <div>
                  <span className="text-black hidden lg:inline">
                    Admirra John{" "}
                  </span>
                  <span>
                    <IoIosArrowDown className="cursor-pointer inline text-gray" />
                  </span>
                </div>
              </MenuHandler>
              <MenuList className="min-w-fit">
                <MenuItem className="flex items-center gap-2">
                  <Typography className="text-red-500 text-lg hidden lg:inline">
                    Logout
                  </Typography>
                  <CiLogout className="text-xl  text-red-500" />
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default Header;
