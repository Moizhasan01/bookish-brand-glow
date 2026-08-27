import { createFileRoute } from "@tanstack/react-router";
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

function Index() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 py-12 text-center">
      <div className="max-w-lg">
        <img
          src={logoAsset.url}
          alt="Beacon Publisher"
          className="mx-auto mb-8 h-auto w-40 md:w-48"
        />
        <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          Under Maintenance
        </h1>
        <div className="mx-auto my-6 h-px w-20 bg-accent" />
        <p className="text-lg leading-relaxed text-muted-foreground">
          Beacon Publishing House is temporarily unavailable while we prepare something new.
          We’ll be back shortly.
        </p>
        <p className="mt-10 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Est. · Publishing House
        </p>
      </div>
    </main>
  );
}
