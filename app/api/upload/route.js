import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { join } from "path";
import { existsSync, mkdirSync } from "fs";

export async function POST(request) {
  try {
    const data = await request.formData();
    const file = data.get("file");

    if (!file) {
      return NextResponse.json({ success: false, error: "No file uploaded." });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Ensure the uploads directory exists
    const uploadsPath = join(process.cwd(), "public", "uploads");
    if (!existsSync(uploadsPath)) {
      mkdirSync(uploadsPath, { recursive: true });
    }

    const filePath = join(uploadsPath, file.name);
    await writeFile(filePath, buffer);

    // Return the relative file path
    return NextResponse.json({ success: true, path: `/uploads/${file.name}` });
  } catch (error) {
    console.error("File upload error:", error);
    return NextResponse.json({ success: false, error: "File upload failed." });
  }
}
