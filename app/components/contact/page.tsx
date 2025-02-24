import Image, { StaticImageData } from "next/image";
import Home from "@/public/Frame 1000004364.png";

export default function Contact() {
  {
    /* Sample Data using interface */
  }
  interface products {
    id: number;
    name: string;
    logoUrl: StaticImageData;
  }
  const products: products[] = [
    {
      id: 1,
      name: "One World Place, Lane R, BGC",
      logoUrl: Home,
    },
  ];
  {
    /* contact container */
  }
  return (
    <div className="space-between justify-start items-start w-[406px] h-[274px] px-[12px] gap-[12px] md:w-[734px] md:h-[277px] flex flex-col gap-[12px]">
      <div className="flex flex-col items-start justify-start">
        <p className="font-semibold text-button md:text-xl text-base/16px tracking-[0]">
          Contact Us
        </p>
        <h1 className="font-bold text-black md:text-[42px] text-[20px] text-base/51px tracking-[0]">
          Get In Touch With Us
        </h1>
        <p className="font-lg text-sm text-black text-base/20px tracking-[0]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
          tempor
        </p>
      </div>
      {/* mapping data for a more dynamic appreoach*/}
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="flex flex-row items-center justify-start w-734px h-170px gap-[10px]"
        >
          <Image src={Home} alt="vb" className="overflow-clip"></Image>
          <div className="flex flex-col">
            <p className="text-black font-bold text-sm">Our Location</p>
            <p className="text-black text-base">One World Place, Lane R, BGC</p>
          </div>
        </div>
      ))}
    </div>
  );
}
