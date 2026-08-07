import React from 'react';
import { Syringe, CalendarClock, MapPin, HelpCircle, Megaphone, ArrowUpRight, ChevronRight } from 'lucide-react';
import { CONTACT_INFO } from '../data/mockData';
import { NavigationTab } from '../types';

interface MainCardsMenuProps {
  onSelectTab?: (tab: NavigationTab) => void;
}

export const MainCardsMenu: React.FC<MainCardsMenuProps> = ({ onSelectTab }) => {
  const menuItems = [
    {
      id: 'vaccines',
      title: 'รายการและราคาวัคซีน',
      subtitle: 'เปิดไฟล์เอกสารราคาวัคซีน',
      bgColor: 'bg-indigo-600',
      icon: <Syringe className="w-8 h-8 text-white stroke-[2.2]" />,
      badgeText: 'Google Drive',
      url: CONTACT_INFO.vaccineDriveUrl,
      isInternal: false
    },
    {
      id: 'schedule' as NavigationTab,
      title: 'วันและเวลาการให้บริการ',
      subtitle: 'ตารางเวลาการให้บริการฉีดวัคซีน',
      bgColor: 'bg-emerald-600',
      icon: <CalendarClock className="w-8 h-8 text-white stroke-[2.2]" />,
      badgeText: 'ข้อมูลในระบบ',
      isInternal: true
    },
    {
      id: 'map' as NavigationTab,
      title: 'แผนที่และการเดินทาง',
      subtitle: 'พิกัดและวิธีเดินทาง (BTS / MRT / รถเมล์)',
      bgColor: 'bg-rose-500',
      icon: <MapPin className="w-8 h-8 text-white stroke-[2.2]" />,
      badgeText: 'ข้อมูลในระบบ',
      isInternal: true
    },
    {
      id: 'contact' as NavigationTab,
      title: 'สอบถามข้อมูล',
      subtitle: 'โทรศัพท์, Facebook Messenger และ LINE',
      bgColor: 'bg-blue-600',
      icon: <HelpCircle className="w-8 h-8 text-white stroke-[2.2]" />,
      badgeText: 'ข้อมูลในระบบ',
      isInternal: true
    },
    {
      id: 'news',
      title: 'ประกาศและข่าวสาร',
      subtitle: 'ติดตามข่าวประชาสัมพันธ์บน Facebook Page',
      bgColor: 'bg-amber-500',
      icon: <Megaphone className="w-8 h-8 text-white stroke-[2.2]" />,
      badgeText: 'Facebook Page',
      url: CONTACT_INFO.facebookUrl,
      isInternal: false
    }
  ];

  return (
    <div className="w-full bg-[#EAB308] min-h-[calc(100vh-80px)] px-4 py-6 sm:py-8 flex flex-col items-center">
      
      {/* Sub-banner title */}
      <div className="w-full max-w-md mb-5 text-center">
        <span className="inline-block bg-slate-900 text-amber-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-1 shadow-sm">
          เมนูบริการหลัก
        </span>
        <p className="text-slate-900 text-xs font-medium">
          แตะเลือกรายการเพื่อเข้าดูข้อมูลหรือเปิดลิงก์บริการ
        </p>
      </div>

      {/* Main 5 Cards */}
      <div className="w-full max-w-md flex flex-col gap-4">
        {menuItems.map((item) => {
          const cardContent = (
            <>
              {/* Inner Flex Container matching reference layout */}
              <div className="flex items-center gap-4 flex-1 min-w-0">
                
                {/* Colorful Rounded Icon Container */}
                <div className={`${item.bgColor} w-16 h-16 sm:w-18 sm:h-18 rounded-2xl flex items-center justify-center shrink-0 border-2 border-slate-900 shadow-sm transition group-hover:scale-105`}>
                  {item.icon}
                </div>

                {/* Title & Subtitle */}
                <div className="flex-1 min-w-0 pr-2">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-tight font-['Kanit',sans-serif] group-hover:text-emerald-700 transition">
                      {item.title}
                    </h2>
                  </div>
                  <p className="text-xs sm:text-xs text-slate-600 font-medium leading-relaxed line-clamp-2">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* Right Action Icon */}
              <div className="w-10 h-10 rounded-2xl bg-slate-100 group-hover:bg-slate-900 group-hover:text-white flex items-center justify-center transition shrink-0 border border-slate-300 group-hover:border-slate-900 ml-2 shadow-sm">
                {item.isInternal ? (
                  <ChevronRight className="w-5 h-5 text-slate-700 group-hover:text-white transition" />
                ) : (
                  <ArrowUpRight className="w-5 h-5 text-slate-700 group-hover:text-white transition" />
                )}
              </div>
            </>
          );

          if (item.isInternal) {
            return (
              <button
                key={item.id}
                onClick={() => onSelectTab?.(item.id as NavigationTab)}
                className="group w-full bg-white rounded-3xl p-4 sm:p-4 border-2 border-slate-900 text-left transition-all duration-200 active:scale-[0.98] hover:-translate-y-1 relative overflow-hidden shadow-[4px_6px_0px_rgba(15,23,42,1)] hover:shadow-[6px_9px_0px_rgba(15,23,42,1)] flex items-center justify-between"
              >
                {cardContent}
              </button>
            );
          }

          return (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full bg-white rounded-3xl p-4 sm:p-4 border-2 border-slate-900 text-left transition-all duration-200 active:scale-[0.98] hover:-translate-y-1 relative overflow-hidden shadow-[4px_6px_0px_rgba(15,23,42,1)] hover:shadow-[6px_9px_0px_rgba(15,23,42,1)] flex items-center justify-between"
            >
              {cardContent}
            </a>
          );
        })}
      </div>
    </div>
  );
};
