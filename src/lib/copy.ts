export type Lang = "de" | "en";

export const RELEASES = "https://github.com/ChrisEdS/setbuilder/releases";
export const SOURCE = "https://github.com/ChrisEdS/setbuilder";
export const SPONSOR = "https://github.com/sponsors/ChrisEdS";

export type Track = {
  pos: string;
  title: string;
  role?: string;
  key: string;
  bpm: string;
  phase: "open" | "lift" | "rise" | "peak" | "release";
};

export const exampleTracks: Track[] = [
  { pos: "01", title: "Warm Room", role: "Opener", key: "6A", bpm: "120", phase: "open" },
  { pos: "02", title: "Side Door", key: "7A", bpm: "122", phase: "lift" },
  { pos: "03", title: "Glass Line", key: "8A", bpm: "124", phase: "rise" },
  { pos: "04", title: "Nightline", key: "9A", bpm: "126", phase: "peak" },
  { pos: "05", title: "Afterglow", role: "Closer", key: "8A", bpm: "122", phase: "release" },
];

const de = {
  langLabel: "Sprache",
  download: "Download",
  navWhat: "Was es macht",
  navHow: "So läuft's",
  navTake: "Mitnehmen",
  badge: "Für rekordbox · 3.6.2",
  heroNote: "Mac, Windows und Linux · rekordbox bleibt unangetastet",
  mockStatus: "Stick verbunden",
  eyebrow: "Version 3.6.2 · für rekordbox",
  title: "Dramaturgie statt Playlist.",
  lede:
    "SETBUILDER formt aus dem Rekordbox-Stick ein Set: Playlist oder History laden, den Bogen nach Slot und Dauer legen, Key und BPM prüfen.",
  cta: "Release laden",
  source: "Quellcode",
  manifestoLead: "Ein gutes Set muss nicht perfekt sein.",
  manifesto: [
    "Musik lässt sich analysieren, sortieren und planen – aber am Ende entscheiden dein Gehör, dein Gefühl und der Moment auf dem Dancefloor. Kein Score und kein Algorithmus kann ersetzen, was du als DJ wahrnimmst.",
    "SETBUILDER soll dir deshalb keine Entscheidungen abnehmen. Es gibt Orientierung, macht Übergänge sichtbar und liefert Ideen. Nutze es als Hilfe – und vertraue dann deinen Ohren.",
  ],
  stepsTitle: "So läuft ein Set",
  steps: [
    {
      title: "Brief",
      body: "Titel, Vibe, Venue, Slot-Art und Dauer. Daraus wird der Bogen.",
    },
    {
      title: "Laden",
      body: "Playlist oder History vom Stick, oder eine Collection-XML.",
    },
    {
      title: "Bauen",
      body: "Phasen, Rollen, Opener und Closer. Sortieren, andere Songs, kürzen.",
    },
    {
      title: "Mitnehmen",
      body: "Stick für den Player, PDF für die Kabine, XML und M3U für den Rechner.",
    },
  ],
  featuresTitle: "Was es dem Set hinzufügt",
  features: [
    {
      title: "Playlist oder History",
      body: "Vom Stick laden, in der Reihenfolge, in der sie dort steht.",
    },
    {
      title: "Bogen nach Slot",
      body: "Dauer, Phasen, Opener und Closer. Der Slot bleibt, was der Brief sagt.",
    },
    {
      title: "Energie aus Dateien",
      body: "Stick-MP3s analysieren und Energy in die ID3-Tags schreiben. Das Audio bleibt unangetastet.",
    },
    {
      title: "Key-Verlauf",
      body: "Camelot entlang des Sets, mit Mix-Score und Clashes. Opener und Closer bleiben stehen.",
    },
    {
      title: "Spielzeit statt Dateilänge",
      body: "Jede Spur gibt Zeit an den Blend ab. Kürzen füllt den Slot, es leert ihn nicht.",
    },
    {
      title: "Plan B",
      body: "Rollen und Alternativen pro Phase, wenn der Floor dreht.",
    },
  ],
  perks: [
    {
      title: "Mac, Windows, Linux",
      body: "Dieselbe App. Kein Konto, um ein Set vorzubereiten.",
    },
    {
      title: "rekordbox allein",
      body: "Stick und Collection brauchen keine Zugangsdaten.",
    },
    {
      title: "Lücken füllen",
      body: "Spotify, Tidal und Beatport, wenn ein Track noch nicht auf dem Stick liegt.",
    },
  ],
  sheetExample: "Beispiel",
  sheetTitle: "Nachtlinie 01",
  sheetMeta: "Peak Time · 60 Min",
  sheetVibe: "Tech House → Melodic Peak",
  sheetNote: "Energie zuerst, dann Key, dann BPM.",
  closeTitle: "Kostenlos und offen.",
  closeBody:
    "Mac, Windows und Linux. rekordbox allein braucht keine Zugangsdaten. Spotify, Tidal und Beatport füllen Lücken, wenn ein Track noch nicht auf dem Stick liegt.",
  sponsor: "Unterstützen",
  footer: "MIT · Stick vor dem Gig am Player prüfen.",
};

const en: typeof de = {
  langLabel: "Language",
  download: "Download",
  navWhat: "What it does",
  navHow: "How it works",
  navTake: "Take it",
  badge: "For rekordbox · 3.6.2",
  heroNote: "Mac, Windows and Linux · rekordbox stays untouched",
  mockStatus: "Stick connected",
  eyebrow: "Version 3.6.2 · for rekordbox",
  title: "Dramaturgy, not a playlist.",
  lede:
    "SETBUILDER shapes a set from your rekordbox stick: load a playlist or history, lay the arc by slot and duration, check key and BPM.",
  cta: "Get the release",
  source: "Source",
  manifestoLead: "A good set does not have to be perfect.",
  manifesto: [
    "Music can be analyzed, sorted and planned — but in the end your ears, your feel and the moment on the dancefloor decide. No score and no algorithm can replace what you perceive as a DJ.",
    "SETBUILDER is not here to take decisions away from you. It gives you orientation, makes transitions visible and sparks ideas. Use it as help — then trust your ears.",
  ],
  stepsTitle: "How a set works",
  steps: [
    {
      title: "Brief",
      body: "Title, vibe, venue, slot type and duration. That becomes the arc.",
    },
    {
      title: "Load",
      body: "Playlist or history from the stick, or a collection XML.",
    },
    {
      title: "Build",
      body: "Phases, roles, opener and closer. Sort, different songs, trim.",
    },
    {
      title: "Take it",
      body: "Stick for the player, PDF for the booth, XML and M3U for the computer.",
    },
  ],
  featuresTitle: "What it adds to the set",
  features: [
    {
      title: "Playlist or history",
      body: "Load it from the stick, in the order it already has.",
    },
    {
      title: "Arc by slot",
      body: "Duration, phases, opener and closer. The slot stays what the brief says.",
    },
    {
      title: "Energy from files",
      body: "Analyze stick MP3s and write Energy into the ID3 tags. The audio stays untouched.",
    },
    {
      title: "Key path",
      body: "Camelot along the set, with mix score and clashes. Opener and closer stay put.",
    },
    {
      title: "Playing time, not file length",
      body: "Each track gives time to the blend. Trim fills the slot, it does not empty it.",
    },
    {
      title: "Plan B",
      body: "Roles and alternatives per phase when the floor turns.",
    },
  ],
  perks: [
    {
      title: "Mac, Windows, Linux",
      body: "The same app. No account to prepare a set.",
    },
    {
      title: "rekordbox alone",
      body: "Stick and collection need no credentials.",
    },
    {
      title: "Fill the gaps",
      body: "Spotify, Tidal and Beatport when a track is not on the stick yet.",
    },
  ],
  sheetExample: "Example",
  sheetTitle: "Nightline 01",
  sheetMeta: "Peak time · 60 min",
  sheetVibe: "Tech House → Melodic Peak",
  sheetNote: "Energy first, then key, then BPM.",
  closeTitle: "Free and open.",
  closeBody:
    "Mac, Windows and Linux. rekordbox alone needs no credentials. Spotify, Tidal and Beatport fill gaps when a track is not on the stick yet.",
  sponsor: "Sponsor",
  footer: "MIT · Test the stick on the player before a gig.",
};

export const copy = { de, en };
