"use client";

import { useEffect, useState, type ReactNode } from "react";
import { RELEASES, SOURCE, SPONSOR, copy, exampleTracks, type Lang } from "@/lib/copy";

const ICONS = [
  "playlist",
  "arc",
  "energy",
  "key",
  "clock",
  "plan",
] as const;

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
      <div className="nav-wrap">
        <header className="nav">
          <a className="brand" href="#top">
            <img src="/logo.svg" alt="" width={28} height={28} />
            SETBUILDER
          </a>
          <nav className="nav-links" aria-label="SETBUILDER">
            <a href="#was">{t.navWhat}</a>
            <a href="#ablauf">{t.navHow}</a>
            <a href="#mitnehmen">{t.navTake}</a>
            <a href={SOURCE}>GitHub</a>
          </nav>
          <div className="nav-end">
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
              <DownloadIcon />
              {t.download}
            </a>
          </div>
        </header>
      </div>

      <main id="top">
        <section className="hero">
          <p className="badge">{t.badge}</p>
          <h1>{t.title}</h1>
          <p className="lede">{t.lede}</p>
          <div className="actions">
            <a className="button button-lg" href={RELEASES}>
              <DownloadIcon />
              {t.cta}
            </a>
            <a className="button button-quiet button-lg" href="#ablauf">
              {t.navHow}
            </a>
          </div>
          <p className="hero-note">{t.heroNote}</p>
        </section>

        <Stage
          status={t.mockStatus}
          kicker={t.sheetExample}
          title={t.sheetTitle}
          meta={t.sheetMeta}
          vibe={t.sheetVibe}
          note={t.sheetNote}
          side={t.steps.map((step) => step.title)}
        />

        <section className="block" id="was" aria-labelledby="features-title">
          <h2 id="features-title">{t.featuresTitle}</h2>
          <ul className="cards">
            {t.features.map((feature, index) => (
              <li key={feature.title}>
                <span className="icon" aria-hidden="true">
                  <FeatureIcon name={ICONS[index] ?? "plan"} />
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="block split" id="ablauf" aria-labelledby="steps-title">
          <div>
            <h2 id="steps-title">{t.stepsTitle}</h2>
            <ol className="steps">
              {t.steps.map((step, index) => (
                <li key={step.title}>
                  <span>{index + 1}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <Stage
            status={t.mockStatus}
            kicker={t.sheetExample}
            title={t.sheetTitle}
            meta={t.sheetMeta}
            vibe={t.sheetVibe}
            note={t.sheetNote}
            side={t.steps.map((step) => step.title)}
            compact
          />
        </section>

        <section className="offer" id="mitnehmen" aria-labelledby="close-title">
          <div>
            <p className="offer-kicker">SETBUILDER</p>
            <h2 id="close-title">{t.closeTitle}</h2>
            <p>{t.closeBody}</p>
            <div className="actions">
              <a className="button button-lg" href={RELEASES}>
                <DownloadIcon />
                {t.cta}
              </a>
              <a className="button button-quiet button-lg" href={SPONSOR}>
                {t.sponsor}
              </a>
            </div>
          </div>
          <ul className="perks">
            {t.perks.map((perk) => (
              <li key={perk.title}>
                <span className="icon" aria-hidden="true">
                  <FeatureIcon name="check" />
                </span>
                <div>
                  <h3>{perk.title}</h3>
                  <p>{perk.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="colophon">
        <a className="brand" href="#top">
          <img src="/logo.svg" alt="" width={24} height={24} />
          SETBUILDER
        </a>
        <p>{t.footer}</p>
        <a href={SOURCE}>GitHub</a>
      </footer>
    </>
  );
}

function Stage({
  status,
  kicker,
  title,
  meta,
  vibe,
  note,
  side,
  compact = false,
}: {
  status: string;
  kicker: string;
  title: string;
  meta: string;
  vibe: string;
  note: string;
  side: string[];
  compact?: boolean;
}) {
  return (
    <article
      className={compact ? "stage stage-compact" : "stage"}
      aria-label={compact ? undefined : `${kicker}: ${title}`}
      aria-hidden={compact || undefined}
    >
      <div className="window">
        <header className="window-bar">
          <span className="window-brand">
            <img src="/logo.svg" alt="" width={18} height={18} />
            SETBUILDER
          </span>
          <span className="status-pill">{status}</span>
        </header>
        <div className="window-body">
          <aside>
            {side.map((label, index) => (
              <span key={label} className={index === 2 ? "is-on" : undefined}>
                {label}
              </span>
            ))}
          </aside>
          <div className="window-main">
            <p className="sheet-kicker">{kicker}</p>
            <h2>{title}</h2>
            <p className="sheet-meta">
              {meta}
              <span>{vibe}</span>
            </p>
            <ol>
              {exampleTracks.map((track) => (
                <li key={track.pos} data-phase={track.phase}>
                  <span className="pos">{track.pos}</span>
                  <span className="name">
                    {track.title}
                    {track.role ? <em>{track.role}</em> : null}
                  </span>
                  <span className="key">{track.key}</span>
                  <span className="bpm">{track.bpm}</span>
                </li>
              ))}
            </ol>
            <p className="sheet-note">{note}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path
        d="M12 4v10m0 0 4-4m-4 4-4-4M5 18h14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FeatureIcon({ name }: { name: (typeof ICONS)[number] | "check" }) {
  const paths: Record<string, ReactNode> = {
    playlist: <path d="M7 6h10M7 12h10M7 18h6" />,
    arc: <path d="M5 16c2-6 4-8 7-8s5 2 7 8" />,
    energy: <path d="M13 4 7 13h5l-1 7 6-9h-5l1-7z" />,
    key: (
      <>
        <circle cx="9" cy="12" r="3" />
        <path d="M12 12h7M16 12v2.2M19 12v2.2" />
      </>
    ),
    clock: <path d="M12 7v5l3 2M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14z" />,
    plan: <path d="M7 7h10v10H7zM7 11h10M11 7v10" />,
    check: <path d="m7 12 3 3 7-7" />,
  };
  return (
    <svg viewBox="0 0 24 24" width="18" height="18">
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {paths[name]}
      </g>
    </svg>
  );
}
