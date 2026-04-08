import { useInView } from "../hooks/usePortfolioHooks";
import { SKILLS } from "../data/Data";
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

export default function Skills({ dark, lang }) {
  const [ref, inView] = useInView();

  return (
    <section id="Skills" style={{ padding: "120px 40px", background: dark ? "transparent" : "#fbfbfd" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }} ref={ref}>
        <SectionTag dark={dark}>{lang === "NL" ? "Vaardigheden" : "Skills"}</SectionTag>
        
        <h2 style={{ 
          fontFamily: "'DM Serif Display', Georgia, serif", 
          fontSize: "clamp(28px, 4vw, 40px)", 
          fontWeight: 400, 
          color: dark ? "#e8eaf0" : "#0d0e14", 
          margin: "16px 0 60px",
          letterSpacing: "-0.01em"
        }}>
          {lang === "NL" ? "Technologieën & Expertise." : "Technologies & Expertise."}
        </h2>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", 
          gap: 24 
        }}>
          {SKILLS.map((skill, i) => {
            const Icon = skill.icon;
            
            return (
              <Tilt
                key={skill.name}
                tiltMaxAngleX={12}
                tiltMaxAngleY={12}
                perspective={1000}
                scale={1.04}
                transitionSpeed={2000}
                gyroscope={true}
                // SHINY / METALLIC EFFECT (GLARE)
                glareEnable={true}
                glareMaxOpacity={dark ? 0.12 : 0.25}
                glareColor="#ffffff"
                glarePosition="all"
                glareBorderRadius="20px"
              >
                <div 
                  style={{ 
                    padding: "32px", 
                    height: "100%",
                    // Metallic Gradient
                    background: dark 
                      ? "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)" 
                      : "linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)",
                    borderRadius: 20,
                    // De scherpe metallic rand
                    border: dark 
                      ? "1px solid rgba(255,255,255,0.12)" 
                      : "1px solid rgba(0,0,0,0.08)",
                    backdropFilter: "blur(10px)",
                    boxShadow: dark 
                      ? "0 10px 40px rgba(0,0,0,0.2)" 
                      : "0 10px 30px rgba(0,0,0,0.04)",
                    opacity: inView ? 1 : 0, 
                    transform: inView ? "none" : "translateY(20px)", 
                    transition: `opacity 0.6s ${i * 80}ms, transform 0.6s ${i * 80}ms, border 0.3s ease`,
                    cursor: "pointer",
                    overflow: "hidden",
                    position: "relative"
                  }}
                >
                  {/* Content Header */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <div style={{ 
                        color: dark ? "#7eb8f7" : "#2563eb",
                        background: dark ? "rgba(126,184,247,0.1)" : "rgba(37,99,235,0.05)",
                        padding: 10,
                        borderRadius: 12,
                        display: "flex"
                      }}>
                        {Icon && <Icon size={24} />}
                      </div>
                      
                      <div>
                        <div style={{ 
                          fontFamily: "'DM Sans', sans-serif", 
                          fontWeight: 600, 
                          fontSize: 16, 
                          color: dark ? "#e8eaf0" : "#0d0e14" 
                        }}>
                          {skill.name}
                        </div>
                        <div style={{ 
                          fontFamily: "'DM Sans', sans-serif", 
                          fontSize: 11, 
                          color: dark ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.4)", 
                          textTransform: "uppercase",
                          letterSpacing: "0.05em"
                        }}>
                          {skill.cat[lang]}
                        </div>
                      </div>
                    </div>

                    <span style={{ 
                      fontFamily: "'DM Serif Display', Georgia, serif", 
                      fontSize: 18, 
                      color: dark ? "#7eb8f7" : "#2563eb" 
                    }}>
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress Bar Label */}
                  <div style={{ 
                    display: "flex", 
                    justifyContent: "space-between", 
                    marginBottom: 8, 
                    fontFamily: "'DM Sans', sans-serif", 
                    fontSize: 12,
                    color: dark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.3)"
                  }}>
                    <span>Expertise</span>
                  </div>

                  {/* De Progress Bar */}
                  <div style={{ 
                    height: 6, 
                    background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)", 
                    borderRadius: 10, 
                    overflow: "hidden" 
                  }}>
                    <div 
                      style={{ 
                        height: "100%", 
                        width: inView ? `${skill.level}%` : "0%", 
                        background: dark 
                          ? "linear-gradient(90deg, #7eb8f7, #60a5fa)" 
                          : "linear-gradient(90deg, #2563eb, #3b82f6)", 
                        borderRadius: 10, 
                        transition: `width 1.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 100 + 400}ms` 
                      }} 
                    />
                  </div>
                </div>
              </Tilt>
            );
          })}
        </div>
      </div>
    </section>
  );
}