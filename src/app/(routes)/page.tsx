"use client";
import Hero from "./hero";
import Links from "./links";
import DonationPercentage from "./donation-percentage";
import { ColsanApp, PageBase } from "@/components";

export default function Home() {
  return (
    <PageBase>
      <Hero />
      <Links />
      <DonationPercentage />
      <ColsanApp />
    </PageBase>
  );
}
