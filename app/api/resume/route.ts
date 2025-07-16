import path from "path";
import fs from "fs";
import { NextResponse } from "next/server";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "resume.pdf");

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "PDF file not found" }, { status: 404 });
  }

  const fileBuffer = fs.readFileSync(filePath);

  // Convert Buffer to Uint8Array for NextResponse
  const fileUint8Array = new Uint8Array(fileBuffer);

  return new NextResponse(fileUint8Array, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="example.pdf"',
    },
  });
}
