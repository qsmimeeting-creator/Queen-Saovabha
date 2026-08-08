import React, { useState } from 'react';
import { CONTACT_INFO } from '../data/mockData';
import { MapPin, Navigation, Bus, Train, Car, Copy, Check, ExternalLink, Compass } from 'lucide-react';

export const MapSection: React.FC = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedCoords, setCopiedCoords] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CONTACT_INFO.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const coordsString = `${CONTACT_INFO.coordinates.lat}, ${CONTACT_INFO.coordinates.lng}`;

  const handleCopyCoords = () => {
    navigator.clipboard.writeText(coordsString);
    setCopiedCoords(true);
    setTimeout(() => setCopiedCoords(false), 2000);
  };

  const mapShortUrl = CONTACT_INFO.googleMapsShareUrl; // https://maps.app.goo.gl/at2vu3VrRdmJp1Lz9?g_st=ic
  const directNavUrl = `https://www.google.com/maps/dir/?api=1&destination=${CONTACT_INFO.coordinates.lat},${CONTACT_INFO.coordinates.lng}`;

  // Bus numbers list
  const busList = ['4', '15', '47', '50', '74', '77', '109', '163', '172', '177', '514'];

  return (
    <div className="w-full max-w-4xl mx-auto px-2 sm:px-4 py-4 sm:py-6">
      
      {/* Title Header */}
      <div className="bg-gradient-to-r from-rose-600 via-rose-700 to-pink-700 text-white p-5 sm:p-6 rounded-3xl shadow-lg mb-6 border-2 border-rose-900">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <span className="p-2.5 bg-white/20 rounded-2xl backdrop-blur-sm">
              📍
            </span>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-['Kanit',sans-serif]">
                แผนที่ พิกัด และการเดินทาง
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
            <Compass className="w-4 h-4 text-rose-600" />
            เปิดแผนที่ (Google Maps)
          </a>
        </div>
      </div>

      {/* Main Map Box */}
      <div className="bg-white rounded-3xl p-4 sm:p-5 border-2 border-slate-200 shadow-sm mb-6">
        
        {/* GPS Coordinates Header Badge */}
        <div className="bg-rose-50 border border-rose-200 rounded-2xl p-3 mb-4 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-xs text-rose-950 font-medium">
            <MapPin className="w-4 h-4 text-rose-600 shrink-0" />
            <span><strong>พิกัด GPS:</strong> {coordsString}</span>
          </div>

          <button
            onClick={handleCopyCoords}
            className="bg-white hover:bg-rose-100 text-rose-700 border border-rose-300 font-bold px-3 py-1.5 rounded-xl text-xs flex items-center gap-1.5 transition"
          >
            {copiedCoords ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>คัดลอกพิกัดแล้ว</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-rose-600" />
                <span>คัดลอกพิกัด GPS</span>
              </>
            )}
          </button>
        </div>

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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a
            href={directNavUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-4 rounded-2xl text-xs flex items-center justify-center gap-2 shadow-md transition"
          >
            <Navigation className="w-4 h-4" />
            <span>นำทางด้วย Google Maps</span>
          </a>

          <button
            onClick={handleCopyAddress}
            className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-3 px-4 rounded-2xl text-xs flex items-center justify-center gap-2 border border-slate-300 transition"
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
            ที่อยู่และจุดสังเกต
          </h3>

          <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 text-xs text-slate-800 leading-relaxed font-medium">
            {CONTACT_INFO.address}
          </div>

          <div className="text-xs space-y-2 text-slate-600">
            <div className="bg-amber-50 p-3 rounded-2xl border border-amber-200 text-amber-950 leading-relaxed font-medium">
              💡 <strong>จุดสังเกตสำคัญ:</strong> ตั้งอยู่ริมถนนพระรามที่ 4 ติดกับจามจุรีสแควร์ และอยู่ตรงข้ามกับโรงพยาบาลจุฬาลงกรณ์ สภากาชาดไทย ฝั่งถนนอังรีดูนังต์
            </div>
          </div>
        </div>

        {/* Transportation Options */}
        <div className="bg-white p-5 rounded-3xl border-2 border-slate-200 shadow-sm space-y-3">
          <h3 className="text-base font-bold text-slate-900 font-['Kanit',sans-serif] flex items-center gap-2">
            <Bus className="w-5 h-5 text-blue-600" />
            วิธีการเดินทางมายังสถานเสาวภา
          </h3>

          <div className="space-y-3 text-xs">
            {/* MRT */}
            <div className="bg-blue-50 p-3.5 rounded-2xl border border-blue-200 flex items-start gap-3">
              <Train className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
              <div>
                <strong className="text-blue-900 font-bold block text-xs sm:text-sm mb-0.5">
                  🚇 รถไฟฟ้า MRT (สายสีน้ำเงิน)
                </strong>
                <p className="text-blue-950 font-medium leading-relaxed">
                  {CONTACT_INFO.mrtStation}
                </p>
              </div>
            </div>

            {/* BTS */}
            <div className="bg-emerald-50 p-3.5 rounded-2xl border border-emerald-200 flex items-start gap-3">
              <Train className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <strong className="text-emerald-900 font-bold block text-xs sm:text-sm mb-0.5">
                  🚆 รถไฟฟ้า BTS (สายสีลม)
                </strong>
                <p className="text-emerald-950 font-medium leading-relaxed">
                  {CONTACT_INFO.btsStation} (เดินมุ่งหน้าถ.พระราม 4 ประมาณ 500 เมตร)
                </p>
              </div>
            </div>

            {/* Bus */}
            <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 flex items-start gap-3">
              <Bus className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
              <div className="w-full">
                <strong className="text-slate-900 font-bold block text-xs sm:text-sm mb-1.5">
                  🚌 รถประจำทาง (สายรถเมล์ที่ผ่าน)
                </strong>
                <div className="flex flex-wrap gap-1.5">
                  {busList.map((busNo) => (
                    <span key={busNo} className="bg-slate-200 text-slate-900 font-extrabold px-2 py-0.5 rounded-md text-[11px] shadow-sm">
                      สาย {busNo}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Parking */}
            <div className="bg-amber-50 p-3.5 rounded-2xl border border-amber-200 flex items-start gap-3">
              <Car className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-900 font-bold block text-xs sm:text-sm mb-0.5">
                  🚗 รถยนต์ส่วนบุคคล & ที่จอดรถ
                </strong>
                <p className="text-amber-950 font-medium leading-relaxed">
                  {CONTACT_INFO.parkingInfo}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
