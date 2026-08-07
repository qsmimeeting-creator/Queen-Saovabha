import React from 'react';
import { CONTACT_INFO } from '../data/mockData';
import { Phone, MessageSquare, ArrowUpRight, MessageCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const messengerUrl = CONTACT_INFO.facebookMessengerUrl; // https://m.me/QSMITRCS
  const lineUrl = CONTACT_INFO.lineUrl; // https://line.me/R/ti/p/@saovabha

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6">
      
      {/* Title Header */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-800 to-purple-900 text-white p-5 sm:p-6 rounded-3xl shadow-lg mb-6 border-2 border-indigo-900">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <span className="p-2.5 bg-white/20 rounded-2xl backdrop-blur-sm text-2xl">
              💬
            </span>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-['Kanit',sans-serif]">
                สอบถามข้อมูลและช่องทางติดต่อ
              </h2>
              <p className="text-xs sm:text-sm text-indigo-100 font-medium">
                {CONTACT_INFO.agencyName}
              </p>
            </div>
          </div>

          <a
            href={messengerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sky-400 hover:bg-sky-300 text-slate-900 font-bold px-4 py-2.5 rounded-2xl text-xs flex items-center gap-2 shadow-md transition shrink-0"
          >
            <MessageSquare className="w-4 h-4 text-blue-900" />
            แชทผ่าน Facebook Messenger
          </a>
        </div>
      </div>

      {/* Prominent 3 Main Contact Channels Banner */}
      <div className="space-y-3 mb-8">
        <h3 className="text-base font-bold text-slate-900 font-['Kanit',sans-serif] flex items-center gap-2">
          <Phone className="w-5 h-5 text-indigo-600" />
          ช่องทางติดต่อสอบถามข้อมูลหลัก
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Channel 1: Phone */}
          <div className="bg-white border-2 border-slate-200 hover:border-emerald-500 rounded-3xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200 shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full block w-fit mb-0.5">
                    โทรศัพท์ติดต่อ
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 font-['Kanit',sans-serif]">
                    ช่องทางการติดต่อ
                  </h4>
                </div>
              </div>

              <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-3 mb-3">
                <p className="text-xs text-slate-500 font-semibold mb-0.5">หมายเลขโทรศัพท์:</p>
                <p className="text-sm sm:text-base font-extrabold text-slate-900 font-['Kanit',sans-serif] leading-snug">
                  โทร. 0 2252 0161–4
                </p>
                <p className="text-xs font-bold text-emerald-800 mt-1 bg-emerald-100/80 px-2 py-0.5 rounded-md inline-block">
                  ต่อ 82119, 82731
                </p>
              </div>
            </div>

            <a
              href={`tel:${CONTACT_INFO.phoneCallNumber}`}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-2xl text-xs flex items-center justify-center gap-2 shadow-sm transition mt-2"
            >
              <Phone className="w-4 h-4" />
              <span>กดเพื่อโทรออก (02-252-0161)</span>
            </a>
          </div>

          {/* Channel 2: Facebook Messenger */}
          <div className="bg-white border-2 border-slate-200 hover:border-blue-500 rounded-3xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200 shadow-sm">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded-full block w-fit mb-0.5">
                    Facebook Messenger
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 font-['Kanit',sans-serif]">
                    ส่งข้อความแชท
                  </h4>
                </div>
              </div>

              <div className="bg-blue-50/70 border border-blue-200 rounded-2xl p-3 mb-3">
                <p className="text-xs text-slate-500 font-semibold mb-0.5">Messenger Link:</p>
                <p className="text-sm sm:text-base font-extrabold text-blue-700 font-['Kanit',sans-serif] break-all">
                  m.me/QSMITRCS
                </p>
                <p className="text-[11px] text-slate-600 mt-1">
                  สอบถามข้อมูลบริการกับเจ้าหน้าที่โดยตรง
                </p>
              </div>
            </div>

            <a
              href={messengerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded-2xl text-xs flex items-center justify-center gap-2 shadow-sm transition mt-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>เปิดแชท Messenger</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Channel 3: LINE Official */}
          <div className="bg-white border-2 border-slate-200 hover:border-emerald-600 rounded-3xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shrink-0 border border-emerald-600 shadow-sm">
                  <MessageCircle className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <span className="bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full block w-fit mb-0.5">
                    LINE Official Account
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 font-['Kanit',sans-serif]">
                    เพิ่มเพื่อน Line
                  </h4>
                </div>
              </div>

              <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-3 mb-3">
                <p className="text-xs text-slate-500 font-semibold mb-0.5">LINE Official ID:</p>
                <p className="text-base sm:text-lg font-extrabold text-emerald-700 font-['Kanit',sans-serif]">
                  {CONTACT_INFO.lineId}
                </p>
                <p className="text-[11px] text-slate-600 mt-1">
                  รับข่าวสารและสอบถามผ่าน LINE Official
                </p>
              </div>
            </div>

            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2.5 px-4 rounded-2xl text-xs flex items-center justify-center gap-2 shadow-sm transition mt-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>เพิ่มเพื่อน LINE (@saovabha)</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>

    </div>
  );
};
