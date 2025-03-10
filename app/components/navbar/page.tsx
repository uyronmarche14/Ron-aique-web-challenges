import React from "react";
{
  /* nextjs Image component for importing images faster  */
}
import Image from "next/image";
import logo from "@/public/aique_logo.png";

const Navbar = () => {
  {
    /* using interface and multiple input array fields  */
  }
  interface products {
    id: number;
    name: string;
    bc: string;
    tc: string;
    hoverEffect: boolean;
  }
  {
    /* Data array  */
  }
  const products: products[] = [
    {
      id: 1,
      name: "Home ",
      bc: "bg-button",
      tc: "text-white",
      hoverEffect: false,
    },
    {
      id: 2,
      name: "About ",
      bc: "bg-white",
      tc: "text-black",
      hoverEffect: true,
    },
    {
      id: 3,
      name: "Contact ",
      bc: "bg-white",
      tc: "text-black",
      hoverEffect: true,
    },
  ];

  return (
    <div className="justify-between flex flex-row p-3 gap-[10px] w-[430px] h-66px md:w-[1728px] md:h-full min-h-64px justify-between md:px-[124px] md:py-[12px]">
      <div className="h-fit w-fit ">
        <Image src={logo} alt="Logo" className="h-[32px] w-[32px]" />
      </div>

      <div className="gap-2 w-354px h-36px text-14px font-semibold flex flex-row items-center gap-3 md:h-full md:w-88px md:py-2 px-6 ">
        {/* mapping data for a more efficient code  */}
        {products.map((product) => (
          <button
            key={product.id}
            className={`${product.tc} w-[88px] h-[36px] px-[24px] px-[8px] ${
              product.bc
            } transition-colors duration-300 ease-in-out rounded-lg ${
              product.hoverEffect
                ? "hover:border hover:border-button hover:text-button"
                : ""
            }`}
          >
            {product.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
