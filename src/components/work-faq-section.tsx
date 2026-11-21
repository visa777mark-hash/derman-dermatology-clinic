import { SectionTitle } from "@/components/site";
import { workFaqs, workFaqTitle } from "@/lib/geo-content";

export function WorkFaqSection() {
  return (
    <section aria-label={workFaqTitle} className="border-t border-border bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle eyebrow="Candidate Guidance" title={workFaqTitle} />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {workFaqs.map((faq) => (
            <article key={faq.question} className="card-brand p-6 sm:p-7">
              <h3 className="text-lg font-bold leading-snug text-navy">{faq.question}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
