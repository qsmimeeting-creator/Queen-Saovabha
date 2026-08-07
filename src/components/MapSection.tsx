import React, { useState } from 'react';
import { CONTACT_INFO } from '../data/mockData';
import { MapPin, Navigation, Bus, Train, Car, Copy, Check, ExternalLink, Compass } from 'lucide-react';

export const MapSection: React.FC = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CONTACT_INFO.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const mapShortUrl = CONTACT_INFO.googleMapsShareUrl; // https://maps.app.goo.gl/at2vu3VrRdmJp1Lz9?g_st=ic

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6">
      
      {/* Title Header */}
      <div className="bg-gradient-to-r from-rose-600 to-pink-700 text-white p-5 sm:p-6 rounded-3xl shadow-lg mb-6 border-2 border-rose-900">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <span className="p-2.5 bg-white/20 rounded-2xl backdrop-blur-sm">
              📍
            </span>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-['Kanit',sans-serif]">
                แผนที่ และ ที่ตั้งหน่วยงาน
              </h2>
              <p className="text-xs sm:text-sm text-rose-100 font-medium">
                {CONTACT_INFO.agencyName}
              </p>
            </div>
          </div>

          <a
            href={mapShortUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-rose-700 hover:bg-rose-50 font-bold px-4 py-2.5 rounded-2xl text-xs flex items-center gap-2 shadow-md transition shrink-0"
          >
            <Compass className="w-4 h-4" />
            เปิดแผนที่ (Google Maps)
          </a>
        </div>
      </div>

      {/* Main Map Box */}
      <div className="bg-white rounded-3xl p-5 border-2 border-slate-200 shadow-sm mb-6">
        
        {/* Real Embedded Google Map for Queen Saovabha Memorial Institute */}
        <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-300 mb-4 shadow-inner bg-slate-100">
          <iframe
            title="แผนที่ สถานเสาวภา สภากาชาดไทย"
            src="https://maps.google.com/maps?q=13.731728,100.531713&hl=th&z=17&output=embed"
            className="w-full h-full border-0"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Floating Action Button directly targeting user's link */}
          <a
            href={mapShortUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-3 right-3 z-10 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2 transition"
          >
            <Compass className="w-4 h-4" />
            เปิดใน Google Maps App
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <a
            href={mapShortUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-1/2 bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-4 rounded-2xl text-xs flex items-center justify-center gap-2 shadow-md transition"
          >
            <Navigation className="w-4 h-4" />
            นำทางด้วย GPS (https://maps.app.goo.gl/at2vu3VrRdmJp1Lz9)
          </a>

          <button
            onClick={handleCopyAddress}
            className="w-full sm:w-1/2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-3 px-4 rounded-2xl text-xs flex items-center justify-center gap-2 border border-slate-300 transition"
          >
            {copiedAddress ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span>คัดลอกที่อยู่เรียบร้อยแล้ว</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-600" />
                <span>คัดลอกที่อยู่สถานเสาวภา</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Address Details & Public Transport */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Address Card */}
        <div className="bg-white p-5 rounded-3xl border-2 border-slate-200 shadow-sm space-y-3">
          <h3 className="text-base font-bold text-slate-900 font-['Kanit',sans-serif] flex items-center gap-2">
            <MapPin className="w-5 h-5 text-rose-600" />
            ที่อยู่สถานเสาวภา สภากาชาดไทย
          </h3>

          <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 text-xs text-slate-800 leading-relaxed font-medium">
            {CONTACT_INFO.address}
          </div>

          <div className="text-xs space-y-2 text-slate-600">
            <p className="bg-amber-50 p-2.5 rounded-xl border border-amber-200 text-amber-900 font-medium">
              💡 <strong>จุดสังเกตสำคัญ:</strong> ตั้งอยู่ริมถนนพระรามที่ 4 แขวงปทุมวัน เขตปทุมวัน ใกล้กับโรงพยาบาลจุฬาลงกรณ์ สภากาชาดไทย และสามย่านมิตรทาวน์
            </p>
          </div>
        </div>

        {/* Transportation Options */}
        <div className="bg-white p-5 rounded-3xl border-2 border-slate-200 shadow-sm space-y-3">
          <h3 className="text-base font-bold text-slate-900 font-['Kanit',sans-serif]">
            🚌 การเดินทางด้วยรถสาธารณะ
          </h3>

          <div className="space-y-2.5 text-xs">
            {/* MRT */}
            <div className="bg-blue-50 p-3 rounded-2xl border border-blue-200 flex items-start gap-2.5">
              <Train className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
              <div>
                <strong className="text-blue-900 font-bold">รถไฟฟ้า MRT:</strong>
                <p className="text-blue-950 mt-0.5">{CONTACT_INFO.mrtStation}</p>
              </div>
            </div>

            {/* BTS */}
            <div className="bg-emerald-50 p-3 rounded-2xl border border-emerald-200 flex items-start gap-2.5">
              <Train className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <strong className="text-emerald-900 font-bold">รถไฟฟ้า BTS:</strong>
                <p className="text-emerald-950 mt-0.5">{CONTACT_INFO.btsStation}</p>
              </div>
            </div>

            {/* Bus */}
            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 flex items-start gap-2.5">
              <Bus className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 font-bold">รถประจำทาง:</strong>
                <p className="text-slate-800 mt-0.5">{CONTACT_INFO.busLines}</p>
              </div>
            </div>

            {/* Parking */}
            <div className="bg-amber-50 p-3 rounded-2xl border border-amber-200 flex items-start gap-2.5">
              <Car className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-900 font-bold">ที่จอดรถ:</strong>
                <p className="text-amber-950 mt-0.5">{CONTACT_INFO.parkingInfo}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
