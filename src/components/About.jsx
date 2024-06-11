import CommonBtn from "../common/CommonBtn";
import Heading from "../common/Heading";
import fabElectrolysis from "../Assets/images/webp/fabElectrolysis.webp";
import electrolysisSetup from "../Assets/images/webp/electrolysisSetUp.webp";

const About = () => {
  return (
    <div className="bg-aboutBackground bg-cover bg-center  bg-no-repeat">
      <div className="container max-w-[1164px] pt-10 md:pt-14 lg:pt-20 pb-32 mx-auto">
        <div className="flex flex-row lg:pt-5 justify-center flex-wrap">
          <div className="w-full md:w-5/12 px-3 ">
            <img
              className="w-full"
              src={fabElectrolysis}
              alt="electrolysis_image"
            />
            <p className="text-sm md:text-base font-Poppins text-center md:text-start text-black leading-xl opacity-80 md:max-w-[461px] font-normal pt-4 md:pt-11 mb-6">
              We understand that each client is unique, which is why we tailor
              our treatments to your specific needs and concerns. Whether you're
              seeking laser hair removal, electrolysis for permanent hair
              removal, spider vein removal or treatment for acne scars.
            </p>
            <CommonBtn
              className="border flex justify-center md:justify-start mx-auto md:mx-0 bg-[linear-gradient(0deg,#F498A2,#F498A2)]
 text-white border-lightPink px-7 py-[14px]  "
              btnName="Read More"
            />
          </div>
          <div className="w-full md:w-7/12 px-3 pt-6 sm:pt-10 md:pt-0 ">
            <Heading
              commonHeading="About Fabelectrolysis"
              className="mb-4 text-center md:text-start"
            />

            <p className=" text-base font-Poppins text-center md:text-start text-black leading-xl opacity-80 max-w-[665px] font-normal  mb-10">
              At FabElectrolysis, we're more than just a skincare clinic – we're
              a welcoming environment where every individual can feel
              comfortable and valued. With a commitment to inclusivity and
              personalized care, we strive to create a supportive atmosphere
              where you can truly be yourself.
            </p>

            <img
              className="w-full"
              src={electrolysisSetup}
              alt="electrolysis_image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
