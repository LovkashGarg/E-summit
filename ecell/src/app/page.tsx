import Image from "next/image";
import HeroSection from "./components/HeroSection";
import FeaturedCourses from "./components/FeaturedCourses";
import { LampHeader } from "./components/LampHeader";
import WhyChooseUs from "./components/WhyChooseUs";
import { Testimonial } from "./components/Testimonial";
import { BentoGridThirdDemo } from "./components/BentoGrid";
import Instructors from "./components/Instructor";
import Footer from "./components/Footer";
import { CardHoverEffectDemo } from "./components/card";



export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">

      <HeroSection />
      <FeaturedCourses />
      <LampHeader />
      <WhyChooseUs />
      <Testimonial />
      <BentoGridThirdDemo />
      <Instructors />
   <CardHoverEffectDemo/>
      <Footer />
    </main>
  );
}
