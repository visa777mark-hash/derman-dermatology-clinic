import { createFileRoute } from "@tanstack/react-router";
import { PageHero, WaButton } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About DERMAN — Since 2010" },
      { name: "description", content: "DERMAN is a private international HR consulting and recruitment coordination agency working since 2010." },
      { property: "og:title", content: "About DERMAN — Since 2010" },
      { property: "og:description", content: "Private international HR consulting and recruitment coordination since 2010." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const stats = [["2010", "Founded"], ["40+", "Countries served"], ["12", "EU destinations"], ["50/50", "Milestone terms"]];

function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title="Working Since 2010" sub="An international European immigration, work visa and recruitment support center." />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map(([n, l]) => (
            <div key={l} className="card-brand p-5 text-center">
              <p className="font-display text-3xl font-extrabold text-crimson">{n}</p>
              <p className="mt-1 text-sm text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 space-y-5 text-muted-foreground leading-relaxed">
          <p>DERMAN supports applicants and B2B recruitment partners from Asia, the Middle East, Africa and Central Asia in securing legal employment across Europe. We coordinate with licensed employers to prepare work permit filings, employer documentation and visa guidance.</p>
          <p>Every case begins with documented terms, a defined scope and transparent milestone payments. We never promise outcomes we cannot control — final decisions rest with employers, labour ministries and consulates.</p>
        </div>
        <div className="mt-10"><WaButton size="lg">Contact Us on WhatsApp</WaButton></div>
      </section>
    </>
  );
}
