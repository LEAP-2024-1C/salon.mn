"use client";
import React from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FiMenu } from "react-icons/fi";
import { IMenu } from "@/utils/interface";

const PhoneMenu = ({
  menuList,
  phoneStyle,
}: {
  menuList: IMenu;
  phoneStyle: string;
}) => {
  const { theme, setTheme } = useTheme();
  const [show, setShow] = useState(false);

  return (
    <div>
      <section className="sm:hidden">
        {show ? (
          <div className="bg-gray-200 absolute top-0 left-0 w-full h-screen">
            <div className="bg-white  w-10/12 h-screen ml-auto dark:bg-black dark:text-white  px-4 py-6">
              <div className="flex justify-between items-center  px-4 py-6 border-b">
                <h1 className="text-3xl font-black">First Great </h1>
                <RxCross2
                  className="text-black text-2xl dark:text-white"
                  onClick={() => {
                    setShow(false);
                  }}
                />
              </div>
              <ul
                className={`${phoneStyle} flex gap-4 font-medium text-[16px] text-gray-600 dark:text-white`}
              >
                {menuList.map((menu) => (
                  <li key={menu.menuId}>
                    <a href={menu.link}>{menu.label}</a>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center  px-4 py-6">
                <h1 className="font-normal text-xl  ">Switch Theme</h1>

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
              </div>
              <div className="pr-4">
                <button className="w-full py-2 ml-4 dark:text-black text-white dark:bg-white  bg-black  rounded-xl">
                  Цаг захиалга
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <FiMenu
              className="sm:hidden cursor-pointer text-4xl"
              onClick={() => {
                setShow(true);
              }}
            />
          </div>
        )}
      </section>
    </div>
  );
};

export default PhoneMenu;
