'use client'
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";
import Link from "next/link";
import { Button } from "./ui/moving-border";
import Image from "next/image";
import logo from "../../../public/courses/E-Cell logo Yellow-white.png"
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
      <Button borderRadius="1.75rem" >Login </Button>
      <Button borderRadius="1.75rem" >Sign Up </Button>
      </div>
    </div>
      </div>

  )
}

export default Navbar;