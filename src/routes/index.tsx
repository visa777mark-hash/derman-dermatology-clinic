import { createFileRoute } from "@tanstack/react-router";
import { Award, Globe2, FileCheck2, ShieldCheck, Send, MessagesSquare, FolderSearch, HandCoins, Plane, Check } from "lucide-react";
import hero from "@/assets/hero-europe.jpg";
import { WaButton, SubNav, SectionTitle } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DERMAN — Europe Work Visas & Job Vacancies" },
      { name: "description", content: "Work permits, residence permits and visa support for 12 European countries. Immigration & Visa Support Center since 2010." },
      { property: "og:title", content: "DERMAN — Europe Work Visas & Job Vacancies" },
      { property: "og:description", content: "Work permits, residence permits and visa support for 12 European countries since 2010." },
    ],
  }),
  component: Index,
});

const countries = [
  ["🇵🇱", "Poland", "Work Permit & National D-Visa", "4–8 Weeks", ["Type A work permit filing", "National D-visa guidance", "Manufacturing, logistics, construction"]],
  ["🇩🇪", "Germany", "Skilled & Shortage Occupation Routes", "6–12 Weeks", ["Qualification recognition support", "Shortage occupation matching", "Employer pre-approval coordination"]],
  ["🇷🇸", "Serbia", "Work & Residence Permit", "4–6 Weeks", ["Combined permit application", "Employer contract preparation", "Fast-track processing"]],
  ["🇨🇿", "Czech Republic", "Employee Card & Seasonal Routes", "8–12 Weeks", ["Employee Card filing", "Seasonal work visa routes", "Registered vacancy matching"]],
  ["🇸🇰", "Slovakia", "National Work & Residence Permit", "6–10 Weeks", ["Labour office confirmation", "Temporary residence filing", "Industrial & automotive sectors"]],
  ["🇭🇷", "Croatia", "Work & Stay Permit", "4–8 Weeks", ["Combined stay & work permit", "Tourism and construction roles", "Employer document review"]],
  ["🇱🇹", "Lithuania", "Work Permit & TRP", "6–10 Weeks", ["Work permit coordination", "Temporary residence permit", "Transport & logistics roles"]],
  ["🇷🇴", "Romania", "Work Authorization & Long-Stay Visa", "6–10 Weeks", ["Work authorization filing", "Long-stay D/AM visa guidance", "Hospitality & construction"]],
  ["🇭🇺", "Hungary", "Guest Worker & Residence Routes", "6–10 Weeks", ["Guest worker residence permit", "Qualified employer partners", "Manufacturing roles"]],
  ["🇬🇷", "Greece", "Seasonal & Agricultural Work Visa", "4–8 Weeks", ["Seasonal work visa support", "Agricultural employer matching", "Contract verification"]],
  ["🇧🇬", "Bulgaria", "Work Permit & D-Visa", "6–10 Weeks", ["Employment agency permit filing", "D-visa document preparation", "Hospitality & industry roles"]],
  ["🇲🇹", "Malta", "Single Permit Work & Residence", "8–12 Weeks", ["Single permit application", "Employer sponsorship guidance", "Service & healthcare sectors"]],
] as const;

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
            <p className="mt-2 text-muted-foreground">For Global Applicants & International Partners</p>
            <div className="mt-8"><WaButton size="lg">Contact Us on WhatsApp</WaButton></div>
          </div>
          <div className="mt-14"><SubNav /></div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle eyebrow="12 Destinations" title="Current European Work Visa & Employment Destinations" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {countries.map(([flag, name, type, time, pts]) => (
              <article key={name} className="card-brand flex flex-col p-6">
                <div className="flex items-center gap-3">
                  <span className="text-3xl leading-none">{flag}</span>
                  <h3 className="text-lg font-bold">{name}</h3>
                </div>
                <p className="mt-3 text-sm font-medium text-royal">{type}</p>
                <span className="mt-3 w-fit rounded-md border border-crimson/30 bg-crimson/5 px-2.5 py-1 text-xs font-bold text-crimson">⏱ {time}</span>
                <ul className="mt-4 flex-1 space-y-2 text-sm text-muted-foreground">
                  {pts.map((p) => (<li key={p} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-royal" />{p}</li>))}
                </ul>
                <div className="mt-5"><WaButton size="sm" variant="outline">Inquire on WhatsApp</WaButton></div>
              </article>
            ))}
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
