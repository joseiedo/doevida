"use client";
import Hero from "../../components/home/Hero";
import Links from "../../components/home/Links";
import DonationPercentage from "../../components/home/DonationPercentage.component";
import {ColsanApp} from "@/components";

export default function Home() {
  return (
    <>
      <Hero />
      <Links />
      <DonationPercentage />
      <ColsanApp />
    </>
  );
}
