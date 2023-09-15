"use client";
import { Button } from "@/components";
import Header from "@/components/helpers/Header.component";
import Hero from "./hero";
import Card from "@/components/helpers/Card.component";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Card
        imagePath="/posso-doar-sangue.jpg"
        imageAlt="Homem doando sangue"
        heading="Posso doar sangue?"
        description="Veja se você pode doar sangue respondendo breves perguntas"
        link={
          {
            href: "./",
            label: "Faça o teste de elegibilidade"
          }
        }
      />
    </>
  );
}
