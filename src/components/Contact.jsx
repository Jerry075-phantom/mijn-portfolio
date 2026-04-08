import { useState, useRef } from "react";
import { useInView } from "../hooks/usePortfolioHooks";
import emailjs from "@emailjs/browser";

function SectionTag({ children, dark }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <span style={{ width: 28, height: 1, background: dark ? "rgba(126,184,247,0.5)" : "rgba(37,99,235,0.5)" }} />
      <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: dark ? "#7eb8f7" : "#2563eb" }}>{children}</span>
    </div>
  );
}

export default function Contact({ dark, lang }) {
  const [ref, inView] = useInView();
  const formRef = useRef(); // Voor EmailJS referentie
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const content = {
    NL: {
      tag: "Contact",
      title: "Laten we samen iets bouwen.",
      description: "Laat een bericht achter voor een offerte of samenwerking.",
      button: "Bericht versturen →",
      sending: "Verzenden...",
      success: "Bericht verzonden! Ik neem zo snel mogelijk contact op."
    },
    EN: {
      tag: "Contact",
      title: "Let's build something together.",
      description: "Leave a message for a quote or collaboration.",
      button: "Send message →",
      sending: "Sending...",
      success: "Message sent! I will get back to you as soon as possible."
    }
  };

  const text = content[lang];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // VUL HIER JE EIGEN ID'S IN VAN EMAILJS
    emailjs.sendForm(
      'service_p2a5wgw', 
      'template_p2tx52d', 
      formRef.current, 
      'c7M-P78TIJKYrS1sc'
    )
    .then((result) => {
        setSent(true);
        setLoading(false);
    }, (error) => {
        alert("Oeps, er ging iets mis. Probeer het later opnieuw.");
        setLoading(false);
    });
  };

  const inputStyle = { 
    width: "100%", 
    background: dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)", 
    border: dark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.1)", 
    borderRadius: 6, 
    padding: "12px 16px", 
    fontFamily: "'DM Sans',sans-serif", 
    fontSize: 14, 
    color: dark ? "#e8eaf0" : "#0d0e14", 
    outline: "none",
    marginBottom: 16
  };

  return (
    <section id="Contact" style={{ padding: "120px 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }} ref={ref}>
        <SectionTag dark={dark}>{text.tag}</SectionTag>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, marginTop: 20 }}>
          
          <div>
            <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: 40, color: dark ? "#e8eaf0" : "#0d0e14", marginBottom: 20 }}>{text.title}</h2>
            <p style={{ color: dark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)" }}>{text.description}</p>
          </div>

          <div>
            {sent ? (
              <p style={{ color: "#7eb8f7", fontWeight: 500 }}>{text.success}</p>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Naam" required style={inputStyle} />
                <input type="email" name="email" placeholder="Email" required style={inputStyle} />
                <textarea name="message" placeholder="Bericht" rows={5} required style={{...inputStyle, resize: "none"}} />
                <button 
                  type="submit" 
                  disabled={loading}
                  style={{ 
                    padding: "14px 32px", 
                    background: dark ? "#7eb8f7" : "#2563eb", 
                    color: "#fff", 
                    border: "none", 
                    borderRadius: 6, 
                    cursor: loading ? "not-allowed" : "pointer" 
                  }}
                >
                  {loading ? text.sending : text.button}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}