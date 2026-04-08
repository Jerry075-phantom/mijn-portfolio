// src/data/Data.js
import { 
  SiJavascript, 
  SiReact, 
  SiTailwindcss, 
  SiPhp,  
  SiWordpress,
  SiHtml5,
  SiCss,
  SiShopify,
  SiFigma
} from "react-icons/si";
import midoImg from "../assets/MidoSchilderwerken_Mockup.png"
import stucadoorImg from "../assets/DeModerneStukadoor_Mockup.png"
import { IoSearchOutline } from "react-icons/io5";

export const SKILLS = [
  { name: "HTML", level: 90, cat: { NL: "Frontend", EN: "Frontend" }, icon: SiHtml5 },
  { name: "CSS", level: 85, cat: { NL: "Frontend", EN: "Frontend" }, icon: SiCss },
  { name: "JavaScript", level: 75, cat: { NL: "Taal", EN: "Language" }, icon: SiJavascript },
  { name: "PHP", level: 70, cat: { NL: "Backend", EN: "Backend" }, icon: SiPhp },
  { name: "React", level: 68, cat: { NL: "Frontend", EN: "Frontend" }, icon: SiReact },
  { name: "Tailwind CSS", level: 67, cat: { NL: "Frontend", EN: "Frontend" }, icon: SiTailwindcss },
  { name: "Figma", level: 65, cat: { NL: "Webontwerp", EN: "Web Design" }, icon: SiFigma },
  { name: "Shopify", level: 80, cat: { NL: "CMS", EN: "CMS" }, icon: SiShopify },
  { name: "WordPress", level: 88, cat: { NL: "CMS", EN: "CMS" }, icon: SiWordpress },
];

export const PROJECTS = [
  {
    num: "01",
    title: "Mido Schilderwerken",
    description: {
      NL: "Een professionele WordPress website voor een schildersbedrijf. Voorzien van een uitgebreid projectenoverzicht, dienstenoverzicht en een gebruiksvriendelijk contactformulier voor offertes.",
      EN: "A professional WordPress website for a painting company. Featuring an extensive project overview, service overview, and a user-friendly contact form for quotes."
    },
    tags: ["WordPress", "Schilderwerken", "Bedrijfswebsite"],
    url: "https://www.midoschilderwerken.nl/",
    image: midoImg
  },
  {
    num: "02",
    title: "De Moderne Stukadoor",
    description: {
      NL: "Een moderne en strakke website voor een stukadoorsbedrijf. Focus op visuele presentatie van stucwerk en wandafwerking met een snelle laadtijd.",
      EN: "A modern and sleek website for a plastering company. Focused on visual presentation of plasterwork and wall finishes with fast loading times."
    },
    tags: ["WordPress", "Stukadoor", "Responsive"],
    url: "https://demodernestucadoor.nl/",
    image: stucadoorImg
  },
];