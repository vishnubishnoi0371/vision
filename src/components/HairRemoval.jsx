import React from "react";
import CommonBtn from "../common/CommonBtn";
import { hairRemovalData } from "../common/Helper";
import Heading from "../common/Heading";
import { VideoIcon } from "../common/icon";
const HairRemoval = () => {
  return (
    <div className="container max-w-[1164px] px-3 mx-auto pt-16">
      <div className="flex items-center flex-col lg:flex-row justify-between md:mb-7 lg:mb-12">
        <Heading
          commonHeading="Hair Removal & Skin Rejuvenation"
          className="max-w-[484px] text-center lg:text-start"
        />

        <p className="text-sm md:text-base font-normal px-5 sm:px-0 text-center lg:text-start mt-4 lg:mt-0 font-Poppins text-black opacity-70 max-w-[462px]">
          Explore your options with a free consultation. Our experts will guide
          you through our equipment and address all your questions, ensuring
          you're informed and confident in your choices.
        </p>
      </div>
      <div className="flex flex-row justify-center flex-wrap">
        {hairRemovalData.map((hairRemoval, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 px-3 ">
            <div className="shadow-[0px_16px_25.3px_0px_#00000014] hover:shadow-none group flex flex-col items-center mt-6 lg:mt-0">
              <div className="relative">
                <img
                  className="!w-full !md:w-[364px] lg:h-[232px]"
                  src={hairRemoval.pic}
                  alt="hairRemovalImage"
                />
                <span className="absolute cursor-pointer left-[42%] top-[38%]">
                  <VideoIcon />
                </span>
              </div>
              <div
                className={`w-full bg-white group-hover:bg-lightPink  p-4 md:p-[20px]  duration-300  `}
              >
                <p className="font-normal text-2xl leading-xl font-Marcellus  group-hover:text-white text-black mb-2 ">
                  {hairRemoval.title}
                </p>
                <p className="font-normal text-base font-Poppins leading-lg  group-hover:text-white text-black mb-2 ">
                  {hairRemoval.time}{" "}
                  <span className=" text-lightPink group-hover:text-white">
                    {hairRemoval.timeMin}
                  </span>
                </p>
                <p className="font-normal text-base font-Poppins leading-lg  group-hover:text-white text-black mb-1 ">
                  {hairRemoval.cost}
                  <span className=" text-lightPink group-hover:text-white">
                    {hairRemoval.costInDollar}
                  </span>
                </p>
                <p className="text-base leading-lg font-Poppins font-normal group-hover:text-white text-black opacity-80  mb-5 ">
                  {hairRemoval.description}
                </p>
                <CommonBtn
                  className="border text-lightPink group-hover:text-white group-hover:border-white bg-transparent border-lightPink px-5 py-[14px]  "
                  btnName="Book Now"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <span className="flex justify-center items-center py-8 md:my-[50px]">
        <CommonBtn
          className="border text-lightPink hover:shadow-[0px_7px_14.3px_0px_lightPink] duration-500 border-lightPink px-[65px] py-[14px]  "
          btnName="See More"
        />
      </span>
    </div>
  );
};

export default HairRemoval;
