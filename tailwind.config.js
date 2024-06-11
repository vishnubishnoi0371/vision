/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundSize: {
        full: "100% 100%",
      },
      backgroundImage: {
        aboutBackground: "url('./Assets/images/webp/techniqueBg.webp')",
      },
      colors: {
        grayPrimary: "#4e4e4e",
        lightPink: "#f498a2",
        pinkPrimary: "#fdebed",
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
      },
    },
  },
  plugins: [],
};
