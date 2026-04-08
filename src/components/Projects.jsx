import { useState } from "react";
import { useInView } from "../hooks/usePortfolioHooks";
import { PROJECTS } from "../data/Data";

function SectionTag({ children, dark }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <span style={{ width: 28, height: 1, background: dark ? "rgba(126,184,247,0.5)" : "rgba(37,99,235,0.5)" }} />
      <span style={{ 
        fontFamily: "'DM Sans',sans-serif", 
        fontSize: 11, 
        fontWeight: 500, 
        letterSpacing: "0.16em", 
        textTransform: "uppercase", 
        color: dark ? "#7eb8f7" : "#2563eb" 
      }}>
        {children}
      </span>
    </div>
  );
}

function ProjectRow({ p, i, dark, inView, lang }) {
  const [hovered, setHovered] = useState(false);
  
  const handleClick = () => { 
    if (p.url) window.open(p.url, "_blank", "noopener,noreferrer"); 
  };

  return (
    <div 
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ 
        display: "grid", 
        // Drie kolommen: Afbeelding, Tekst, Pijltje
        gridTemplateColumns: "clamp(200px, 30%, 400px) 1fr auto", 
        gap: "clamp(20px, 5vw, 60px)", 
        alignItems: "center", 
        padding: "60px 0", 
        borderTop: dark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.08)", 
        cursor: "pointer", 
        opacity: inView ? 1 : 0, 
        transform: inView ? "none" : "translateY(30px)", 
        transition: `all 0.8s ${i * 150}ms ease-out, background 0.3s`,
        background: hovered ? (dark ? "rgba(255,255,255,0.01)" : "rgba(0,0,0,0.01)") : "transparent"
      }}
    >
      {/* AFBEELDING LINKS */}
      <div style={{ 
        width: "100%", 
        aspectRatio: "16 / 10", 
        borderRadius: 12, 
        overflow: "hidden", 
        background: dark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)",
        border: dark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.08)",
        boxShadow: hovered ? "0 20px 40px rgba(0,0,0,0.2)" : "0 10px 30px rgba(0,0,0,0.1)",
        transition: "all 0.4s ease"
      }}>
        {p.image ? (
          <img 
            src={p.image} 
            alt={p.title} 
            style={{ 
              width: "100%", 
              height: "100%", 
              objectFit: "cover",
              transition: "transform 0.6s cubic-bezier(0.33, 1, 0.68, 1)",
              transform: hovered ? "scale(1.06)" : "scale(1)"
            }} 
          />
        ) : (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", color: dark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)" }}>
            No Preview
          </div>
        )}
      </div>

      {/* TEKST MIDDEN */}
      <div style={{ transition: "transform 0.4s ease", transform: hovered ? "translateX(10px)" : "none" }}>
        <div style={{ 
          fontFamily: "'DM Serif Display', Georgia, serif", 
          fontSize: 13, 
          color: hovered ? (dark ? "#7eb8f7" : "#2563eb") : (dark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)"), 
          marginBottom: 12,
          transition: "color 0.3s ease"
        }}>
          {p.num}
        </div>
        
        <h3 style={{ 
          fontFamily: "'DM Serif Display', Georgia, serif", 
          fontSize: "clamp(24px, 3vw, 36px)", 
          fontWeight: 400, 
          color: hovered ? (dark ? "#7eb8f7" : "#2563eb") : (dark ? "#e8eaf0" : "#0d0e14"), 
          margin: "0 0 16px",
          letterSpacing: "-0.01em",
          transition: "color 0.3s ease"
        }}>
          {p.title}
        </h3>

        <p style={{ 
          fontFamily: "'DM Sans', sans-serif", 
          fontSize: 16, 
          lineHeight: 1.7, 
          color: dark ? "rgba(232,234,240,0.5)" : "rgba(13,14,20,0.6)", 
          marginBottom: 24,
          maxWidth: "600px"
        }}>
          {p.description[lang]}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {p.tags.map(tag => (
            <span key={tag} style={{ 
              fontFamily: "'DM Sans', sans-serif", 
              fontSize: 12, 
              padding: "5px 14px", 
              background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)", 
              borderRadius: 100, 
              color: dark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.5)", 
              letterSpacing: "0.02em" 
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* PIJLTJE RECHTS */}
      <div style={{ 
        fontSize: "clamp(24px, 4vw, 25px)", 
        color: hovered ? (dark ? "#7eb8f7" : "#2563eb") : (dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"),
        transition: "all 0.4s cubic-bezier(0.33, 1, 0.68, 1)",
        transform: hovered ? "translateX(0px)" : "translateX(-20px)",
        opacity: hovered ? 1 : 0,
        paddingRight: "20px"
      }}>
        →
      </div>
    </div>
  );
}

export default function Projects({ dark, lang }) {
  const [ref, inView] = useInView();
  
  return (
    <section id="Projects" style={{ padding: "120px 40px", background: dark ? "#0a0b11" : "#f8f9fc", transition: "background 0.4s" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }} ref={ref}>
        <SectionTag dark={dark}>{lang === "NL" ? "Wordpress Projecten" : "Wordpress Projects"}</SectionTag>
        <h2 style={{ 
          fontFamily: "'DM Serif Display', Georgia, serif", 
          fontSize: "clamp(32px, 4vw, 48px)", 
          fontWeight: 400, 
          color: dark ? "#e8eaf0" : "#0d0e14", 
          margin: "20px 0 80px",
          letterSpacing: "-0.02em"
        }}>
          {lang === "NL" ? "Geselecteerd Werk" : "Selected Work"}
        </h2>
        
        <div style={{ display: "flex", flexDirection: "column" }}>
          {PROJECTS.map((p, i) => (
            <ProjectRow key={p.num} p={p} i={i} dark={dark} inView={inView} lang={lang} />
          ))}
          <div style={{ borderBottom: dark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.08)" }} />
        </div>
      </div>
    </section>
  );
}