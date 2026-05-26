import { Award, Lock, Quote, ShieldCheck } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { value: "120k+", label: "Certifications tracked" },
  { value: "98%", label: "On-time renewals" },
  { value: "4.9/5", label: "Customer rating" },
  { value: "11hrs", label: "Saved per admin / week" },
]

const trustBadges = [
  { icon: ShieldCheck, label: "SOC 2 Type II" },
  { icon: Lock, label: "GDPR ready" },
  { icon: Award, label: "OSHA-aligned reporting" },
]

const logos = [
  "Northwind Builders",
  "Atlas Logistics",
  "Brightside Facilities",
  "Harborline Group",
  "Meridian Industrial",
  "Foundry Services",
]

const testimonials = [
  {
    quote:
      "We went from a 200-row spreadsheet and a prayer to a real system. Our last OSHA audit took two hours instead of two weeks.",
    name: "Priya Shah",
    title: "Director of Safety, Atlas Logistics",
  },
  {
    quote:
      "Crew members upload their renewals from the jobsite. That alone is worth what we pay for it — I used to spend Fridays chasing paperwork.",
    name: "Marcus Reed",
    title: "Compliance Manager, Northwind Builders",
  },
]

export function SocialProof() {
  return (
    <section id="customers" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-muted-foreground">
            Trusted by safety-critical teams
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            The teams who can&apos;t afford a lapsed credential, run on CertDocket
          </h2>
        </div>

        <dl className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                {stat.label}
              </dt>
              <dd className="mt-1 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        <ul className="mx-auto mt-14 grid max-w-5xl grid-cols-2 items-center gap-x-6 gap-y-4 text-sm font-medium text-muted-foreground sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo) => (
            <li
              key={logo}
              className="flex h-10 items-center justify-center text-center tracking-tight"
            >
              {logo}
            </li>
          ))}
        </ul>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {testimonials.map((t) => (
            <Card key={t.name} className="py-6">
              <CardContent className="flex flex-col gap-4">
                <Quote
                  aria-hidden
                  className="size-5 text-muted-foreground/50"
                />
                <p className="text-base text-foreground">{t.quote}</p>
                <div className="text-sm">
                  <div className="font-medium">{t.name}</div>
                  <div className="text-muted-foreground">{t.title}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
          {trustBadges.map(({ icon: Icon, label }) => (
            <li key={label} className="inline-flex items-center gap-2">
              <Icon className="size-4 text-emerald-600" />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
