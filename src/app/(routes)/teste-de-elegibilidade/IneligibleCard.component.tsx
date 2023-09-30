import { IQuestion } from "@/@types/ElegibilityQuiz";
import Link from "next/link";

interface IIneligibleCard {
  question: IQuestion;
}

export default function IneligibleCard({ question }: IIneligibleCard) {
  const { moreInfoLink } = question;

  return (
    <div className="w-[24rem] text-center p-5 pt-2">
      <h3 className="mb-2 text-3xl font-bold">
        Infelizmente você não pode doar sangue :(
      </h3>
      <p className="mb-4 text-gray-600">
        Saiba o porquê{" "}
        <Link
          href={moreInfoLink}
          target="_blank"
          className="text-red-500 underline"
        >
          aqui
        </Link>
      </p>
      <p className="mb-4 text-gray-600">
        Mas você ainda pode ajudar! Divulgue, incentive, promova a doação de
        sangue e você ainda estará salvando vidas :)
      </p>
    </div>
  );
}
