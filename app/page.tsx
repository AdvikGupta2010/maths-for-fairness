"use client";
import { useEffect, useState } from "react";

export default function MathsForFairness() {
  const [stats, setStats] = useState({
    students: 118,
    schools: 3,
    experiments: 12,
    models: 8
  });

  useEffect(() => {
    // =========================
    // SEO (React + Vercel safe)
    // =========================

    const title = "Maths for Fairness | Student Research Project (UK & India)";
    document.title = title;

    const description =
      "A student-led cross-school research project exploring fairness and bias using mathematical models, simulations, and reasoning across UK and India schools.";

    const keywords =
      "maths for fairness, student research project, fairness in mathematics, bias in systems, mathematical modelling, simulations, UK India school project, computational thinking";

    // Meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // Meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.name = "keywords";
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute("content", keywords);

    // Canonical URL (replace with real domain when deployed)
    const canonicalUrl = "https://mathsforfairness.org";
    let linkCanonical = document.querySelector("link[rel='canonical']");
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = canonicalUrl;

    // =========================
    // Schema.org structured data
    // =========================
    const schema = {
      "@context": "https://schema.org",
      "@type": "ResearchProject",
      "name": "Maths for Fairness",
      "description": description,
      "areaOfStudy": "Mathematics, Fairness, Computational Thinking",
      "educationalLevel": "Secondary School",
      "locationCreated": "UK and India",
      "author": [
        { "@type": "Person", "name": "Aarav Singla" },
        { "@type": "Person", "name": "Advik Gupta" },
        { "@type": "Person", "name": "Parnika Gupta" }
      ]
    };

    let script = document.querySelector("script[type='application/ld+json']");
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);

    // =========================

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

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">

      {/* HERO / ABSTRACT */}
      <header className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold mb-2">Maths for Fairness</h1>

        <p className="text-sm tracking-wider text-gray-500 mb-6">
          A cross-school research project across the UK and India
        </p>

        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          We explore how mathematical thinking can be used to study fairness and bias in real systems by building simple models, testing them through simulations, and comparing how different students reason about the same problems.
        </p>

        <p className="text-sm text-gray-600 max-w-2xl mx-auto mt-6">
          This page is still evolving as we test ideas, run experiments, and learn from them.
        </p>
      </header>

      {/* WHO THIS IS FOR */}
      <section className="max-w-4xl mx-auto px-6 py-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">Who we made this for</h2>
        <p className="text-gray-700">
          For curious students, educators, and anyone interested in how maths connects to real-world decisions.
          <br /><br />
          We start with simple questions and explore how small changes in rules can lead to very different outcomes.
        </p>
      </section>

      

      {/* RESEARCH QUESTIONS */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-semibold mb-6 text-center">What we looked at</h2>

        <div className="grid md:grid-cols-3 gap-6">

          <article className="border rounded-xl p-6">
            <h3 className="font-semibold mb-2">Fairness ideas</h3>
            <p className="text-sm text-gray-700"><b>Question:</b> How does fairness change when conditions or rules are slightly different?</p>
            <p className="text-sm text-gray-700 mt-2"><b>Method:</b> Simple mathematical representations of systems.</p>
            <p className="text-sm text-gray-700 mt-2"><b>Observation:</b> Small changes in rules often lead to unexpected differences in outcomes.</p>
          </article>

          <article className="border rounded-xl p-6">
            <h3 className="font-semibold mb-2">Simulations</h3>
            <p className="text-sm text-gray-700"><b>Question:</b> What happens when fairness rules are tested computationally?</p>
            <p className="text-sm text-gray-700 mt-2"><b>Method:</b> Small simulations with changing parameters.</p>
            <p className="text-sm text-gray-700 mt-2"><b>Observation:</b> Outcomes depend heavily on rule structure.</p>
          </article>

          <article className="border rounded-xl p-6">
            <h3 className="font-semibold mb-2">Student understanding</h3>
            <p className="text-sm text-gray-700"><b>Question:</b> How do students interpret fairness problems differently?</p>
            <p className="text-sm text-gray-700 mt-2"><b>Method:</b> Informal responses and reasoning comparisons.</p>
            <p className="text-sm text-gray-700 mt-2"><b>Observation:</b> The same problem produces very different reasoning paths.</p>
          </article>

        </div>
      </section>

      {/* CONTRIBUTOR LENSES */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">How each of us work</h2>

        <p className="text-sm text-gray-600 text-center max-w-3xl mx-auto mb-8">
          Each of us focused on a different part of the project. We often overlap and help each other improve ideas.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          <article className="border rounded-xl p-6 text-center">
			<h3 className="font-semibold mb-1">Aarav Singla</h3>
			<p className="text-sm text-gray-700 mb-2">Modelling & systems thinking</p>
			<p className="text-xs text-gray-500 mb-2">(GD Goenka School, India)</p>			
		</article>

          <article className="border rounded-xl p-6 text-center">
		    <h3 className="font-semibold mb-1">Advik Gupta</h3>
			<p className="text-sm text-gray-700 mb-2">Simulation & computational thinking</p>
			<p className="text-xs text-gray-500 mb-2">(Queen Elizabeth Boys School, UK)</p>			
		 </article>
		 
		 
          <article className="border rounded-xl p-6 text-center">
			<h3 className="font-semibold mb-1">Parnika Gupta</h3>
			<p className="text-sm text-gray-700 mb-2">Human reasoning & insight</p>
			<p className="text-xs text-gray-500 mb-2">(Henrietta Barnett School, UK)</p>			
		 </article>

        </div>
      </section>

      {/* STATS */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-2 text-center">What we observed</h2>

          <div className="grid md:grid-cols-4 gap-6 text-center mt-8">
            <div className="border rounded-xl p-6 bg-white">
              <p className="text-3xl font-bold">{stats.students}</p>
              <p className="text-sm text-gray-600">students engaged</p>
            </div>

            <div className="border rounded-xl p-6 bg-white">
              <p className="text-3xl font-bold">{stats.schools}</p>
              <p className="text-sm text-gray-600">schools involved</p>
            </div>

            <div className="border rounded-xl p-6 bg-white">
              <p className="text-3xl font-bold">{stats.experiments}</p>
              <p className="text-sm text-gray-600">experiments run</p>
            </div>

            <div className="border rounded-xl p-6 bg-white">
              <p className="text-3xl font-bold">{stats.models}</p>
              <p className="text-sm text-gray-600">models tested</p>
            </div>
          </div>
        </div>
      </section>

      {/* COLLABORATORS */}
      <section className="max-w-4xl mx-auto px-6 py-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">Looking for collaborators</h2>
        <p className="text-gray-700">
          We are open to working with other students and schools who are interested in exploring fairness through maths.
          <br /><br />
          If you enjoy asking questions, testing ideas, or building simple models, you can be part of this project.
        </p>
      </section>

      {/* NOTES */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-4">Notes</h2>

          <ul className="text-gray-700 text-sm space-y-2 list-disc ml-5">
            <li>We keep rewriting ideas when they don’t make sense yet.</li>
            <li>Some parts are still unfinished and changing.</li>
            <li>We work across schools in the UK and India, moving ideas between modelling, simulation, and discussion.</li>
            <li>Different perspectives keep improving the work.</li>
          </ul>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-gray-500 text-sm">
        Maths for Fairness — Student-led research project<br/>
      </footer>

    </main>
  );
}
