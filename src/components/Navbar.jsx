import { useState, useEffect } from "react";
import { useActiveSection } from "../hooks/usePortfolioHooks";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

export default function Navbar({ dark, setDark, lang, setLang }) {
  const active = useActiveSection();
  const [scrolled, setScrolled] = useState(false);
  // State om bij te houden over welk item we hoveren
  const [hoveredItem, setHoveredItem] = useState(null);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "About", NL: "Over", EN: "About" },
    { id: "Skills", NL: "Skills", EN: "Skills" },
    { id: "Projects", NL: "Projecten", EN: "Projects" },
    { id: "Contact", NL: "Contact", EN: "Contact" }
  ];

  const bg = scrolled 
    ? (dark ? "rgba(10,11,17,0.92)" : "rgba(248,249,252,0.92)") 
    : "transparent";
    
  const border = scrolled 
    ? (dark ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.07)") 
    : "none";

  return (
    <nav style={{ 
      position: "fixed", 
      top: 0, 
      left: 0, 
      right: 0, 
      zIndex: 100, 
      transition: "all 0.4s", 
      padding: scrolled ? "12px 0" : "22px 0", 
      background: bg, 
      backdropFilter: scrolled ? "blur(16px)" : "none", 
      borderBottom: border 
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        
        {/* Logo */}
        <span style={{ 
          fontFamily: "'DM Serif Display', Georgia, serif", 
          fontSize: 18, 
          color: dark ? "#e8eaf0" : "#0d0e14" 
        }}>
          {lang === 'NL' ? 'Mijn Portfolio' : 'My Portfolio'}
        </span>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {/* Menu Links */}
          <ul style={{ display: "flex", gap: 4, listStyle: "none", margin: 0, padding: 0 }}>
            {menuItems.map(item => {
              const isActive = active === item.id;
              const isHovered = hoveredItem === item.id;

              return (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`} 
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    style={{ 
                      padding: "6px 14px", 
                      borderRadius: 6, 
                      fontSize: 14, 
                      fontFamily: "'DM Sans', sans-serif", 
                      fontWeight: isActive ? 500 : 400, 
                      // Kleur wordt blauw als het item actief is OF als je erover hoovert
                      color: (isActive || isHovered)
                        ? (dark ? "#7eb8f7" : "#2563eb") 
                        : (dark ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.45)"), 
                      textDecoration: "none", 
                      transition: "all 0.3s ease",
                      background: isHovered ? (dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)") : "transparent"
                    }}
                  >
                    {item[lang]}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Vertaal Knop */}
          <button 
            onClick={() => setLang(lang === 'NL' ? 'EN' : 'NL')}
            style={{ 
              padding: "0 10px",
              height: 34,
              borderRadius: 6,
              border: dark ? "1px solid rgba(255,255,255,0.12)" : "1px solid rgba(0,0,0,0.12)",
              background: "transparent",
              color: dark ? "#e8eaf0" : "#0d0e14",
              cursor: "pointer",
              fontSize: 11,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.background = dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
            }}
          >
            {lang === 'NL' ? 'EN' : 'NL'}
          </button>

          {/* Dark Mode Switch met Iconen */}
          <button 
            onClick={() => setDark(!dark)} 
            style={{ 
              width: 38, 
              height: 38, 
              borderRadius: "50%", 
              border: dark ? "1px solid rgba(255,255,255,0.12)" : "1px solid rgba(0,0,0,0.12)", 
              background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)", 
              cursor: "pointer", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              transition: "all 0.3s ease",
              color: dark ? "#7eb8f7" : "#2563eb"
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {dark ? <IoSunnyOutline size={20} /> : <IoMoonOutline size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}