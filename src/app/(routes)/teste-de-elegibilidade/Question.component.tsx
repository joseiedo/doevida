import { IQuestion } from "@/@types/ElegibilityQuiz";
import { Button } from "@/components";
import Link from "next/link";
import { useEffect } from "react";

interface IQuestionCard {
  question: IQuestion;
  onEligible: () => void;
  onNotEligible: () => void;
}

export default function QuestionCard({
  question,
  onEligible,
  onNotEligible,
}: IQuestionCard) {
  if (question == undefined) return <></>;

  const { label, eligibleAnswer, moreInfoLink } = question;
  const onYesAnswer = getAnswerCallback(
    "SIM",
    eligibleAnswer,
    onEligible,
    onNotEligible,
  );
  const onNoAnswer = getAnswerCallback(
    "NÃO",
    eligibleAnswer,
    onEligible,
    onNotEligible,
  );

  return (
    <div className="w-[24rem] text-center p-5">
      <h3 className="mb-2 text-3xl font-bold">{label}</h3>
      <p className="mb-4 text-gray-600">
        Saiba mais{" "}
        <Link
          href={moreInfoLink}
          target="_blank"
          className="text-red-500 underline"
        >
          aqui
        </Link>
      </p>
      <div className="flex justify-center gap-3">
        <Button onClick={onYesAnswer} text="Sim" />
        <Button onClick={onNoAnswer} text="Não" />
      </div>
    </div>
  );
}

function getAnswerCallback(
  answer: string,
  eligibleAnswer: string,
  onEligible: () => void,
  onNotEligible: () => void,
) {
  return answer === eligibleAnswer ? onEligible : onNotEligible;
}
