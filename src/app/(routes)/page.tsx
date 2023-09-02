"use client";
import { Button } from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl font-bold">Hello, world!</h1>
      <Button onChange={() => console.log("Teste")} text="Teste" />
    </main>
  );
}
