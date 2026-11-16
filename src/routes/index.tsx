import { createFileRoute } from "@tanstack/react-router";
import { Award, Globe2, FileCheck2, ShieldCheck, Send, MessagesSquare, FolderSearch, HandCoins, Plane } from "lucide-react";
import hero from "@/assets/hero-europe.jpg";
import { WaButton, SubNav, SectionTitle } from "@/components/site";
import { DestinationCard } from '@/components/destination-card';
import { destinations } from '@/lib/destinations';

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DERMAN | Europe Work Permit, Work Visa & Job Vacancy" },
      { name: "description", content: "DERMAN provides verified job vacancy opportunities, official work permit sponsorship, and work visa document coordination across Europe." },
      { property: "og:title", content: "DERMAN | Europe Work Permit, Work Visa & Job Vacancy" },
      { property: "og:description", content: "DERMAN provides verified job vacancy opportunities, official work permit sponsorship, and work visa document coordination across Europe." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const why = [
  [Award, "Experience Since 2010", "Long-term expertise in European work permits, residence procedures, and employer document coordination."],
  [Globe2, "Global Coverage (40+ Countries)", "Assisting applicants and B2B recruitment partners across Asia, the Middle East, Africa, and Central Asia."],
  [FileCheck2, "Clear Terms & Transparent Milestones", "Documented procedures, transparent 50/50 milestone terms, and defined responsibilities before any case begins."],
  [ShieldCheck, "Professional Support Without Unrealistic Promises", "We prepare employer documentation, work permit filings, and visa guidance. Final decisions on visa issuance rest strictly with employers, labor ministries, and consulates."],
] as const;

const steps = [
  [Send, "Submit Your Request"],
  [MessagesSquare, "Receive Initial Consultation"],
  [FolderSearch, "Provide Documents for Review & Preparation"],
  [HandCoins, "Confirm Service Scope & Milestone Payments"],
  [Plane, "Receive Official Work Permit & Visa Guidance"],
] as const;

function Index() {
  return (
    <>
      <section className="relative overflow-hidden">
        <img src={hero} alt="" width={1920} height={960} className="absolute inset-0 h-full w-full object-cover object-right opacity-90" />
        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-16 sm:px-6 sm:pt-24">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-crimson px-3 py-1 text-xs font-bold uppercase tracking-wider text-crimson-foreground">Since 2010 · 40+ Countries</span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] sm:text-6xl">Europe Work Visas & Job Vacancies</h1>
            <p className="mt-5 text-base font-semibold text-royal sm:text-lg">
              Residence Permit in Europe <span className="text-crimson">|</span> Visa Support <span className="text-crimson">|</span> Employer Documents
            </p>
            <p className="mt-2 text-muted-foreground">DERMAN provides verified job vacancy opportunities, official work permit sponsorship, and work visa document coordination across Europe.</p>
            <div className="mt-8"><WaButton size="lg">Contact Us on WhatsApp</WaButton></div>
          </div>
          <div className="mt-14"><SubNav /></div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle eyebrow="12 Destinations" title="Current European Work Visa & Employment Destinations" />
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {destinations.map(destination => <DestinationCard key={destination.slug} destination={destination} />)}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle eyebrow="Service Standards" title="Why Clients & B2B Partners Choose DERMAN" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {why.map(([Icon, t, d], i) => (
              <div key={t} className="card-brand p-6">
                <div className={`grid h-11 w-11 place-items-center rounded-lg ${i % 2 ? "bg-crimson/10 text-crimson" : "bg-royal/10 text-royal"}`}><Icon className="h-5 w-5" /></div>
                <h3 className="mt-4 text-base font-bold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>

          <div className="mt-24"><SectionTitle eyebrow="Process" title="How Cooperation with DERMAN Works" /></div>
          <ol className="mt-12 grid gap-4 md:grid-cols-5">
            {steps.map(([Icon, t], i) => (
              <li key={t} className="card-brand relative p-5">
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl font-extrabold text-crimson">0{i + 1}</span>
                  <Icon className="h-6 w-6 text-royal" strokeWidth={1.5} />
                </div>
                <p className="mt-4 text-sm font-semibold text-navy">{t}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 text-center"><WaButton size="lg">SUBMIT A REQUEST VIA WHATSAPP</WaButton></div>
        </div>
      </section>
    </>
  );
}
