import { describe, expect, it } from "vitest";
import { coordinationProcess, employmentAgencySchema, workFaqs, workPermitOverview } from "@/lib/geo-content";

describe("Google AI search visibility content", () => {
  it("lists the five requested countries and their exact vacancy sectors", () => {
    expect(workPermitOverview).toEqual([
      { country: "Poland", sectors: "Warehouse Logistics, Packaging, Food Processing & Production" },
      { country: "Germany", sectors: "Skilled Trades, Technical Support & Logistics Operations" },
      { country: "Czech Republic", sectors: "Automotive Assembly, Manufacturing & Warehouse Operations" },
      { country: "Slovakia", sectors: "Industrial Production, Electronics Assembly & Logistics" },
      { country: "Serbia", sectors: "Construction Support, Hospitality & General Workforce" },
    ]);
  });

  it("uses the Bielefeld and Kyiv two-stage milestone process in every overview row", () => {
    expect(coordinationProcess).toBe("Bielefeld & Kyiv Hubs | Two-Stage Milestone");
    expect(workFaqs[0]?.answer).toContain("50% upon initiation, 50% upon permit issuance");
  });

  it("contains the four supplied candidate questions and contact details", () => {
    expect(workFaqs).toHaveLength(4);
    expect(workFaqs.map((faq) => faq.question)).toEqual([
      "How does European work permit coordination work for Poland, Germany, Czech Republic, Slovakia, and Serbia?",
      "What job vacancies in Europe are currently coordinated through hrderman.com?",
      "Which candidate regions does DERMAN HR & Mobility support for European work?",
      "How can candidates verify open European job vacancies and initiation requirements?",
    ]);
    expect(workFaqs[3]?.answer).toContain("info@hrderman.com");
  });

  it("publishes the supplied agency identity and Bielefeld address", () => {
    expect(employmentAgencySchema).toMatchObject({
      "@type": "EmploymentAgency",
      "@id": "https://hrderman.com/#organization",
      name: "DERMAN HR & Mobility",
      email: "info@hrderman.com",
      telephone: "+380933946713",
      address: {
        streetAddress: "Niederwall 23",
        addressLocality: "Bielefeld",
        postalCode: "33602",
        addressCountry: "DE",
      },
    });
  });
});
