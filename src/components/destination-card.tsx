import { Link } from '@tanstack/react-router';
import { ArrowRight, Check, Clock3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { destinations, processingTime } from '@/lib/destinations';

export function DestinationCard({ destination }: { destination: (typeof destinations)[number] }) {
  return (
    <article className="flex min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm">
      <img src={destination.image} alt={destination.landmark} loading="lazy" width={1600} height={900} className="aspect-[16/9] w-full object-cover" />
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <h3 className="text-2xl font-bold tracking-normal">{destination.name}</h3>
        <p className="mt-2 text-sm font-semibold leading-relaxed text-royal sm:text-base">{destination.route}</p>
        <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-md border border-crimson/25 bg-crimson/5 px-3 py-1.5 text-sm font-bold text-crimson">
          <Clock3 className="h-4 w-4" />{processingTime(destination.days)}
        </span>
        <ul className="mb-7 mt-5 flex-1 space-y-3 text-sm leading-relaxed text-muted-foreground">
          {destination.points.map(point => <li key={point} className="flex gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-royal" />{point}</li>)}
        </ul>
        <Button asChild size="lg" className="h-12 w-full justify-between px-5 font-semibold hover:bg-royal">
          <Link to="/jobs" aria-label={`View Open Jobs for ${destination.name}`}>View Open Jobs <ArrowRight /></Link>
        </Button>
      </div>
    </article>
  );
}