"use client"
import {IQuestion} from "@/@types/ElegibilityQuiz";
import {useState} from "react";
import {Button} from "@/components";

interface IQuiz {
  questions: IQuestion[]
}

export default function Quiz({questions}: IQuiz){
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  return (
    <div>
      {!questions[currentQuestionIndex] && <p>Parabéns, você terminou o teste!</p>}
      {renderQuestion(
        questions[currentQuestionIndex],
        () => setCurrentQuestionIndex(currentQuestionIndex + 1),
        () => setCurrentQuestionIndex(currentQuestionIndex + 1)
      )}
    </div>
  )
}

function renderQuestion(question: IQuestion, onEligible: () => void, onNotEligible: () => void){
  if(question == undefined) return <></>;

  const {label, eligibleAnswer} = question
  const onYesAnswer = () => getAnswerCallback("SIM", eligibleAnswer, onEligible, onNotEligible)
  const onNoAnswer = () => getAnswerCallback("NÃO", eligibleAnswer, onEligible, onNotEligible)


  return (
    <div>
      <h3>{label}</h3>
      <Button onClick={() => eligibleAnswer ? onEligible() : onNotEligible()} text="Sim" className=""/>
      <Button onClick={() => !eligibleAnswer ? onEligible() : onNotEligible()} text="Não" className=""/>
    </div>
  )
}

function getAnswerCallback(answer: string, eligibleAnswer: string, onEligible: () => void, onNotEligible: () => void){
  return answer === eligibleAnswer ? onEligible : onNotEligible;
}

