import Image from "next/image";
import Link from "next/link";

export default function DonationPercentage() {
  return (
    <article className="relative">
      <Image
        className="w-full object-cover block max-h-96"
        src={"/materia-bg.jpg"}
        alt=""
        width={1280}
        height={300}
      />
      <div className="absolute h-full w-full top-0 flex flex-col items-center justify-center">
        <div>
          <h2 className="text-4xl font-bold text-white mb-3">
            Menos de <span className="bg-rose-500">2%</span> dos
            <br />
            brasileiros doam <br />
            sangue regularmente
          </h2>
          <Link
            className="w-fit text-white bg-rose-500 p-3 rounded-sm block"
            target="_blank"
            href="https://www.gov.br/saude/pt-br/assuntos/noticias/2023/junho/ministerio-da-saude-lanca-campanha-para-incentivar-doacao-de-sangue"
          >
            Ler matéria
          </Link>
        </div>
      </div>
    </article>
  );
}
