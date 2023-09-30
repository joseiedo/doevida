import { Section, Card } from "@/components";

export default function Links() {
  return (
    <Section>
      <div className="flex justify-between max-w-5xl mx-auto">
        <Card
          imagePath="/posso-doar-sangue.jpg"
          imageAlt="Homem doando sangue"
          heading="Posso doar sangue?"
          description="Veja se você pode doar sangue respondendo breves perguntas"
          link={{
            href: "./teste-de-elegiblidade",
            label: "Faça o teste de elegibilidade",
          }}
        />
        <Card
          imagePath="/onde-achar-hemocentros.jpg"
          imageAlt="Foto de um hemocentro"
          heading="Onde achar hemocentros?"
          description="Buscamos dados do próprio gov.br, trazendo também a possibilidade de pesquisar por estado."
          link={{
            href: "./hemocentros",
            label: "Pesquise por aqui",
          }}
        />
        <Card
          imagePath="/o-que-preciso-para-doar.jpg"
          imageAlt="Homem doando sangue"
          heading="O que preciso para doar?"
          description="Veja os requisitos atuais para doação de sangue"
          link={{
            href: "https://www.prosangue.sp.gov.br/artigos/requisitos_basicos_para_doacao.html",
            label: "Posso doar sangue?",
          }}
        />
      </div>
    </Section>
  );
}
