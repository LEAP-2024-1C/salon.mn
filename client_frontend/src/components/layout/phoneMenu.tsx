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

import Image from "next/image";

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
      <section className="sm:hidden text-white">
        {show ? (
          <div className="bg-gray-800 absolute z-20 top-0 left-0 w-full h-screen">
            <div className=" w-10/12 h-screen ml-auto text-white  px-4 py-6">
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
                <div className="flex items-center gap-2 text-gray-500 pt-5">
                  <a href="/profile" className="flex gap-3 items-center">
                    <div className=" rounded-full flex relative w-11 h-11">
                      <Image
                        fill={true}
                        src="https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/elementor/thumbs/smiling-group-of-ethnically-diverse-professional-E54D7RY-men_4-e1664418927667-pvgfq7a0bujrf701w6uuz2ok9twxgj1xph7uak9w5e.jpg"
                        alt="Photo"
                        className="size-full object-cover rounded-full "
                      />
                    </div>
                    <p>Name</p>
                  </a>
                  <Button
                    className="bg-black p-0 hover:bg-black text-lg"
                    onClick={signout}
                  >
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
