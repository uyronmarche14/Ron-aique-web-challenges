"use client";
import Image, { StaticImageData } from "next/image";
import img1 from "@/public/Rectangle 4592 (1).png";
import img2 from "@/public/Rectangle 4592 (2).png";
import img3 from "@/public/Rectangle 4593.png";
{
  /* using useref for accessing the dom and using for the dragging effect, 
  using usestate for the selected view  */
}
import { useState, useRef } from "react";

const Product_Section = () => {
  {
    /* 
    - using selected and setSelected when clicked it will change it's colored depending on the ID input field
    - using contref for accessing the dom and using for the dragging effect, 
    - using dragging and start and scrollLeft for the dragging effect
    - start for the dragging effect
    - scroll left for the dragging effect
    */
  }
  const [selected, setSelected] = useState<number | null>(null);
  const contref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const start = useRef(0);
  const scrollLeft = useRef(0);

  {
    /* using products interface and multiple input array fields  */
  }
  interface products {
    id: number;
    name: string;
    logoUrl: StaticImageData;
  }

  const products: products[] = [
    { id: 1, name: "p1", logoUrl: img2 },
    { id: 2, name: "p2", logoUrl: img3 },
    { id: 3, name: "p3", logoUrl: img1 },
    { id: 4, name: "p4", logoUrl: img2 },
    { id: 5, name: "p5", logoUrl: img3 },
    { id: 6, name: "p6", logoUrl: img2 },
  ];
  {
    /* selected view function  */
  }
  const selectedView = (id: number) => {
    setSelected(id);
  };

  {
    /* 
    - handleMousedown function uses htlelemnt if the button were dragged it will be stopped 
    - if drag is true it will start the dragging effect
    - using container for accessing the dom and using for the dragging effect
    */
  }
  const handleMousedown = (e: React.MouseEvent) => {
    const moved = e.target as HTMLElement;
    if (moved.closest("button")) return;

    dragging.current = true;
    const container = contref.current;
    if (!container) return;

    start.current = e.clientX;
    scrollLeft.current = container.scrollLeft;

    document.addEventListener("mousemove", handleMousemove);
    document.addEventListener("mouseup", handleMouseup);
  };
  {
    /* 
    - handlemousemove function uses preventdefault if the button were dragged it will be stopped 
    - using container for accessing the dom and using for the dragging effect 
  */
  }

  const handleMousemove = (e: MouseEvent) => {
    if (!dragging.current) return;
    e.preventDefault();
    const container = contref.current;
    if (!container) return;

    const x = e.clientX;
    const walk = x - start.current;
    container.scrollLeft = scrollLeft.current - walk;
  };
  {
    /* 
    - handlemouseup function removes the dragging effect
    */
  }

  const handleMouseup = () => {
    dragging.current = false;
    document.removeEventListener("mousemove", handleMousemove);
    document.removeEventListener("mouseup", handleMouseup);
  };
  {
    /* 
    - return the dom
    - using space-between for the column effect
    - using flex-row for the row effect
    - if cursor grabbing it will be the dragging effect 
  */
  }

  return (
    <div
      ref={contref}
      className={`space-between flex flex-col justify-center w-[406px] h-[585px]  md:w-[1480px] md:h-full pt-[24px] pb-[48px] gap-[12px] overflow-x-auto overflow-y-hidden scroll-smooth ${
        dragging.current ? "cursor-grabbing" : "cursor-grab"
      }`}
      style={{ scrollbarWidth: "none" }}
      onMouseDown={handleMousedown}
    >
      {/*
        - using map to to spread and dsiplay the products in more efficient way
      */}
      <div className="items-center flex flex-row flex-nowrap gap-[12px]">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-[370px] h-[513px] rounded-xl shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)]"
          >
            <Image
              src={product.logoUrl}
              className="w-[370px] h-[230px] bg-white rounded-t-lg"
              alt={product.name}
            />
            <div className="flex flex-col w-[370px] h-[283px] bg-white rounded-b-xl p-[32px] gap-[28px]">
              <div className="w-[300px] h-[143px] gap-[15px] flex flex-col text-black items-center m-auto text-center">
                <h1 className="font-bold w-[300px] h-[56px] text-lg tracking-wide leading-[28px] text-center">
                  50+ Best creative website themes & templates
                </h1>
                <p>
                  Lorem ipsum dolor sit amet pretium consectetur adipiscing
                  elit. Lorem consectetur adipiscing elit.
                </p>
              </div>
              {/*
              - if button is press and the product id match it will turn the button background to blue and the text white
              */}
              <div className="text-black items-center text-center">
                <button
                  className={`text-base text-black font-medium ${
                    selected === product.id
                      ? "bg-button text-white"
                      : "bg-white"
                  } w-151px h-48px rounded-3xl px-[28px] py-[12px] border border-black tracking-[0] hover:bg-button hover:text-white`}
                  onClick={() => selectedView(product.id)}
                >
                  View Schedule
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product_Section;
