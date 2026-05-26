import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section id="signup" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-14 text-primary-foreground sm:px-12 sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_100%_0%,oklch(0.55_0.18_250),transparent)]"
          />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Start your 14-day free trial
            </h2>
            <p className="mt-4 max-w-xl text-base text-primary-foreground/80">
              Import your team, add your first certifications, and see exactly
              where you stand — before lunch. No credit card. No setup fees.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                variant="secondary"
                render={<Link href="#signup">Start free trial</Link>}
              >
                Start free trial
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                render={<Link href="/pricing">Start free trial</Link>}
              />
            </div>
            <p className="mt-6 text-xs text-primary-foreground/70">
              14 days. Full access. Cancel any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
