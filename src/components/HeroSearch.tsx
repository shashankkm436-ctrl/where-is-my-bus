import React, { useState } from 'react';
import { Search, Compass, Ticket, ArrowRight, Bus, MapPin, Sparkles, Map } from 'lucide-react';
import { BusService } from '../types/bus';
import { POPULAR_CITIES, ALL_KARNATAKA_PLACES } from '../data/karnatakaPlaces';
import { KarnatakaPlaceSelector } from './KarnatakaPlaceSelector';

interface HeroSearchProps {
  lang: 'en' | 'kn';
  busServices: BusService[];
  selectedBus: BusService;
  onSelectBus: (bus: BusService) => void;
  onSearchPnr: (pnr: string) => void;
  onSearchRoute: (origin: string, destination: string) => void;
}

export const HeroSearch: React.FC<HeroSearchProps> = ({
  lang,
  busServices,
  selectedBus,
  onSelectBus,
  onSearchPnr,
  onSearchRoute,
}) => {
  const [searchMode, setSearchMode] = useState<'bus' | 'pnr' | 'route'>('bus');
  const [busInput, setBusInput] = useState('');
  const [pnrInput, setPnrInput] = useState('');
  const [originCity, setOriginCity] = useState('Bengaluru');
  const [destCity, setDestCity] = useState('Mysuru');
  const [searchError, setSearchError] = useState<string | null>(null);

  const handleBusSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setSearchError(null);
    const query = busInput.trim().toUpperCase().replace(/[\s-]/g, '');
    if (!query) {
      setSearchError(lang === 'kn' ? 'ದಯವಿಟ್ಟು ಬಸ್ ಸಂಖ್ಯೆ ಅಥವಾ ಸೇವಾ ಕೋಡ್ ನಮೂದಿಸಿ' : 'Please enter a bus or service number');
      return;
    }

    const match = busServices.find((b) => {
      const busClean = b.busNumber.toUpperCase().replace(/[\s-]/g, '');
      const srvClean = b.serviceNumber.toUpperCase().replace(/[\s-]/g, '');
      return busClean.includes(query) || srvClean.includes(query) || b.toCity.toUpperCase().includes(query);
    });

    if (match) {
      onSelectBus(match);
      setBusInput('');
    } else {
      setSearchError(
        lang === 'kn'
          ? `"${busInput}" ಗಾಗಿ ಯಾವುದೇ ಸಕ್ರಿಯ ಬಸ್ ಕಂಡುಬಂದಿಲ್ಲ. ಕೆಳಗಿನ ತ್ವರಿತ ಆಯ್ಕೆಗಳನ್ನು ಪ್ರಯತ್ನಿಸಿ.`
          : `No active bus found matching "${busInput}". Try one of the quick suggestions below.`
      );
    }
  };

  const handlePnrSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchError(null);
    if (!pnrInput.trim()) {
      setSearchError(lang === 'kn' ? 'ದಯವಿಟ್ಟು ಮಾನ್ಯವಾದ PNR ನಮೂದಿಸಿ' : 'Please enter a valid PNR number');
      return;
    }
    onSearchPnr(pnrInput.trim().toUpperCase());
  };

  const handleRouteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchRoute(originCity, destCity);
  };

  return (
    <section className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
      {/* Background Hero Photography */}
      <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden">
        <img
          src="/src/assets/images/ksrtc_brand_banner_1790163667604.jpg"
          alt="KSRTC Airavat Luxury Volvo Bus cruising along Karnataka highway"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Measured Contrast Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />

        {/* Hero Copy */}
        <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end max-w-4xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-red-400 mb-2">
            <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span className="tracking-wider uppercase">
              {lang === 'kn' ? 'ನೈಜ ಸಮಯದ ಸಾರಥಿ ಜಿಪಿಎಸ್ ನೆಟ್‌ವರ್ಕ್' : 'Sarathi Real-Time GPS Network'}
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
            {lang === 'kn'
              ? 'ನಿಮ್ಮ ಕೆ.ಎಸ್.ಆರ್.ಟಿ.ಸಿ ಬಸ್ ಎಲ್ಲಿದೆ ಎಂದು ತಿಳಿಯಿರಿ'
              : 'Where Is My Bus? Track KSRTC in Real-Time'}
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl">
            {lang === 'kn'
              ? 'ಕರ್ನಾಟಕದಾದ್ಯಂತ ಸಂಚರಿಸುವ ಐರಾವತ, ಅಂಬಾರಿ ಉತ್ಸವ, ಫ್ಲೈಬಸ್, ರಾಜಹಂಸ ಮತ್ತು ಸಾರಿಗೆ ಬಸ್‌ಗಳ ನಿಖರ ಲೈವ್ ಸ್ಥಳ, ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ ಮತ್ತು ಆಗಮನ ಸಮಯ.'
              : 'Live GPS coordinates, estimated arrival times, speed, platform bays, and route progress across Airavat, Ambari Utsav, Flybus, and Sarige express services.'}
          </p>
        </div>
      </div>

      {/* Interactive Search Console */}
      <div className="p-4 sm:p-6 bg-slate-950/95 border-t border-slate-800/80">
        {/* Mode Selector Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 rounded-lg border border-slate-800 w-fit mb-4">
          <button
            onClick={() => {
              setSearchMode('bus');
              setSearchError(null);
            }}
            className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
              searchMode === 'bus'
                ? 'bg-red-600 text-white shadow-sm font-semibold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Bus className="w-3.5 h-3.5" />
            <span>{lang === 'kn' ? 'ಬಸ್ ಸಂಖ್ಯೆ / ವಾಹನ' : 'Bus / Vehicle No.'}</span>
          </button>
          <button
            onClick={() => {
              setSearchMode('pnr');
              setSearchError(null);
            }}
            className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
              searchMode === 'pnr'
                ? 'bg-red-600 text-white shadow-sm font-semibold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Ticket className="w-3.5 h-3.5" />
            <span>{lang === 'kn' ? 'ಟಿಕೆಟ್ PNR ಮೂಲಕ' : 'Ticket PNR Track'}</span>
          </button>
          <button
            onClick={() => {
              setSearchMode('route');
              setSearchError(null);
            }}
            className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
              searchMode === 'route'
                ? 'bg-red-600 text-white shadow-sm font-semibold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>{lang === 'kn' ? 'ಮಾರ್ಗ ಹುಡುಕಾಟ (ನಗರಗಳು)' : 'Search by Route'}</span>
          </button>
        </div>

        {/* Form: Bus / Vehicle Search */}
        {searchMode === 'bus' && (
          <form onSubmit={handleBusSearch} className="flex flex-col sm:flex-row items-stretch gap-2.5">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={busInput}
                onChange={(e) => setBusInput(e.target.value)}
                placeholder={
                  lang === 'kn'
                    ? 'ಉದಾ: KA-09-F-5421 ಅಥವಾ 0630BLR-MYS-AIR...'
                    : 'Enter Bus Reg No (e.g. KA-09-F-5421) or Service Code (e.g. 0630BLR)...'
                }
                className="w-full bg-slate-900 border border-slate-700 focus:border-red-500 focus:ring-1 focus:ring-red-500 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-all"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2.5 bg-red-600 hover:bg-red-500 active:bg-red-700 text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2 shadow-sm transition-colors whitespace-nowrap"
            >
              <span>{lang === 'kn' ? 'ಟ್ರ್ಯಾಕ್ ಮಾಡಿ' : 'Track Bus Live'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        {/* Form: PNR Search */}
        {searchMode === 'pnr' && (
          <form onSubmit={handlePnrSubmit} className="flex flex-col sm:flex-row items-stretch gap-2.5">
            <div className="relative flex-1">
              <Ticket className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={pnrInput}
                onChange={(e) => setPnrInput(e.target.value)}
                placeholder={
                  lang === 'kn'
                    ? 'ನಿಮ್ಮ 10-ಅಂಕಿಯ PNR ನಮೂದಿಸಿ (ಉದಾ: KSRTC8829104)...'
                    : 'Enter 10-character KSRTC PNR (e.g. KSRTC8829104)...'
                }
                className="w-full bg-slate-900 border border-slate-700 focus:border-red-500 focus:ring-1 focus:ring-red-500 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-all uppercase"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2.5 bg-red-600 hover:bg-red-500 active:bg-red-700 text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2 shadow-sm transition-colors whitespace-nowrap"
            >
              <span>{lang === 'kn' ? 'ಟಿಕೆಟ್ ಪರಿಶೀಲಿಸಿ' : 'Verify Ticket & Track'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        {/* Form: Route Search */}
        {searchMode === 'route' && (
          <form onSubmit={handleRouteSubmit} className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <KarnatakaPlaceSelector
                lang={lang}
                label="Departure Origin (Karnataka Place)"
                labelKn="ಹೊರಡುವ ಸ್ಥಳ (ಕರ್ನಾಟಕ)"
                selectedPlaceName={originCity}
                onSelectPlace={(p) => setOriginCity(p.name)}
                placeholder={lang === 'kn' ? 'ಹೊರಡುವ ಸ್ಥಳ ಆಯ್ಕೆಮಾಡಿ' : 'Select Origin (Any Karnataka Place)'}
              />
              <KarnatakaPlaceSelector
                lang={lang}
                label="Destination Place"
                labelKn="ತಲುಪುವ ಸ್ಥಳ"
                selectedPlaceName={destCity}
                onSelectPlace={(p) => setDestCity(p.name)}
                placeholder={lang === 'kn' ? 'ತಲುಪುವ ಸ್ಥಳ ಆಯ್ಕೆಮಾಡಿ' : 'Select Destination Place'}
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
              <div className="flex items-center gap-1 text-[11px] text-slate-400 overflow-x-auto w-full sm:w-auto pb-1">
                <span className="text-slate-500 font-medium shrink-0">
                  {lang === 'kn' ? 'ಜನಪ್ರಿಯ ಸ್ಥಳಗಳು:' : 'Quick Karnataka Hubs:'}
                </span>
                {['Bengaluru', 'Mysuru', 'Mangaluru', 'Hubballi', 'Belagavi', 'Dharmasthala', 'Gokarna'].map((cityName) => (
                  <button
                    type="button"
                    key={cityName}
                    onClick={() => {
                      if (originCity === cityName) {
                        setDestCity(cityName === 'Bengaluru' ? 'Mysuru' : 'Bengaluru');
                      } else {
                        setDestCity(cityName);
                      }
                    }}
                    className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 transition-colors shrink-0"
                  >
                    {cityName}
                  </button>
                ))}
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 bg-red-600 hover:bg-red-500 active:bg-red-700 text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2 shadow-sm transition-colors whitespace-nowrap shrink-0"
              >
                <span>{lang === 'kn' ? 'ಬಸ್‌ಗಳನ್ನು ಹುಡುಕಿ' : 'Find Available Buses'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* Search Error Alert */}
        {searchError && (
          <div className="mt-3 text-xs text-rose-400 bg-rose-950/40 border border-rose-800/60 rounded-md p-2.5 flex items-center gap-2">
            <span>{searchError}</span>
          </div>
        )}

        {/* Quick Suggestion Chips for Instant Demo Experience */}
        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-400">
          <span className="text-slate-500 font-medium">
            {lang === 'kn' ? 'ತ್ವರಿತ ಟ್ರ್ಯಾಕಿಂಗ್ ಉದಾಹರಣೆಗಳು:' : 'Quick Live Buses:'}
          </span>
          {busServices.map((bus) => {
            const isSelected = selectedBus.id === bus.id;
            return (
              <button
                key={bus.id}
                onClick={() => {
                  onSelectBus(bus);
                  setSearchError(null);
                }}
                className={`px-2.5 py-1 rounded-md text-xs font-medium border transition-colors whitespace-nowrap ${
                  isSelected
                    ? 'border-red-500 bg-red-950/40 text-red-300 font-semibold'
                    : 'border-slate-800 bg-slate-900 text-slate-300 hover:border-slate-600 hover:text-white'
                }`}
              >
                {bus.busNumber} · {bus.brand} ({bus.toCity})
              </button>
            );
          })}
        </div>

        {/* Live Network Trust Metrics Bar */}
        <div className="mt-5 pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center sm:text-left">
          <div>
            <div className="text-xs text-slate-400">{lang === 'kn' ? 'ಸಕ್ರಿಯ ಜಿಪಿಎಸ್ ಬಸ್‌ಗಳು' : 'Live GPS Buses'}</div>
            <div className="text-lg font-bold text-white tabular-nums">8,450+</div>
          </div>
          <div>
            <div className="text-xs text-slate-400">{lang === 'kn' ? 'ಸಮಯಪಾಲನೆ ಸೂಚ್ಯಂಕ' : 'On-Time Reliability'}</div>
            <div className="text-lg font-bold text-emerald-400 tabular-nums">98.2%</div>
          </div>
          <div>
            <div className="text-xs text-slate-400">{lang === 'kn' ? 'ಸಂಪರ್ಕಿತ ಡಿಪೋಗಳು' : 'Operating Depots'}</div>
            <div className="text-lg font-bold text-white tabular-nums">84 Depots</div>
          </div>
          <div>
            <div className="text-xs text-slate-400">{lang === 'kn' ? '24/7 ಸಹಾಯವಾಣಿ' : '24x7 Control Room'}</div>
            <div className="text-lg font-bold text-amber-400 font-mono">080-49596666</div>
          </div>
        </div>
      </div>
    </section>
  );
};
