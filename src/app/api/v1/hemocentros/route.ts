import { NextResponse } from "next/server";
import BloodCenter from "../../../../../models/bloodCenter";

export async function GET() {
  const response = await BloodCenter.getAll()
  return NextResponse.json(response)
}
