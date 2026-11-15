const poland = { url: '/images/destinations/poland.jpg' };
const czech = { url: '/images/destinations/czech-republic.jpg' };
const slovakia = '/images/destinations/slovakia.jpg';
const ukraine = '/images/destinations/ukraine.jpg';
const albania = { url: '/images/destinations/albania.jpg' };
const serbia = { url: '/images/destinations/serbia.jpg' };
const macedonia = '/images/destinations/north-macedonia.jpg';
const belarus = '/images/destinations/belarus.jpg';
const germany = '/images/destinations/germany.jpg';
const france = { url: '/images/destinations/france.jpg' };
const spain = '/images/destinations/spain.jpg';
const greece = { url: '/images/destinations/greece.jpg' };

export const destinations = [
  { slug: 'poland', name: 'Poland', route: 'Work Permit & National D-Visa', days: [30, 45], image: poland.url, landmark: 'Palace of Culture and Science skyline, Warsaw', points: ['Work permit document coordination', 'National D-visa guidance', 'Employer contract preparation'] },
  { slug: 'czech-republic', name: 'Czech Republic', route: 'Employee Card & Seasonal Routes', days: [21, 30], image: czech.url, landmark: 'Charles Bridge and Prague skyline', points: ['Employee Card application support', 'Seasonal work visa guidance', 'Employer document review'] },
  { slug: 'slovakia', name: 'Slovakia', route: 'National Work & Residence Permit', days: [60, 90], image: slovakia, landmark: 'Bratislava Castle overlooking the Danube', points: ['Labour office document coordination', 'Temporary residence support', 'Employer contract preparation'] },
  { slug: 'ukraine', name: 'Ukraine', route: 'Work Permit & Temporary Residence', days: [14, 21], image: ukraine, landmark: 'Saint Sophia Cathedral and bell tower in Kyiv', points: ['Work permit application support', 'Temporary residence guidance', 'Employment document review'] },
  { slug: 'albania', name: 'Albania', route: 'Work & Residence Authorization', days: [60, 90], image: albania.url, landmark: 'Tirana cityscape, Albania', points: ['Work authorization coordination', 'Residence application guidance', 'Employer document preparation'] },
  { slug: 'serbia', name: 'Serbia', route: 'Single Work & Residence Permit', days: [14, 21], image: serbia.url, landmark: 'Church of Saint Sava in Belgrade', points: ['Single permit application support', 'Work and residence coordination', 'Employer contract preparation'] },
  { slug: 'north-macedonia', name: 'North Macedonia', route: 'Work Permit & D-Visa Support', days: [30, 45], image: macedonia, landmark: 'Stone Bridge and Skopje city center', points: ['Work permit document support', 'D-visa application guidance', 'Employer contract review'] },
  { slug: 'belarus', name: 'Belarus', route: 'Employment & Residence Procedures', days: [30, 60], image: belarus, landmark: 'National Library of Belarus in Minsk', points: ['Employment document coordination', 'Residence procedure guidance', 'Employer document review'] },
  { slug: 'germany', name: 'Germany', route: 'Skilled & Shortage Occupation Routes', days: [45, 60], image: germany, landmark: 'Brandenburg Gate in Berlin', points: ['Qualification recognition support', 'Skilled employment route guidance', 'Employer document coordination'] },
  { slug: 'france', name: 'France', route: 'Work Authorization & Long-Stay Visa', days: [60, 90], image: france.url, landmark: 'Eiffel Tower and Paris architecture', points: ['Work authorization support', 'Long-stay visa document guidance', 'Employment contract review'] },
  { slug: 'spain', name: 'Spain', route: 'Work & Residence Permit Support', days: [60, 90], image: spain, landmark: 'Royal Palace of Madrid', points: ['Work permit application guidance', 'Residence document preparation', 'Employer contract coordination'] },
  { slug: 'greece', name: 'Greece', route: 'Seasonal & Agricultural Work Visa', days: [60, 90], image: greece.url, landmark: 'Acropolis and Parthenon in Athens', points: ['Seasonal work visa support', 'Agricultural employment guidance', 'Employer contract verification'] },
] as const;

export function processingTime(days: readonly [number, number]) {
  return `${days[0]}–${days[1]} Days`;
}