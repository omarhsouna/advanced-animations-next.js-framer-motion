"use client";
import React from "react";
import Logo from "../public/icons/apple.svg";
import Home from "../public/icons/home.svg";
import User from "../public/icons/user.svg";
import Inbox from "../public/icons/chat.svg";
import Setting from "../public/icons/setting.svg";
import Analytics from "../public/icons/chart.svg";
import Order from "../public/icons/cart.svg";
import Logout from "../public/icons/logout.svg";

import { twMerge } from "tailwind-merge";
import Image from "next/image";
const listItems = [
  {
    id: 1,
    name: "Home",
    Icon: Home,
    color: "#f44336",
  },
  {
    id: 2,
    name: "Profile",
    Icon: User,
    color: "#ffa117",
  },
  {
    id: 3,
    name: "Inbox",
    Icon: Inbox,
    color: "#0fc70f",
  },
  {
    id: 4,
    name: "Setting",
    Icon: Setting,
    color: "#e91e63",
  },
  {
    id: 5,
    name: "Analytics",
    Icon: Analytics,
    color: "#2196f3",
  },
  {
    id: 6,
    name: "Order",
    Icon: Order,
    color: "#b145e9",
  },
];
const HomePage = () => {
  const [open, setOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState<string | undefined>(
    "Home"
  );
  const handleOpen = () => {
    setOpen((open) => !open);
  };
  return (
    <div className="bg-primary min-h-screen overflow-hidden text-primary">
      <nav
        className={twMerge(
          "bg-white absolute h-screen pl-4  transition-all duration-500 overflow-hidden",
          open ? "w-[300px]" : "w-[80px]"
        )}
      >
        <ul className="flex flex-col h-full">
          <li className="flex items-center gap-[30px] mb-[80px]">
            <Logo className="w-[40px] h-[70px] shrink-0 pl-[10px]" />
            <span className="font-semibold text-2xl text-primary shrink-0">
              Website Logo
            </span>
          </li>
          {listItems.map((item) => (
            <li
              key={item.id}
              className={twMerge(
                "flex items-center gap-[30px] h-[70px] cursor-pointer hover:text-[--bg] relative",
                activeItem === item.name &&
                  "bg-primary text-[--bg] rounded-tl-[50px] rounded-bl-[50px]  after:absolute after:right-0 after:-top-3 after:shadow-top-curved  after:bg-transparent  after:rounded-br-[10px] after:w-3 after:h-3 before:absolute before:right-0 before:-bottom-3 before:shadow-bottom-curved  before:bg-transparent  before:rounded-tr-[10px] before:w-3 before:h-3"
              )}
              style={{ "--bg": item.color }}
              onClick={() => setActiveItem(item.name)}
            >
              <div
                className={twMerge(
                  "pl-[10px]",
                  activeItem === item.name &&
                    "relative after:absolute text-white hover:text-[--bg] hover:after:bg-white  after:left-1 after:top-1/2 after:-translate-y-1/2 after:w-[60px] after:h-[60px] after:bg-[--bg] after:rounded-full"
                )}
              >
                <item.Icon
                  className={twMerge(
                    "w-[40px] h-[24px] shrink-0 relative z-20"
                  )}
                />
              </div>
              <span className="text-base uppercase shrink-0">{item.name}</span>
            </li>
          ))}
          <li className="flex items-center gap-[30px] h-[70px] w-[40px] cursor-pointer">
            <Logout className="w-[40px] h-[24px] shrink-0 pl-[10px]" />
            <span className="text-base uppercase shrink-0">Logout</span>
          </li>
          <li className="flex items-center gap-[30px] h-[40px] w-[40px] mb-1 mt-auto">
            <Image
              src="/images/profile.jpg"
              className="shrink-0 object-cover rounded-full max-w-full max-h-full"
              width={40}
              height={40}
              alt="profile"
            />
            <span className="text-base uppercase shrink-0">Omar Hsouna</span>
          </li>
        </ul>
      </nav>
      <button
        onClick={handleOpen}
        className="text-white absolute top-2 right-5"
      >
        Close
      </button>
    </div>
  );
};

export default HomePage;
