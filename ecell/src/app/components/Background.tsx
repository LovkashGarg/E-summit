import React from "react";
import { BackgroundBeamsWithCollision } from "@/app/components/ui/background-beams-with-collision";
import Image from "next/image";
import logo from "../../../public/courses/E-summit24 logo.png"
import { TextHoverEffect } from "./ui/text-hover-effect";
import { TextRevealCard } from "./ui/text-reveal-card";
export function BackgroundBeamsWithCollisionDemo() {
  return (
    
    <BackgroundBeamsWithCollision>
      <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        <Image src={logo} width={400} height={400} alt="logo"/>
        {/* <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">

          </div>

        </div> */}
      </h2>
    </BackgroundBeamsWithCollision>
  );
}
