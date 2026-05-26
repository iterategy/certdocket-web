import { AlertTriangle, ClipboardX, TrendingDown } from "lucide-react"

const problems = [
  {
    icon: AlertTriangle,
    stat: "$16,131",
    statSuffix: "per violation",
    title: "OSHA penalties keep climbing",
    description:
      "Serious violations carry five-figure fines. Most are documentation failures — an expired cert, a missing record — not actual incidents.",
  },
  {
    icon: ClipboardX,
    stat: "63%",
    statSuffix: "of admins",
    title: "Still track certs in spreadsheets",
    description:
      "Manual tracking means missed renewals, lapsed credentials, and the same scramble before every audit. Spreadsheets don't send reminders.",
  },
  {
    icon: TrendingDown,
    stat: "11hrs",
    statSuffix: "per week",
    title: "Lost to compliance busywork",
    description:
      "Chasing employees for documentation, updating trackers, and rebuilding reports for audits — time your safety team can't get back.",
  },
]

export function Problem() {
  return (
    <section className="border-b border-border/60 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-muted-foreground">
            The hidden cost of manual compliance
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            One expired certification can cost more than a year of software
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {problems.map(({ icon: Icon, stat, statSuffix, title, description }) => (
            <div
              key={title}
              className="rounded-xl bg-background p-6 ring-1 ring-foreground/10"
            >
              <Icon
                aria-hidden
                className="size-6 text-primary"
              />
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-heading text-3xl font-semibold tracking-tight">
                  {stat}
                </span>
                <span className="text-xs text-muted-foreground">
                  {statSuffix}
                </span>
              </div>
              <h3 className="mt-2 font-heading text-base font-medium">
                {title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
