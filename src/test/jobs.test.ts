import { describe, expect, it } from "vitest";
import { eligibleApplicantNationalities, jobCategories, jobVacancies, recruitmentRegions } from "@/lib/jobs";

const expectedTitles = [
  "Warehouse Picker & Packer",
  "Forklift Operator (Reach & Counterbalance)",
  "CNC Machine Operator",
  "MIG / MAG Welder",
  "TIG Welder",
  "Automotive Assembly Line Worker",
  "Electronics Assembly Technician",
  "Food Processing & Packaging Operator",
  "Meat & Poultry Processing Worker",
  "Commercial Bakery & Pastry Assistant",
  "Industrial Carpenter & Woodworker",
  "Furniture Production & Upholstery Worker",
  "Construction Mason & Bricklayer",
  "Rebar & Concrete Formwork Worker",
  "Drywall & Interior Plasterer",
  "Industrial Painter & Sandblaster",
  "Commercial & Residential Electrician",
  "Plumber & Pipefitter",
  "HVAC Installation Technician",
  "Roofer & Facade Cladding Installer",
  "Tile Setter & Flooring Specialist",
  "Scaffolding Erector",
  "Heavy Truck Driver (CE License)",
  "Delivery Van Driver (B License)",
  "Excavator & Heavy Machinery Operator",
  "Auto Mechanic & Diesel Technician",
  "Tire Fitter & Vehicle Service Worker",
  "Metal Sheet & Laser Cutting Operator",
  "Plastic Injection Molding Operator",
  "Printing & Packaging Press Operator",
  "Textile & Garment Sewing Operator",
  "Commercial Laundry & Dry Cleaning Worker",
  "Hotel Housekeeping Attendant",
  "Kitchen Helper & Dishwasher",
  "Line Cook & Grill Chef",
  "Restaurant & Banquet Server",
  "Resort & Hotel Maintenance Worker",
  "Commercial Office & Facility Cleaner",
  "Industrial Warehouse Loader & Unloader",
  "Cold Storage & Logistics Handler",
  "Quality Control & Sorting Inspector",
  "Solar Panel Installation Helper",
  "Greenhouse Vegetable & Tomato Harvester (Seasonal)",
  "Fruit Orchard Picker & Sorter (Seasonal)",
  "Mushroom Farm & Crop Worker (Seasonal)",
  "Agricultural Tractor & Farm Hand (Seasonal)",
  "Sawmill & Timber Processing Worker",
  "Glass & Window Frame Assembler",
  "Recycling & Waste Sorting Operator",
  "General Construction & Factory Helper",
] as const;

describe("European job vacancy catalogue", () => {
  it("contains exactly the 50 requested roles in the specified order", () => {
    expect(jobVacancies.map((job) => job.title)).toEqual(expectedTitles);
    expect(new Set(jobVacancies.map((job) => job.id)).size).toBe(50);
  });

  it("offers the seven requested filters and assigns every role to a real category", () => {
    expect(jobCategories).toEqual([
      "All Roles",
      "Manufacturing & Factory",
      "Construction & Trades",
      "Warehouse & Logistics",
      "Hospitality & Food",
      "Seasonal Agriculture",
      "Technical & Drivers",
    ]);
    for (const job of jobVacancies) expect(jobCategories).toContain(job.category);
  });

  it("uses a 40-hour, five-day week for every role without wage figures", () => {
    for (const job of jobVacancies) {
      expect(job.hours).toContain("Standard 40 hours/week (8 hours/day, 5 days/week)");
      expect(job.hours.toLocaleLowerCase()).toContain("overtime");
      expect(`${job.hours} ${job.experience} ${job.benefits}`).not.toMatch(/€|\bEUR\b|\bUSD\b|\$\s*\d|\d+(?:\.\d+)?\s*(?:per|\/)\s*(?:hour|month)/i);
    }
  });

  it("includes all seven explicitly requested applicant nationalities", () => {
    for (const nationality of ["Indian", "Bangladeshi", "Nepali", "Vietnamese", "Filipino", "Pakistani", "Nigerian"]) {
      expect(eligibleApplicantNationalities).toContain(nationality);
    }
    for (const region of ["South Asia", "Southeast Asia", "Africa", "Central Asia", "Middle East"]) {
      expect(eligibleApplicantNationalities).toContain(region);
    }
  });

  it("uses the requested seasonal destinations and keeps lower-volume markets selective", () => {
    const seasonalJobs = jobVacancies.filter((job) => job.category === "Seasonal Agriculture");
    expect(seasonalJobs).toHaveLength(4);
    for (const job of seasonalJobs) {
      expect(job.destinations).toContain("Poland");
      expect(job.destinations).toContain("Czech Republic");
      expect(job.destinations).toContain("Slovakia");
      expect(job.destinations).toContain("Albania");
    }
    expect(jobVacancies[0].destinations).not.toContain("Spain");
    expect(jobVacancies[0].destinations).not.toContain("France");
    expect(jobVacancies[0].destinations).not.toContain("Greece");
    expect(jobVacancies.find((job) => job.id === "hotel-housekeeping-attendant")?.destinations).toEqual(["Greece", "Spain", "Albania", "Poland", "Czech Republic"]);
  });

  it("contains the four requested regional coverage cards", () => {
    expect(recruitmentRegions.map((region) => region.name)).toEqual([
      "South Asia",
      "Southeast & East Asia",
      "Africa",
      "Central Asia & Middle East",
    ]);
    expect(recruitmentRegions.flatMap((region) => region.countries)).toHaveLength(22);
  });
});
