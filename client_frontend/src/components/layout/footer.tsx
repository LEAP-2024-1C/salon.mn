// components/Footer.tsx
import React from "react";
import Image from "next/image";
import { IMenu } from "@/utils/interface";
import { TbArrowLeftFromArc } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";

const menuList: IMenu = [
  { menuId: "Id02", label: "Бидний тухай", link: "/" },
  { menuId: "Id03", label: "Үйлчилгээ", link: "ourService" },
  { menuId: "Id04", label: "Артист", link: "artists" },
  { menuId: "Id06", label: "Book now", link: "booknow" },
  { menuId: "Id05", label: "gift card", link: "products" },
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
            <Link
              href={
                "https://www.google.com/maps/place/HUD+-+15+khoroo,+Ulaanbaatar+17011/@47.9018625,106.9200065,16z/data=!3m1!4b1!4m6!3m5!1s0x5d9693cba6e38b29:0xa582049da72a6e4b!8m2!3d47.9012783!4d106.9166411!16s%2Fg%2F11l37gg8hx?entry=ttu&g_ep=EgoyMDI0MTExMS4wIKXMDSoASAFQAw%3D%3D"
              }
            >
              <CiLocationOn />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
