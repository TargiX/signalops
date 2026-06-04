import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function KpiCard({
  title,
  value,
  delta,
  icon: Icon,
  tone = "neutral",
}: {
  title: string;
  value: string;
  delta: string;
  icon: LucideIcon;
  tone?: "neutral" | "good" | "warn" | "bad";
}) {
  return (
    <section
      className={cn(
        "relative min-h-[132px] min-w-0 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-1)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-2)] cursor-default group",
      )}
    >
      <div 
        className={cn(
          "absolute inset-0 opacity-[0.03] transition-opacity group-hover:opacity-[0.06]",
          tone === "good" && "bg-[radial-gradient(circle_at_top_right,var(--success),transparent_60%)]",
          tone === "warn" && "bg-[radial-gradient(circle_at_top_right,var(--warning),transparent_60%)]",
          tone === "bad" && "bg-[radial-gradient(circle_at_top_right,var(--danger),transparent_60%)]",
          tone === "neutral" && "bg-[radial-gradient(circle_at_top_right,var(--accent),transparent_60%)]"
        )} 
      />
      <div className="flex items-start justify-between gap-4">
        <div className="relative">
          <p className="text-[11px] font-medium uppercase tracking-[0.03em] text-[var(--mute)]">
            {title}
          </p>
          <p className="mt-3 text-4xl font-medium leading-none tracking-[-0.03em] text-[var(--text)] [font-variant-numeric:tabular-nums]">
            {value}
          </p>
        </div>
        <span
          className={cn(
            "relative grid size-10 place-items-center rounded-lg border",
            tone === "good" && "border-transparent bg-[var(--success-soft)] text-[var(--success)]",
            tone === "warn" && "border-transparent bg-[var(--warning-soft)] text-[var(--warning)]",
            tone === "bad" && "border-transparent bg-[var(--danger-soft)] text-[var(--danger)]",
            tone === "neutral" && "border-transparent bg-[var(--accent-soft)] text-[var(--accent)]",
          )}
        >
          <Icon className="size-4" />
        </span>
      </div>
      <p
        className={cn(
          "relative mt-4 text-[12.5px]",
          tone === "good" && "text-[var(--success)]",
          tone === "warn" && "text-[var(--warning)]",
          tone === "bad" && "text-[var(--danger)]",
          tone === "neutral" && "text-[var(--text-dim)]",
        )}
      >
        {delta}
      </p>
    </section>
  );
}
