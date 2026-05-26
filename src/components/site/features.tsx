import {
  BellRing,
  CreditCard,
  FileBarChart,
  LayoutDashboard,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const features: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: LayoutDashboard,
    title: "Compliance dashboard",
    description:
      "See every employee, every certification, and every expiration date at a glance. Filter by site, role, or credential.",
  },
  {
    icon: BellRing,
    title: "Automated renewal reminders",
    description:
      "Configurable nudges go to employees and managers 60, 30, and 7 days before any certification expires.",
  },
  {
    icon: FileBarChart,
    title: "Audit-ready reports",
    description:
      "Generate inspector-ready PDFs in seconds — proof of training, coverage gaps, and historical compliance, all stamped.",
  },
  {
    icon: Users,
    title: "Employee self-service",
    description:
      "Workers upload new certificates from their phone. No more chasing paper or rebuilding records after a hire.",
  },
  {
    icon: ShieldCheck,
    title: "Role-based access",
    description:
      "Site managers see their crews, HR sees the org, executives see the rollup. Granular permissions and a full audit log.",
  },
  {
    icon: CreditCard,
    title: "Simple, transparent billing",
    description:
      "One per-seat price. No surcharges for storage, reports, or reminders. Add or remove employees any time.",
  },
]

export function Features() {
  return (
    <section id="features" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-muted-foreground">
            Everything you need
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            One platform for every certification your team has to keep current
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            CertDocket replaces the spreadsheets, shared inboxes, and reminder
            calendars your safety team uses to stay ahead of expirations.
          </p>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="gap-3 py-6">
              <CardHeader className="gap-3">
                <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-4.5" />
                </span>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
