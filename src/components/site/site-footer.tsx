import Link from "next/link"
import { FileCheck } from "lucide-react"

const footerSections: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Product",
    links: [
      { href: "#features", label: "Features" },
      { href: "#pricing", label: "Pricing" },
      { href: "#integrations", label: "Integrations" },
      { href: "#changelog", label: "Changelog" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "#about", label: "About" },
      { href: "#customers", label: "Customers" },
      { href: "#contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "#privacy", label: "Privacy" },
      { href: "#terms", label: "Terms" },
      { href: "#security", label: "Security" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 font-heading text-sm font-semibold tracking-tight"
            >
              <span className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <FileCheck className="size-4" />
              </span>
              CertDocket
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Automated employee certification tracking for safety-critical
              teams.
            </p>
          </div>
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-heading text-xs font-semibold tracking-wider text-foreground uppercase">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <span>&copy; {new Date().getFullYear()} CertDocket. All rights reserved.</span>
          <span>Built for operations teams that take compliance seriously.</span>
        </div>
      </div>
    </footer>
  )
}
