import { routes } from "@/constants/routes";
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
            {routes.map(({ href, label, target }) => (
              <li key={href}>
                <Link href={href} target={target ?? "_self"}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
