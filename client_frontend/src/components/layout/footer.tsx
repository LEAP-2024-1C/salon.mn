// components/Footer.tsx
import React from "react";
import Image from "next/image";
import { IMenu } from "@/utils/interface";
import { TbArrowLeftFromArc } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";

const menuList: IMenu = [
  { menuId: "Id02", label: "Бидний тухай", link: "/" },
  { menuId: "Id03", label: "Үйлчилгээ", link: "ourService" },
  { menuId: "Id04", label: "Артист", link: "artists" },
  { menuId: "Id06", label: "Book now", link: "booknow" },
  { menuId: "Id05", label: "Бүтээгдэхүүн", link: "products" },
];
const Footer: React.FC = () => {
  return (
    <div className="border-t-2 bg-[#241520]">
      <div className="text-white w-[90%] flex flex-col  m-auto">
        <div className="flex justify-between mb-[20px] max-sm:flex-col">
          <Image
            width={200}
            height={150}
            className="max-sm:m-auto"
            src="/images/logo.png"
            alt="Barber Logo"
          />
          <div className="flex justify-between items-center max-sm:flex-col">
            <ul
              className={` grid grid-cols-5 gap-4 font-medium text-[16px] text-white max-sm:grid-cols-2`}
            >
              {menuList.map((menu) => (
                <li key={menu.menuId} className="flex items-center gap-1">
                  <TbArrowLeftFromArc className=" text-lg" />
                  <a href={menu.link}>{menu.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full flex justify-between items-center  m-auto border-t-2 border-gray-400 p-4 text-lg max-sm:text-base ">
          <p className="max-sm:m-auto">
            © 2014 - {new Date().getFullYear()}. Бүх эрх хуулиар хамгаалагдсан
          </p>
          <div className="flex gap-4 ">
            <FaFacebookF />
            <FaTwitter />
            <FaPhone />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
