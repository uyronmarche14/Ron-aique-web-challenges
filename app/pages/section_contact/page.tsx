import Contact from "@/app/components/contact/page";
import Messages from "@/app/components/messages/page";

const Product_Section = () => {
  return (
    <div className=" ">
      {/* contact logo that will be placed on the left and messages logo that will be placed on the right */}
      <section className="w-[406px] h-full md:w-[1480px] md:h-[585px] flex flex-col md:pt-[24px] md:pb-[48px] pb-[24px] gap-[12px] md:flex-row ">
        {/* the contacy nad messages container was wrap around with flex col for the column effect */}
        <Contact />
        <Messages />
      </section>
    </div>
  );
};

export default Product_Section;
