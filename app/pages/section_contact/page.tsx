import Contact from "@/app/components/contact/page";
import { Messages } from "@/app/components/messages/page";

export const Product_Section = () => {
  return (
    <div className=" ">
      <section className="w-[406px] h-full md:w-[1480px] md:h-[585px] flex flex-col md:pt-[24px] md:pb-[48px] pb-[24px] gap-[12px] md:flex-row ">
        <Contact />
        <Messages />
      </section>
    </div>
  );
};

export default Product_Section;
