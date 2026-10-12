import React from 'react';
import { CheckCircle2, Clock, MapPin, Building2, Coffee, ShieldCheck } from 'lucide-react';
import { BusStop } from '../types/bus';

interface BusStopsTimelineProps {
  lang: 'en' | 'kn';
  stops: BusStop[];
  busNumber: string;
  delayMinutes: number;
}

export const BusStopsTimeline: React.FC<BusStopsTimelineProps> = ({
  lang,
  stops,
  busNumber,
  delayMinutes,
}) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/90 shadow-lg p-5 sm:p-6">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
        <div>
          <h2 className="text-base font-bold text-white tracking-tight">
            {lang === 'kn' ? 'ನಿಲ್ದಾಣ ವೇಳಾಪಟ್ಟಿ ಮತ್ತು ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ ವಿವರ' : 'Live Stop-by-Stop Itinerary & Platforms'}
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            {lang === 'kn'
              ? `${busNumber} ರ ಮಾರ್ಗದಲ್ಲಿನ ಎಲ್ಲಾ ಅಧಿಕೃತ ನಿಲ್ದಾಣಗಳು`
              : `All scheduled stops, platform bays, and halt times for ${busNumber}`}
          </p>
        </div>
        <div className="text-right">
          <span className="text-xs text-slate-400">
            {lang === 'kn' ? 'ಒಟ್ಟು ನಿಲ್ದಾಣಗಳು:' : 'Total Stops:'}{' '}
            <strong className="text-white font-mono tabular-nums">{stops.length}</strong>
          </span>
        </div>
      </div>

      {/* Timeline Stream */}
      <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-2.5 sm:before:left-3.5 before:top-2 before:bottom-3 before:w-0.5 before:bg-slate-800">
        {stops.map((stop, index) => {
          const isDeparted = stop.status === 'DEPARTED';
          const isCurrent = stop.status === 'CURRENT';
          const isUpcoming = stop.status === 'UPCOMING';

          return (
            <div key={stop.id} className="relative group">
              {/* Timeline Indicator Dot */}
              <div
                className={`absolute -left-6 sm:-left-8 top-1 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                  isDeparted
                    ? 'bg-emerald-950 border-emerald-500 text-emerald-400'
                    : isCurrent
                    ? 'bg-amber-950 border-amber-400 text-amber-300 ring-4 ring-amber-500/20'
                    : 'bg-slate-900 border-slate-700 text-slate-500'
                }`}
              >
                {isDeparted ? (
                  <CheckCircle2 className="w-3 h-3" />
                ) : isCurrent ? (
                  <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                ) : (
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                )}
              </div>

              {/* Stop Information Card */}
              <div
                className={`p-3 sm:p-4 rounded-xl border transition-all ${
                  isCurrent
                    ? 'bg-slate-800/80 border-amber-500/40 shadow-md'
                    : isDeparted
                    ? 'bg-slate-900/40 border-slate-800/80 opacity-80'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-white">
                        {lang === 'kn' ? stop.nameKn : stop.name}
                      </span>
                      {isCurrent && (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-400/30">
                          {lang === 'kn' ? 'ಪ್ರಸ್ತುತ ನಿಲುಗಡೆ' : 'Current Stop'}
                        </span>
                      )}
                      {isDeparted && (
                        <span className="text-[10px] text-emerald-400 font-medium">
                          {lang === 'kn' ? 'ಹೊರಟಿದೆ' : 'Departed'}
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-slate-400 mt-1 flex items-center gap-2 flex-wrap">
                      <span>{stop.city}</span>
                      <span className="text-slate-600">·</span>
                      <span className="font-mono tabular-nums">{stop.distanceFromStartKm} km from origin</span>
                      {stop.haltMinutes > 0 && (
                        <>
                          <span className="text-slate-600">·</span>
                          <span className="text-slate-300">
                            Halt: <strong>{stop.haltMinutes} mins</strong>
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Timing & Platform Details */}
                  <div className="flex items-center gap-4 sm:text-right shrink-0">
                    <div>
                      <div className="text-[11px] text-slate-500">
                        {lang === 'kn' ? 'ನಿಗದಿ / ಅಂದಾಜು' : 'Sched / Est'}
                      </div>
                      <div className="text-sm font-mono font-semibold text-white tabular-nums">
                        {stop.scheduledTime}{' '}
                        <span
                          className={`text-xs ${
                            delayMinutes > 0 && !isDeparted ? 'text-amber-400' : 'text-slate-400'
                          }`}
                        >
                          ({stop.estimatedTime})
                        </span>
                      </div>
                    </div>

                    <div className="pl-3 border-l border-slate-800">
                      <div className="text-[11px] text-slate-500">
                        {lang === 'kn' ? 'ಪ್ಲಾಟ್‌ಫಾರ್ಮ್' : 'Platform'}
                      </div>
                      <div className="text-xs font-semibold px-2 py-1 rounded bg-slate-800 border border-slate-700 text-amber-300">
                        {stop.platform}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
