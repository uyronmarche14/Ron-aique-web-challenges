import Image from "next/image";
import Navbar from "./components/navbar/page";
import Hero from "@/app/pages/hero/page";
import Ps from "@/app/pages/section_grid/page";
import Sc from "@/app/pages/section_contact/page";

export default function Home() {
  return (
    <div className="font-Int flex flex-col items-center justify-center w-[430px] md:w-full h-full pt-[64px] md:pt-[1px]">
      {/* Navbar Container */}
      <Navbar />

      {/* Body Section */}
      <section className="flex flex-col w-full h-full gap-3 p-3 md:px-[124px] md:pt-[12px] md:gap-6 items-center justify-center m-auto">
        {/* links for pages and components  */}
        <Hero />
        <Ps />
        <Sc />
      </section>
    </div>
  );
}
