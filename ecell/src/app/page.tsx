import Image from "next/image";
import HeroSection from "../../../../Ecell/ecell/src/app/components/HeroSection";
import FeaturedCourses from "../../../../Ecell/ecell/src/app/components/FeaturedCourses";
import { LampHeader } from "../../../../Ecell/ecell/src/app/components/LampHeader";
import WhyChooseUs from "../../../../Ecell/ecell/src/app/components/WhyChooseUs";
import { Testimonial } from "../../../../Ecell/ecell/src/app/components/Testimonial";
import { BentoGridThirdDemo } from "../../../../Ecell/ecell/src/app/components/BentoGrid";
import Instructors from "../../../../Ecell/ecell/src/app/components/Instructor";
import Footer from "../../../../Ecell/ecell/src/app/components/Footer";


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
      <Footer />
    </main>
  );
}
