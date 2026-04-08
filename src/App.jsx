import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  // States voor Thema (Dark/Light) en Taal (NL/EN)
  const [dark, setDark] = useState(true);
  const [lang, setLang] = useState("NL");

  return (
    <div 
      style={{ 
        background: dark ? "#0a0b11" : "#f8f9fc", 
        minHeight: "100vh", 
        transition: "background 0.4s",
        width: "100%",
        margin: 0,
        padding: 0
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');
        
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          scroll-behavior: smooth;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }

        ::-webkit-scrollbar {
          width: 4px;
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(126, 184, 247, 0.2);
          border-radius: 4px;
        }

        /* Voor de placeholder kleur in de formulieren */
        input::placeholder, textarea::placeholder {
          color: ${dark ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)"};
        }
      `}</style>

      {/* Navbar krijgt de taal en de functie om deze te veranderen */}
      <Navbar 
        dark={dark} 
        setDark={setDark} 
        lang={lang} 
        setLang={setLang} 
      />

      {/* Alle secties krijgen de 'lang' prop mee */}
      <Hero dark={dark} lang={lang} />
      <About dark={dark} lang={lang} />
      <Skills dark={dark} lang={lang} />
      <Projects dark={dark} lang={lang} />
      <Contact dark={dark} lang={lang} />

      <footer 
        style={{ 
          padding: "32px 40px", 
          borderTop: dark ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.06)", 
          maxWidth: 1200, 
          margin: "0 auto", 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center" 
        }}
      >
        <span style={{ 
          fontFamily: "'DM Serif Display', Georgia, serif", 
          fontSize: 15, 
          color: dark ? "rgba(232,234,240,0.3)" : "rgba(13,14,20,0.3)" 
        }}>
          {"Jeric Garibay"}
        </span>
        
        <span style={{ 
          fontFamily: "'DM Sans', sans-serif", 
          fontSize: 12, 
          color: dark ? "#ffffff" : "#000000" 
        }}>
          © {new Date().getFullYear()} {lang === "NL" ? "| Alle Rechten Voorbehouden." : "| All rights Reserved."}
        </span>
      </footer>
    </div>
  );
}