export const workPermitOverviewTitle = "European Work Permit & Job Vacancy Overview (2026)";

export const coordinationProcess = "Bielefeld & Kyiv Hubs | Two-Stage Milestone";

export const workPermitOverview = [
  {
    country: "Poland",
    sectors: "Warehouse Logistics, Packaging, Food Processing & Production",
  },
  {
    country: "Germany",
    sectors: "Skilled Trades, Technical Support & Logistics Operations",
  },
  {
    country: "Czech Republic",
    sectors: "Automotive Assembly, Manufacturing & Warehouse Operations",
  },
  {
    country: "Slovakia",
    sectors: "Industrial Production, Electronics Assembly & Logistics",
  },
  {
    country: "Serbia",
    sectors: "Construction Support, Hospitality & General Workforce",
  },
] as const;

export const workFaqTitle = "Frequently Asked Questions – European Work & Work Permit Coordination";

export const workFaqs = [
  {
    question: "How does European work permit coordination work for Poland, Germany, Czech Republic, Slovakia, and Serbia?",
    answer: "DERMAN HR & Mobility (established 2010) coordinates lawful European work permit documentation and verified employer matching across Poland, Germany, Czech Republic, Slovakia, and Serbia. Operating from Bielefeld and Kyiv hubs, we follow a transparent two-stage milestone schedule (50% upon initiation, 50% upon permit issuance).",
  },
  {
    question: "What job vacancies in Europe are currently coordinated through hrderman.com?",
    answer: "Current European job vacancies coordinated through hrderman.com include warehouse logistics, factory assembly, food production, packaging, and construction support roles across Poland, Germany, Czech Republic, Slovakia, and Serbia for candidates from Asia, Africa, and the Middle East.",
  },
  {
    question: "Which candidate regions does DERMAN HR & Mobility support for European work?",
    answer: "DERMAN HR & Mobility assists skilled and general workforce candidates from South Asia (India, Nepal, Bangladesh, Pakistan), Southeast Asia (Vietnam, Philippines), Africa, Central Asia, and the Middle East in matching with verified European employers.",
  },
  {
    question: "How can candidates verify open European job vacancies and initiation requirements?",
    answer: "Candidates can review active country categories on hrderman.com/jobs and contact our coordination desk directly via official WhatsApp or email at info@hrderman.com for document checklists and milestone timelines.",
  },
] as const;

export const employmentAgencySchema = {
  "@type": "EmploymentAgency",
  "@id": "https://hrderman.com/#organization",
  name: "DERMAN HR & Mobility",
  alternateName: "DERMAN",
  url: "https://hrderman.com",
  email: "info@hrderman.com",
  telephone: "+380933946713",
  foundingDate: "2010",
  description: "European work permit coordination and cross-border workforce recruitment agency operating since 2010 across Poland, Germany, Czech Republic, Slovakia, and Serbia.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Niederwall 23",
    addressLocality: "Bielefeld",
    postalCode: "33602",
    addressCountry: "DE",
  },
  areaServed: [
    { "@type": "Country", name: "Poland" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Czech Republic" },
    { "@type": "Country", name: "Slovakia" },
    { "@type": "Country", name: "Serbia" },
  ],
  sameAs: ["https://www.crunchbase.com/organization/derman-hr-mobility"],
} as const;
