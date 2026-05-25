import { BellRing, ShieldCheck, UserPlus, type LucideIcon } from "lucide-react"

const steps: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: UserPlus,
    title: "Import your employees",
    description:
      "Upload a CSV or sync from your HRIS. CertDocket pre-populates roles, sites, and required certifications in minutes.",
  },
  {
    icon: ShieldCheck,
    title: "Track every certification",
    description:
      "Add OSHA training, equipment certs, professional licenses — whatever your team needs. Employees upload proof from their phone.",
  },
  {
    icon: BellRing,
    title: "Stay compliant, automatically",
    description:
      "Reminders go out before expirations. Audit reports are one click. Your dashboard always reflects the truth.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-b border-border/60 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-muted-foreground">How it works</p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            From spreadsheet chaos to compliance confidence in an afternoon
          </h2>
        </div>
        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-xl bg-background p-6 ring-1 ring-foreground/10"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 font-heading text-sm font-semibold text-primary">
                  {i + 1}
                </span>
                <step.icon
                  aria-hidden
                  className="size-5 text-muted-foreground"
                />
              </div>
              <h3 className="mt-4 font-heading text-lg font-medium tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
