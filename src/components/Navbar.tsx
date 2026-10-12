import React from 'react';
import { PhoneCall, ShieldAlert, Bus, Radio, MapPin } from 'lucide-react';

export type AppView = 'tracker' | 'boards' | 'search' | 'places' | 'fleet' | 'help';

interface NavbarProps {
  lang: 'en' | 'kn';
  onToggleLang: () => void;
  activeView: AppView;
  onSelectView: (view: AppView) => void;
  onOpenSos: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  activeView,
  onSelectView,
  onOpenSos,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 px-4 lg:px-8 py-3.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Zone 1: Brand Title - Single Text Element Wordmark */}
        <button
          onClick={() => onSelectView('tracker')}
          className="text-left group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-red-600 to-amber-600 flex items-center justify-center text-white shadow-md shadow-red-950/40 border border-red-400/30">
            <Bus className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-red-400 transition-colors">
              {lang === 'kn' ? 'ಕೆ.ಎಸ್.ಆರ್.ಟಿ.ಸಿ · ನಮ್ಮ ಬಸ್' : 'KSRTC · Namma Bus Live'}
            </span>
            <span className="text-[10px] text-slate-400 font-medium tracking-wide">
              {lang === 'kn' ? 'ನೈಜ ಸಮಯದ ಜಿಪಿಎಸ್ ಟ್ರ್ಯಾಕಿಂಗ್' : 'Sarathi Real-Time GPS Tracking'}
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links (single line, clean typography) */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <button
            onClick={() => onSelectView('tracker')}
            className={`transition-colors flex items-center gap-1.5 hover:text-white ${
              activeView === 'tracker' ? 'text-red-400 font-semibold' : 'text-slate-400'
            }`}
          >
            <Radio className="w-3.5 h-3.5 text-red-500 animate-pulse" />
            <span>{lang === 'kn' ? 'ಲೈವ್ ಬಸ್ ಟ್ರ್ಯಾಕರ್' : 'Live Bus Tracker'}</span>
          </button>
          <button
            onClick={() => onSelectView('boards')}
            className={`transition-colors hover:text-white ${
              activeView === 'boards' ? 'text-red-400 font-semibold' : 'text-slate-400'
            }`}
          >
            <span>{lang === 'kn' ? 'ನಿಲ್ದಾಣ ಫಲಕ' : 'Terminal Boards'}</span>
          </button>
          <button
            onClick={() => onSelectView('places')}
            className={`transition-colors hover:text-white flex items-center gap-1 ${
              activeView === 'places' ? 'text-red-400 font-semibold' : 'text-slate-400'
            }`}
          >
            <MapPin className="w-3.5 h-3.5 text-amber-500" />
            <span>{lang === 'kn' ? 'ಕರ್ನಾಟಕ ಸ್ಥಳಗಳು (31 ಜಿಲ್ಲೆ)' : 'Karnataka Places (31 Districts)'}</span>
          </button>
          <button
            onClick={() => onSelectView('search')}
            className={`transition-colors hover:text-white ${
              activeView === 'search' ? 'text-red-400 font-semibold' : 'text-slate-400'
            }`}
          >
            <span>{lang === 'kn' ? 'ಮಾರ್ಗ ಮತ್ತು ವೇಳಾಪಟ್ಟಿ' : 'Route Timetable'}</span>
          </button>
          <button
            onClick={() => onSelectView('fleet')}
            className={`transition-colors hover:text-white ${
              activeView === 'fleet' ? 'text-red-400 font-semibold' : 'text-slate-400'
            }`}
          >
            <span>{lang === 'kn' ? 'ಬಸ್ ಮಾದರಿಗಳು' : 'Fleet & Classes'}</span>
          </button>
          <button
            onClick={() => onSelectView('help')}
            className={`transition-colors hover:text-white ${
              activeView === 'help' ? 'text-red-400 font-semibold' : 'text-slate-400'
            }`}
          >
            <span>{lang === 'kn' ? 'ಸಹಾಯವಾಣಿ' : 'Passenger Support'}</span>
          </button>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-2.5">
          {/* Language Toggle */}
          <button
            onClick={onToggleLang}
            aria-label="Toggle language between English and Kannada"
            className="px-2.5 py-1.5 text-xs font-semibold rounded-md border border-slate-700 bg-slate-900/80 text-slate-200 hover:border-slate-500 hover:text-white transition-colors"
          >
            {lang === 'en' ? 'ಕನ್ನಡ' : 'English'}
          </button>

          {/* Emergency SOS & 24/7 Helpline */}
          <button
            onClick={onOpenSos}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-red-600 hover:bg-red-500 active:bg-red-700 rounded-md shadow-sm transition-colors"
          >
            <ShieldAlert className="w-3.5 h-3.5 text-white" />
            <span className="hidden sm:inline">{lang === 'kn' ? 'ತುರ್ತು ಸಹಾಯ' : 'SOS & Helpline'}</span>
            <span className="sm:hidden">SOS</span>
          </button>
        </div>
      </div>
    </header>
  );
};
