import { Button } from "@/components";
import Image from "next/image";

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
            Menos de <span className="bg-rose-500">20%</span> dos
            <br />
            brasileiros doam <br />
            sangue regularmente
          </h2>
          <Button className="w-fit" text="Ler matéria" onClick={() => {}} />
        </div>
      </div>
    </article>
  );
}
