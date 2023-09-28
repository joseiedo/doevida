import { NextResponse } from "next/server";
import BloodCenter from "../../../../../models/BloodCenter";

export async function GET() {
  const response = await BloodCenter.getAll()
  return NextResponse.json(response)
}
