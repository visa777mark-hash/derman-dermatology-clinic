import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowLeft, Clock3 } from 'lucide-react';
import { destinations, processingTime } from '@/lib/destinations';
import { Button } from '@/components/ui/button';
import { WaButton } from '@/components/site';

export const Route = createFileRoute('/destinations/$country')({
  head: ({ params }) => {
    const destination = destinations.find(item => item.slug === params.country);
    const title = destination ? `${destination.name} Work & Visa Support — DERMAN` : 'Destination Unavailable — DERMAN';
    const description = destination ? `${destination.route} in ${destination.name}. Processing timeframe: ${processingTime(destination.days)}. Contact DERMAN for current information.` : 'Explore European work and residence destinations with DERMAN.';
    return { meta: [{ title }, { name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] };
  },
  component: DestinationPage,
});

function DestinationPage() {
  const { country } = Route.useParams();
  const destination = destinations.find(item => item.slug === country);
  if (!destination) return <section className="mx-auto max-w-7xl px-6 py-20"><h1 className="text-3xl font-bold">Destination unavailable</h1><Link to="/" className="mt-6 inline-block text-royal">Back to destinations</Link></section>;
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <Button asChild variant="link" className="h-auto p-0"><Link to="/"><ArrowLeft />Back to destinations</Link></Button>
          <h1 className="mt-8 text-4xl font-extrabold tracking-normal sm:text-5xl">{destination.name}</h1>
          <p className="mt-4 text-lg font-semibold text-royal">{destination.route}</p>
          <span className="mt-5 inline-flex items-center gap-2 rounded-md border border-crimson/25 bg-crimson/5 px-3 py-2 text-sm font-bold text-crimson"><Clock3 className="h-4 w-4" />{processingTime(destination.days)}</span>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-bold tracking-normal">Detailed information coming soon</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">Country-specific requirements and application details will be added shortly. Contact DERMAN for current information about {destination.name}.</p>
        <div className="mt-8"><WaButton>Contact Us on WhatsApp</WaButton></div>
      </section>
    </>
  );
}