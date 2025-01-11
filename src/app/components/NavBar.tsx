"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";
import insta from "../assets/insta.png";
import tube from "../assets/youtube.png";
import twiter from "../assets/twiter.png";
import facebook from "../assets/facebook.png";
import drop from "../assets/dropdown.png";
import login from "../assets/login.png";
import search from "../assets/search.png";
import cart from "../assets/cart icon.png";
import fav from "../assets/fav icon.png";

import cartxs from "../assets/cart icon xs.png";
import menuxs from "../assets/menu xs.png";
import searchxs from "../assets/search xs.png";

const NavBar = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <div className="sm:h-[136px] h-[532px] bg-white">
      <div id="nav dark" className="h-[58px] pt-[9px] bg-[#252B42] sm:block hidden">
        <div className="h-[46px]">
          <div className="h-[46px]">
            <div className="h-[46px] flex justify-between px-[24px]">
              <div className="flex">
                <Image src={phone} alt="phone" className="" />
                <Image src={mail} alt="phone" className="" />
              </div>
              <div className="w-auto h-auto flex gap-[10px] p-[10px] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-white ">
                Follow Us and get a chance to win 80% off
              </div>
              <div className="w-auto h-auto p-[10px] flex gap-[10px]">
                <h6 className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-white ">
                  Follow Us :
                </h6>
                <div className="w-[120px] h-[26px] flex gap-[6px]">
                  <Image src={insta} alt="insta logo" />
                  <Image src={tube} alt="tube logo" />
                  <Image src={facebook} alt="facbook logo" />
                  <Image src={twiter} alt="twiter logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="nav light" className="mt-[12px] flex px-9">
        <div className="w-[187px] h-[58px] pt-[13px] sm:block hidden">
          <h3 className="font-montserrat font-bold text-[24px] leading-[24px] tracking-[0.2px]">
            Bandage
          </h3>
        </div>
        <div className="w-full flex flex-col gap-[83px] sm:hidden">
          <div className="flex items-center justify-between gap-[28px]">
            <div className="h-[58px] sm:left-[38px] pt-[13px]">
              <h3 className="font-montserrat font-bold text-[24px] leading-[24px] tracking-[0.2px]">
                Bandage
              </h3>
            </div>
            <div className="flex gap-8">
              <Image src={searchxs} alt="dropdown icon" className="block sm:hidden w-[24px] h-[24px]" />
              <Image src={cartxs} alt="dropdown icon" className="block sm:hidden w-[24px] h-[22.4px]" />
              <button onClick={toggleMenu}>
                <Image src={menuxs} alt="dropdown icon" className="block sm:hidden w-[24px] h-[13.71px]" />
              </button>
            </div>
          </div>

          {/* Small Screen Navigation */}
          {isMenuVisible && (
            <div className="h-auto w-auto flex sm:hidden items-center justify-center flex-col gap-[30px]">
              <Link href={"/"}>
                <p className="font-montserrat font-normal text-[30px] leading-[45px] tracking-[0.2px] text-[#737373] text-center cursor-pointer">
                  Home
                </p>
              </Link>
              <Link href={"/productdetails"}>
                <p className="font-montserrat font-normal text-[30px] leading-[45px] tracking-[0.2px] text-[#737373] text-center cursor-pointer">
                  Product
                </p>
              </Link>
              <Link href={"/productlisting"}>
                <p className="font-montserrat font-normal text-[30px] leading-[45px] tracking-[0.2px] text-[#737373] text-center cursor-pointer">
                  Pricing
                </p>
              </Link>
              <Link href={"/"}>
                <p className="font-montserrat font-normal text-[30px] leading-[45px] tracking-[0.2px] text-[#737373] text-center cursor-pointer">
                  Contact
                </p>
              </Link>
            </div>
          )}
        </div>

        <div className="h-[58px] items-center sm:flex hidden">
          <div className="w-auto h-auto sm:mr-0 lg:mr-[25.53vw]">
            <ul className="flex gap-[15px] items-center justify-center font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-center cursor-pointer text-[#737373]">
              <li>Home</li>
              <li>
                <Image src={drop} alt="twiter logo" />
              </li>
              <li>About</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>Pages</li>
            </ul>
          </div>

          <div className="w-auto h-auto">
            <ul className="flex items-center">
              <li className="w-[166px] h-[54px]">
                <Image src={login} alt="dropdown icon" />
              </li>
              <li className="w-[46px] h-[46px]">
                <Image src={search} alt="dropdown icon" />
              </li>
              <li className="w-[56px] h-[46px]">
                <Image src={cart} alt="dropdown icon" />
              </li>
              <li className="w-[56px] h-[46px]">
                <Image src={fav} alt="dropdown icon" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
