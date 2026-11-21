import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Globe2, Search, SearchX } from "lucide-react";
import { JobAccordion } from "@/components/job-accordion";
import { JobCategoryIcon } from "@/components/job-category-icon";
import { PageHero, SectionTitle } from "@/components/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { WorkFaqSection } from "@/components/work-faq-section";
import { WorkPermitOverview } from "@/components/work-permit-overview";
import { jobCategories, jobVacancies, recruitmentRegions, type JobCategory } from "@/lib/jobs";

const title = "Europe Job Vacancies & Work Permit Roles | DERMAN Recruitment";
const description = "Explore 50 European job vacancies in manufacturing, construction, logistics, hospitality, agriculture and technical roles, with 40-hour workweeks, employer support and work permit coordination for global applicants.";

export const Route = createFileRoute("/jobs")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://derman-skin-care.lovable.app/jobs" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://derman-skin-care.lovable.app/jobs" }],
  }),
  component: Jobs,
});

type CategoryFilter = "All Roles" | JobCategory;

const sectorCategories = [
  "Warehouse & Logistics",
  "Manufacturing & Factory",
  "Construction & Trades",
  "Hospitality & Food",
  "Seasonal Agriculture",
  "Technical & Drivers",
] as const;

function Jobs() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("All Roles");

  const filteredJobs = useMemo(() => {
    const search = query.trim().toLocaleLowerCase();
    return jobVacancies.filter((job) => {
      const inCategory = category === "All Roles" || job.category === category;
      if (!inCategory) return false;
      if (!search) return true;
      const searchable = [job.title, job.category, job.experience, job.benefits, ...job.destinations].join(" ").toLocaleLowerCase();
      return searchable.includes(search);
    });
  }, [category, query]);

  const resetFilters = () => {
    setQuery("");
    setCategory("All Roles");
  };

  return (
    <>
      <PageHero
        eyebrow="Jobs · 50 Employment Categories"
        title="Open Job Vacancies & Work Permit Roles Across Europe"
        sub="Explore 50 high-demand European employment categories with verified employer sponsorship, structured 40-hour workweeks, and lawful work permit coordination."
      />

      <section aria-label="Find a European job" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <Link
          to="/services"
          className="group flex flex-col gap-3 rounded-lg border border-royal/20 bg-surface p-5 text-sm leading-relaxed text-muted-foreground transition-colors hover:border-royal sm:flex-row sm:items-center sm:justify-between sm:px-6"
        >
          <span><strong className="font-semibold text-navy">Looking for country-specific permit processing timelines &amp; 50/50 milestone rules?</strong> View our European Work Permit Services</span>
          <span className="inline-flex shrink-0 items-center gap-1.5 font-semibold text-royal">View Services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
        </Link>

        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4" aria-label="Browse jobs by industry">
          {sectorCategories.map((item) => {
            const count = jobVacancies.filter((job) => job.category === item).length;
            const selected = category === item;
            return (
              <button
                key={item}
                type="button"
                aria-pressed={selected}
                aria-label={`Filter by ${item}, ${count} roles`}
                onClick={() => setCategory(item)}
                className={`card-brand group flex min-w-0 flex-col items-start gap-4 p-4 text-left transition-all hover:-translate-y-0.5 hover:border-royal sm:p-5 ${selected ? "border-primary ring-2 ring-primary/10" : ""}`}
              >
                <div className="flex w-full items-start justify-between gap-2">
                  <JobCategoryIcon category={item} shape="circle" />
                  <span className="rounded-full bg-surface px-2.5 py-1 text-xs font-bold text-royal">{count} roles</span>
                </div>
                <span className="font-display text-sm font-bold leading-snug text-navy sm:text-base">{item}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-6 card-brand p-5 sm:p-6">
          <label htmlFor="job-search" className="text-sm font-semibold text-navy">Search job vacancies</label>
          <div className="relative mt-2">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="job-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by role, skill, or destination…"
              autoComplete="off"
              className="h-12 bg-background pl-11 pr-4 text-base"
            />
          </div>
          <div className="mt-5 flex flex-wrap gap-2" aria-label="Filter jobs by category">
            {jobCategories.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={category === item}
                onClick={() => setCategory(item)}
                className={`min-h-10 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${category === item ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-muted-foreground hover:border-royal hover:text-royal"}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-5 mt-9 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Available Employment Categories</h2>
            <p className="mt-2 text-sm text-muted-foreground">Select a role to view its working hours, requirements, support, and eligible permit destinations.</p>
          </div>
          <p className="text-sm font-semibold text-royal" role="status" aria-live="polite">
            Showing {filteredJobs.length} of {jobVacancies.length} roles
          </p>
        </div>

        {filteredJobs.length > 0 ? (
          <JobAccordion jobs={filteredJobs} />
        ) : (
          <div className="card-brand px-6 py-14 text-center">
            <SearchX className="mx-auto h-9 w-9 text-crimson" strokeWidth={1.5} />
            <h3 className="mt-4 text-xl font-bold">No matching roles found</h3>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">Try a broader job title, destination, or category to see more vacancies.</p>
            <Button type="button" variant="outline" className="mt-6" onClick={resetFilters}>Clear search &amp; filters</Button>
          </div>
        )}
      </section>

      <section aria-labelledby="recruitment-coverage-title" className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <SectionTitle eyebrow="International Applicants" title="Global Recruitment Coverage by Region" sub="Qualified candidates are assessed according to the employer brief, destination rules, and individual eligibility." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {recruitmentRegions.map((region) => (
              <article key={region.name} className="card-brand p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-royal/10 text-royal" aria-hidden="true"><Globe2 className="h-4 w-4" /></span>
                  <h3 className="text-lg font-bold text-royal">{region.name}</h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${region.name} countries`}>
                  {region.countries.map((country) => (
                    <li key={country} className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold text-navy">{country}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <WorkPermitOverview />
      <WorkFaqSection />
    </>
  );
}
