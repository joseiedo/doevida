"use client";
import { Header } from "@/components";
import Hero from "./hero";
import Links from "./links";
import DonationPercentage from "./donation-percentage";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Links />
      <DonationPercentage/>
    </>
  );
}
