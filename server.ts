import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check endpoint
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", service: "Vaccine & Health Portal API" });
  });

  // AI Assistant endpoint for vaccine & health inquiries
  app.post("/api/ask-ai", async (req, res) => {
    try {
      const { question } = req.body;
      if (!question || typeof question !== "string") {
        return res.status(400).json({ error: "โปรดระบุคำถามให้ถูกต้อง" });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
        // Intelligent fallback if key is missing or default placeholder
        return res.json({
          answer: getFallbackAnswer(question),
          source: "local-knowledge"
        });
      }

      const ai = new GoogleGenAI({ apiKey });
      const prompt = `คุณคือพยาบาลและผู้ช่วยเสมือนประจำ "สถานเสาวภา สภากาชาดไทย" (Queen Saovabha Memorial Institute)
โปรดตอบคำถามภาษาไทยของผู้รับบริการอย่างสุภาพ เป็นกันเอง ถูกต้องตามหลักการแพทย์และเวชศาสตร์การเดินทาง/วัคซีนของสถานเสาวภา สภากาชาดไทย
เวลาทำการของสถานเสาวภา สภากาชาดไทย:
- วันจันทร์-วันศุกร์: เวลา 08.30-12.00 น. (ปิดรับบัตรคิว 11.30 น.) และ เวลา 13.00-16.30 น. (ปิดรับบัตรคิว 16.00 น.)
- วันเสาร์และวันหยุดนักขัตฤกษ์: เวลา 08.30-12.00 น. (ปิดรับบัตรคิว 11.00 น.) และ เวลา 13.00-16.30 น. (ปิดรับบัตรคิว 16.00 น.)
- วันอาทิตย์: ปิดทำการ
โทรศัพท์: 02-252-0161 ถึง 4, 02-252-0167
เว็บไซต์: https://www.saovabha.org

คำถามผู้รับบริการ: "${question}"`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      const text = response.text || "ขออภัย ไม่สามารถประมวลผลคำตอบได้ในขณะนี้";
      return res.json({ answer: text, source: "gemini-ai" });
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      return res.json({
        answer: getFallbackAnswer(req.body?.question || ""),
        source: "local-fallback",
        note: "ตอบด้วยข้อมูลระบบอัตโนมัติ"
      });
    }
  });

  // Vite middleware in dev or static serving in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Vaccine Portal Server running on http://localhost:${PORT}`);
  });
}

function getFallbackAnswer(query: string): string {
  const q = query.toLowerCase();
  if (q.includes("ไข้หวัดใหญ่") || q.includes("flu")) {
    return "สถานเสาวภา สภากาชาดไทย ให้บริการฉีดวัคซีนไข้หวัดใหญ่สำหรับทุกกลุ่มอายุ โปรดสอบถามอัตราค่าบริการและตารางเวลาได้ที่โทรศัพท์ 02-252-0161 ถึง 4 หรือดูรายละเอียดบนเว็บไซต์ทางการ https://www.saovabha.org ค่ะ";
  }
  if (q.includes("hpv") || q.includes("มะเร็งปากมดลูก")) {
    return "สถานเสาวภา สภากาชาดไทย มีบริการฉีดวัคซีนป้องกันมะเร็งปากมดลูก HPV สามารถดูข้อมูลล่าสุดได้ทางเว็บไซต์ www.saovabha.org หรือสอบถามโทร. 02-252-0161 ค่ะ";
  }
  if (q.includes("เตรียมตัว") || q.includes("ข้อปฏิบัต")) {
    return "การเตรียมตัวมารับบริการที่สถานเสาวภา สภากาชาดไทย: 1) นำบัตรประชาชนหรือหนังสือเดินทาง (Passport) มาแสดง 2) นำสมุดบันทึกการฉีดวัคซีนเดิมมาด้วย (ถ้ามี) 3) นั่งสังเกตอาการหลังฉีดวัคซีนอย่างน้อย 30 นาที";
  }
  if (q.includes("แพ้") || q.includes("ผลข้างเคียง") || q.includes("ไข้")) {
    return "อาการข้างเคียงทั่วไปหลังฉีดวัคซีนอาจมีปวด บวมบริเวณที่ฉีด หรือไข้ต่ำๆ ซึ่งจะทุเลาลงใน 1-2 วัน หากมีอาการแพ้รุนแรง เช่น แน่นหน้าอก ผื่นขึ้นทั่วตัว ให้ติดต่อพบแพทย์ทันที";
  }
  if (q.includes("เวลา") || q.includes("เปิด") || q.includes("กี่โมง")) {
    return "เวลาทำการสถานเสาวภา สภากาชาดไทย: \n• วันจันทร์-วันศุกร์: 08.30-12.00 น. (ปิดรับคิว 11.30 น.) และ 13.00-16.30 น. (ปิดรับคิว 16.00 น.) \n• วันเสาร์และวันหยุดนักขัตฤกษ์: 08.30-12.00 น. (ปิดรับคิว 11.00 น.) และ 13.00-16.30 น. (ปิดรับคิว 16.00 น.) \n• วันอาทิตย์: ปิดทำการ";
  }
  if (q.includes("ที่อยู่") || q.includes("แผนที่") || q.includes("เดินทาง")) {
    return "สถานเสาวภา สภากาชาดไทย ตั้งอยู่ที่ 1871 ถนนพระรามที่ 4 แขวงปทุมวัน เขตปทุมวัน กรุงเทพฯ 10330 สามารถเดินทางด้วย MRT สถานีสามย่าน (ทางออก 1) / MRT สีลม (ทางออก 2) หรือ BTS สถานีศาลาแดง (ทางออก 3)";
  }
  return "ยินดีต้อนรับสู่สถานเสาวภา สภากาชาดไทย ค่ะ สามารถติดต่อสอบถามข้อมูลวัคซีน บริการเวชศาสตร์การเดินทาง ได้ที่โทรศัพท์ 02-252-0161 ถึง 4 หรือเข้าชมเว็บไซต์ทางการได้ที่ https://www.saovabha.org ค่ะ";
}

startServer();
