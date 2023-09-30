import path from "path";
import {promises as fs} from "fs";
import {IQuestion} from "@/@types/ElegibilityQuiz";

async function getAllQuestions(): Promise<IQuestion[]>{
  // TODO: get questions from a real database and remove this casting
  const directory = path.join(process.cwd(), 'src/infra');
  const rawData = await fs.readFile(directory + '/eligibilityQuestions.json', 'utf8');
  return JSON.parse(rawData) as unknown as IQuestion[];
}

export default Object.freeze({
  getAllQuestions,
});
