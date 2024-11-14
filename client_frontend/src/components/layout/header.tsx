"use client";
import Image from "next/image";
import PhoneMenu from "./phoneMenu";
import { IMenu } from "@/utils/interface";
import SigninModal from "../signin/signinModal";
import { Button } from "../ui/button";
import { CiPower } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { UserContext } from "@/context/user-booking-context";
import Link from "next/link";

const menuList: IMenu = [
  { menuId: "Id03", label: "Үйлчилгээ", link: "ourService" },
  { menuId: "Id04", label: "Артист", link: "artists" },
  { menuId: "Id06", label: "Book now", link: "booknow" },
  { menuId: "Id05", label: "gift card", link: "products" },
];
const phoneStyle: string = "flex flex-col px-4 py-6 border-b";

const Header = () => {
  const { token, setToken } = useContext(UserContext);
  const router = useRouter();
  const signout = () => {
    localStorage.removeItem("token");
    setToken(token);
    router.push("/");
  };
  return (
    <div className="w-full border-b-2 px-40 bg-white">
      <header className="flex items-center justify-between m-auto px-2 py-2  md:px-20 ">
        <Link href="/">
          <Image
            height={150}
            src="/images/logo2.png"
            alt="photo"
            width={170}
            className="bg-black"
          />
        </Link>
        <div className="flex gap-[46px]">
          <div className="flex justify-between items-center max-sm:hidden">
            <ul className={` flex gap-[46px] font-medium `}>
              {menuList.map((menu) => (
                <li key={menu.menuId} className="flex items-center ">
                  <a className="text-lg" href={menu.link}>
                    {menu.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className=" max-sm:hidden">
            {token ? (
              <div className="flex items-center gap-2 text-gray-500">
                <Link href="/profile" className="flex gap-3 items-center">
                  <div className=" rounded-full flex relative w-11 h-11">
                    <Image
                      fill={true}
                      src="https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/elementor/thumbs/smiling-group-of-ethnically-diverse-professional-E54D7RY-men_4-e1664418927667-pvgfq7a0bujrf701w6uuz2ok9twxgj1xph7uak9w5e.jpg"
                      alt="Photo"
                      className="size-full object-cover rounded-full h-auto w-auto"
                    />
                  </div>
                  <p>Name</p>
                </Link>

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
          {<PhoneMenu menuList={menuList} phoneStyle={phoneStyle} />}
        </div>
      </header>
    </div>
  );
};

export default Header;
