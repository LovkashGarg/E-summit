// import Image from "next/image";
// import HeroSection from "./components/HeroSection";
// import FeaturedCourses from "./components/FeaturedCourses";
import { LampHeader } from "./components/LampHeader";
// import WhyChooseUs from "./components/WhyChooseUs";
// import { Testimonial } from "./components/Testimonial";
// import { BentoGridThirdDemo } from "./components/BentoGrid";
import Instructors from "./components/Instructor";
import Footer from "./components/Footer";
import SignupForm from './components/Signup'
import { BackgroundBeamsWithCollisionDemo } from "./components/Background";
// import { BackgroundBeamsDemo } from "./components/Beam";
import { CardHoverEffectDemo } from "./components/card";
// import { BackgroundBoxesDemo } from "./components/BackgroundBoxes";
// import { SparklesCore } from "./components/ui/sparkles";
// import { SparklesPreview } from "./components/SparklesPreview";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">

      <BackgroundBeamsWithCollisionDemo/>
     {/* <SparklesPreview/> */}
   <CardHoverEffectDemo/>
      {/* <HeroSection /> */}
      <LampHeader />
      {/* <FeaturedCourses /> */}
      {/* <WhyChooseUs /> */}
      {/* <Testimonial /> */}
      {/* <BentoGridThirdDemo /> */}
      <SignupForm/>
      <Instructors />
      <Footer />
    </main>
  );
}
