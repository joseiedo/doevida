import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-rose-500 text-white py-3">
      <div className="flex max-w-5xl justify-between m-auto">
        <Image
          src={"/doevida.svg"}
          width={100}
          height={27}
          alt="Logo Doe vida"
        />
        <nav>
          <ul className="flex gap-x-4">
            <li>
              <Link href={"./"}>Início</Link>
            </li>
            <li>
              <Link href={"./hemocentros"}>Hemocentros</Link>
            </li>
            <li>
              <Link href={"./"}>Etapas</Link>
            </li>
            <li>
              <Link href={"./"}>Por que doar?</Link>
            </li>
            <li>
              <Link href={"./"}>Teste de elegibilidade</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
