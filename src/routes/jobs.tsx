import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { PageHero, WaButton } from "@/components/site";

export const Route = createFileRoute("/jobs")({
  head: () => ({
    meta: [
      { title: "Jobs in Europe — DERMAN Vacancies" },
      { name: "description", content: "Current job vacancies with European employers in construction, logistics, manufacturing, hospitality and agriculture." },
      { property: "og:title", content: "Jobs in Europe — DERMAN Vacancies" },
      { property: "og:description", content: "Current European job vacancies with work permit support." },
    ],
  }),
  component: Jobs,
});

const jobs = [
  ["Warehouse Operative", "Poland", "Logistics", "Full-time"],
  ["Construction Worker", "Croatia", "Construction", "Full-time"],
  ["CNC Machine Operator", "Germany", "Manufacturing", "Full-time"],
  ["Production Line Worker", "Czech Republic", "Manufacturing", "Full-time"],
  ["Truck Driver (C+E)", "Lithuania", "Transport", "Full-time"],
  ["Hotel Housekeeping Staff", "Malta", "Hospitality", "Full-time"],
  ["Agricultural Worker", "Greece", "Agriculture", "Seasonal"],
  ["Welder", "Slovakia", "Industry", "Full-time"],
  ["Kitchen Assistant", "Romania", "Hospitality", "Full-time"],
] as const;

function Jobs() {
  return (
    <>
      <PageHero eyebrow="Jobs" title="Current European Vacancies" sub="Example openings from our employer partners. Availability changes frequently — contact us for the current list." />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map(([t, c, s, type]) => (
            <div key={t} className="card-brand flex flex-col p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="min-w-0 text-lg font-bold">{t}</h3>
                <span className="shrink-0 rounded-md bg-crimson/10 px-2 py-1 text-xs font-bold text-crimson">{type}</span>
              </div>
              <p className="mt-2 flex items-center gap-1.5 text-sm text-royal"><MapPin className="h-4 w-4" />{c} · {s}</p>
              <div className="mt-5"><WaButton size="sm" variant="outline">Apply via WhatsApp</WaButton></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
