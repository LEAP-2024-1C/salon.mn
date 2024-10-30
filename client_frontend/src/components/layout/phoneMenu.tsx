"use client";
import React, { useContext } from "react";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FiMenu } from "react-icons/fi";
import { IMenu } from "@/utils/interface";
import SigninModal from "../signin/signinModal";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { CiPower } from "react-icons/ci";
import { UserContext } from "@/context/user-booking-context";

const PhoneMenu = ({
  menuList,
  phoneStyle,
}: {
  menuList: IMenu;
  phoneStyle: string;
}) => {
  const [show, setShow] = useState(false);
  const { token, setToken } = useContext(UserContext);
  const router = useRouter();
  const signout = () => {
    localStorage.removeItem("token");
    setToken(token);
    router.push("/");
  };
  return (
    <div>
      <section className="sm:hidden">
        {show ? (
          <div className="bg-gray-800 absolute z-20 top-0 left-0 w-full h-screen">
            <div className="bg-[#101828] w-10/12 h-screen ml-auto text-white  px-4 py-6">
              <div className="flex justify-between items-center  px-4 py-6 border-b">
                <h1 className="text-3xl font-black">First Great </h1>
                <RxCross2
                  className="text-white text-2xl"
                  onClick={() => {
                    setShow(false);
                  }}
                />
              </div>
              <ul
                className={`${phoneStyle} flex gap-4 font-medium text-[16px] text-white `}
              >
                {menuList.map((menu) => (
                  <li key={menu.menuId}>
                    <a href={menu.link}>{menu.label}</a>
                  </li>
                ))}
              </ul>
              {token ? (
                <div className="flex items-center gap-2 text-gray-500">
                  <p>Name</p>
                  <Button
                    className="bg-black p-0 hover:bg-black text-lg"
                    onClick={signout}
                  >
                    {" "}
                    <CiPower className="text-gray-400 font-extrabold" />
                  </Button>
                </div>
              ) : (
                <SigninModal />
              )}
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
