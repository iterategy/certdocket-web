"use client";

import Link from "next/link";
import { useState } from "react";
import { Check, Minus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type BillingInterval = "monthly" | "annual";

type Tier = {
  id: "starter" | "professional";
  name: string;
  description: string;
  monthlyPrice: number;
  annualPricePerMonth: number;
  ctaLabel: string;
  ctaHref: string;
  highlight?: boolean;
  highlights: string[];
};

const ANNUAL_DISCOUNT = 0.2;

const tiers: Tier[] = [
  {
    id: "starter",
    name: "Starter",
    description: "For small teams getting their certificate program off the ground.",
    monthlyPrice: 39,
    annualPricePerMonth: Math.round(39 * (1 - ANNUAL_DISCOUNT)),
    ctaLabel: "Start with Starter",
    ctaHref: "/signup?plan=starter",
    highlights: [
      "Up to 100 certificates",
      "Renewal reminders via email",
      "Single workspace",
      "Standard support",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    description: "For growing teams that need automation, integrations, and SSO.",
    monthlyPrice: 59,
    annualPricePerMonth: Math.round(59 * (1 - ANNUAL_DISCOUNT)),
    ctaLabel: "Start with Professional",
    ctaHref: "/signup?plan=professional",
    highlight: true,
    highlights: [
      "Unlimited certificates",
      "Automated renewal workflows",
      "Integrations (Slack, email, webhooks)",
      "SSO & role-based access",
      "Priority support",
    ],
  },
];

type FeatureRow = {
  label: string;
  starter: string | boolean;
  professional: string | boolean;
};

type FeatureGroup = {
  name: string;
  rows: FeatureRow[];
};

const featureGroups: FeatureGroup[] = [
  {
    name: "Core",
    rows: [
      { label: "Certificate records", starter: "Up to 100", professional: "Unlimited" },
      { label: "Document storage", starter: "5 GB", professional: "100 GB" },
      { label: "Workspaces", starter: "1", professional: "Unlimited" },
      { label: "Team members", starter: "Up to 5", professional: "Unlimited" },
    ],
  },
  {
    name: "Automation",
    rows: [
      { label: "Email renewal reminders", starter: true, professional: true },
      { label: "Custom reminder cadences", starter: false, professional: true },
      { label: "Automated renewal workflows", starter: false, professional: true },
      { label: "Bulk import & export", starter: true, professional: true },
    ],
  },
  {
    name: "Integrations",
    rows: [
      { label: "Slack notifications", starter: false, professional: true },
      { label: "Webhooks", starter: false, professional: true },
      { label: "API access", starter: false, professional: true },
      { label: "SSO (SAML / OIDC)", starter: false, professional: true },
    ],
  },
  {
    name: "Support & compliance",
    rows: [
      { label: "Audit log", starter: false, professional: true },
      { label: "Role-based access control", starter: false, professional: true },
      { label: "Standard email support", starter: true, professional: true },
      { label: "Priority support", starter: false, professional: true },
    ],
  },
];

export function PricingPage() {
  const [interval, setInterval] = useState<BillingInterval>("monthly");

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          CertDocket
        </Link>
        <nav className="flex items-center gap-2">
          <Button variant="ghost" size="sm" render={<Link href="/" />}>
            Home
          </Button>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-6 pt-12 pb-8 text-center">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Simple, transparent pricing
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Pick the plan that fits your team. Switch or cancel anytime.
        </p>

        <div className="mt-8 flex justify-center">
          <BillingIntervalToggle value={interval} onChange={setInterval} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {tiers.map((tier) => (
            <PricingCard key={tier.id} tier={tier} interval={interval} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Compare plans
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Every feature included in each plan.
        </p>

        <ComparisonTable interval={interval} />
      </section>
    </main>
  );
}

function BillingIntervalToggle({
  value,
  onChange,
}: {
  value: BillingInterval;
  onChange: (next: BillingInterval) => void;
}) {
  return (
    <div
      role="radiogroup"
      aria-label="Billing interval"
      className="inline-flex items-center gap-1 rounded-full border border-border bg-muted p-1"
    >
      <ToggleOption
        active={value === "monthly"}
        onClick={() => onChange("monthly")}
        label="Monthly"
      />
      <ToggleOption
        active={value === "annual"}
        onClick={() => onChange("annual")}
        label="Annual"
        badge={`Save ${Math.round(ANNUAL_DISCOUNT * 100)}%`}
      />
    </div>
  );
}

function ToggleOption({
  active,
  onClick,
  label,
  badge,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  badge?: string;
}) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={active}
      onClick={onClick}
      className={cn(
        "inline-flex h-8 items-center gap-2 rounded-full px-4 text-sm font-medium transition-colors",
        active
          ? "bg-background text-foreground shadow-sm"
          : "text-muted-foreground hover:text-foreground",
      )}
    >
      {label}
      {badge ? (
        <span
          className={cn(
            "rounded-full px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
            active
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground",
          )}
        >
          {badge}
        </span>
      ) : null}
    </button>
  );
}

function PricingCard({ tier, interval }: { tier: Tier; interval: BillingInterval }) {
  const price =
    interval === "monthly" ? tier.monthlyPrice : tier.annualPricePerMonth;

  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl border bg-card p-8 shadow-sm",
        tier.highlight ? "border-primary ring-1 ring-primary" : "border-border",
      )}
    >
      {tier.highlight ? (
        <span className="absolute -top-3 right-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
          Most popular
        </span>
      ) : null}

      <h3 className="text-xl font-semibold">{tier.name}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>

      <div className="mt-6 flex items-baseline gap-1">
        <span className="text-4xl font-semibold tracking-tight">${price}</span>
        <span className="text-sm text-muted-foreground">/ month</span>
      </div>
      <p className="mt-1 text-xs text-muted-foreground">
        {interval === "annual"
          ? `Billed annually at $${price * 12}/yr`
          : "Billed monthly"}
      </p>

      <Button
        className="mt-6 w-full"
        variant={tier.highlight ? "default" : "outline"}
        size="lg"
        render={<Link href={tier.ctaHref} />}
      >
        {tier.ctaLabel}
      </Button>

      <ul className="mt-8 space-y-3">
        {tier.highlights.map((highlight) => (
          <li key={highlight} className="flex items-start gap-2 text-sm">
            <Check className="mt-0.5 size-4 shrink-0 text-foreground" aria-hidden />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ComparisonTable({ interval }: { interval: BillingInterval }) {
  return (
    <div className="mt-8 overflow-x-auto">
      <table className="w-full border-separate border-spacing-0 text-left text-sm">
        <thead>
          <tr>
            <th
              scope="col"
              className="sticky left-0 z-10 w-1/2 border-b border-border bg-background py-4 pr-4 font-medium text-muted-foreground"
            >
              Feature
            </th>
            {tiers.map((tier) => (
              <th
                key={tier.id}
                scope="col"
                className="border-b border-border py-4 px-4 align-bottom"
              >
                <div className="font-semibold text-foreground">{tier.name}</div>
                <div className="mt-1 text-xs font-normal text-muted-foreground">
                  $
                  {interval === "monthly"
                    ? tier.monthlyPrice
                    : tier.annualPricePerMonth}
                  /mo
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {featureGroups.map((group) => (
            <FeatureGroupRows key={group.name} group={group} />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="py-6" />
            {tiers.map((tier) => (
              <td key={tier.id} className="py-6 pr-4 align-top">
                <Button
                  className="w-full"
                  variant={tier.highlight ? "default" : "outline"}
                  size="lg"
                  render={<Link href={tier.ctaHref} />}
                >
                  {tier.ctaLabel}
                </Button>
              </td>
            ))}
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

function FeatureGroupRows({ group }: { group: FeatureGroup }) {
  return (
    <>
      <tr>
        <th
          scope="colgroup"
          colSpan={tiers.length + 1}
          className="border-b border-border bg-muted/40 py-2 pl-0 pr-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
        >
          {group.name}
        </th>
      </tr>
      {group.rows.map((row) => (
        <tr key={row.label}>
          <th
            scope="row"
            className="border-b border-border py-3 pr-4 font-normal text-foreground"
          >
            {row.label}
          </th>
          {tiers.map((tier) => (
            <td
              key={tier.id}
              className="border-b border-border py-3 px-4 text-muted-foreground"
            >
              <FeatureCell value={tier.id === "starter" ? row.starter : row.professional} />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}

function FeatureCell({ value }: { value: string | boolean }) {
  if (value === true) {
    return (
      <>
        <Check className="size-4 text-foreground" aria-hidden />
        <span className="sr-only">Included</span>
      </>
    );
  }
  if (value === false) {
    return (
      <>
        <Minus className="size-4 text-muted-foreground" aria-hidden />
        <span className="sr-only">Not included</span>
      </>
    );
  }
  return <span className="text-foreground">{value}</span>;
}
