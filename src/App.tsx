import React, { useState } from 'react';
import { NavigationTab } from './types';
import { Header } from './components/Header';
import { MainCardsMenu } from './components/MainCardsMenu';
import { VaccineSection } from './components/VaccineSection';
import { ScheduleSection } from './components/ScheduleSection';
import { MapSection } from './components/MapSection';
import { ContactSection } from './components/ContactSection';
import { NewsSection } from './components/NewsSection';
import { VercelDeployGuideModal } from './components/VercelDeployGuideModal';
import { CONTACT_INFO } from './data/mockData';
import { Syringe, CalendarClock, MapPin, HelpCircle, Megaphone, Home } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavigationTab>('home');
  const [isDeployModalOpen, setIsDeployModalOpen] = useState<boolean>(false);

  const handleSelectTab = (tab: NavigationTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 flex flex-col font-['Prompt',sans-serif]">
      
      {/* Top Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={handleSelectTab}
        onOpenDeployGuide={() => setIsDeployModalOpen(true)}
      />

      {/* Main Body Area (Full Responsive Container) */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-3 sm:px-6 py-3 sm:py-6">
        
        <div className="w-full">
          {/* Render Active View */}
          {activeTab === 'home' && (
            <MainCardsMenu onSelectTab={handleSelectTab} />
          )}

          {activeTab === 'vaccines' && <VaccineSection />}

          {activeTab === 'schedule' && <ScheduleSection />}

          {activeTab === 'map' && <MapSection />}

          {activeTab === 'contact' && <ContactSection />}

          {activeTab === 'news' && <NewsSection />}
        </div>
      </main>

      {/* Bottom Sticky Navigation Bar when inside sub-pages */}
      {activeTab !== 'home' && (
        <div className="sticky bottom-0 z-40 bg-slate-900 text-slate-300 border-t border-slate-800 py-2.5 px-3 shadow-2xl">
          <div className="max-w-xl mx-auto flex items-center justify-around text-xs font-medium">
            <button
              onClick={() => handleSelectTab('home')}
              className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl transition ${
                activeTab === 'home' ? 'text-amber-400 font-bold' : 'hover:text-white'
              }`}
            >
              <Home className="w-5 h-5" />
              <span>หน้าแรก</span>
            </button>

            <button
              onClick={() => handleSelectTab('vaccines')}
              className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl transition ${
                activeTab === 'vaccines' ? 'text-indigo-400 font-bold' : 'hover:text-white'
              }`}
            >
              <Syringe className="w-5 h-5 text-indigo-400" />
              <span>วัคซีน</span>
            </button>

            <button
              onClick={() => handleSelectTab('schedule')}
              className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl transition ${
                activeTab === 'schedule' ? 'text-emerald-400 font-bold' : 'hover:text-white'
              }`}
            >
              <CalendarClock className="w-5 h-5 text-emerald-400" />
              <span>เวลาบริการ</span>
            </button>

            <button
              onClick={() => handleSelectTab('map')}
              className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl transition ${
                activeTab === 'map' ? 'text-rose-400 font-bold' : 'hover:text-white'
              }`}
            >
              <MapPin className="w-5 h-5 text-rose-400" />
              <span>แผนที่</span>
            </button>

            <button
              onClick={() => handleSelectTab('contact')}
              className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl transition ${
                activeTab === 'contact' ? 'text-purple-400 font-bold' : 'hover:text-white'
              }`}
            >
              <HelpCircle className="w-5 h-5 text-purple-400" />
              <span>สอบถาม</span>
            </button>

            <a
              href={CONTACT_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl transition hover:text-white"
            >
              <Megaphone className="w-5 h-5 text-amber-400" />
              <span>ข่าวสาร</span>
            </a>
          </div>
        </div>
      )}

      {/* Vercel Deploy Guide Modal */}
      <VercelDeployGuideModal
        isOpen={isDeployModalOpen}
        onClose={() => setIsDeployModalOpen(false)}
      />
    </div>
  );
}
