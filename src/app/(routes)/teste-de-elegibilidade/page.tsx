import {EligibilityQuiz} from "@/models";
import Quiz from "./Quiz";

export default async function EligibilityQuestionary(){
  const questions = await EligibilityQuiz.getAllQuestions();

  return <Quiz questions={questions} />
}
