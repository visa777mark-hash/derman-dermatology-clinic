import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Check, Copy, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const title = "About DERMAN | European Recruitment Timeline & Leadership Team Since 2010";
const description = "Explore DERMAN’s recruitment and mobility journey from Kyiv in 2010 to Bielefeld, Germany, and meet our international leadership team.";

export const Route = createFileRoute("/about")({
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
  component: About,
});

const milestones = [
  { year: "2010", title: "Our beginnings in Kyiv", text: "Launched operations in Kyiv, Ukraine, providing employment placement and work permit coordination for Ukrainian citizens traveling to Poland, Hungary, and the Czech Republic." },
  { year: "2012", title: "University recruitment partnerships", text: "Invited by multiple universities in Kyiv and Kharkiv to serve as an official international student recruitment and admissions partner." },
  { year: "2014", title: "An expanding global network", text: "Expanded into African and South Asian markets, establishing long-term B2B partnerships with recruitment agencies across Nigeria, India, and Bangladesh." },
  { year: "2018", title: "Direct European employer partnerships", text: "Formed direct employer partnerships in Germany, Norway, France, and Italy to source and screen qualified international candidates." },
  { year: "2022", title: "Our European office in Bielefeld", text: "Opened our European representative office in Bielefeld, Germany, strengthening direct corporate placement and compliance operations across the EU." },
  { year: "2025", title: "A decade of shared leadership", text: "Celebrated a major organizational milestone with our core leadership and operations team working together for over 10 consecutive years." },
  { year: "2026", title: "A direct channel for global talent", text: "Opened our direct retail advisory channel, enabling individual candidates worldwide to apply directly alongside our established B2B agency network." },
];

const leaders = [
  { monogram: "IV", name: "Ivan", role: "Sales Manager", phone: "+380 93 394 6713", location: null },
  { monogram: "AL", name: "Alina", role: "EU Business Director", phone: "+49 152 5948 1581", location: "Bielefeld Office, Germany" },
  { monogram: "JK", name: "Jakub", role: "Marketing & PR Manager", phone: "+44 734 313 7941", location: null },
];

function BackHome() {
  return <Button asChild variant="outline"><Link to="/"><ArrowLeft />Back to Home</Link></Button>;
}

function LeadershipCard({ leader, index }: { leader: typeof leaders[number]; index: number }) {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");

  async function copyPhone() {
    try {
      await navigator.clipboard.writeText(leader.phone);
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }
  }

  return (
    <article className={`flex min-w-0 flex-col rounded-lg border border-t-[3px] bg-card p-5 shadow-sm lg:p-6 ${index === 1 ? "border-t-crimson" : "border-t-royal"}`}>
      <span className={`flex h-16 w-16 items-center justify-center rounded-full font-display text-xl font-bold ${index === 1 ? "bg-crimson/10 text-crimson" : "bg-royal/10 text-royal"}`}>{leader.monogram}</span>
      <h3 className="mt-5 text-2xl font-bold tracking-normal">{leader.name}</h3>
      <span className="mt-2 w-fit rounded-full bg-surface px-3 py-1 text-xs font-semibold text-primary">{leader.role}</span>
      <div className="mt-4 min-h-10 text-xs text-muted-foreground">
        {leader.location && <p className="flex items-start gap-1.5"><MapPin className="h-4 w-4 shrink-0" />{leader.location}</p>}
      </div>
      <div className="mt-auto flex items-center gap-2 rounded-md border border-border bg-surface p-2.5 md:flex-wrap lg:flex-nowrap">
        <Phone className="h-4 w-4 shrink-0 text-royal" />
        <a href={`tel:${leader.phone.replaceAll(" ", "")}`} className="min-w-0 flex-1 whitespace-nowrap text-sm font-semibold text-primary hover:underline md:order-first md:basis-full lg:order-none lg:basis-auto">{leader.phone}</a>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="icon" variant="ghost" className="h-8 w-8 shrink-0 md:ml-auto lg:ml-0" aria-label={`Copy ${leader.name}'s phone number`} onClick={copyPhone}>
              {copyState === "copied" ? <Check /> : <Copy />}
            </Button>
          </TooltipTrigger>
          <TooltipContent>{copyState === "copied" ? "Copied" : "Copy phone number"}</TooltipContent>
        </Tooltip>
      </div>
      <p role="status" className="mt-2 min-h-4 text-xs text-muted-foreground">{copyState === "copied" ? "Phone number copied." : copyState === "error" ? "Could not copy. Please select the phone number." : ""}</p>
    </article>
  );
}

function About() {
  return (
    <>
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl px-4 pb-12 pt-8 sm:px-6 sm:pb-14">
          <BackHome />
          <p className="mt-8 text-xs font-bold uppercase text-crimson">About Us · Since 2010</p>
          <h1 className="mt-3 max-w-5xl text-3xl font-extrabold leading-tight tracking-normal sm:text-4xl lg:text-5xl">About DERMAN: 16 Years of International Recruitment &amp; Mobility Coordination</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-primary">From Kyiv to Bielefeld—connecting verified European employers with global talent and international agency partners since 2010.</p>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">DERMAN is a private international HR consulting and recruitment coordination agency supporting European employment and global mobility. We connect employers, international agency partners, and individual candidates through recruitment screening, work permit coordination, and visa guidance.</p>
        </div>
      </section>
      <section aria-labelledby="journey-heading" className="bg-surface py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="journey-heading" className="text-2xl font-bold tracking-normal sm:text-3xl">Our Journey &amp; Growth Timeline</h2>
          <div className="mt-4 h-1 w-14 bg-crimson" />
          <ol className="relative mt-10 space-y-6 before:absolute before:bottom-6 before:left-8 before:top-6 before:w-px before:bg-border md:before:left-1/2">
            {milestones.map((milestone, index) => (
              <li key={milestone.year} className="relative grid grid-cols-[4rem_minmax(0,1fr)] items-start gap-4 md:grid-cols-[minmax(0,1fr)_5rem_minmax(0,1fr)] md:gap-6">
                <span className={`relative z-10 col-start-1 row-start-1 mt-5 flex h-10 items-center justify-center rounded-md font-display text-sm font-bold text-primary-foreground md:col-start-2 ${index % 2 === 0 ? "bg-royal" : "bg-crimson"}`}>{milestone.year}</span>
                <article className={`col-start-2 row-start-1 rounded-lg border border-border bg-card p-5 shadow-sm sm:p-6 ${index % 2 === 0 ? "md:col-start-1" : "md:col-start-3"}`}>
                  <h3 className="text-base font-bold tracking-normal sm:text-lg">{milestone.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{milestone.text}</p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section aria-labelledby="team-heading" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <h2 id="team-heading" className="text-2xl font-bold tracking-normal sm:text-3xl">Core Management Team</h2>
        <div className="mt-4 h-1 w-14 bg-royal" />
        <TooltipProvider delayDuration={200}>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {leaders.map((leader, index) => <LeadershipCard key={leader.name} leader={leader} index={index} />)}
          </div>
        </TooltipProvider>
        <div className="mt-10 border-t border-border pt-8"><BackHome /></div>
      </section>
    </>
  );
}
