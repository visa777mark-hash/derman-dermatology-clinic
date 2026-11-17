import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { JobCategoryIcon } from "@/components/job-category-icon";
import { WA, WhatsAppIcon } from "@/components/site";
import { eligibleApplicantNationalities, type JobVacancy } from "@/lib/jobs";

function permitDestinationText(job: JobVacancy) {
  const countries = job.destinations.join(", ");
  if (job.category === "Seasonal Agriculture") return `Seasonal work permit routes: ${countries}.`;
  if (job.category === "Hospitality & Food") return `Year-round and seasonal work permit routes, subject to role and season: ${countries}.`;
  return `${countries}; eligibility depends on the employer, occupation, nationality, and current national permit rules.`;
}

export function JobAccordion({ jobs }: { jobs: readonly JobVacancy[] }) {
  return (
    <Accordion type="multiple" className="space-y-3">
      {jobs.map((job) => {
        const brief = [
          ["Working Hours", job.hours],
          ["Experience & Requirements", job.experience],
          ["Benefits & Employer Support", job.benefits],
          ["Eligible European Permit Destinations", permitDestinationText(job)],
          ["Eligible Applicant Nationalities", eligibleApplicantNationalities],
        ] as const;
        const whatsappUrl = `${WA}?text=${encodeURIComponent(`Hello DERMAN, I would like to inquire about the ${job.title} role.`)}`;
        const countryPreview = job.destinations.slice(0, 3).map((country) => country === "Czech Republic" ? "Czechia" : country).join(" • ");

        return (
          <AccordionItem
            key={job.id}
            value={job.id}
            className="overflow-hidden rounded-lg border border-border bg-card shadow-sm [&_[data-job-brief][data-state=closed]]:hidden"
          >
            <AccordionTrigger className="group gap-3 px-4 py-4 hover:bg-surface hover:no-underline sm:gap-4 sm:px-5 sm:py-5">
              <span className="flex min-w-0 flex-1 flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <span className="flex min-w-0 items-center gap-3 sm:gap-4">
                  <JobCategoryIcon category={job.category} />
                  <span className="min-w-0">
                    <span className="block font-display text-base font-bold leading-snug text-navy sm:text-lg">{job.title}</span>
                    <span className="mt-1.5 inline-flex rounded-full bg-royal/10 px-2.5 py-1 text-xs font-semibold text-royal">{job.category}</span>
                  </span>
                </span>
                <span className="flex shrink-0 flex-wrap items-center gap-2 md:justify-end">
                  <span className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-crimson" />{countryPreview}
                  </span>
                  <span className="inline-flex rounded-full bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground transition-colors group-hover:bg-royal">View Brief</span>
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent forceMount data-job-brief="true" className="px-5 pb-5 sm:px-6 sm:pb-6">
              <dl className="divide-y divide-border border-t border-border">
                {brief.map(([label, detail]) => (
                  <div key={label} className="grid gap-1.5 py-4 sm:grid-cols-[220px_minmax(0,1fr)] sm:gap-6">
                    <dt className="font-semibold text-navy">{label}</dt>
                    <dd className="leading-relaxed text-muted-foreground">{detail}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-2 flex flex-col items-start gap-3 border-t border-border pt-5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
                <Link to="/services" className="inline-flex items-center gap-1.5 font-semibold text-royal hover:text-primary">
                  Check Work Permit Rules &amp; Filing Steps <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary"
                  aria-label={`Ask about ${job.title} on WhatsApp`}
                >
                  <WhatsAppIcon className="h-4 w-4" /> Ask about this role on WhatsApp
                </a>
              </div>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
