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

const menuList: IMenu = [
  { menuId: "Id01", label: "Home", link: "/" },
  { menuId: "Id02", label: "Бидний тухай", link: "about" },
  { menuId: "Id03", label: "Үйлчилгээ", link: "ourService" },
  { menuId: "Id04", label: "Артист", link: "artists" },
  { menuId: "Id05", label: "Бүтээгдэхүүн", link: "products" },
  { menuId: "Id06", label: "Book now", link: "booknow" },
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
    <div className="w-full bg-[#101828]">
      <header className="flex items-center justify-between w-9/12 m-auto  border-b-2 px-4 py-4 bg-[#101828] md:px-20 ">
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
        </div>

        <div className=" max-sm:hidden">
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

        {<PhoneMenu menuList={menuList} phoneStyle={phoneStyle} />}
      </header>
    </div>
  );
};

export default Header;
