"use client";
import { IQuestion } from "@/@types/ElegibilityQuiz";
import { useEffect, useState } from "react";
import { Button } from "@/components";
import IneligibleCard from "./IneligibleCard.component";
import QuestionCard from "./Question.component";
import EligibleCard from "./EligibleCard.component";

interface IQuiz {
  questions: IQuestion[];
}

export default function Quiz({ questions }: IQuiz) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isNotEligible, setIsNotEligible] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <section className="min-h-full flex flex-col justify-center items-center">
      <h1>Teste de elegiblidade</h1>

      {!currentQuestion && <EligibleCard />}

      {!isNotEligible && (
        <QuestionCard
          question={currentQuestion}
          onEligible={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
          onNotEligible={() => setIsNotEligible(true)}
        />
      )}

      {isNotEligible && <IneligibleCard question={currentQuestion} />}
    </section>
  );
}
