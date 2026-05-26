import Link from "next/link"
import { FileCheck } from "lucide-react"

import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#customers", label: "Customers" },
  { href: "#pricing", label: "Pricing" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-heading text-sm font-semibold tracking-tight"
        >
          <span className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <FileCheck className="size-4" />
          </span>
          CertDocket
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="hidden sm:inline-flex"
            render={<Link href="#login">Sign in</Link>}
          />
          <Button size="sm" render={<Link href="#signup">Start free trial</Link>} />
        </div>
      </div>
    </header>
  )
}
