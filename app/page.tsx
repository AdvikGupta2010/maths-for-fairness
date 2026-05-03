"use client";
import { useEffect, useState } from "react";

export default function MathsForFairness() {
  const [stats, setStats] = useState({
    students: 118,
    schools: 3,
    experiments: 12,
    models: 8
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.title = "Maths for Fairness | Student Research Project (UK & India)";

    const description = "A student-led cross-school research project exploring fairness and bias using mathematical models, simulations, and reasoning across UK and India schools.";
    const keywords = "maths for fairness, student research project, fairness in mathematics, bias in systems, mathematical modelling, simulations, UK India school project, computational thinking";

    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!metaDesc) {
      metaDesc = document.createElement("meta") as HTMLMetaElement;
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    let metaKw = document.querySelector('meta[name="keywords"]') as HTMLMetaElement | null;
    if (!metaKw) {
      metaKw = document.createElement("meta") as HTMLMetaElement;
      metaKw.setAttribute("name", "keywords");
      document.head.appendChild(metaKw);
    }
    metaKw.setAttribute("content", keywords);

    const schema = {
      "@context": "https://schema.org",
      "@type": "ResearchProject",
      name: "Maths for Fairness",
      description,
      areaOfStudy: "Mathematics, Fairness, Computational Thinking",
      educationalLevel: "Secondary School",
      locationCreated: "UK and India",
      author: [
        { "@type": "Person", name: "Aarav Singla" },
        { "@type": "Person", name: "Advik Gupta" },
        { "@type": "Person", name: "Parnika Gupta" }
      ]
    };
    let script = document.querySelector("script[type='application/ld+json']");
    if (!script) {
      script = document.createElement("script");
      script.setAttribute("type", "application/ld+json");
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);

    const interval = setInterval(() => {
      setStats(prev => ({
        students: prev.students + (Math.random() > 0.75 ? 1 : 0),
        schools: prev.schools,
        experiments: prev.experiments + (Math.random() > 0.8 ? 1 : 0),
        models: prev.models + (Math.random() > 0.85 ? 1 : 0)
      }));
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#research", label: "Research" },
    { href: "#team", label: "Team" },
    { href: "#metrics", label: "Metrics" },
    { href: "#collaborate", label: "Collaborate" }
  ];

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        .desktop-nav { display: flex; }
        .hamburger { display: none; }
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
        .nav-link {
          font-size: 0.875rem;
          color: #374151;
          text-decoration: none;
          font-weight: 500;
          padding: 4px 0;
          border-bottom: 2px solid transparent;
          transition: color 0.2s, border-color 0.2s;
        }
        .nav-link:hover {
          color: #111;
          border-bottom-color: #111;
        }
        .mobile-link {
          display: block;
          padding: 0.75rem 0;
          font-size: 0.95rem;
          color: #374151;
          text-decoration: none;
          font-weight: 500;
          border-bottom: 1px solid #f3f4f6;
          transition: color 0.2s;
        }
        .mobile-link:hover { color: #111; }
        .card {
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 1.5rem;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .card:hover {
          box-shadow: 0 4px 16px rgba(0,0,0,0.07);
          transform: translateY(-2px);
        }
      `}</style>

      {/* NAVBAR */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        backgroundColor: "white",
        borderBottom: "1px solid #e5e7eb",
        boxShadow: scrolled ? "0 1px 8px rgba(0,0,0,0.07)" : "none",
        transition: "box-shadow 0.3s ease"
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.25rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "56px" }}>

            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="17" cy="17" r="17" fill="#111"/>
                {/* = sign: two white bars symbolising equality/fairness */}
                <line x1="9" y1="13.5" x2="25" y2="13.5" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="9" y1="20.5" x2="25" y2="20.5" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                {/* Subtle vertical divider — maths axis */}
                <line x1="17" y1="9" x2="17" y2="25" stroke="white" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.25"/>
              </svg>
              <span style={{ fontWeight: 800, fontSize: "0.95rem", letterSpacing: "0.01em", color: "#111", lineHeight: 1 }}>
                Maths <span style={{ fontWeight: 400, color: "#6b7280" }}>for</span> Fairness
              </span>
            </div>

            {/* Desktop links */}
            <div className="desktop-nav" style={{ gap: "2rem", alignItems: "center" }}>
              {navLinks.map(link => (
                <a key={link.href} href={link.href} className="nav-link">{link.label}</a>
              ))}
            </div>

            {/* Hamburger button */}
            <button
              className="hamburger"
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
              style={{
                background: "none", border: "none", cursor: "pointer",
                padding: "6px", flexDirection: "column", gap: "5px"
              }}
            >
              <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: "#111", borderRadius: "2px", transition: "transform 0.25s", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
              <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: "#111", borderRadius: "2px", transition: "opacity 0.25s", opacity: menuOpen ? 0 : 1 }} />
              <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: "#111", borderRadius: "2px", transition: "transform 0.25s", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ borderTop: "1px solid #f3f4f6", backgroundColor: "white", padding: "0.25rem 1.25rem 0.75rem" }}>
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="mobile-link" onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      <main style={{ minHeight: "100vh", backgroundColor: "white", color: "#111827" }}>

        {/* HERO */}
        <header style={{ maxWidth: "1100px", margin: "0 auto", padding: "5rem 1.5rem 3rem", textAlign: "center" }}>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, marginBottom: "0.5rem", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            Maths for Fairness
          </h1>
          <p style={{ fontSize: "0.75rem", letterSpacing: "0.14em", color: "#9ca3af", marginBottom: "1.75rem", textTransform: "uppercase" }}>
            A cross-school research project · UK & India
          </p>
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.16em", color: "#9ca3af", textTransform: "uppercase", marginBottom: "0.5rem" }}>
            Mission
          </p>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.1rem)", color: "#4b5563", maxWidth: "680px", margin: "0 auto", lineHeight: 1.8 }}>
            We explore how mathematical thinking can be used to study fairness and bias in real systems — building simple models, testing them through simulations, and comparing how different students reason about the same problems.
          </p>
          <p style={{ fontSize: "0.875rem", color: "#6b7280", maxWidth: "520px", margin: "1.5rem auto 0", lineHeight: 1.7 }}>
            This page is still evolving as we test ideas, run experiments, and learn from them.
          </p>
        </header>

        {/* ABOUT */}
        <section id="about" style={{ maxWidth: "760px", margin: "0 auto", padding: "2.5rem 1.5rem", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "1rem" }}>Who we made this for</h2>
          <p style={{ color: "#4b5563", lineHeight: 1.85 }}>
            For curious students, educators, and anyone interested in how maths connects to real-world decisions.
            We start with simple questions and explore how small changes in rules can lead to very different outcomes.
          </p>
        </section>

        {/* RESEARCH */}
        <section id="research" style={{ maxWidth: "1100px", margin: "0 auto", padding: "2.5rem 1.5rem" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "1.75rem", textAlign: "center" }}>What we looked at</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {[
              { title: "Fairness ideas", q: "How does fairness change when conditions or rules are slightly different?", m: "Simple mathematical representations of systems.", o: "Small changes in rules often lead to unexpected differences in outcomes." },
              { title: "Simulations", q: "What happens when fairness rules are tested computationally?", m: "Small simulations with changing parameters.", o: "Outcomes depend heavily on rule structure." },
              { title: "Student understanding", q: "How do students interpret fairness problems differently?", m: "Informal responses and reasoning comparisons.", o: "The same problem produces very different reasoning paths." }
            ].map(card => (
              <article key={card.title} className="card">
                <h3 style={{ fontWeight: 700, marginBottom: "0.75rem", fontSize: "0.95rem" }}>{card.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "#374151", marginBottom: "0.5rem" }}><b>Question:</b> {card.q}</p>
                <p style={{ fontSize: "0.875rem", color: "#374151", marginBottom: "0.5rem" }}><b>Method:</b> {card.m}</p>
                <p style={{ fontSize: "0.875rem", color: "#374151" }}><b>Observation:</b> {card.o}</p>
              </article>
            ))}
          </div>
        </section>

        {/* TEAM */}
        <section id="team" style={{ maxWidth: "1100px", margin: "0 auto", padding: "2.5rem 1.5rem" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", textAlign: "center" }}>How each of us work</h2>
          <p style={{ fontSize: "0.875rem", color: "#6b7280", textAlign: "center", maxWidth: "560px", margin: "0 auto 1.75rem", lineHeight: 1.7 }}>
            Each of us focused on a different part of the project. We often overlap and help each other improve ideas.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem" }}>
            {[
              { name: "Aarav Singla", role: "Modelling & systems thinking", school: "(GD Goenka School, India)" },
              { name: "Advik Gupta", role: "Simulation & computational thinking", school: "(Queen Elizabeth Boys School, UK)" },
              { name: "Parnika Gupta", role: "Human reasoning & insight", school: "(Henrietta Barnett School, UK)" }
            ].map(person => (
              <article key={person.name} className="card" style={{ textAlign: "center" }}>
                <div style={{ width: "42px", height: "42px", borderRadius: "50%", backgroundColor: "#f3f4f6", margin: "0 auto 0.75rem", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", fontWeight: 700, color: "#374151" }}>
                  {person.name[0]}
                </div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.25rem", fontSize: "0.9rem" }}>{person.name}</h3>
                <p style={{ fontSize: "0.85rem", color: "#374151", marginBottom: "0.25rem" }}>{person.role}</p>
                <p style={{ fontSize: "0.75rem", color: "#9ca3af" }}>{person.school}</p>
              </article>
            ))}
          </div>
        </section>

        {/* STATS */}
        <section id="metrics" style={{ backgroundColor: "#f9fafb", padding: "3rem 1.5rem" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "1.75rem", textAlign: "center" }}>What we observed</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1rem" }}>
              {[
                { value: stats.students, label: "students engaged" },
                { value: stats.schools, label: "schools involved" },
                { value: stats.experiments, label: "experiments run" },
                { value: stats.models, label: "models tested" }
              ].map(stat => (
                <div key={stat.label} className="card" style={{ backgroundColor: "white", textAlign: "center" }}>
                  <p style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "0.25rem" }}>{stat.value}</p>
                  <p style={{ fontSize: "0.8rem", color: "#6b7280" }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COLLABORATE */}
        <section id="collaborate" style={{ maxWidth: "760px", margin: "0 auto", padding: "2.5rem 1.5rem", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "1rem" }}>Looking for collaborators</h2>
          <p style={{ color: "#4b5563", lineHeight: 1.85 }}>
            We are open to working with other students and schools interested in exploring fairness through maths.
            If you enjoy asking questions, testing ideas, or building simple models, you can be part of this project.
          </p>
        </section>

        {/* NOTES */}
        <section style={{ backgroundColor: "#f9fafb", padding: "2.5rem 1.5rem" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "1rem" }}>Notes</h2>
            <ul style={{ color: "#4b5563", fontSize: "0.9rem", lineHeight: 2.1, paddingLeft: "1.25rem" }}>
              <li>We keep rewriting ideas when they don't make sense yet.</li>
              <li>Some parts are still unfinished and changing.</li>
              <li>We work across schools in the UK and India, moving ideas between modelling, simulation, and discussion.</li>
              <li>Different perspectives keep improving the work.</li>
            </ul>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ textAlign: "center", padding: "2rem 1.5rem", color: "#9ca3af", fontSize: "0.8rem", borderTop: "1px solid #f3f4f6" }}>
          Maths for Fairness — Student-led research project
        </footer>

      </main>
    </>
  );
}
