import type { Metadata } from "next";

import { PricingPage } from "./pricing-page";

export const metadata: Metadata = {
  title: "Pricing — CertDocket",
  description:
    "Simple, transparent pricing for CertDocket. Compare Starter and Pro plans.",
};

export default function Page() {
  return <PricingPage />;
}
