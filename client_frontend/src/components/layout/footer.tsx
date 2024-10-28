// components/Footer.tsx
import React from "react";
import Link from "next/link";
import { FaHashtag, FaTwitter, FaTwitch } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoMdMusicalNote } from "react-icons/io";
const Footer: React.FC = () => {
  return (
    <footer style={styles.footer}>
      <div className="mb-[20px]">
        <img className="w-28 m-auto" src="/logo.png" alt="Barber Logo" />
      </div>
      <div className="mb-10 max-w-[500px] m-auto">
        <p className="text-sm">
          Pellentesque morbi dictum aliquet morbi adipiscing est tempor nunc dui
          ac enim amet tincidunt purus urna viverra purus enim pellentesque
          posuere odio morbi suspendisse pharetra.
        </p>
      </div>
      <div className="mb-8">
        <ul className="flex justify-center text-sm gap-10">
          <div>
            <div className="flex p-1"><FaTwitter /><p>@twitter</p></div>
            <div className="flex p-1"><FaTwitch /><li>Twitch</li></div>
            <div className="flex p-1"> <FaHashtag /><li>#barbershop</li></div>
          </div>
          <div>
          <div className="flex p-1"> <IoMdMusicalNote /><li>@barber’s</li></div>
          <div className="flex p-1"><AiOutlineGlobal /><li>@username</li> </div>
          <div className="flex p-1"><AiOutlineGlobal /><li>@username</li> </div>
          </div>
        </ul>
      </div>

      <div className="border-t-2 p-4 text-xs">
        <Link href="/terms">Terms of Service</Link>
        <p>Copyright © {new Date().getFullYear()}. All rights reserved</p>
        <Link href="/privacy">Privacy policy</Link>
      </div>
    </footer>
  );
};
const styles = {
  footer: {
    backgroundColor: "#101828",
    color: "#fff",
    padding: "40px 20px",
    textAlign: "center" as "center",
    
  },
};
export default Footer;
