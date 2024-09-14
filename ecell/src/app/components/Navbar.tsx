'use client'
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";
import Link from "next/link";
import { Button } from "./ui/moving-border";
import Image from "next/image";
import logo from "../../../public/courses/E-Cell logo Yellow-white.png"
import { HoverBorderGradientDemo } from "./HoverButton";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
function Navbar({ className }: { className?: string }) {

  const [active, setActive] = useState<string | null>(null);


  return (
    <div className="flex">
    <div className={cn("fixed top-10 inset-x-0 max-sm:w-full max-w-full mx-auto z-50 flex justify-around", className)}>
      
      <Image src={logo} width={100} height={100} alt="logo" />
    
<div className="pl-48">

      <Menu setActive={setActive} >
        <Link href="/">
          <MenuItem setActive={setActive} active={active} item="Home">
          </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Events"></MenuItem>
        <MenuItem setActive={setActive} active={active} item="About Us"></MenuItem>
        <MenuItem setActive={setActive} active={active} item="Tickets"></MenuItem>
        <Link href="/contact">
          <MenuItem setActive={setActive} active={active} item="Contact Us"></MenuItem>
        </Link>
      </Menu>
</div>

      <div>
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2">
        <AceternityLogo />
        <span>Aceternity UI</span>
      </HoverBorderGradient>
      {/* <HoverBorderGradientDemo/> */}


      </div>
    </div>
      </div>

  )
}


const AceternityLogo = () => {
  return (
    (<svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-black dark:text-white">
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round" />
    </svg>)
  );
};
export default Navbar;