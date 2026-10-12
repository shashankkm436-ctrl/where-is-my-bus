import React, { useState } from 'react';
import { Radio, Search, ArrowUpRight, ArrowDownRight, Clock, Building, Compass, Sparkles } from 'lucide-react';
import { StationScheduleItem, BusService } from '../types/bus';
import { MOCK_STATION_BOARDS } from '../data/mockBusData';

interface StationDeparturesBoardProps {
  lang: 'en' | 'kn';
  busServices: BusService[];
  onTrackBusService: (busServiceId: string) => void;
}

export const StationDeparturesBoard: React.FC<StationDeparturesBoardProps> = ({
  lang,
  busServices,
  onTrackBusService,
}) => {
  const [selectedStation, setSelectedStation] = useState<'majestic' | 'mysuru' | 'mangaluru' | 'hubballi' | 'kalaburagi' | 'belagavi'>('majestic');
  const [filterType, setFilterType] = useState<'ALL' | 'DEPARTURE' | 'ARRIVAL'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const rawList = MOCK_STATION_BOARDS[selectedStation] || [];

  const filteredList = rawList.filter((item) => {
    if (filterType !== 'ALL' && item.type !== filterType) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        item.destination.toLowerCase().includes(q) ||
        item.serviceNumber.toLowerCase().includes(q) ||
        item.busNumber.toLowerCase().includes(q) ||
        item.via.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const stationTitles = {
    majestic: {
      en: 'Bengaluru · Kempegowda Bus Station (Majestic Central)',
      kn: 'ಬೆಂಗಳೂರು · ಕೆಂಪೇಗೌಡ ಬಸ್ ನಿಲ್ದಾಣ (ಮೆಜೆಸ್ಟಿಕ್ ಕೇಂದ್ರ)',
      depots: 'KBS Terminal 1 & 2',
    },
    mysuru: {
      en: 'Mysuru · Suburban Central Bus Station',
      kn: 'ಮೈಸೂರು · ಉಪನಗರ ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ',
      depots: 'Mysuru Central Concourse',
    },
    mangaluru: {
      en: 'Mangaluru · KSRTC Bejai Terminal',
      kn: 'ಮಂಗಳೂರು · ಕೆಎಸ್‌ಆರ್‌ಟಿಸಿ ಬಿಜೈ ಟರ್ಮಿನಲ್',
      depots: 'Dakshina Kannada Division',
    },
    hubballi: {
      en: 'Hubballi · New Bus Stand (Gokul Road)',
      kn: 'ಹುಬ್ಬಳ್ಳಿ · ಹೊಸ ಬಸ್ ನಿಲ್ದಾಣ (ಗೋಕುಲ ರಸ್ತೆ)',
      depots: 'NWKRTC Central Division',
    },
    kalaburagi: {
      en: 'Kalaburagi · Central Bus Stand',
      kn: 'ಕಲಬುರಗಿ · ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ',
      depots: 'KKRTC Divisional Terminal',
    },
    belagavi: {
      en: 'Belagavi · Central Bus Stand (CBT)',
      kn: 'ಬೆಳಗಾವಿ · ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ',
      depots: 'Belagavi Division CBT',
    },
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 shadow-xl overflow-hidden">
      {/* Terminal Backdrop Banner */}
      <div className="relative h-44 sm:h-52 w-full overflow-hidden border-b border-slate-800">
        <img
          src="/src/assets/images/bus_stand_terminal_1790163680983.jpg"
          alt="KSRTC Central Bus Station Departure Concourse"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/30" />

        <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-end">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-1">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>PIDS Electronic Platform Display System</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            {stationTitles[selectedStation][lang === 'kn' ? 'kn' : 'en']}
          </h2>
          <div className="text-xs text-slate-300 mt-0.5">
            {stationTitles[selectedStation].depots} · {lang === 'kn' ? 'ಲೈವ್ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ ಹಂಚಿಕೆಗಳು' : 'Live Bay Allocations & Real-Time ETAs'}
          </div>
        </div>
      </div>

      {/* Controls Bar: Station Selector, Type filter & Search */}
      <div className="p-4 sm:p-5 bg-slate-950/80 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        {/* Station Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 rounded-lg border border-slate-800 overflow-x-auto max-w-full">
          <button
            onClick={() => setSelectedStation('majestic')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
              selectedStation === 'majestic'
                ? 'bg-red-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Majestic (Bengaluru)
          </button>
          <button
            onClick={() => setSelectedStation('mysuru')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
              selectedStation === 'mysuru'
                ? 'bg-red-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Mysuru Suburban
          </button>
          <button
            onClick={() => setSelectedStation('mangaluru')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
              selectedStation === 'mangaluru'
                ? 'bg-red-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Mangaluru Bejai
          </button>
          <button
            onClick={() => setSelectedStation('hubballi')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
              selectedStation === 'hubballi'
                ? 'bg-red-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Hubballi New CBT
          </button>
          <button
            onClick={() => setSelectedStation('kalaburagi')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
              selectedStation === 'kalaburagi'
                ? 'bg-red-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Kalaburagi
          </button>
          <button
            onClick={() => setSelectedStation('belagavi')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
              selectedStation === 'belagavi'
                ? 'bg-red-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Belagavi
          </button>
        </div>

        {/* Departure / Arrival Segmented Control */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 p-1 bg-slate-900 rounded-lg border border-slate-800 text-xs">
            <button
              onClick={() => setFilterType('ALL')}
              className={`px-2.5 py-1 rounded transition-colors ${
                filterType === 'ALL' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilterType('DEPARTURE')}
              className={`px-2.5 py-1 rounded transition-colors flex items-center gap-1 ${
                filterType === 'DEPARTURE' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              <ArrowUpRight className="w-3 h-3 text-emerald-400" />
              <span>Departures</span>
            </button>
            <button
              onClick={() => setFilterType('ARRIVAL')}
              className={`px-2.5 py-1 rounded transition-colors flex items-center gap-1 ${
                filterType === 'ARRIVAL' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              <ArrowDownRight className="w-3 h-3 text-cyan-400" />
              <span>Arrivals</span>
            </button>
          </div>

          {/* Quick Search */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by city / service..."
              className="bg-slate-900 border border-slate-800 focus:border-red-500 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none w-48"
            />
          </div>
        </div>
      </div>

      {/* LED Digital Display Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-slate-950 text-slate-400 uppercase tracking-wider font-semibold border-b border-slate-800">
              <th className="py-3 px-4">{lang === 'kn' ? 'ಸೇವಾ ಸಂಖ್ಯೆ' : 'Service / Bus'}</th>
              <th className="py-3 px-4">{lang === 'kn' ? 'ವರ್ಗ' : 'Brand Class'}</th>
              <th className="py-3 px-4">{lang === 'kn' ? 'ಗಮ್ಯಸ್ಥಾನ' : 'Destination'}</th>
              <th className="py-3 px-4 hidden md:table-cell">{lang === 'kn' ? 'ಮೂಲಕ (Via)' : 'Route Via'}</th>
              <th className="py-3 px-4 text-center">{lang === 'kn' ? 'ನಿಗದಿತ' : 'Scheduled'}</th>
              <th className="py-3 px-4 text-center">{lang === 'kn' ? 'ಅಂದಾಜು' : 'Expected'}</th>
              <th className="py-3 px-4 text-center">{lang === 'kn' ? 'ಪ್ಲಾಟ್‌ಫಾರ್ಮ್' : 'Bay / Platform'}</th>
              <th className="py-3 px-4 text-center">{lang === 'kn' ? 'ಸ್ಥಿತಿ' : 'Status'}</th>
              <th className="py-3 px-4 text-right">{lang === 'kn' ? 'ಟ್ರ್ಯಾಕ್' : 'Live Action'}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 font-sans">
            {filteredList.map((item) => {
              const isDelayed = item.delayMinutes > 0;
              return (
                <tr
                  key={item.id}
                  className="hover:bg-slate-800/40 transition-colors group"
                >
                  {/* Service & Bus No */}
                  <td className="py-3.5 px-4 font-mono">
                    <div className="font-bold text-white group-hover:text-red-400 transition-colors">
                      {item.busNumber}
                    </div>
                    <div className="text-[11px] text-slate-500">{item.serviceNumber}</div>
                  </td>

                  {/* Brand */}
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-800 border border-slate-700 text-amber-300">
                      {item.brand}
                    </span>
                  </td>

                  {/* Destination */}
                  <td className="py-3.5 px-4">
                    <div className="font-semibold text-white">
                      {lang === 'kn' ? item.destinationKn : item.destination}
                    </div>
                    <div className="text-[11px] text-slate-500">From {item.origin}</div>
                  </td>

                  {/* Via Route */}
                  <td className="py-3.5 px-4 hidden md:table-cell text-slate-400 max-w-xs truncate">
                    {item.via}
                  </td>

                  {/* Scheduled Time */}
                  <td className="py-3.5 px-4 text-center font-mono text-slate-300 tabular-nums">
                    {item.scheduledTime}
                  </td>

                  {/* Expected Time */}
                  <td className="py-3.5 px-4 text-center font-mono font-semibold text-white tabular-nums">
                    <span className={isDelayed ? 'text-amber-400' : 'text-emerald-400'}>
                      {item.estimatedTime}
                    </span>
                  </td>

                  {/* Platform Bay */}
                  <td className="py-3.5 px-4 text-center">
                    <span className="font-bold text-amber-300 px-2 py-1 bg-amber-950/40 border border-amber-800/60 rounded text-xs">
                      {item.platform}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="py-3.5 px-4 text-center whitespace-nowrap">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold ${
                        item.status === 'ON_TIME'
                          ? 'bg-emerald-950/50 text-emerald-400 border border-emerald-800/60'
                          : 'bg-amber-950/50 text-amber-400 border border-amber-800/60'
                      }`}
                    >
                      {item.status === 'ON_TIME'
                        ? 'On Time'
                        : `${item.delayMinutes}m Delayed`}
                    </span>
                  </td>

                  {/* Action Track */}
                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={() => onTrackBusService(item.busServiceId)}
                      className="px-3 py-1.5 rounded-md bg-red-600 hover:bg-red-500 text-white font-semibold text-xs transition-colors shadow-sm inline-flex items-center gap-1 whitespace-nowrap"
                    >
                      <span>Track Now</span>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {filteredList.length === 0 && (
        <div className="p-8 text-center text-slate-500 text-xs">
          No scheduled trips found matching your query for this station.
        </div>
      )}
    </div>
  );
};
