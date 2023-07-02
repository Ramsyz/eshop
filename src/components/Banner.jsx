import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/June23/ATF/UNREC/Watches/Indus/Watches_3000._CB602716079_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/BAU/Unrexc/D70978891_INWLD_BAU_Unrec_Uber_PC_Hero_3000x1200._CB594707876_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/junatf23/unrecapay/KA_3000._CB603210873_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img20/HSS/July23/PC_3000x1200_2x._CB602705602_.jpg",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen h-[650px] relative">
        <div style={{transform: `translateX(-${currentSlide*100}vw)`}}
         className="w-[400vw] h-full flex transition duration-300">
          <img
            className="w-screen h-full object-cover"
            src={data[0]}
            alt="ImgOne"
            loading="priority"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[1]}
            alt="ImgTwo"
            loading="priority"
          />{" "}
          <img
            className="w-screen h-full object-cover"
            src={data[2]}
            alt="ImgThree"
            loading="priority"
          />{" "}
          <img
            className="w-screen h-full object-cover"
            src={data[3]}
            alt="ImgFour"
            loading="priority"
          />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44 ">
          <div
            onClick={prevSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <AiOutlineArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
