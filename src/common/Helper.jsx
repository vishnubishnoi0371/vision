import electrolysis from "../Assets/images/webp/electrolysis.webp";
import hayafebber from "../Assets/images/webp/hayaFebber.webp";
import ettyFabber from "../Assets/images/webp/ettyFabber.webp";
import consultation from "../Assets/images/webp/consultation.webp";
import wrinkle from "../Assets/images/webp/wrinkles.webp";
import { Facebook, Insta, Twiter } from "./icon";
//===================HainRemoval==================//
export const hairRemovalData = [
  {
    pic: electrolysis,
    title: "Electrolysis",
    time: "Time",
    timeMin: " ~ 15 Min",
    cost: "Starting From",
    costInDollar: " $22-$90",
    description:
      "Experience permanent hair removal with our Apilus XCell Pro electrolysis treatment. Achieve smooth, confident skin with lasting results.",
  },

  {
    pic: consultation,
    title: "Free Consultation",
    time: "Time",
    timeMin: " ~ 15 Min",
    cost: "Starting From",
    costInDollar: " $0",
    description:
      "Discover smooth, hair-free skin with our Candela GentleMax Pro laser hair removal. Enjoy the confidence of silky-smooth skin.",
  },

  {
    pic: wrinkle,
    title: "Fine Lines and Wrinkles",
    time: "Time",
    timeMin: " ~ 30 Min",
    cost: "Starting From",
    costInDollar: " $99",
    description:
      "Revitalize skin: Laser treatment reduces lines, boosts collagen for firmness, smoothness, and a youthful glow.",
  },
];
//===================Technique==================//
export const TechniqueData = [
  {
    title: "Haya Fabber",
    paragraph:
      "Specializes in laser, electrolysis, and the application of Candela technology.",
    pic: hayafebber,
    socialLinks: [
      { url: "https://www.facebook.com/", icon: <Facebook /> },
      { url: "https://x.com/i/flow/login", icon: <Twiter /> },
      { url: "https://www.instagram.com/", icon: <Insta /> },
    ],
  },
  {
    title: "Etty Fabber",
    paragraph:
      "Specializes in laser, electrolysis, and the application of Candela technology.",
    pic: ettyFabber,
    socialLinks: [
      { url: "https://www.facebook.com/", icon: <Facebook /> },
      { url: "https://x.com/i/flow/login", icon: <Twiter /> },
      { url: "https://www.instagram.com/", icon: <Insta /> },
    ],
  },
];
