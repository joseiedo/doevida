import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-rose-500 text-white py-8">
      <div className="flex items-start max-w-5xl justify-between m-auto">
        <Image src={'/doevida.svg'} width={140} height={30} alt="Logo Doe vida" />
        <nav>
          <ul className="flex flex-col gap-4">
            <li><Link href={"./"}>Início</Link></li>
            <li><Link href={"./"} />Hemocentros</li>
            <li><Link href={"./"} />Etapas</li>
            <li><Link href={"./"} />Por que doar?</li>
            <li><Link href={"./"} />Teste de elegibilidade</li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

