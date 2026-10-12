import React, { useState, useMemo } from 'react';
import { Bus, Clock, ShieldCheck, MapPin, Sparkles, Wifi, Armchair, ChevronRight, ArrowLeftRight } from 'lucide-react';
import { BusService, BusBrand } from '../types/bus';
import { POPULAR_CITIES, ALL_KARNATAKA_PLACES } from '../data/karnatakaPlaces';
import { KarnatakaPlaceSelector } from './KarnatakaPlaceSelector';
import { generateDynamicServicesForRoute } from '../utils/routeGenerator';

interface RouteSearchListProps {
  lang: 'en' | 'kn';
  busServices: BusService[];
  originFilter: string;
  destFilter: string;
  onSelectBus: (bus: BusService) => void;
  onViewSeatMap: (bus: BusService) => void;
}

export const RouteSearchList: React.FC<RouteSearchListProps> = ({
  lang,
  busServices,
  originFilter,
  destFilter,
  onSelectBus,
  onViewSeatMap,
}) => {
  const [selectedBrand, setSelectedBrand] = useState<string>('ALL');
  const [activeOrigin, setActiveOrigin] = useState(originFilter || 'Bengaluru');
  const [activeDest, setActiveDest] = useState(destFilter || 'Mysuru');

  // Compute available buses: filter from known busServices, or generate realistic services for any Karnataka route
  const allAvailableBuses = useMemo(() => {
    const directMatches = busServices.filter((b) => {
      const matchOrigin = !activeOrigin || b.fromCity.toLowerCase().includes(activeOrigin.toLowerCase());
      const matchDest = !activeDest || b.toCity.toLowerCase().includes(activeDest.toLowerCase());
      return matchOrigin && matchDest;
    });

    if (directMatches.length > 0) {
      return directMatches;
    }

    // If no hardcoded direct match, dynamically generate realistic scheduled KSRTC services
    return generateDynamicServicesForRoute(activeOrigin, activeDest);
  }, [busServices, activeOrigin, activeDest]);

  const filteredBuses = allAvailableBuses.filter((b) => {
    if (selectedBrand !== 'ALL' && b.brand !== selectedBrand) return false;
    return true;
  });

  const handleSwapCities = () => {
    const temp = activeOrigin;
    setActiveOrigin(activeDest);
    setActiveDest(temp);
  };

  const brands: BusBrand[] = [
    'Ambari Utsav',
    'Airavat Club Class',
    'Flybus',
    'Rajahamsa Executive',
    'Karnataka Sarige',
  ];

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 shadow-xl p-5 sm:p-6">
      {/* Search Header and Origin/Destination selector */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-slate-800">
        <div>
          <h2 className="text-lg font-bold text-white tracking-tight">
            {lang === 'kn' ? 'ಬಸ್ ಮಾರ್ಗಗಳು ಮತ್ತು ಆಸನ ಲಭ್ಯತೆ' : 'Route Timetables & Seat Availability'}
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            {lang === 'kn'
              ? `${activeOrigin} ನಿಂದ ${activeDest} ಕಡೆಗೆ ಹೊರಡುವ ಲಭ್ಯವಿರುವ ಕೆ.ಎಸ್.ಆರ್.ಟಿ.ಸಿ ಬಸ್‌ಗಳು`
              : `All scheduled KSRTC express & luxury services between ${activeOrigin} and ${activeDest}`}
          </p>
        </div>

        {/* Quick Origin/Dest Selectors with All Karnataka Places support */}
        <div className="flex flex-col sm:flex-row items-center gap-2 text-xs w-full lg:w-auto">
          <div className="w-full sm:w-56">
            <KarnatakaPlaceSelector
              lang={lang}
              selectedPlaceName={activeOrigin}
              onSelectPlace={(p) => setActiveOrigin(p.name)}
              placeholder="Origin"
            />
          </div>

          <button
            type="button"
            onClick={handleSwapCities}
            aria-label="Swap origin and destination"
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
            title="Swap Origin and Destination"
          >
            <ArrowLeftRight className="w-3.5 h-3.5" />
          </button>

          <div className="w-full sm:w-56">
            <KarnatakaPlaceSelector
              lang={lang}
              selectedPlaceName={activeDest}
              onSelectPlace={(p) => setActiveDest(p.name)}
              placeholder="Destination"
            />
          </div>
        </div>
      </div>

      {/* Brand Filters */}
      <div className="mt-4 flex flex-wrap items-center gap-1.5">
        <button
          onClick={() => setSelectedBrand('ALL')}
          className={`px-3 py-1 text-xs font-semibold rounded-md border transition-colors ${
            selectedBrand === 'ALL'
              ? 'bg-red-600 border-red-500 text-white'
              : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
          }`}
        >
          All Classes
        </button>
        {brands.map((brand) => (
          <button
            key={brand}
            onClick={() => setSelectedBrand(brand)}
            className={`px-3 py-1 text-xs font-semibold rounded-md border transition-colors ${
              selectedBrand === brand
                ? 'bg-red-600 border-red-500 text-white'
                : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            {brand}
          </button>
        ))}
      </div>

      {/* List of Bus Cards */}
      <div className="mt-5 space-y-4">
        {filteredBuses.map((bus) => (
          <div
            key={bus.id}
            className="p-4 sm:p-5 rounded-xl border border-slate-800 bg-slate-950/60 hover:border-slate-700 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            {/* Bus Info */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-red-950/40 border border-red-800/60 flex items-center justify-center text-red-400 shrink-0 mt-1">
                <Bus className="w-5 h-5" />
              </div>

              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-bold text-white text-base">{bus.brand}</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 font-mono">
                    {bus.serviceNumber}
                  </span>
                  <span className="text-xs text-emerald-400 font-semibold bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/50">
                    Live GPS Active
                  </span>
                </div>

                <div className="text-xs text-slate-400 mt-1">
                  {bus.serviceClass} · {bus.vehicleModel}
                </div>

                {/* Timing Bar */}
                <div className="mt-3 flex items-center gap-4 text-xs">
                  <div>
                    <div className="text-slate-500">Departure</div>
                    <div className="font-mono font-bold text-white text-sm tabular-nums">
                      {bus.departureTime}
                    </div>
                    <div className="text-[11px] text-slate-400 max-w-[140px] truncate">
                      {bus.fromStation}
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <span className="text-[10px] text-slate-500 font-mono tabular-nums">
                      {bus.totalDistanceKm} km
                    </span>
                    <div className="w-16 h-0.5 bg-slate-700 relative my-1">
                      <div className="w-2 h-2 rounded-full bg-red-500 absolute -top-[3px] right-0" />
                    </div>
                    <span className="text-[10px] text-slate-500">Express</span>
                  </div>

                  <div>
                    <div className="text-slate-500">Arrival</div>
                    <div className="font-mono font-bold text-white text-sm tabular-nums">
                      {bus.arrivalTime}
                    </div>
                    <div className="text-[11px] text-slate-400 max-w-[140px] truncate">
                      {bus.toStation}
                    </div>
                  </div>
                </div>

                {/* Amenities Badges */}
                <div className="mt-3 flex flex-wrap items-center gap-1.5 text-[11px] text-slate-400">
                  {bus.amenities.slice(0, 4).map((amenity, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300"
                    >
                      {amenity}
                    </span>
                  ))}
                  {bus.amenities.length > 4 && (
                    <span className="text-slate-500">+{bus.amenities.length - 4} more</span>
                  )}
                </div>
              </div>
            </div>

            {/* Pricing, Vacancy & Actions */}
            <div className="flex md:flex-col items-center md:items-end justify-between border-t md:border-t-0 pt-3 md:pt-0 border-slate-800 gap-2 shrink-0">
              <div className="text-left md:text-right">
                <div className="text-xs text-slate-400">{lang === 'kn' ? 'ಪ್ರಯಾಣ ದರ' : 'Ticket Fare'}</div>
                <div className="text-xl font-extrabold text-white font-mono tabular-nums">
                  ₹{bus.fare}
                </div>
                <div className="text-[11px] text-emerald-400 font-semibold tabular-nums mt-0.5">
                  {bus.availableSeats} seats vacant (of {bus.totalSeats})
                </div>
              </div>

              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => onViewSeatMap(bus)}
                  className="px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold transition-colors flex items-center gap-1"
                >
                  <Armchair className="w-3.5 h-3.5 text-amber-400" />
                  <span>Seats</span>
                </button>

                <button
                  onClick={() => onSelectBus(bus)}
                  className="px-3.5 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 active:bg-red-700 text-white text-xs font-semibold transition-colors shadow-sm flex items-center gap-1"
                >
                  <span>Track Live</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}

        {filteredBuses.length === 0 && (
          <div className="p-8 text-center text-slate-500 text-xs bg-slate-950/40 rounded-xl border border-slate-800">
            No direct scheduled services found between {activeOrigin} and {activeDest} for the selected filter. Try selecting 'Bengaluru' to 'Mysuru' or 'All Classes'.
          </div>
        )}
      </div>
    </div>
  );
};
