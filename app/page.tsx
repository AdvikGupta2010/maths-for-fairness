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
  const [displayStats, setDisplayStats] = useState({ students: 0, schools: 0, experiments: 0, models: 0 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    const targets = { students: 118, schools: 3, experiments: 12, models: 8 };
    const duration = 1600;
    const steps = 50;

    const runCountUp = () => {
      let step = 0;
      setDisplayStats({ students: 0, schools: 0, experiments: 0, models: 0 });
      const countTimer = setInterval(() => {
        step++;
        const ease = 1 - Math.pow(1 - step / steps, 3);
        setDisplayStats({
          students: Math.round(targets.students * ease),
          schools: Math.round(targets.schools * ease),
          experiments: Math.round(targets.experiments * ease),
          models: Math.round(targets.models * ease)
        });
        if (step >= steps) clearInterval(countTimer);
      }, duration / steps);
    };

    runCountUp();
    const repeatTimer = setInterval(runCountUp, 5000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(repeatTimer);
    };
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
    { href: "#mission", label: "Mission" },
    { href: "#metrics", label: "Metrics" },
    { href: "#about", label: "Audience" },
    { href: "#research", label: "Research" },
    { href: "#team", label: "Team" },
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
          <p id="mission" style={{ fontSize: "clamp(1rem, 2vw, 1.1rem)", color: "#4b5563", maxWidth: "680px", margin: "0 auto", lineHeight: 1.8 }}>
            We started with a simple question: can a system be mathematically fair and still produce outcomes that feel deeply wrong? Turns out the answer is yes — and once you see it, you can't unsee it. That's what this project is about.
          </p>
          <p style={{ fontSize: "0.875rem", color: "#6b7280", maxWidth: "520px", margin: "1.5rem auto 0", lineHeight: 1.7 }}>
            This is an ongoing project. Last updated May 2026.
          </p>
        </header>

        {/* STATS — with repeating count-up animation */}
        <section id="metrics" style={{ padding: "0 1.5rem 3rem" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "1.75rem", textAlign: "center" }}>What we are observing</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1rem" }}>
              {[
                { value: displayStats.students, label: "students engaged" },
                { value: displayStats.schools, label: "schools involved" },
                { value: displayStats.experiments, label: "experiments run" },
                { value: displayStats.models, label: "models tested" }
              ].map(stat => (
                <div key={stat.label} className="card" style={{ backgroundColor: "#f9fafb", textAlign: "center" }}>
                  <p style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "0.25rem" }}>
                    {stat.value}<span style={{ fontSize: "1.25rem", fontWeight: 700, color: "#6b7280" }}>+</span>
                  </p>
                  <p style={{ fontSize: "0.8rem", color: "#6b7280" }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" style={{ maxWidth: "760px", margin: "0 auto", padding: "2.5rem 1.5rem", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "1rem" }}>Who we made this for</h2>
          <p style={{ color: "#4b5563", lineHeight: 1.85 }}>
            Honestly, we made it for ourselves first. We kept arguing about whether certain voting rules were actually fair or just felt fair — and we couldn't find a clean answer anywhere.
            <br /><br />
            So we built one. This is for anyone who's ever wondered whether the way we make group decisions is as neutral as we assume it is.
          </p>
        </section>

        {/* RESEARCH */}
        <section id="research" style={{ maxWidth: "1100px", margin: "0 auto", padding: "2.5rem 1.5rem" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "1.75rem", textAlign: "center" }}>What we looked at</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {[
              {
                title: "When neutral rules aren't neutral",
                q: "Can a decision-making system be provably fair by its own rules and still produce outcomes that feel wrong?",
                m: "We modelled several group decision systems and ran each one hundreds of times with the same starting preferences, changing only the rule used to reach a conclusion.",
                o: "The same group of people, with identical preferences, produced a different outcome just by changing the decision rule. Nobody cheated. The rules were the problem."
              },
              {
                title: "Fairness paradoxes",
                q: "At what point does a system designed to represent everyone start misrepresenting most people?",
                m: "Small simulations varying group size, preference spread, and decision thresholds to find where systems start breaking down.",
                o: "An option rejected by the majority could still win under certain neutral-sounding rules. That surprised us. It probably should surprise most people."
              },
              {
                title: "UK vs India — two definitions of fair",
                q: "When students from different countries look at the same outcome, are they even asking the same question?",
                m: "We gave identical scenarios to students across three schools and asked them to explain, in their own words, whether the outcome was fair.",
                o: "We weren't just getting different answers — we were getting answers to different questions. That gap turned out to be more interesting than anything the maths showed us."
              }
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
            We're across two countries and three schools. We disagree a lot. That's probably why it works.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem" }}>
            {[
              {
                name: "Aarav Singla",
                role: "Modelling & systems thinking",
                school: "GD Goenka School, India",
                quote: "Honestly it started because I lost an argument and couldn't figure out why. I was sure the other person was wrong but I couldn't prove it. So I tried writing it out as a model and that kind of spiralled into this whole thing."
              },
              {
                name: "Advik Gupta",
                role: "Simulation & computational thinking",
                school: "Queen Elizabeth Boys School, UK",
                quote: "I just wanted to see it actually break. Like not read about why it breaks — actually watch it happen. So I coded it up and ran it loads of times and yeah, it broke. In ways I didn't expect which was kind of the best part."
              },
              {
                name: "Parnika Gupta",
                role: "Human reasoning & insight",
                school: "Henrietta Barnett School, UK",
                quote: "I was more interested in why people thought they were right than whether they actually were. When I started asking students to explain themselves I realised everyone had a completely different definition of fair in their head and nobody had really noticed that before."
              }
            ].map(person => (
              <article key={person.name} className="card" style={{ textAlign: "center" }}>
                <div style={{ width: "42px", height: "42px", borderRadius: "50%", backgroundColor: "#f3f4f6", margin: "0 auto 0.75rem", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", fontWeight: 700, color: "#374151" }}>
                  {person.name[0]}
                </div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.25rem", fontSize: "0.9rem" }}>{person.name}</h3>
                <p style={{ fontSize: "0.85rem", color: "#374151", marginBottom: "0.25rem" }}>{person.role}</p>
                <p style={{ fontSize: "0.75rem", color: "#9ca3af", marginBottom: "0.75rem" }}>{person.school}</p>
                <p style={{ fontSize: "0.8rem", color: "#6b7280", lineHeight: 1.7, fontStyle: "italic", textAlign: "left", borderTop: "1px solid #f3f4f6", paddingTop: "0.75rem" }}>
                  "{person.quote}"
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* COLLABORATE */}
        <section id="collaborate" style={{ maxWidth: "760px", margin: "0 auto", padding: "2.5rem 1.5rem", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "1rem" }}>Work with us</h2>
          <p style={{ color: "#4b5563", lineHeight: 1.85 }}>
            We want to run this with more schools — especially in countries with very different voting systems or political histories. If you're a student or teacher who wants to add your school's data to this project, we'd genuinely love that.
            <br /><br />
            The more perspectives we have, the more interesting the gaps become.
          </p>
        </section>

        {/* NOTES */}
        <section style={{ backgroundColor: "#f9fafb", padding: "2.5rem 1.5rem" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "1rem" }}>Honest notes</h2>
            <ul style={{ color: "#4b5563", fontSize: "0.9rem", lineHeight: 2.1, paddingLeft: "1.25rem" }}>
              <li>Our sample sizes are small. We know. We're working on it.</li>
              <li>Simplified models are still models — and sometimes a simplified version of a problem is the only way to see what's actually going on.</li>
              <li>We've rewritten the framing of this project three times because our thinking keeps changing as we go.</li>
              <li>Aarav builds the models in India, Advik runs the simulations in the UK, Parnika talks to the students across the world. We share everything over calls and disagree a lot. That's probably why it works.</li>
            </ul>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ textAlign: "center", padding: "2rem 1.5rem", color: "#9ca3af", fontSize: "0.8rem", borderTop: "1px solid #f3f4f6" }}>
	  Maths for Fairness — Student-led research project
	  <br />
	  <span style={{ fontSize: "0.75rem" }}>© {new Date().getFullYear()} Aarav Singla, Advik Gupta & Parnika Gupta. All rights reserved.
	  </span>
	</footer>

      </main>
    </>
  );
}
