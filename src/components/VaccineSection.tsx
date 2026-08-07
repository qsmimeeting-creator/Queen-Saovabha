import React from 'react';
import { ExternalLink, Globe, Phone, FileText, ShieldCheck, ArrowUpRight, FileSpreadsheet, Download, RefreshCw } from 'lucide-react';
import { CONTACT_INFO } from '../data/mockData';

export const VaccineSection: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6">
      
      {/* Title Header */}
      <div className="bg-gradient-to-r from-indigo-700 to-purple-800 text-white p-5 sm:p-6 rounded-3xl shadow-lg mb-6 border-2 border-indigo-900">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <span className="p-2.5 bg-white/20 rounded-2xl backdrop-blur-sm">
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

          <a
            href={CONTACT_INFO.vaccineDriveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-4 py-2.5 rounded-2xl text-xs flex items-center gap-2 shadow-md transition"
          >
            <ExternalLink className="w-4 h-4" />
            เปิดไฟล์เอกสารราคาวัคซีนทางการ
          </a>
        </div>
      </div>

      {/* Embedded Google Drive File Preview */}
      <div className="bg-white p-4 sm:p-6 rounded-3xl border-2 border-indigo-200 shadow-md mb-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <FileSpreadsheet className="w-6 h-6 text-indigo-600 shrink-0" />
            <div>
              <h3 className="text-base font-bold text-slate-900 font-['Kanit',sans-serif]">
                เอกสารรายการและราคาวัคซีน
              </h3>
              <p className="text-xs text-slate-500">
                เอกสารทางการจากสถานเสาวภา สภากาชาดไทย
              </p>
            </div>
          </div>

          <a
            href={CONTACT_INFO.vaccineDriveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-4 py-2 rounded-xl text-xs transition flex items-center justify-center gap-1.5"
          >
            <span>เปิดดูใน Google Drive</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Embedded Document Frame */}
        <div className="w-full h-[520px] sm:h-[650px] bg-slate-100 rounded-2xl overflow-hidden border border-slate-300 shadow-inner relative">
          <iframe
            title="เอกสารรายการและราคาวัคซีน สถานเสาวภา"
            src={CONTACT_INFO.vaccineDrivePreviewUrl}
            className="w-full h-full border-0"
            allow="autoplay"
          ></iframe>
        </div>

        <div className="mt-4 p-3.5 bg-indigo-50 rounded-2xl border border-indigo-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-indigo-950">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>หากเอกสารไม่แสดงผล สามารถคลิกเปิดลิงก์ไฟล์ตรงได้ที่ปุ่มด้านขวา</span>
          </div>
          <a
            href={CONTACT_INFO.vaccineDriveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-bold text-indigo-700 hover:text-indigo-900 shrink-0"
          >
            https://drive.google.com/file/d/1a-gtxVDNaBeb3pYUATA1LSgpYQv-5YV6
          </a>
        </div>
      </div>

      {/* Official Website & Telephone Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a
          href={CONTACT_INFO.website}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-5 rounded-3xl border-2 border-slate-200 hover:border-indigo-600 shadow-sm transition flex items-center justify-between group"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 font-['Kanit',sans-serif]">
                เว็บไซต์หลัก สถานเสาวภา
              </h4>
              <p className="text-xs text-slate-500">www.saovabha.org</p>
            </div>
          </div>
          <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition" />
        </a>

        <div className="bg-white p-5 rounded-3xl border-2 border-slate-200 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 font-['Kanit',sans-serif]">
                โทรสอบถามสต็อกวัคซีน
              </h4>
              <p className="text-xs text-slate-600 font-semibold">{CONTACT_INFO.directPhone}</p>
            </div>
          </div>
          <a
            href="tel:022520161"
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3 py-2 rounded-xl transition"
          >
            โทรออก
          </a>
        </div>
      </div>

    </div>
  );
};
