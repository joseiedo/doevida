import Image from "next/image";
import { Button, Section } from ".";

export default function ColsanApp() {
  return (
    <Section>
      <div className="flex max-w-5xl mx-auto items-center justify-between">
        <div className="max-w-sm">
          <h2 className="text-5xl font-bold text-gray-800 mb-4 leading-snug">
            Acesse o site <br />da COLSAN
          </h2>
          <p className="text-gray-800 mb-4">
            Esse site é um projeto universitário, portanto, não há nenhuma afiliação com a COLSAN. Com isso, é recomendado que acesse oficial da COLSAN e agende sua doação por lá.
          </p>
          <Button text="Clique aqui para visitar" className="w-full" onClick={() => { }} />
        </div>
        <Image
          src='/mulher-estetoscopio-coracao.jpg'
          alt="Foto de uma mulher segurando um estetocopio, formando um coração"
          width={519}
          height={346}
        />
      </div>
    </Section>
  )
}
