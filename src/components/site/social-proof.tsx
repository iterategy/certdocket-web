const certTypes = [
  "OSHA 10/30",
  "ServSafe",
  "Food Handler",
  "RN License",
  "CDL",
  "CPR / First Aid",
  "Forklift Operator",
  "HazMat",
  "HIPAA",
  "Fall Protection",
  "Confined Space",
]

export function SocialProof() {
  return (
    <section id="customers" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Built for regulated industries
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Pre-loaded with the certifications that matter most in safety,
            medical, and operations.
          </p>
        </div>

        <ul className="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-2">
          {certTypes.map((cert) => (
            <li
              key={cert}
              className="inline-flex items-center rounded-full bg-muted px-3 py-1.5 text-sm font-medium text-foreground ring-1 ring-inset ring-border/60"
            >
              {cert}
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">
          Plus unlimited custom certification types with configurable renewal
          cadences.
        </p>
      </div>
    </section>
  )
}
