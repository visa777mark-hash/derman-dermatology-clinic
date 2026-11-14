import { createFileRoute } from "@tanstack/react-router";
import { FileText, Stamp, Building2, Home, Users, ClipboardCheck } from "lucide-react";
import { PageHero, WaButton } from "@/components/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — DERMAN Visa Support" },
      { name: "description", content: "Work permit filing, visa guidance, residence permits and employer document coordination across Europe." },
      { property: "og:title", content: "Services — DERMAN Visa Support" },
      { property: "og:description", content: "Work permits, visa guidance, residence permits and employer documents across Europe." },
    ],
  }),
  component: Services,
});

const services = [
  [FileText, "Work Permit Filing", "Preparation and submission coordination of work permit applications with licensed European employers."],
  [Stamp, "National D-Visa Guidance", "Step-by-step guidance on long-stay visa documents, appointments and consular requirements."],
  [Home, "Residence Permits", "Temporary residence and single-permit procedures after arrival, including renewals."],
  [Building2, "Employer Documents", "Coordination of employment contracts, invitations and labour-office confirmations."],
  [Users, "B2B Recruitment Partnership", "Cooperation for recruitment agencies placing candidates into European vacancies."],
  [ClipboardCheck, "Document Review", "Professional review of diplomas, passports and certificates before any filing begins."],
] as const;

function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title="Professional Visa & Employment Support" sub="End-to-end coordination for applicants and international partners — clear scope, documented milestones." />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(([Icon, t, d]) => (
            <div key={t} className="card-brand p-6">
              <Icon className="h-7 w-7 text-crimson" strokeWidth={1.5} />
              <h3 className="mt-4 text-lg font-bold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center"><WaButton size="lg">Discuss Your Case on WhatsApp</WaButton></div>
      </section>
    </>
  );
}
