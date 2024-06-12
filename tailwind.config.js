/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundSize: {
        full: "100% 100%",
      },
      borderImage: {
        gradientBorder: {
          border: "2px solid",
          borderImageSource:
            "linear-gradient(0deg, #F498A2, #F498A2), linear-gradient(109.13deg, #F498A2 -49.43%, #3A4356 124.85%)",
          borderImageSlice: 1,
        },
      },
      backgroundImage: {
        aboutBackground: "url('./Assets/images/webp/techniqueBg.webp')",
        "btn-bg":
          "linear-gradient(109.13deg, #F498A2 -49.43%, #3A4356 124.85%)",
      },
      colors: {
        grayPrimary: "#4e4e4e",
        lightPink: "#f498a2",
        pinkPrimary: "#fdebed",
        purplePrime: "#936c7a",
      },
      screens: {
        xs: "510px",
        xsm: "450px",
        xsm2: "430px",
        xxs: "550px",
        xlg: "850px",
      },

      fontFamily: {
        Poppins: "Poppins",
        Playfair: "Playfair Display",
        Marcellus: "Marcellus",
      },

      fontSize: {
        xl2: "36px",
      },
      lineHeight: {
        md: "120%",
        lg: "150%",
        xl: "175%",
      },
    },
  },
  plugins: [],
};
