"use client";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
// import { useState } from "react";
// import { RxCross2 } from "react-icons/rx";
// import { FiMenu } from "react-icons/fi";
import Image from "next/image";
import PhoneMenu from "./phoneMenu";
import { IMenu } from "@/utils/interface";

const menuList: IMenu = [
  { menuId: "Id01", label: "Home", link: "/" },
  { menuId: "Id02", label: "Бидний тухай", link: "#about" },
  { menuId: "Id03", label: "Үйлчилгээ", link: "#service" },
  { menuId: "Id04", label: "Бүтээгдэхүүн", link: "#shop" },
  { menuId: "Id04", label: "work", link: "#work" },
];
const phoneStyle: string = "flex flex-col px-4 py-6 border-b";

const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header className="flex items-center justify-between px-4 py-4 w-full bg-white mb-24 dark:bg-black md:px-20 ">
      <Image height={200} src="/images/logo.png" alt="photo" width={100} />

      <div className="flex justify-between items-center max-sm:hidden">
        <ul
          className={` flex gap-4 font-medium text-[16px] text-gray-600 dark:text-white`}
        >
          {menuList.map((menu) => (
            <li key={menu.menuId}>
              <a href={menu.link}>{menu.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center">
          <span className="text-gray-600 mr-4"></span>
          {theme === "light" ? (
            <MdOutlineLightMode
              className="hover:cursor-pointer"
              onClick={() => {
                setTheme("dark");
              }}
            />
          ) : (
            <MdOutlineDarkMode
              className="hover:cursor-pointer"
              onClick={() => {
                setTheme("light");
              }}
            />
          )}

          <button className="py-[6px] px-4 ml-4 dark:text-black text-white dark:bg-white  bg-black  rounded-xl">
            Download CV
          </button>
        </div>
      </div>

      {<PhoneMenu menuList={menuList} phoneStyle={phoneStyle} />}
    </header>
  );
};

export default Header;
