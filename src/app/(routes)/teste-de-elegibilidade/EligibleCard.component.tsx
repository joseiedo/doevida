import { IQuestion } from "@/@types/ElegibilityQuiz";
import Link from "next/link";

export default function EligibleCard() {
  return (
    <div className="w-[32rem] text-center p-5 pt-2">
      <h3 className="mb-2 text-3xl font-bold">
        Você tem os requisitos básicos, mas não deixe de fazer os exames ok? :)
      </h3>
      <p className="mb-4 text-gray-600">
        Acesse o site da COLSAN para agendar sua doação{" "}
        <Link
          href={"https://colsan.org.br/site/"}
          target="_blank"
          className="text-red-500 underline"
        >
          por aqui
        </Link>
      </p>
    </div>
  );
}
