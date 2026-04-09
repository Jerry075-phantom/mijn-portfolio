import { useState } from "react";
import { useInView } from "../hooks/usePortfolioHooks";
import Tilt from "react-parallax-tilt";

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

// Sub-component voor de kaartjes om individuele hover te regelen
function StatCard({ stat, lang, dark }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Tilt
      tiltMaxAngleX={12}
      tiltMaxAngleY={12}
      scale={1.06}
      glareEnable={true}
      glareMaxOpacity={dark ? 0.12 : 0.2}
      glareColor="#ffffff"
      glarePosition="all"
      glareBorderRadius="24px"
      style={{ height: "100%" }}
    >
      <div 
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          padding: "45px 30px",
          height: "100%",
          background: dark 
            ? "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)" 
            : "#fbfbfd",
          borderRadius: 24,
          border: hovered 
            ? (dark ? "1px solid #7eb8f7" : "1px solid #2563eb") 
            : (dark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.04)"),
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 10,
          boxShadow: hovered 
            ? (dark ? "0 20px 40px rgba(0,0,0,0.3)" : "0 15px 35px rgba(37,99,235,0.1)") 
            : "none",
          backdropFilter: "blur(10px)",
          cursor: "pointer",
          transition: "all 0.4s ease"
        }}
      >
        {/* Het getal (bijv. 100%) */}
        <span style={{ 
          fontFamily: "'DM Serif Display', serif", 
          fontSize: "clamp(28px, 3.5vw, 42px)", 
          lineHeight: 1,
          // KLEURWISSEL HIER:
          color: hovered ? (dark ? "#7eb8f7" : "#2563eb") : (dark ? "#e8eaf0" : "#0d0e14"),
          letterSpacing: "-0.01em",
          transition: "color 0.3s ease"
        }}>
          {stat.value}
        </span>

        {/* Het label (bijv. Op maat gebouwd) */}
        <span style={{ 
          fontFamily: "'DM Sans', sans-serif", 
          fontSize: 13, 
          fontWeight: 500,
          // KLEURWISSEL HIER:
          color: hovered 
            ? (dark ? "rgba(126,184,247,0.8)" : "rgba(37,99,235,0.8)") 
            : (dark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.4)"),
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          transition: "color 0.3s ease"
        }}>
          {stat.label[lang]}
        </span>
      </div>
    </Tilt>
  );
}

export default function About({ dark, lang }) {
  const [ref, inView] = useInView();

  const stats = [
    { value: "100%", label: { NL: "Maatwerk", EN: "Custom" } },
    { value: "5+", label: { NL: "Projecten gerealiseerd", EN: "Projects Finished" } },
    { value: "2+", label: { NL: "Maanden tot voltooing", EN: "Months until completion" } },
    { value: "24h", label: { NL: "Snel reactietijd", EN: "Fast Response Time" } },
  ];

  const content = {
    NL: {
      tag: "OVER MIJ",
      title: <>Web <span style={{ color: dark ? "#7eb8f7" : "#2563eb" }}>Developer</span></>,
      desc: "Ik ben een 18-jarige developer uit Zaandam met een missie: websites bouwen waar jij écht trots op bent. Met meer dan 2 jaar ervaring in het vak ben ik gespecialiseerd in WordPress en Shopify, maar ik laat me nooit beperken door wat ik al ken. Ik ben een snelle leerling die altijd op zoek is naar de nieuwste technieken.",
      link: "Neem contact op →"
    },
    EN: {
      tag: "ABOUT ME",
      title: <>Web <span style={{ color: dark ? "#7eb8f7" : "#2563eb" }}>Developer</span></>,
      desc: "I am an 18-year-old developer from Zaandam with a mission: to build websites you are truly proud of. With over 2 years of experience in the field, I specialize in WordPress and Shopify, but I never let myself be limited by what I already know. I am a quick learner who is always looking for the latest techniques.",
      link: "Get in touch →"
    }
  };

  const text = content[lang];

  return (
    <section id="About" style={{ padding: "120px 40px", background: dark ? "transparent" : "#ffffff" }}>
      <div 
        style={{ 
          maxWidth: 1200, 
          margin: "0 auto", 
          display: "grid", 
          gridTemplateColumns: window.innerWidth < 900 ? "1fr" : "1.2fr 1fr", 
          gap: "clamp(40px, 8vw, 100px)", 
          alignItems: "center" 
        }} 
        ref={ref}
      >
        
        {/* LINKER KANT: Tekst (Zonder hover kleur) */}
        <div style={{ 
          opacity: inView ? 1 : 0, 
          transform: inView ? "none" : "translateY(30px)", 
          transition: "all 0.8s cubic-bezier(0.22, 1, 0.36, 1)"
        }}>
          <SectionTag dark={dark}>{text.tag}</SectionTag>
          
          <h2 style={{ 
            fontFamily: "'DM Serif Display', Georgia, serif", 
            fontSize: "clamp(36px, 5.5vw, 64px)", 
            lineHeight: 1.05, 
            color: dark ? "#e8eaf0" : "#0d0e14", 
            margin: "24px 0",
            letterSpacing: "-0.03em"
          }}>
            {text.title}
          </h2>

          <p style={{ 
            fontFamily: "'DM Sans', sans-serif", 
            fontSize: 18, 
            lineHeight: 1.8, 
            color: dark ? "rgba(232,234,240,0.5)" : "rgba(13,14,20,0.55)", 
            marginBottom: 44,
            maxWidth: 540
          }}>
            {text.desc}
          </p>

          <a href="#Contact" style={{ 
            display: "inline-flex",
            alignItems: "center",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
            fontSize: 16,
            textDecoration: "none",
            color: dark ? "#e8eaf0" : "#0d0e14",
            borderBottom: `2px solid ${dark ? "#7eb8f7" : "#2563eb"}`,
            paddingBottom: 4,
            transition: "all 0.3s ease"
          }}>
            {text.link}
          </a>
        </div>

        {/* RECHTER KANT: De Stat Cards met Tilt & Hover effect */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: window.innerWidth < 900 ? "1fr" : "1.2fr 1fr", 
          gap: 20,
          opacity: inView ? 1 : 0,
          transform: inView ? "none" : "translateX(40px)",
          transition: "all 0.8s 0.2s cubic-bezier(0.22, 1, 0.36, 1)"
        }}>
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} lang={lang} dark={dark} />
          ))}
        </div>

      </div>
    </section>
  );
}