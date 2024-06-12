import React from "react";
import { TechniqueData } from "../common/Helper";
import Heading from "../common/Heading";
import leafEllp from "../Assets/images/webp/leafEllipse.webp";

const Technicians = () => {
  return (
    <div className="bg-aboutBackground relative overflow-hidden bg-cover bg-center bg-no-repeat min-h-[1350px] xs:min-h-[1600px] sm:min-h-[800px] md:min-h-[900px] lg:min-h-[1000px]">
      <img
        className="pointer-events-none absolute right-0 hidden lg:block -bottom-24 z-40 max-w-[372px] max-h-[306px]"
        src={leafEllp}
        alt="ellipse"
      />
      <div className="container max-w-[1164px] pt-[70px] md:pt-14 lg:pt-20 mx-auto">
        <div className="flex justify-center flex-col items-center">
          <Heading commonHeading="Meet Our Technicians" className="mb-4" />
          <p className="text-center text-sm sm:text-base font-Poppins text-black leading-lg opacity-80 max-w-[777px]  px-6 md:px-0 md:mb-[70px]">
            Expert technicians specializing in electrolysis and laser hair
            removal, utilizing Candela technology for top-notch care and optimal
            results.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row lg:gap-5 xl:gap-[31px] pt-5 md:pt-0 justify-center">
          {TechniqueData.map((technique, index) => (
            <div
              key={index}
              className={`w-full px-3 md:px-3 mb-6 md:mb-0 ${
                index === 1 ? "" : ""
              }`}
            >
              <div className="border-b-[1.82px] border-[1.82px] border-l-[1.82px] border-r-[1.82px] border-pinkPrimary h-[540px] xsm2:h-[590px] xs:h-[650px] xxs:h-[700px] sm:h-[550px] md:h-[580px] xlg:h-[620px] lg:h-[648px]">
                <div className="w-full bg-white pt-[30px] border-b-[1.82px] border-pinkPrimary h-[336px] px-6 lg:px-11 duration-300">
                  <p className="font-normal text-xl2 leading-md text-center font-Playfair text-black mb-2">
                    {technique.title}
                  </p>
                  <p className="font-normal text-base font-Poppins mx-auto text-center leading-lg text-black mb-9 max-w-[317px]">
                    {technique.paragraph}
                  </p>
                  <div className="relative">
                    <img
                      className="w-full"
                      src={technique.pic}
                      alt="TechniqueImage"
                    />
                    <div className="flex gap-5 items-center justify-center pt-6 md:pt-9 pb-2 md:pb-8">
                      {technique.socialLinks.map((social, i) => (
                        <a
                          key={i}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="md:w-[60px] w-10 hover:shadow-[0px_7px_14.3px_0px_lightPink] duration-300 hover:-translate-y-3 h-10 md:h-[60px] bg-lightPink rounded-full flex justify-center items-center"
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
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
