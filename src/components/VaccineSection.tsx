import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, FileSpreadsheet, Eye, X, BookOpen, Tag } from 'lucide-react';
import { CONTACT_INFO, VACCINE_DOCUMENTS } from '../data/mockData';

export const VaccineSection: React.FC = () => {
  const [previewDoc, setPreviewDoc] = useState<{ title: string; previewUrl: string; driveUrl: string } | null>(null);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6">
      
      {/* Title Header Banner */}
      <div className="bg-gradient-to-r from-indigo-700 via-purple-800 to-indigo-900 text-white p-5 sm:p-6 rounded-3xl shadow-lg mb-6 border-2 border-indigo-900">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <span className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm text-2xl">
              💉
            </span>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-['Kanit',sans-serif]">
                รายการและราคาวัคซีน
              </h2>
              <p className="text-xs sm:text-sm text-indigo-100 font-medium">
                {CONTACT_INFO.agencyName}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 1: ราคาวัคซีน */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="p-2 bg-amber-100 text-amber-900 rounded-xl">
              <Tag className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-lg font-bold text-slate-900 font-['Kanit',sans-serif]">
                ราคาวัคซีน
              </h3>
              <p className="text-xs text-slate-500">
                คลิกที่รูปหน้าปกเพื่อเปิดไฟล์เอกสารแสดงรายการและราคาวัคซีนสถานเสาวภา
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl border-2 border-amber-300 shadow-md p-4 sm:p-6 overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-6">
            
            {/* Cover Image Container */}
            <a
              href={VACCINE_DOCUMENTS.price.driveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full md:w-64 aspect-[3/4] bg-slate-100 rounded-2xl overflow-hidden border-2 border-amber-200 shadow-md hover:shadow-xl transition-all duration-300 shrink-0 flex items-center justify-center cursor-pointer"
            >
              <img
                src={VACCINE_DOCUMENTS.price.coverImage}
                alt={VACCINE_DOCUMENTS.price.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-3 text-center">
                <ExternalLink className="w-10 h-10 mb-2 drop-shadow-md" />
                <span className="text-xs font-bold bg-amber-400 text-slate-950 px-3 py-1 rounded-full shadow-lg">
                  คลิกเพื่อเปิดดูเอกสาร
                </span>
              </div>
            </a>

            {/* Information & Action Buttons */}
            <div className="flex-1 flex flex-col justify-between w-full">
              <div>
                <h4 className="text-xl font-extrabold text-slate-900 font-['Kanit',sans-serif] mb-2">
                  {VACCINE_DOCUMENTS.price.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                  {VACCINE_DOCUMENTS.price.subtitle}
                </p>
                
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3.5 text-xs text-amber-950 mb-6 space-y-1">
                  <p className="font-bold flex items-center gap-1.5">
                    <span>💡 คำแนะนำ:</span>
                  </p>
                  <p>
                    คลิกที่รูปภาพหน้าปก หรือปุ่มด้านล่างเพื่อเข้าดูไฟล์รายการและราคาวัคซีนล่าสุดแบบเต็ม
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={VACCINE_DOCUMENTS.price.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-5 py-3 rounded-2xl text-xs flex items-center justify-center gap-2 shadow-md transition"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>เปิดเอกสาร</span>
                </a>

                <button
                  onClick={() =>
                    setPreviewDoc({
                      title: VACCINE_DOCUMENTS.price.title,
                      previewUrl: VACCINE_DOCUMENTS.price.previewUrl,
                      driveUrl: VACCINE_DOCUMENTS.price.driveUrl
                    })
                  }
                  className="w-full sm:w-auto bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold px-4 py-3 rounded-2xl text-xs flex items-center justify-center gap-2 border border-indigo-200 transition"
                >
                  <Eye className="w-4 h-4" />
                  <span>ดูตัวอย่าง</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* SECTION 2: ข้อมูลวัคซีน */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="p-2 bg-sky-100 text-sky-900 rounded-xl">
              <BookOpen className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-lg font-bold text-slate-900 font-['Kanit',sans-serif]">
                ข้อมูลวัคซีน
              </h3>
              <p className="text-xs text-slate-500">
                คลิกที่รูปหน้าปกเพื่ออ่านรายละเอียดเอกสารข้อมูลวัคซีนสถานเสาวภา
              </p>
            </div>
          </div>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VACCINE_DOCUMENTS.infoList.map((doc, idx) => (
              <div
                key={doc.id}
                className="bg-white rounded-3xl border-2 border-sky-200 shadow-md p-4 sm:p-5 flex flex-col justify-between hover:border-sky-400 transition-all duration-300"
              >
                <div>
                  {/* Cover Image Container */}
                  <a
                    href={doc.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-full aspect-[3/4] bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 shadow-sm mb-4 block cursor-pointer"
                  >
                    <img
                      src={doc.coverImage}
                      alt={doc.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-3 text-center">
                      <ExternalLink className="w-8 h-8 mb-2 drop-shadow-md" />
                      <span className="text-xs font-bold bg-sky-400 text-slate-950 px-3 py-1 rounded-full shadow-lg">
                        คลิกเพื่อเปิดดูเอกสาร
                      </span>
                    </div>
                  </a>

                  <h4 className="text-base font-bold text-slate-900 font-['Kanit',sans-serif] mb-3 leading-snug">
                    {doc.title}
                  </h4>
                  {doc.subtitle && (
                    <p className="text-xs text-slate-600 mb-4 line-clamp-2">
                      {doc.subtitle}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
                  <a
                    href={doc.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-sky-600 hover:bg-sky-700 text-white font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition shadow-sm"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>เปิดเอกสาร</span>
                  </a>

                  <button
                    onClick={() =>
                      setPreviewDoc({
                        title: doc.title,
                        previewUrl: doc.previewUrl,
                        driveUrl: doc.driveUrl
                      })
                    }
                    className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1 transition shrink-0"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>ดูตัวอย่าง</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      {/* Preview Modal for Embedded View */}
      {previewDoc && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
          <div className="bg-white w-full max-w-4xl h-[85vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden border-2 border-indigo-500">
            {/* Modal Header */}
            <div className="bg-indigo-900 text-white px-5 py-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 min-w-0">
                <FileSpreadsheet className="w-6 h-6 text-indigo-300 shrink-0" />
                <div className="min-w-0">
                  <h3 className="text-sm sm:text-base font-bold font-['Kanit',sans-serif] truncate">
                    {previewDoc.title}
                  </h3>
                  <p className="text-[11px] text-indigo-200 truncate">
                    ตัวอย่างเอกสารจาก Google Drive
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={previewDoc.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold px-3 py-1.5 rounded-xl flex items-center gap-1 transition"
                >
                  <ArrowUpRight className="w-4 h-4" />
                  <span className="hidden sm:inline">เปิดไฟล์เต็ม</span>
                </a>

                <button
                  onClick={() => setPreviewDoc(null)}
                  className="p-1.5 bg-white/10 hover:bg-white/20 text-white rounded-xl transition"
                  aria-label="Close Preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: Embedded Iframe */}
            <div className="flex-1 bg-slate-100 relative">
              <iframe
                title={previewDoc.title}
                src={previewDoc.previewUrl}
                className="w-full h-full border-0"
                allow="autoplay"
              ></iframe>
            </div>

            {/* Modal Footer */}
            <div className="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
              <span className="truncate">หากพบปัญหากรณีไฟล์ไม่โหลด สามารถเปิดไฟล์โดยตรงใน Google Drive ได้</span>
              <button
                onClick={() => setPreviewDoc(null)}
                className="px-4 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold rounded-xl transition shrink-0"
              >
                ปิดหน้าต่าง
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
