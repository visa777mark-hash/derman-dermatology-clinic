import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, FileText, Stamp, Home, Users, ShieldCheck, Clock3, Check } from "lucide-react";
import { WA, WhatsAppIcon } from "@/components/site";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { destinations, processingTime } from "@/lib/destinations";
import { countryGuides, partnershipMilestones } from "@/lib/service-guides";

const title = "European Work Permit & Visa Services | Poland, Germany, Serbia & 12 European Countries – DERMAN";
const description = "European work permit, residence and visa document coordination for 12 countries, including Poland, Germany and Serbia. Country application guides and transparent 50/50 milestones for applicants and recruitment partners across South Asia, Southeast Asia, East Asia, Central Asia, Africa and the Middle East.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

const services = [
  [FileText, "Official European Work Permit Coordination", "Employer matching and labor ministry filing coordination, with employer documentation prepared for the applicable national procedure."],
  [Stamp, "National D-Visa Embassy Documentation", "Invitation letters, employment contracts, insurance documentation and application preparation for the relevant embassy checklist."],
  [Home, "Temporary Residence Permit (TRP) Guidance", "Post-arrival registration and biometrics support, with guidance on the applicable temporary residence documentation."],
  [Users, "B2B International Agency Partnerships", "Dedicated quota allocation coordination and standardized 50/50 milestone terms for international recruitment partners."],
] as const;

const filingChannels = {
  poland: 'Polish consulate / designated visa centre',
  'czech-republic': 'Czech embassy appointment channel',
  slovakia: 'Slovak consulate / residence authority',
  ukraine: 'Ukrainian mission / residence authority',
  albania: 'Official permit portal / Albanian mission',
  serbia: 'Official single-permit portal / Serbian mission',
  'north-macedonia': 'Competent mission / residence authority',
  belarus: 'Belarusian consulate / residence authority',
  germany: 'German mission / designated visa channel',
  france: 'France-Visas / designated submission centre',
  spain: 'Spanish consulate / designated visa centre',
  greece: 'Greek consulate / designated visa centre',
} as const;

const applicantRegions = [
  ['South Asia', 'India, Bangladesh, Nepal, Sri Lanka, Pakistan'],
  ['Africa', 'Ghana, Nigeria, Kenya, Cameroon, Uganda'],
  ['Southeast & East Asia', 'Vietnam, Philippines, Thailand'],
  ['Central Asia', 'Uzbekistan, Kazakhstan, Kyrgyzstan, Tajikistan'],
  ['Middle East', 'UAE, Saudi Arabia, Qatar, Kuwait'],
] as const;

function Services() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <Button asChild variant="link" className="h-auto p-0 text-muted-foreground">
            <Link to="/"><ArrowLeft />Back to Home</Link>
          </Button>
          <p className="mt-8 text-xs font-bold uppercase tracking-normal text-crimson">DERMAN · Services</p>
          <h1 className="mt-3 max-w-5xl text-3xl font-extrabold tracking-normal sm:text-5xl sm:leading-tight">European Work Permit, Residence &amp; Visa Support Services</h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">Structured employer document coordination and transparent milestone procedures for global applicants and international recruitment partners.</p>
        </div>
      </section>
      <section aria-label="Service scope" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-5 md:grid-cols-2">
          {services.map(([Icon, serviceTitle, detail], index) => (
            <article key={serviceTitle} className="min-w-0 rounded-lg border border-border bg-card p-6 sm:p-8">
              <Icon className="h-7 w-7 text-crimson" strokeWidth={1.5} />
              <h2 className="mt-4 text-xl font-bold tracking-normal">{serviceTitle}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{detail}</p>
              {index === 3 && <dl className="mt-5 grid gap-4 border-t border-border pt-5 sm:grid-cols-2">
                {partnershipMilestones.map(milestone => <div key={milestone.event}>
                  <dt className="text-2xl font-bold text-royal">{milestone.percent}%</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{milestone.label}</dd>
                </div>)}
              </dl>}
            </article>
          ))}
        </div>
        <aside className="mt-8 border-l-4 border-royal bg-surface p-6 sm:p-8">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-royal" />
            <div>
              <h2 className="text-lg font-bold tracking-normal">Scope of Responsibility &amp; Consular Notice</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">DERMAN prepares and coordinates employer and work permit documentation. Official work permit and employment authorization decisions rest solely with the relevant national labor and immigration authorities; final visa decisions rest solely with the competent embassies and consulates. DERMAN does not issue permits or visas and cannot guarantee approval. Employer matching and quota allocation remain subject to employer approval and applicable national rules.</p>
            </div>
          </div>
        </aside>
      </section>
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-normal text-crimson">12 European destinations</p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal sm:text-4xl">Country-Specific Work Permit &amp; Application Guidelines</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Indicative processing ranges are not guaranteed deadlines and do not establish embassy appointment availability or a visa decision date. Requirements vary by nationality, residence, occupation and permit route; confirm the current official checklist before submission.</p>
          </div>
          <div className="mt-9 grid items-stretch gap-6 md:grid-cols-2">
            {destinations.map(destination => {
              const guide = countryGuides[destination.slug];
              return <article key={destination.slug} aria-label={`${destination.name} application guide`} className="flex min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-card">
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-2xl font-bold tracking-normal">{destination.name}</h3>
                    <span className="inline-flex items-center gap-2 rounded-md border border-crimson/25 bg-crimson/5 px-3 py-1.5 text-sm font-bold text-crimson"><Clock3 className="h-4 w-4" />{processingTime(destination.days)}</span>
                  </div>
                  <p className="mt-3 text-sm font-bold leading-relaxed text-royal">{destination.route}</p>
                  <ul className="mb-7 mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
                    {[
                      ['Permit', guide.permit],
                      ['Core docs', 'Valid passport, CV; clean police clearance where applicable'],
                      ['Filing', filingChannels[destination.slug]],
                    ].map(([label, detail]) => <li key={label} className="flex items-start gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-royal" /><span><strong className="font-semibold text-foreground">{label}:</strong> {detail}</span></li>)}
                  </ul>
                  <Button asChild size="lg" className="mt-auto h-12 w-full font-semibold hover:bg-royal">
                    <a href={WA} target="_blank" rel="noopener noreferrer" aria-label={`Inquire on WhatsApp about ${destination.name}`}><WhatsAppIcon />Inquire on WhatsApp</a>
                  </Button>
                </div>
              </article>;
            })}
          </div>
        </div>
      </section>
      <section aria-labelledby="applicant-regions-title" className="border-t border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <h2 id="applicant-regions-title" className="text-2xl font-bold tracking-normal sm:text-3xl">Global Applicant Regions &amp; Consular Support</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {applicantRegions.map(([region, countries]) => <div key={region} className="min-w-0 rounded-lg border border-border bg-surface px-5 py-4">
              <h3 className="text-sm font-bold tracking-normal text-royal">{region}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{countries}</p>
            </div>)}
          </div>
          <Accordion type="single" collapsible className="mt-7 border-t border-border">
            <AccordionItem value="consular-notes">
              <AccordionTrigger className="gap-4 py-5 text-base font-semibold text-primary">View Embassy &amp; VFS Legalization Notes</AccordionTrigger>
              <AccordionContent forceMount className="max-w-4xl" data-consular-notes="true">
                <div className="space-y-3 leading-relaxed text-muted-foreground">
                  <p><strong className="font-semibold text-foreground">Embassy jurisdiction &amp; filing.</strong> Applicants across the regions above should confirm the competent embassy based on nationality and lawful residence, the current permit-specific checklist and appointment availability. Use VFS only where officially appointed for the destination and visa category; otherwise use the embassy’s designated filing channel or official permit portal.</p>
                  <p><strong className="font-semibold text-foreground">Apostille &amp; consular legalization.</strong> Obtain certified translations and an apostille or consular legalization only when required for the destination and document type. Confirm certificate validity periods and authentication requirements before submitting police clearance or other official records.</p>
                  <p><strong className="font-semibold text-foreground">Individual eligibility.</strong> Additional employer approvals, qualifications, insurance or accommodation evidence may be required. Regional coverage does not imply automatic eligibility or appointment access; permit and visa decisions remain with the competent authorities.</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}
