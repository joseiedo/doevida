import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative">
      <Image
        className="w-full object-cover block max-h-96"
        src={"/hero-bg.jpg"}
        width={1280}
        alt=""
        height={397}
      />
      <div className="absolute h-full w-full top-0 flex items-center justify-center">
        <h2 className="text-4xl font-bold text-white">
          Uma única doação <br />
          pode salvar até <br />
          <span className="bg-rose-500">Quatro vidas.</span>
        </h2>
      </div>
    </div>
  );
}
