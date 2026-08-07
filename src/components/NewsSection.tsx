import React from 'react';
import { ExternalLink, Globe, Megaphone, ArrowUpRight, Sparkles, Building2, Bell, Share2, Check, Facebook } from 'lucide-react';
import { CONTACT_INFO } from '../data/mockData';

export const NewsSection: React.FC = () => {
  const [copiedLink, setCopiedLink] = React.useState(false);

  const facebookPageUrl = CONTACT_INFO.facebookUrl; // https://www.facebook.com/QSMITRCS
  const facebookIframeSrc = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(facebookPageUrl)}&tabs=timeline&width=500&height=650&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`;

  const handleShare = () => {
    navigator.clipboard.writeText(facebookPageUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6">
      
      {/* Title Header */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white p-5 sm:p-6 rounded-3xl shadow-lg mb-6 border-2 border-blue-900">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <span className="p-2.5 bg-white/20 rounded-2xl backdrop-blur-sm">
              📢
            </span>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-['Kanit',sans-serif]">
                ประกาศและข่าวสาร
              </h2>
              <p className="text-xs sm:text-sm font-medium text-blue-100">
                {CONTACT_INFO.agencyName}
              </p>
            </div>
          </div>

          <a
            href={facebookPageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-4 py-2.5 rounded-2xl text-xs flex items-center gap-2 shadow-md transition shrink-0"
          >
            <Facebook className="w-4 h-4 fill-slate-900" />
            เปิด Facebook Page สถานเสาวภา
          </a>
        </div>
      </div>

      {/* Facebook Page Embedded Widget Section */}
      <div className="bg-white p-4 sm:p-6 rounded-3xl border-2 border-blue-200 shadow-md mb-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0">
              <Facebook className="w-6 h-6 fill-white" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 font-['Kanit',sans-serif]">
                ข่าวสารและประกาศเรียลไทม์ (Facebook Official Page)
              </h3>
              <p className="text-xs text-slate-500">
                เพจทางการ: สถานเสาวภา สภากาชาดไทย : Queen Saovabha Memorial Institute
              </p>
            </div>
          </div>

          <a
            href={facebookPageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-xl text-xs transition flex items-center gap-1.5 shrink-0"
          >
            <span>ไปยัง Facebook Page</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Embedded Facebook Page Feed */}
        <div className="w-full flex justify-center bg-slate-50 p-2 sm:p-4 rounded-2xl border border-slate-200 min-h-[500px]">
          <iframe
            title="Facebook Page สถานเสาวภา สภากาชาดไทย"
            src={facebookIframeSrc}
            width="500"
            height="650"
            style={{ border: 'none', overflow: 'hidden', maxWidth: '100%' }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            className="rounded-xl shadow-sm w-full max-w-[500px]"
          ></iframe>
        </div>

        <div className="mt-4 p-3.5 bg-blue-50 rounded-2xl border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-blue-950">
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-blue-600 shrink-0" />
            <span>หาก Facebook Feed ไม่โหลด สามารถคลิกติดตามข่าวสารได้ทาง Facebook โดยตรง</span>
          </div>
          <a
            href={facebookPageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-bold text-blue-700 hover:text-blue-900 shrink-0"
          >
            https://www.facebook.com/QSMITRCS
          </a>
        </div>
      </div>

      {/* Official Website Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <a
          href={facebookPageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-5 rounded-3xl border-2 border-slate-200 hover:border-blue-600 shadow-sm transition flex items-center justify-between group"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition">
              <Facebook className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 font-['Kanit',sans-serif]">
                Facebook Fanpage สถานเสาวภา
              </h4>
              <p className="text-xs text-slate-500">ติดตามประกาศ สต็อกวัคซีน และการให้บริการ</p>
            </div>
          </div>
          <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition" />
        </a>

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
                เว็บไซต์ทางการ สถานเสาวภา
              </h4>
              <p className="text-xs text-slate-500">www.saovabha.org</p>
            </div>
          </div>
          <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition" />
        </a>
      </div>

      {/* Share Box */}
      <div className="bg-white p-5 rounded-3xl border-2 border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
          <span className="font-semibold text-slate-800">
            แชร์ Facebook Page สถานเสาวภา สภากาชาดไทย
          </span>
        </div>

        <button
          onClick={handleShare}
          className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-4 py-2.5 rounded-2xl flex items-center gap-2 transition shrink-0"
        >
          {copiedLink ? (
            <>
              <Check className="w-4 h-4 text-emerald-400" />
              <span>คัดลอกลิงก์เรียบร้อยแล้ว</span>
            </>
          ) : (
            <>
              <Share2 className="w-4 h-4" />
              <span>คัดลอกลิงก์ Facebook Page</span>
            </>
          )}
        </button>
      </div>

    </div>
  );
};
