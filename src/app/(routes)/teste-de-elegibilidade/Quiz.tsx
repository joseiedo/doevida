"use client"
import {IQuestion} from "@/@types/ElegibilityQuiz";
import {useState} from "react";

interface IQuiz {
  questions: IQuestion[]
}

export default function Quiz({questions}: IQuiz){
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return <div>{questions[0]?.label}</div>
}
