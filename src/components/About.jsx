import CommonBtn from "../common/CommonBtn";
import Heading from "../common/Heading";
import fabElectrolysis from "../Assets/images/webp/fabElectrolysis.webp";
import electrolysisSetup from "../Assets/images/webp/electrolysisSetUp.webp";
import leafEllp from "../Assets/images/webp/leafEllipse.webp";

const About = () => {
  return (
    <div className="bg-aboutBackground relative bg-cover bg-center  bg-no-repeat">
      <img
        className="pointer-events-none absolute right-0 hidden md:block sm:-bottom-24 z-40 max-w-[372px] max-h-[306px]"
        src={leafEllp}
        alt="ellipse"
      />
      <div className="container max-w-[1164px] pt-10 md:pt-14 lg:pt-20 md:pb-10 xl:pb-32 mx-auto">
        <div className="flex flex-col-reverse md:flex-row  lg:pt-5 justify-center items-center flex-wrap">
          <div className="w-full md:w-5/12 px-3 pt-6 md:pt-0 ">
            <img
              className="w-full"
              src={fabElectrolysis}
              alt="electrolysis_image"
            />
            <p className="text-sm md:text-base px-3 md:px-0 font-Poppins text-center md:text-start text-black leading-lg opacity-80 md:max-w-[461px] font-normal pt-4 md:pt-11 mb-6">
              We understand that each client is unique, which is why we tailor
              our treatments to your specific needs and concerns. Whether you're
              seeking laser hair removal, electrolysis for permanent hair
              removal, spider vein removal or treatment for acne scars.
            </p>
            <CommonBtn
              className="border hover:shadow-[0px_7px_14.3px_0px_lightPink] duration-500 flex justify-center md:justify-start mx-auto md:mx-0 bg-btn-bg
 text-white px-7 py-[14px]"
              btnName="Read More"
            />
          </div>
          <div className="w-full md:w-7/12 px-3  ">
            <Heading
              commonHeading="About Fabelectrolysis"
              className="mb-9 md:mb-4 text-center !leading-md md:text-start"
            />
            <div className="flex-col-reverse flex md:flex-col  ">
              <p className=" text-base font-Poppins px-4 md:px-0 text-center mx-auto md:text-start text-black leading-lg opacity-80 max-w-[665px] font-normal mb-2 md:mb-10">
                At FabElectrolysis, we're more than just a skincare clinic –
                we're a welcoming environment where every individual can feel
                comfortable and valued. With a commitment to inclusivity and
                personalized care, we strive to create a supportive atmosphere
                where you can truly be yourself.
              </p>
              <img
                className="w-full max-sm:min-h-[240px]  px-1 pb-5 md:pb-0 md:px-0"
                src={electrolysisSetup}
                alt="electrolysis_image"
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
