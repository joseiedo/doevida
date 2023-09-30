import "./globals.css";
import type { Metadata } from "next";
import { Footer, Header } from "@/components";
import React from "react";

export const metadata: Metadata = {
  title: "DoeVida",
  description: "DoeVida",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col justify-between">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
