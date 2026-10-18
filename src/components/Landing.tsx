"use client";

import { useEffect, useState } from "react";
import { RELEASES, SOURCE, SPONSOR, copy, exampleTracks, type Lang } from "@/lib/copy";

const PHASES = ["open", "lift", "rise", "peak", "release"] as const;

export function Landing() {
  const [lang, setLang] = useState<Lang>("de");
  const t = copy[lang];

  useEffect(() => {
    const stored = window.localStorage.getItem("setbuilder-lang");
    if (stored === "de" || stored === "en") setLang(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  function choose(next: Lang) {
    setLang(next);
    window.localStorage.setItem("setbuilder-lang", next);
  }

  return (
    <>
      <header className="topbar">
        <a className="brand" href="#top">
          <img src="/logo.svg" alt="" width={36} height={36} />
          SETBUILDER
        </a>
        <div className="topbar-actions">
          <div className="lang" role="group" aria-label={t.langLabel}>
            {(["de", "en"] as const).map((code) => (
              <button
                key={code}
                type="button"
                aria-pressed={lang === code}
                onClick={() => choose(code)}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
          <a className="button" href={RELEASES}>
            {t.download}
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>{t.title}</h1>
            <p className="lede">{t.lede}</p>
            <div className="actions">
              <a className="button" href={RELEASES}>
                {t.cta}
              </a>
              <a className="button button-quiet" href={SOURCE}>
                {t.source}
              </a>
            </div>
          </div>

          <article className="sheet" aria-label={`${t.sheetExample}: ${t.sheetTitle}`}>
            <header>
              <p className="sheet-kicker">{t.sheetExample}</p>
              <h2>{t.sheetTitle}</h2>
              <p className="sheet-meta">{t.sheetMeta}</p>
              <p className="sheet-vibe">{t.sheetVibe}</p>
            </header>
            <ol>
              {exampleTracks.map((track) => (
                <li key={track.pos} data-phase={track.phase}>
                  <span className="phase" aria-hidden="true" />
                  <span className="pos">{track.pos}</span>
                  <span className="name">
                    {track.title}
                    {track.role ? <span className="role">{track.role}</span> : null}
                  </span>
                  <span className="key">{track.key}</span>
                  <span className="bpm">{track.bpm}</span>
                </li>
              ))}
            </ol>
            <p className="sheet-note">{t.sheetNote}</p>
          </article>
        </section>

        <section className="credo">
          <h2>{t.manifestoLead}</h2>
          <div>
            {t.manifesto.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="steps" aria-labelledby="steps-title">
          <h2 id="steps-title">{t.stepsTitle}</h2>
          <ol>
            {t.steps.map((step, index) => (
              <li key={step.title} data-phase={PHASES[index]}>
                <span className="step-index">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="features" aria-labelledby="features-title">
          <h2 id="features-title">{t.featuresTitle}</h2>
          <ul>
            {t.features.map((feature) => (
              <li key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="close">
          <div>
            <h2>{t.closeTitle}</h2>
            <p>{t.closeBody}</p>
          </div>
          <div className="actions">
            <a className="button" href={RELEASES}>
              {t.cta}
            </a>
            <a className="button button-quiet" href={SPONSOR}>
              {t.sponsor}
            </a>
          </div>
        </section>
      </main>

      <footer className="colophon">
        <a className="brand" href="#top">
          <img src="/logo.svg" alt="" width={28} height={28} />
          SETBUILDER
        </a>
        <p>{t.footer}</p>
        <a href={SOURCE}>GitHub</a>
      </footer>
    </>
  );
}
