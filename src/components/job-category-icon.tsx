import { Factory, Gauge, HardHat, Sprout, Truck, Utensils, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { JobCategory } from "@/lib/jobs";

const categoryAppearance: Record<JobCategory, { icon: LucideIcon; className: string }> = {
  "Warehouse & Logistics": { icon: Truck, className: "bg-sector-logistics text-sector-logistics-foreground" },
  "Manufacturing & Factory": { icon: Factory, className: "bg-sector-manufacturing text-sector-manufacturing-foreground" },
  "Construction & Trades": { icon: HardHat, className: "bg-sector-construction text-sector-construction-foreground" },
  "Hospitality & Food": { icon: Utensils, className: "bg-sector-hospitality text-sector-hospitality-foreground" },
  "Seasonal Agriculture": { icon: Sprout, className: "bg-sector-agriculture text-sector-agriculture-foreground" },
  "Technical & Drivers": { icon: Gauge, className: "bg-sector-technical text-sector-technical-foreground" },
};

export function JobCategoryIcon({ category, shape = "square" }: { category: JobCategory; shape?: "circle" | "square" }) {
  const { icon: Icon, className } = categoryAppearance[category];
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex shrink-0 items-center justify-center",
        shape === "circle" ? "h-12 w-12 rounded-full" : "h-11 w-11 rounded-xl",
        className,
      )}
    >
      <Icon className={shape === "circle" ? "h-6 w-6" : "h-5 w-5"} strokeWidth={1.8} />
    </span>
  );
}
