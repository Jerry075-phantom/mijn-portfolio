export default function Hero({ dark, lang }) {
  // Vertalingen object voor de Hero sectie
  const content = {
    NL: {
      subtitle: "Software Developer",
      title1: "Digitale ecosystemen",
      title2: "bouwen met precisie",
      title3: "en architectonische diepte.",
      description: "Gefocust op hoogwaardige gebruikerservaringen die de brug slaan tussen technische complexiteit en elegant design. Gevestigd op het snijvlak van code en vakmanschap.",
      button: "Bekijk Projecten"
    },
    EN: {
      subtitle: "Software Developer",
      title1: "Crafting digital",
      title2: "ecosystems with precision",
      title3: "and architectural depth.",
      description: "Focused on high-end user experiences that bridge the gap between technical complexity and editorial elegance. Based in the intersection of code and craft.",
      button: "View Projects"
    }
  };

  const text = content[lang]; // Selecteert de juiste taal op basis van de prop

  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "flex-end", padding: "0 40px 120px", maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ maxWidth: 780 }}>
        {/* Subtitle met animatie */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 32, opacity: 0, animation: "fadeUp 0.7s 0.2s forwards" }}>
          <span style={{ width: 32, height: 1, background: dark ? "rgba(126,184,247,0.6)" : "rgba(37,99,235,0.6)" }} />
          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: dark ? "#7eb8f7" : "#2563eb" }}>
            {text.subtitle}
          </span>
        </div>

        {/* Hoofdtitel */}
        <h1 style={{ fontFamily: "'DM Serif Display',Georgia,serif", fontSize: "clamp(42px,6vw,80px)", fontWeight: 400, lineHeight: 1.08, letterSpacing: "-0.025em", color: dark ? "#e8eaf0" : "#0d0e14", margin: "0 0 28px", opacity: 0, animation: "fadeUp 0.7s 0.35s forwards" }}>
          {text.title1}<br />
          <span style={{ color: dark ? "#7eb8f7" : "#2563eb" }}>{text.title2}</span><br />
          {text.title3}
        </h1>

        {/* Beschrijving */}
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 16, lineHeight: 1.75, color: dark ? "rgba(232,234,240,0.5)" : "rgba(13,14,20,0.5)", maxWidth: 520, margin: "0 0 48px", opacity: 0, animation: "fadeUp 0.7s 0.5s forwards" }}>
          {text.description}
        </p>

        {/* Call to action button */}
        <a href="#Projects" style={{ display: "inline-block", padding: "14px 28px", background: dark ? "rgba(126,184,247,0.1)" : "rgba(37,99,235,0.08)", border: dark ? "1px solid rgba(126,184,247,0.2)" : "1px solid rgba(37,99,235,0.18)", borderRadius: 8, fontFamily: "'DM Sans',sans-serif", fontSize: 14, fontWeight: 500, color: dark ? "#7eb8f7" : "#2563eb", textDecoration: "none", opacity: 0, animation: "fadeUp 0.7s 0.65s forwards", transition: "background 0.25s" }}>
          {text.button}
        </a>
      </div>
    </section>
  );
}