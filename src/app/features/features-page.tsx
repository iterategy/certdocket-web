import Link from "next/link";
import {
  ArrowRight,
  BellRing,
  Calendar,
  CheckCircle2,
  ClipboardList,
  CreditCard,
  FileBarChart,
  Inbox,
  LayoutDashboard,
  MailCheck,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CTA } from "@/components/site/cta";
import { cn } from "@/lib/utils";

type FeatureSectionData = {
  id: string;
  eyebrow: string;
  icon: LucideIcon;
  title: string;
  description: string;
  benefit: string;
  bullets: string[];
  cta: { label: string; href: string };
  illustration: React.ReactNode;
};

const features: FeatureSectionData[] = [
  {
    id: "certification-tracking",
    eyebrow: "Certification Tracking",
    icon: ClipboardList,
    title: "Every employee, every credential, in one place",
    description:
      "Build a single source of truth for your team's certifications. Track each person's required credentials, upload proof, and watch expiration dates roll up automatically — no spreadsheet wrangling, no missing paperwork after a new hire.",
    benefit:
      "Cut roster lookups from hours to seconds when an inspector walks in.",
    bullets: [
      "Employee roster synced from CSV or your HRIS",
      "Configurable certification types per role or site",
      "Expiration dates with current / expiring / expired status",
      "Upload proof documents from any device",
    ],
    cta: { label: "See the roster in action", href: "#signup" },
    illustration: <CertificationTrackingMock />,
  },
  {
    id: "compliance-dashboard",
    eyebrow: "Compliance Dashboard",
    icon: LayoutDashboard,
    title: "Real-time visibility across every site and department",
    description:
      "Open the dashboard and know exactly where you stand. Headline compliance percentages, department-by-department breakdowns, and a focused at-risk list make it obvious where to spend the next hour.",
    benefit:
      "Stop guessing whether you're audit-ready — your dashboard always reflects reality.",
    bullets: [
      "Live compliance percentage across the org",
      "Department, location, and role breakdowns",
      "Prioritized at-risk employee list",
      "Filter by credential, status, or expiry window",
    ],
    cta: { label: "Tour the dashboard", href: "#signup" },
    illustration: <ComplianceDashboardMock />,
  },
  {
    id: "automated-reminders",
    eyebrow: "Automated Reminders",
    icon: BellRing,
    title: "Renewal nudges fire on schedule — without you in the loop",
    description:
      "Reminders go out to the right people at 90, 30, 7, and 1 days before expiration. Employees get the prompt, managers get the heads-up, and you get the confidence that nothing quietly lapses while you're heads-down.",
    benefit:
      "Stop hand-tracking deadlines in a calendar that nobody else opens.",
    bullets: [
      "Email alerts at 90 / 30 / 7 / 1 days before expiration",
      "Routed to employees and their managers",
      "One-click upload link straight from the reminder",
      "Escalations when a credential actually lapses",
    ],
    cta: { label: "See a reminder", href: "#signup" },
    illustration: <AutomatedRemindersMock />,
  },
  {
    id: "audit-reports",
    eyebrow: "Audit Reports",
    icon: FileBarChart,
    title: "Audit-ready PDFs and CSVs in a single click",
    description:
      "Generate inspector-ready documentation on demand. Choose a credential, a date range, or a department, and CertDocket renders a stamped PDF or CSV that's formatted exactly the way auditors expect to see it.",
    benefit:
      "Turn a two-week pre-audit fire drill into a two-minute export.",
    bullets: [
      "One-click PDF and CSV generation",
      "Audit-trail metadata baked into every export",
      "Historical compliance over any date range",
      "Coverage-gap and exception reports included",
    ],
    cta: { label: "Generate a sample report", href: "#signup" },
    illustration: <AuditReportsMock />,
  },
  {
    id: "billing-and-plans",
    eyebrow: "Billing & Plans",
    icon: CreditCard,
    title: "Straightforward per-month pricing, with a 14-day free trial",
    description:
      "Pick the plan that matches your team. Starter for small operations getting off spreadsheets, Professional for multi-site teams that can't afford a missed renewal. Every plan starts with a 14-day free trial — no credit card required.",
    benefit:
      "Predictable monthly cost. No surcharges for storage, reports, or reminders.",
    bullets: [
      "Starter plan for teams up to 25 employees",
      "Professional plan for multi-site teams up to 100",
      "14-day free trial on every plan",
      "Cancel or change plans any time",
    ],
    cta: { label: "Compare plans", href: "/pricing" },
    illustration: <BillingPlansMock />,
  },
  {
    id: "weekly-digest",
    eyebrow: "Weekly Digest",
    icon: MailCheck,
    title: "A Monday-morning compliance summary, in your inbox",
    description:
      "Every week, CertDocket emails you a focused digest: what expired, what's expiring this month, what was renewed, and which employees still owe documentation. Five minutes to read, the whole team aligned for the week.",
    benefit:
      "Walk into Monday already knowing what compliance work the week needs.",
    bullets: [
      "Automated summary delivered every Monday",
      "Highlights expirations, renewals, and exceptions",
      "Per-manager digests scoped to their team",
      "Unsubscribe or change cadence any time",
    ],
    cta: { label: "Subscribe to the digest", href: "#signup" },
    illustration: <WeeklyDigestMock />,
  },
];

export function FeaturesPage() {
  return (
    <>
      <PageHero />
      {features.map((feature, index) => (
        <FeatureSection key={feature.id} feature={feature} index={index} />
      ))}
      <CTA />
    </>
  );
}

function PageHero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,oklch(0.92_0.04_250),transparent)]"
      />
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Badge variant="outline" className="mb-6 gap-1.5">
            <Sparkles className="size-3 text-primary" aria-hidden />
            What CertDocket does
          </Badge>
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Everything you need to keep every credential current
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Six features that replace the spreadsheets, shared inboxes, and
            reminder calendars your safety team uses today — and the audit
            scramble that comes with them.
          </p>
          <nav
            aria-label="Feature sections"
            className="mt-10 flex flex-wrap justify-center gap-2"
          >
            {features.map((feature) => (
              <Link
                key={feature.id}
                href={`#${feature.id}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
              >
                <feature.icon className="size-3.5" aria-hidden />
                {feature.eyebrow}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}

function FeatureSection({
  feature,
  index,
}: {
  feature: FeatureSectionData;
  index: number;
}) {
  const Icon = feature.icon;
  const reverse = index % 2 === 1;
  const tinted = index % 2 === 1;

  return (
    <section
      id={feature.id}
      className={cn(
        "border-b border-border/60",
        tinted ? "bg-muted/30" : undefined,
      )}
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div
          className={cn(
            "grid items-center gap-12 lg:grid-cols-2 lg:gap-16",
            reverse && "lg:[&>*:first-child]:order-2",
          )}
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-4.5" aria-hidden />
              </span>
              <p className="text-sm font-medium text-muted-foreground">
                {feature.eyebrow}
              </p>
            </div>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              {feature.title}
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              {feature.description}
            </p>
            <div className="mt-6 flex items-start gap-3 rounded-lg border border-primary/20 bg-primary/5 p-4">
              <CheckCircle2
                className="mt-0.5 size-5 shrink-0 text-primary"
                aria-hidden
              />
              <p className="text-sm font-medium text-foreground">
                {feature.benefit}
              </p>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {feature.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-2 text-sm text-foreground"
                >
                  <CheckCircle2
                    className="mt-0.5 size-4 shrink-0 text-emerald-600"
                    aria-hidden
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" render={<Link href={feature.cta.href} />}>
                {feature.cta.label}
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                render={<Link href="/pricing">Start free trial</Link>}
              />
            </div>
          </div>
          <div>
            <FigureFrame>{feature.illustration}</FigureFrame>
          </div>
        </div>
      </div>
    </section>
  );
}

function FigureFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      role="img"
      aria-label="Product illustration placeholder"
      className="relative overflow-hidden rounded-2xl bg-background p-3 ring-1 shadow-sm ring-foreground/10 sm:p-4"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_0%,oklch(0.95_0.03_250),transparent)]"
      />
      {children}
    </div>
  );
}

function CertificationTrackingMock() {
  const rows = [
    {
      name: "Aiden Park",
      role: "Forklift Operator",
      cert: "OSHA 10",
      due: "Dec 12",
      status: "ok" as const,
    },
    {
      name: "Priya Shah",
      role: "Site Manager",
      cert: "First Aid / CPR",
      due: "Nov 28",
      status: "warn" as const,
    },
    {
      name: "Marcus Reed",
      role: "Lineman",
      cert: "Powered Industrial Truck",
      due: "Oct 04",
      status: "bad" as const,
    },
    {
      name: "Lina Chen",
      role: "Welder",
      cert: "AWS D1.1",
      due: "Feb 17",
      status: "ok" as const,
    },
  ];

  return (
    <div className="overflow-hidden rounded-xl border border-border/60 bg-card text-card-foreground">
      <div className="flex items-center justify-between border-b border-border/60 bg-muted/40 px-4 py-3 text-xs">
        <span className="font-medium text-foreground">Roster · 142 employees</span>
        <span className="text-muted-foreground">Filter: Active credentials</span>
      </div>
      <div className="grid grid-cols-[1.4fr_1fr_0.8fr_auto] gap-x-3 border-b border-border/60 px-4 py-2 text-[10px] font-medium tracking-wider text-muted-foreground uppercase">
        <span>Employee</span>
        <span>Credential</span>
        <span>Expires</span>
        <span>Status</span>
      </div>
      <ul className="divide-y divide-border/60 text-sm">
        {rows.map((row) => (
          <li
            key={row.name}
            className="grid grid-cols-[1.4fr_1fr_0.8fr_auto] items-center gap-x-3 px-4 py-3"
          >
            <div>
              <div className="font-medium text-foreground">{row.name}</div>
              <div className="text-xs text-muted-foreground">{row.role}</div>
            </div>
            <div className="text-xs text-foreground">{row.cert}</div>
            <div className="text-xs text-muted-foreground">{row.due}</div>
            <StatusBadge status={row.status} />
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between border-t border-border/60 bg-muted/30 px-4 py-2 text-[11px] text-muted-foreground">
        <span>4 of 142 shown</span>
        <span className="inline-flex items-center gap-1">
          <ShieldCheck className="size-3 text-emerald-600" aria-hidden />
          Synced 2 min ago
        </span>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: "ok" | "warn" | "bad" }) {
  const styles = {
    ok: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    warn: "bg-amber-50 text-amber-700 ring-amber-200",
    bad: "bg-rose-50 text-rose-700 ring-rose-200",
  } as const;
  const labels = {
    ok: "Current",
    warn: "Expiring",
    bad: "Expired",
  } as const;
  return (
    <span
      className={cn(
        "inline-flex items-center justify-self-end rounded-full px-2 py-0.5 text-[10px] font-medium ring-1 ring-inset",
        styles[status],
      )}
    >
      {labels[status]}
    </span>
  );
}

function ComplianceDashboardMock() {
  const stats = [
    { label: "Overall compliance", value: "94%", trend: "+2.1%", good: true },
    { label: "Expiring in 30 days", value: "11", trend: "needs action", good: false },
    { label: "Active credentials", value: "1,284", trend: "across 7 sites", good: true },
  ];
  const departments = [
    { name: "Field Operations", pct: 96 },
    { name: "Warehouse", pct: 91 },
    { name: "Maintenance", pct: 78 },
    { name: "Logistics", pct: 88 },
  ];
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-3 gap-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-border/60 bg-card p-3"
          >
            <div className="text-[10px] font-medium tracking-wider text-muted-foreground uppercase">
              {stat.label}
            </div>
            <div className="mt-2 font-heading text-2xl font-semibold tracking-tight">
              {stat.value}
            </div>
            <div
              className={cn(
                "mt-1 inline-flex items-center gap-1 text-[11px]",
                stat.good ? "text-emerald-700" : "text-amber-700",
              )}
            >
              {stat.good ? (
                <TrendingUp className="size-3" aria-hidden />
              ) : (
                <BellRing className="size-3" aria-hidden />
              )}
              {stat.trend}
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-border/60 bg-card p-4">
        <div className="flex items-center justify-between text-xs">
          <span className="font-medium text-foreground">By department</span>
          <span className="text-muted-foreground">Last 30 days</span>
        </div>
        <ul className="mt-3 space-y-3">
          {departments.map((dept) => (
            <li key={dept.name} className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="text-foreground">{dept.name}</span>
                <span className="text-muted-foreground">{dept.pct}%</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                <div
                  className={cn(
                    "h-full rounded-full",
                    dept.pct >= 90
                      ? "bg-emerald-500"
                      : dept.pct >= 80
                        ? "bg-amber-500"
                        : "bg-rose-500",
                  )}
                  style={{ width: `${dept.pct}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function AutomatedRemindersMock() {
  const cadence = [
    { days: 90, tone: "muted" as const },
    { days: 30, tone: "info" as const },
    { days: 7, tone: "warn" as const },
    { days: 1, tone: "alert" as const },
  ];
  const toneClasses = {
    muted: "bg-muted text-muted-foreground",
    info: "bg-sky-50 text-sky-700 ring-1 ring-inset ring-sky-200",
    warn: "bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-200",
    alert: "bg-rose-50 text-rose-700 ring-1 ring-inset ring-rose-200",
  } as const;
  return (
    <div className="space-y-3">
      <div className="overflow-hidden rounded-xl border border-border/60 bg-card">
        <div className="flex items-center gap-3 border-b border-border/60 bg-muted/40 px-4 py-2 text-[11px] text-muted-foreground">
          <Inbox className="size-3.5" aria-hidden />
          <span className="font-medium text-foreground">reminders@certdocket.com</span>
          <span className="ml-auto">Today · 8:02 AM</span>
        </div>
        <div className="space-y-3 px-4 py-4">
          <div className="text-sm font-semibold text-foreground">
            Your forklift certification expires in 7 days
          </div>
          <p className="text-xs leading-relaxed text-muted-foreground">
            Hi Aiden — your OSHA Powered Industrial Truck certification expires on
            November 5. Tap below to upload your renewal so you don&apos;t lose
            your authorization to operate.
          </p>
          <div className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground">
            Upload renewal
            <ArrowRight className="size-3" aria-hidden />
          </div>
          <div className="text-[11px] text-muted-foreground">
            Manager copy: Priya Shah · Site: Atlas Logistics — Dock 4
          </div>
        </div>
      </div>
      <div className="rounded-xl border border-border/60 bg-card p-3">
        <div className="text-[10px] font-medium tracking-wider text-muted-foreground uppercase">
          Reminder cadence
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {cadence.map((step) => (
            <span
              key={step.days}
              className={cn(
                "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium",
                toneClasses[step.tone],
              )}
            >
              <Calendar className="size-3" aria-hidden />
              {step.days} {step.days === 1 ? "day" : "days"} before
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function AuditReportsMock() {
  const lines = [
    { label: "Atlas Logistics", value: "98% compliant" },
    { label: "Northwind Builders", value: "94% compliant" },
    { label: "Harborline Group", value: "91% compliant" },
    { label: "Meridian Industrial", value: "87% compliant" },
  ];
  return (
    <div className="space-y-3">
      <div className="overflow-hidden rounded-xl border border-border/60 bg-card">
        <div className="flex items-center justify-between border-b border-border/60 bg-muted/40 px-4 py-2 text-[11px]">
          <span className="font-medium text-foreground">
            compliance-report-2026-Q1.pdf
          </span>
          <span className="text-muted-foreground">12 pages · 184 KB</span>
        </div>
        <div className="space-y-3 px-5 py-5">
          <div>
            <div className="text-[10px] font-medium tracking-wider text-muted-foreground uppercase">
              Quarterly compliance summary
            </div>
            <div className="mt-1 font-heading text-base font-semibold text-foreground">
              Atlas Logistics — Q1 2026
            </div>
          </div>
          <div className="h-px bg-border/60" />
          <ul className="space-y-2 text-xs">
            {lines.map((line) => (
              <li
                key={line.label}
                className="flex items-center justify-between"
              >
                <span className="text-foreground">{line.label}</span>
                <span className="text-muted-foreground">{line.value}</span>
              </li>
            ))}
          </ul>
          <div className="h-px bg-border/60" />
          <div className="flex items-center justify-between text-[10px] text-muted-foreground">
            <span>Generated by CertDocket · Audit trail attached</span>
            <span>Signed Mar 31, 2026</span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        <Badge variant="outline" className="gap-1.5">
          <FileBarChart className="size-3 text-primary" aria-hidden />
          PDF
        </Badge>
        <Badge variant="outline" className="gap-1.5">
          <FileBarChart className="size-3 text-primary" aria-hidden />
          CSV
        </Badge>
        <Badge variant="outline" className="gap-1.5">
          <ShieldCheck className="size-3 text-emerald-600" aria-hidden />
          Audit-trail metadata
        </Badge>
      </div>
    </div>
  );
}

function BillingPlansMock() {
  const plans = [
    {
      name: "Starter",
      price: 39,
      blurb: "Small teams getting off spreadsheets.",
      features: ["Up to 25 employees", "Renewal reminders", "PDF audit reports"],
      featured: false,
    },
    {
      name: "Professional",
      price: 59,
      blurb: "Multi-site teams that can't miss a renewal.",
      features: ["Up to 100 employees", "SSO & RBAC", "HRIS integrations"],
      featured: true,
    },
  ];
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={cn(
            "relative rounded-xl border bg-card p-4",
            plan.featured ? "border-primary ring-1 ring-primary" : "border-border/60",
          )}
        >
          {plan.featured ? (
            <span className="absolute -top-2 right-3 rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary-foreground">
              Most popular
            </span>
          ) : null}
          <div className="text-sm font-semibold text-foreground">{plan.name}</div>
          <div className="mt-1 text-[11px] text-muted-foreground">{plan.blurb}</div>
          <div className="mt-3 flex items-baseline gap-1">
            <span className="font-heading text-2xl font-semibold tracking-tight">
              ${plan.price}
            </span>
            <span className="text-xs text-muted-foreground">/ month</span>
          </div>
          <ul className="mt-3 space-y-1.5 text-[11px]">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-1.5">
                <CheckCircle2
                  className="mt-0.5 size-3 shrink-0 text-emerald-600"
                  aria-hidden
                />
                <span className="text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
          <div
            className={cn(
              "mt-4 inline-flex w-full items-center justify-center rounded-md px-2.5 py-1.5 text-[11px] font-medium",
              plan.featured
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-background text-foreground",
            )}
          >
            Start 14-day free trial
          </div>
        </div>
      ))}
    </div>
  );
}

function WeeklyDigestMock() {
  const sections = [
    {
      label: "Expired this week",
      tone: "bad" as const,
      items: ["1 forklift certification (Marcus R.)"],
    },
    {
      label: "Expiring next 30 days",
      tone: "warn" as const,
      items: ["3 OSHA 10", "2 First Aid / CPR", "1 AWS D1.1"],
    },
    {
      label: "Renewed last week",
      tone: "ok" as const,
      items: ["4 credentials across 3 employees"],
    },
  ];
  const toneText = {
    ok: "text-emerald-700",
    warn: "text-amber-700",
    bad: "text-rose-700",
  } as const;

  return (
    <Card className="gap-0 py-0">
      <CardContent className="p-0">
        <div className="flex items-center gap-3 border-b border-border/60 bg-muted/40 px-4 py-2 text-[11px] text-muted-foreground">
          <MailCheck className="size-3.5" aria-hidden />
          <span className="font-medium text-foreground">
            Weekly compliance digest · Mar 25
          </span>
          <span className="ml-auto">5 min read</span>
        </div>
        <div className="space-y-4 px-4 py-4">
          <div className="text-sm font-semibold text-foreground">
            Atlas Logistics — week of March 25
          </div>
          <p className="text-xs text-muted-foreground">
            Here&apos;s where compliance stands across your team this week. One
            credential lapsed — review before Friday.
          </p>
          <ul className="space-y-3">
            {sections.map((section) => (
              <li key={section.label}>
                <div
                  className={cn(
                    "text-[10px] font-semibold tracking-wider uppercase",
                    toneText[section.tone],
                  )}
                >
                  {section.label}
                </div>
                <ul className="mt-1 space-y-1 text-xs text-foreground">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-1.5">
                      <span
                        aria-hidden
                        className={cn(
                          "mt-1.5 size-1.5 shrink-0 rounded-full",
                          section.tone === "ok" && "bg-emerald-500",
                          section.tone === "warn" && "bg-amber-500",
                          section.tone === "bad" && "bg-rose-500",
                        )}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
