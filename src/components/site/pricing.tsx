import Link from "next/link"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const plans = [
  {
    name: "Starter",
    price: 39,
    description: "For small teams getting compliance off spreadsheets.",
    features: [
      "Up to 25 employees",
      "Unlimited certifications",
      "Automated renewal reminders",
      "Audit-ready PDF reports",
      "Email support",
    ],
    cta: "Start free trial",
    href: "#signup",
    featured: false,
  },
  {
    name: "Pro",
    price: 59,
    description: "For multi-site teams that can't miss a renewal.",
    features: [
      "Up to 100 employees",
      "Everything in Starter",
      "Role-based access & SSO",
      "HRIS integrations",
      "Priority support",
    ],
    cta: "Start free trial",
    href: "#signup",
    featured: true,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-muted-foreground">Pricing</p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Simple plans. One per-month price.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Every plan includes a 14-day free trial. No credit card. Cancel any time.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={
                plan.featured
                  ? "relative gap-4 py-8 ring-2 ring-primary"
                  : "gap-4 py-8"
              }
            >
              <CardContent className="flex flex-col gap-6">
                <div>
                  <h3 className="font-heading text-lg font-semibold tracking-tight">
                    {plan.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-heading text-4xl font-semibold tracking-tight">
                    ${plan.price}
                  </span>
                  <span className="text-sm text-muted-foreground">/ month</span>
                </div>
                <Button
                  size="lg"
                  variant={plan.featured ? "default" : "outline"}
                  render={<Link href={plan.href}>{plan.cta}</Link>}
                />
                <ul className="flex flex-col gap-2 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-emerald-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Need more than 100 employees?{" "}
          <Link
            href="#pricing-full"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            See full pricing &rarr;
          </Link>
        </p>
      </div>
    </section>
  )
}
