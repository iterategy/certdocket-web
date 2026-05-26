import { CTA } from "@/components/site/cta"
import { Features } from "@/components/site/features"
import { Hero } from "@/components/site/hero"
import { HowItWorks } from "@/components/site/how-it-works"
import { Pricing } from "@/components/site/pricing"
import { Problem } from "@/components/site/problem"
import { SocialProof } from "@/components/site/social-proof"

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Features />
      <HowItWorks />
      <SocialProof />
      <Pricing />
      <CTA />
    </>
  )
}
