import { NextResponse } from "next/server";
import Hemocenter from "../../../../../models/hemocenter";

export async function GET() {
  const response = await Hemocenter.getAll()
  return NextResponse.json(response)
}
