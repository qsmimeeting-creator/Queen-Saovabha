import React from 'react';
import { CONTACT_INFO } from '../data/mockData';
import { NavigationTab } from '../types';
import { SaovabhaLogo } from './SaovabhaLogo';

interface HeaderProps {
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
  onOpenDeployGuide?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full shadow-md">
      {/* Top Bar Banner matching official colors */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white px-4 py-3 sm:px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
          
          {/* Logo & Agency Name */}
          <div 
            onClick={() => setActiveTab('home')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            {/* Official Saovabha Emblem Logo */}
            <div className="rounded-full bg-white p-0.5 shadow-md border-2 border-amber-300 shrink-0 transform transition group-hover:scale-105">
              <SaovabhaLogo className="w-13 h-13 sm:w-16 sm:h-16" />
            </div>

            <div>
              <div className="flex flex-col">
                <h1 className="text-base sm:text-lg font-extrabold tracking-tight text-white font-['Kanit',sans-serif] leading-tight">
                  {CONTACT_INFO.clinicName}
                </h1>
                <p className="text-xs sm:text-sm text-amber-200 font-bold flex items-center gap-1.5 mt-0.5">
                  {CONTACT_INFO.instituteName}
                </p>
              </div>
              <p className="text-[11px] text-blue-100/90 font-light mt-0.5">
                {CONTACT_INFO.agencyNameEn}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
