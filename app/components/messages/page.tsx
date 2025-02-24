"use client";
import { useState } from "react";

export default function Messages() {
  {
    /* using clicked and setClicked when clicked it will change it's colored depending on the ID input field since using array */
  }
  const [clicked, setClicked] = useState<number | null>(null);
  {
    /* using interface and multiple input array fields  */
  }
  interface inputString {
    id: number;
    name: string;
    placeholder: string;
  }
  const input: inputString[] = [
    {
      id: 1,
      name: "Name ",
      placeholder: "name",
    },
    {
      id: 2,
      name: "Email",
      placeholder: "ronmarcheuy@gmail.com",
    },
    {
      id: 3,
      name: "Contact number",
      placeholder: "0993-296-4304",
    },
    {
      id: 4,
      name: "Message",
      placeholder: "Send your message we like to help you",
    },
  ];

  {
    /* creating an a function when id is clicked it will change it's color  */
  }

  const selected = (id: number) => {
    setClicked(id);
  };
  {
    /* using a div function a create a more dynamic and editable color blured backend design in forms*/
  }
  const blurredDots = () => {
    return (
      <div className="absolute inset-0 h-[276px] w-[176px] rounded-full blur-[60px] bg-gradient-to-r from-dot1blue to-dot2vio "></div>
    );
  };
  return (
    <div className="relative w-[406px] md:w-[734px] h-[476px] p-[24px] items-center justify-center flex flex-col ">
      <div className="flex flex-col w-[358px] md:w-[686px] h-[428px] rounded-[12px] p-[24px] gap-[12px] bg-[rgba(212,203,255,0.4)] bg-clip-padding backdrop-filter backdrop-blur relative z-10 blur-17px transparent-bg">
        <div className="absolute bottom-[140px] left-[-40px] bg-clip-content ">
          {/* implementing the blured dots background */}
          {blurredDots()}
        </div>
        <div className="absolute bottom-[480px] right-[100px] bg-clip-content ">
          {blurredDots()}
        </div>
        <div className="pb-[24px]">
          <label className="text-black font-bold w-full text-lg ">
            Send us a message
          </label>
        </div>
        {/* Cusing map to create multiple input fields */}
        {input.map((input) => (
          <div
            key={input.id}
            className="flex flex-col w-638px h-52px gap-[8px]"
          >
            <label
              className={`w-54px h-16px text-xs font-normal ${
                clicked === input.id ? "text-blue-500" : "text-black"
              }`}
            >
              {input.name}
            </label>
            <input
              onClick={() => selected(input.id)}
              type="text"
              name="text input"
              id="floating input"
              className={`block w-full text-base bg-transparent border-b-2 border-t-0 border-l-0 border-r-0 placeholder:font-normal focus:outline-none ${
                clicked === input.id
                  ? "border-blue-500 text-blue-500 placeholder:text-blue-500"
                  : "border-black text-black placeholder:text-black"
              }`}
              placeholder={input.placeholder}
              required
            />
          </div>
        ))}
        {/* send button for the forms  */}
        <div className="w-638px h-80px flex items-end justify-end pt-[12px]">
          <button className="w-[96px] h-[48px] border-black px bg-button hover:bg-blue-700 text-white font-medium text-base py-2 px-4 rounded-3xl px-28px py-12px">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
