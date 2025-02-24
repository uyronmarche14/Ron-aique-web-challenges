import rocket from "@/public/🚀.png";
import Image from "next/image";
import buttonVec from "@/public/buttonlogo.png";
import logoball from "@/public/loglball.png";

const Hero = () => {
  {
    /*container for hero such as the rocket logo and the whole slogan for the projects and also there is the logo button as well as the button  */
  }
  return (
    <div className="space-between flex justify-between flex flex-col items-center w-full h-full pt-[24px] pb-[12px] gap-[12px] min-h-[244px] md:w-[1480px] md:h-[300px] md:min-h-[224px] md:px-[64px] md:pb-[12px] p-[64px] gap-4 overflow-clip rounded-[12px]">
      {/*rocket logo container  */}
      <Image
        src={rocket}
        alt="Logo"
        className="md:smin-h-[64px] md:min-w-64px max-h-32px max-w-[44px] font-lg line-height-42 letter-spacing-[0] align-center vertical-trim-capheight"
      />
      {/* slogan container using full width for that wrap around the the whol container of the hero  */}

      <div className="flex items-center justify-center h-[68px] w-[406px] md:w-[1352px] md:h-[44px] pt-4 gap-4">
        <h1 className="md:w-[1352px] md:h-[32px] h-[56px] w-[406px] vertical-trim-capheight font-semibold  md:text-5xl text-button text-3xl text-center letter-spacing-[0] align-center line-height-[35.1px] md:line-height-[42px] ">
          Build and Launch Reliable and Market-Ready Products
        </h1>
      </div>

      {/* description container*/}

      <div className="pt-4 flex items-center justify-end md:w-full md:h-[52px] w-[406px] h-[132px] md:px-[106px] text-center gap-[10px] start  md:items-center md:justify-center md:pt-[12px] px-[24px] ">
        <p className=" w-[358px] h-[120px] align-center text-black text-base md:w-[1140px] md:h-[40px] align-center gap-[12px]  md:line-height-[20px] line-height-[24px]letter-spacing-[-0.02em] vertical-trim-capheight font-normal md:text-sm">
          This 2025, Aique DANG aims to optimize internal structures and
          processes, ensuring enhanced reliability, integrity, and efficiency,
          ultimately driving increased profitability for its clients.
        </p>
      </div>
      {/* logo button and button container  */}
      <div className="w-[406px] h-[60px] p-[12px] gap-[10px] md:w-[1352px] md:h-[60px] pt-[12px] gap-[10px]">
        <div className="flex items-center justify-center w-[206.2px] h-[48px] bg-blue-500 rounded-lg border border-blue-500 px-[12px] py-[15px] m-auto bg-button">
          {/* logo button uses two kinds of logo that will be placed one on top of the other and the other one will be the ball so it looks like one logo  */}
          <div className="relative w-[16.14px] h-[18px]">
            <Image
              src={buttonVec}
              alt="Rocket"
              className="h-[16.14px] w-[15.41px] mr-2"
            />
            <Image
              src={logoball}
              alt="Ball"
              className="absolute h-[7.62px] w-[7.59px] bottom-0 right-0"
            />
          </div>

          <button className="w-[152px] h-[24px] text-white text-sm font-semibold">
            Check our solutions
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
