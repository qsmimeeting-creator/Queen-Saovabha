import React from 'react';
import { Calendar, Clock, AlertCircle, ShieldCheck, CheckCircle2, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../data/mockData';

export const ScheduleSection: React.FC = () => {
  const serviceSchedules = [
    {
      dayGroup: 'วันจันทร์ – วันศุกร์',
      badge: 'วันทำการปกติ',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      timeSlots: [
        { period: 'รอบเช้า', timeRange: '08.30 – 12.00', cutoffTime: '11.30' },
        { period: 'รอบบ่าย', timeRange: '13.00 – 16.30', cutoffTime: '16.00' },
      ]
    },
    {
      dayGroup: 'วันเสาร์ และ วันหยุดนักขัตฤกษ์',
      badge: 'วันหยุดพิเศษ',
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
      timeSlots: [
        { period: 'รอบเช้า', timeRange: '08.30 – 12.00', cutoffTime: '11.00' },
      ]
    },
    {
      dayGroup: 'วันอาทิตย์',
      badge: 'วันหยุดทำการ',
      badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
      isClosed: true,
      notes: 'ปิดทำการ'
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6">
      
      {/* Title Header */}
      <div className="bg-gradient-to-r from-emerald-700 to-teal-800 text-white p-5 sm:p-6 rounded-3xl shadow-lg mb-6 border-2 border-emerald-900">
        <div className="flex items-center gap-3">
          <span className="p-2.5 bg-white/20 rounded-2xl backdrop-blur-sm">
            📅
          </span>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-['Kanit',sans-serif]">
              วันและเวลาการให้บริการ
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100 font-medium">
              {CONTACT_INFO.agencyName}
            </p>
          </div>
        </div>
      </div>

      {/* Main Schedule Cards */}
      <div className="space-y-4 mb-8">
        <h3 className="text-base font-bold text-slate-900 font-['Kanit',sans-serif] flex items-center gap-2">
          <Clock className="w-5 h-5 text-emerald-600" />
          กำหนดเวลาเปิดรับบริการและรอบรับบัตรคิว
        </h3>

        {serviceSchedules.map((schedule, idx) => (
          <div
            key={idx}
            className={`p-4 sm:p-6 rounded-3xl border-2 bg-white transition shadow-sm ${
              schedule.isClosed
                ? 'border-rose-200 bg-rose-50/30'
                : 'border-slate-200 hover:border-emerald-500'
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <h4 className="text-lg sm:text-xl font-bold text-slate-900 font-['Kanit',sans-serif] flex items-center gap-2">
                <Calendar className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>{schedule.dayGroup}</span>
              </h4>
              <span className={`px-3 py-1 rounded-full text-xs font-bold border ${schedule.badgeColor}`}>
                {schedule.badge}
              </span>
            </div>

            {schedule.isClosed ? (
              <div className="p-4 bg-rose-100/60 rounded-2xl border border-rose-200 text-rose-900 font-bold text-sm text-center">
                ⛔ {schedule.notes}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {schedule.timeSlots?.map((slot, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3.5 sm:p-4 bg-slate-50 hover:bg-emerald-50/40 rounded-2xl border border-slate-200 transition flex flex-col justify-between gap-2.5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base font-['Kanit',sans-serif]">
                        <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span className="text-slate-700 text-xs font-bold bg-slate-200/80 px-2 py-0.5 rounded-md">
                          {slot.period}
                        </span>
                      </div>
                      <span className="text-emerald-800 bg-emerald-100/90 px-2.5 py-1 rounded-lg text-xs sm:text-sm font-bold border border-emerald-300/80 shrink-0">
                        เวลา {slot.timeRange} น.
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-bold text-rose-700 bg-rose-50/90 px-3 py-1.5 rounded-xl border border-rose-200/80">
                      <span>📌 ปิดรับบัตรคิว เวลา {slot.cutoffTime} น.</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Guidelines Box */}
      <div className="bg-white p-5 sm:p-6 rounded-3xl border-2 border-slate-200 shadow-sm space-y-3">
        <h3 className="text-base font-bold text-slate-900 font-['Kanit',sans-serif] flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          คำแนะนำและข้อปฏิบัติสำหรับการรับบริการ
        </h3>

        <ul className="space-y-2 text-xs text-slate-700 leading-relaxed">
          <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-2xl border border-slate-100">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>โปรดนำ<strong>บัตรประจำตัวประชาชน</strong> (สำหรับชาวไทย) หรือ <strong>หนังสือเดินทาง (Passport)</strong> (สำหรับชาวต่างชาติ) มาแสดงตนทุกครั้ง</span>
          </li>
          <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-2xl border border-slate-100">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>หากมี<strong>สมุดประวัติการได้รับวัคซีนเดิม</strong> กรุณานำมาให้แพทย์หรือพยาบาลตรวจสอบ</span>
          </li>
          <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-2xl border border-slate-100">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>ต้องทำการ<strong>นั่งสังเกตอาการหลังได้รับวัคซีนอย่างน้อย 30 นาที</strong> ณ จุดพักรอ เพื่อความปลอดภัยสูงสุด</span>
          </li>
        </ul>
      </div>

    </div>
  );
};
