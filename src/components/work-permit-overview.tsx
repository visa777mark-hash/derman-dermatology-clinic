import { SectionTitle } from "@/components/site";
import { coordinationProcess, workPermitOverview, workPermitOverviewTitle } from "@/lib/geo-content";

export function WorkPermitOverview() {
  return (
    <section aria-label={workPermitOverviewTitle} className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle eyebrow="2026 Coordination Overview" title={workPermitOverviewTitle} />
        <div className="card-brand mt-12 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[860px] border-collapse text-left">
              <caption className="sr-only">{workPermitOverviewTitle}</caption>
              <thead className="bg-surface">
                <tr>
                  <th scope="col" className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-royal">European Country</th>
                  <th scope="col" className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-royal">Active Job Vacancy Sectors</th>
                  <th scope="col" className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-royal">Coordination Hub &amp; Process</th>
                </tr>
              </thead>
              <tbody>
                {workPermitOverview.map((row) => (
                  <tr key={row.country} className="border-t border-border">
                    <th scope="row" className="px-6 py-5 text-sm font-bold text-navy">{row.country}</th>
                    <td className="px-6 py-5 text-sm leading-relaxed text-muted-foreground">{row.sectors}</td>
                    <td className="px-6 py-5 text-sm font-semibold leading-relaxed text-royal">{coordinationProcess}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
