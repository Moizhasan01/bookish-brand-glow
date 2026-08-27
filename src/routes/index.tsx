import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logoAsset from "@/assets/beacon-publisher-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Beacon Publisher | Under Maintenance" },
      {
        name: "description",
        content:
          "Beacon Publishing House is temporarily under maintenance. We'll be back shortly.",
      },
      { property: "og:title", content: "Beacon Publisher | Under Maintenance" },
      {
        property: "og:description",
        content:
          "Beacon Publishing House is temporarily under maintenance. We'll be back shortly.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Typewriter({
  text,
  delay = 70,
  onComplete,
}: {
  text: string;
  delay?: number;
  onComplete?: () => void;
}) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (displayed.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1));
      }, delay);
      return () => clearTimeout(timeout);
    }
    if (!done) {
      setDone(true);
      onComplete?.();
    }
  }, [displayed, text, delay, done, onComplete]);

  return (
    <span aria-label={text}>
      {displayed}
      <span className={`text-accent ${done ? "animate-blink" : ""}`}>|</span>
    </span>
  );
}

function Index() {
  const [phase, setPhase] = useState(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 py-12 text-center">
      <div className="max-w-lg animate-paper-settle">
        <div className="relative mx-auto mb-8 w-40 cursor-pointer md:w-48">
          <div className="absolute inset-0 -z-10 scale-125 rounded-full bg-accent/20 blur-2xl animate-beacon-pulse" />
          <img
            src={logoAsset.url}
            alt="Beacon Publisher"
            className="relative h-auto w-full animate-float transition-transform duration-700 ease-out hover:scale-105"
          />
        </div>

        <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          <Typewriter
            text="Under Maintenance"
            delay={75}
            onComplete={() => setTimeout(() => setPhase(1), 200)}
          />
        </h1>

        <div
          className={`mx-auto my-6 h-px w-20 bg-accent ${
            phase >= 1 ? "animate-scale-x" : "invisible"
          }`}
        />

        <p
          className={`text-lg leading-relaxed text-muted-foreground ${
            phase >= 2 ? "animate-fade-in-up" : "invisible"
          }`}
        >
          Beacon Publishing House is temporarily unavailable while we prepare something new.
          We’ll be back shortly.
        </p>

        <p
          className={`mt-10 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground ${
            phase >= 3 ? "animate-fade-in-up" : "invisible"
          }`}
        >
          Est. · Publishing House
        </p>
      </div>
    </main>
  );
}
