import type { Metadata } from "next";

import { FeaturesPage } from "./features-page";

export const metadata: Metadata = {
  title: "Features — CertDocket",
  description:
    "Everything CertDocket does — certification tracking, compliance dashboard, automated reminders, audit reports, billing, and the weekly digest.",
};

export default function Page() {
  return <FeaturesPage />;
}
