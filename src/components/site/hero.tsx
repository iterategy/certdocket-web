import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const heroBullets = [
  "Track every employee certification",
  "Renewal reminders before expiry",
  "Audit reports in one click",
]

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,oklch(0.92_0.04_250),transparent)]"
      />
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Badge variant="outline" className="mb-6 gap-1.5">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            Built for OSHA & safety-critical teams
          </Badge>
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
            Never get fined for an{" "}
            <span className="text-primary">expired certification</span> again.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            CertDocket tracks every employee certification — OSHA, forklift,
            CPR, professional licenses — and tells you exactly who needs renewal
            before the inspector does.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <Button size="lg" render={<Link href="#signup">Start free trial</Link>}>
              Start free trial
              <ArrowRight />
            </Button>
            <Button
              size="lg"
              variant="outline"
              render={<Link href="#how-it-works">See how it works</Link>}
            />
          </div>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {heroBullets.map((bullet) => (
              <li key={bullet} className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-emerald-600" />
                {bullet}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted-foreground">
            14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  )
}
