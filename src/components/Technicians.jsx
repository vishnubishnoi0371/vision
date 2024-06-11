import React from "react";
import { TechniqueData } from "../common/Helper";
import Heading from "../common/Heading";
import { Facebook, Insta, Twiter } from "../common/icon";

const Technicians = () => {
  return (
    <div className="bg-aboutBackground bg-cover bg-center  bg-no-repeat min-h-[1500px] md:min-h-[1000px]">
      <div className="container max-w-[1164px] pt-10 md:pt-14 lg:pt-20  mx-auto">
        <div className="flex justify-center flex-col items-center">
          <Heading commonHeading="Meet Our Technicians" className="mb-4 " />
          <p className="text-center text-sm sm:text-base font-Poppins text-black opacity-80 max-w-[777px] mb-[70px]">
            Expert technicians specializing in electrolysis and laser hair
            removal, utilizing Candela technology for top-notch care and optimal
            results.
          </p>
        </div>
        <div className="flex flex-col md:flex-row lg:gap-5 xl:gap-[31px] justify-center">
          {TechniqueData.map((Technique, index) => (
            <div className="flex flex-col md:flex-row  px-3 items-center mt-6 md:mt-0">
              <div
                className={`w-full bg-white  pt-[30px] mt-[-100px] md:mt-0 border-[1.82px] border-pinkPrimary h-[336px] px-6 lg:px-11  duration-300  `}
              >
                <p className="font-normal text-xl2 leading-7 text-center font-Marcellus text-black mb-2 ">
                  {Technique.title}
                </p>

                <p className="font-normal text-base font-Poppins mx-auto text-center leading-lg text-black mb-9 max-w-[317px]">
                  {Technique.paragraph}
                </p>
                <div className="relative">
                  <img
                    className="w-100"
                    src={Technique.pic}
                    alt="TechniqueImage"
                  />
                  <div className="flex gap-5 items-center justify-center pt-9 pb-8">
                    <span className="w-[60px] h-[60px] bg-lightPink rounded-full flex justify-center items-center">
                      <Facebook />
                    </span>
                    <span className="w-[60px] h-[60px] bg-lightPink rounded-full flex justify-center items-center">
                      <Twiter />
                    </span>
                    <span className="w-[60px] h-[60px] bg-lightPink rounded-full flex justify-center items-center">
                      <Insta />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technicians;
