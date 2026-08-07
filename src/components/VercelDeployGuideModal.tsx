import React, { useState } from 'react';
import { X, Github, Cloud, Check, Copy, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';

interface VercelDeployGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VercelDeployGuideModal: React.FC<VercelDeployGuideModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, stepIndex: number) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(stepIndex);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 relative border-2 border-slate-900 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-700"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <span className="p-2 bg-amber-100 text-amber-800 rounded-2xl font-bold text-xs">
            🚀 Cloud Deployment Guide
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 font-['Kanit',sans-serif] mb-2">
          ขั้นตอนนำโปรเจกต์ขึ้น Vercel ผ่าน GitHub
        </h3>
        <p className="text-xs text-slate-600 mb-6 leading-relaxed">
          เนื่องจากท่านได้เลือกส่งออกโค้ดไปยัง GitHub โปรเจกต์นี้ได้รับการปรับแต่งไฟล์ตั้งค่าให้พร้อม Build & Deploy บน Vercel หรือ Cloud Run ได้ทันทีตามขั้นตอนสั้นๆ ดังนี้:
        </p>

        <div className="space-y-4 text-xs">
          
          {/* Step 1 */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-bold text-slate-900 font-['Kanit',sans-serif] flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px]">
                  1
                </span>
                ส่งออกโค้ดไปยัง GitHub Repository ของคุณ
              </span>
            </div>
            <p className="text-slate-600 ml-8 mb-2">
              ไปที่เมนู <strong>Settings (เฟืองมุมซ้ายล่าง) &gt; Export to GitHub</strong> เพื่อสร้างคลังโค้ดบนบัญชี GitHub ของคุณ
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-bold text-slate-900 font-['Kanit',sans-serif] flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px]">
                  2
                </span>
                นำเข้าโปรเจกต์บน Vercel (Import Git Repository)
              </span>
            </div>
            <p className="text-slate-600 ml-8 mb-2">
              เข้าใช้งาน{' '}
              <a
                href="https://vercel.com/new"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline font-semibold"
              >
                vercel.com/new
              </a>{' '}
              เลือก Repo ของโปรเจกต์นี้จาก GitHub
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-4 bg-amber-50 rounded-2xl border border-amber-300">
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-bold text-amber-950 font-['Kanit',sans-serif] flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-900 flex items-center justify-center text-[10px] font-bold">
                  3
                </span>
                ตั้งค่า Environment Variables (ถ้าใช้ Gemini AI)
              </span>
            </div>
            <p className="text-amber-900 ml-8 mb-2">
              ในหน้าตั้งค่า Vercel ใส่ค่า KEY ในช่อง Environment Variables:
            </p>
            <div className="ml-8 bg-white p-2.5 rounded-xl border border-amber-200 font-mono text-[11px] flex items-center justify-between">
              <span>GEMINI_API_KEY = (รหัส API Key ของคุณ)</span>
              <button
                onClick={() => copyToClipboard('GEMINI_API_KEY', 3)}
                className="text-[10px] bg-slate-100 hover:bg-slate-200 text-slate-700 px-2 py-1 rounded-md"
              >
                {copiedStep === 3 ? 'คัดลอกแล้ว' : 'คัดลอก'}
              </button>
            </div>
          </div>

          {/* Step 4 */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-bold text-slate-900 font-['Kanit',sans-serif] flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px]">
                  4
                </span>
                กดปุ่ม "Deploy"
              </span>
            </div>
            <p className="text-slate-600 ml-8">
              ระบบ Vercel จะทำการรันสคริปต์ Build อัตโนมัติและมอบโดเมน HTTPS ออนไลน์ให้ใช้งานทันที!
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-200">
          <a
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-4 py-2.5 rounded-2xl text-xs flex items-center gap-1.5 shadow-md"
          >
            <span>ไปที่ Vercel Dashboard</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="bg-slate-100 text-slate-800 font-bold px-4 py-2.5 rounded-2xl text-xs"
          >
            รับทราบ / ปิดหน้าต่าง
          </button>
        </div>
      </div>
    </div>
  );
};
