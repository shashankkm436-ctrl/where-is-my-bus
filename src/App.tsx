/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar, AppView } from './components/Navbar';
import { HeroSearch } from './components/HeroSearch';
import { LiveMapTracker } from './components/LiveMapTracker';
import { BusStopsTimeline } from './components/BusStopsTimeline';
import { StationDeparturesBoard } from './components/StationDeparturesBoard';
import { RouteSearchList } from './components/RouteSearchList';
import { KarnatakaPlacesDirectory } from './components/KarnatakaPlacesDirectory';
import { FleetShowcase } from './components/FleetShowcase';
import { PnrTrackerModal } from './components/PnrTrackerModal';
import { SeatMapModal } from './components/SeatMapModal';
import { SosHelpModal } from './components/SosHelpModal';
import { MOCK_BUS_SERVICES, MOCK_PNR_DATABASE } from './data/mockBusData';
import { BusService, PNRTicket } from './types/bus';
import { generateDynamicServicesForRoute } from './utils/routeGenerator';
import { ShieldCheck, PhoneCall, Radio, Bus, MapPin } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<'en' | 'kn'>('en');
  const [activeView, setActiveView] = useState<AppView>('tracker');
  const [busServices, setBusServices] = useState<BusService[]>(MOCK_BUS_SERVICES);
  const [selectedBus, setSelectedBus] = useState<BusService>(MOCK_BUS_SERVICES[0]);
  const [activePnrTicket, setActivePnrTicket] = useState<PNRTicket | null>(null);
  const [activeSeatMapBus, setActiveSeatMapBus] = useState<BusService | null>(null);
  const [isSosOpen, setIsSosOpen] = useState(false);
  const [originFilter, setOriginFilter] = useState('Bengaluru');
  const [destFilter, setDestFilter] = useState('Mysuru');

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'kn' : 'en'));
  };

  const handleUpdateBusProgress = (busId: string, newProgress: number, newSpeed: number) => {
    setBusServices((prev) =>
      prev.map((b) => {
        if (b.id !== busId) return b;

        // update stops status based on progress
        const updatedStops = b.stops.map((stop, idx) => {
          const stopPct = (idx / (b.stops.length - 1)) * 100;
          if (newProgress >= stopPct + 4) {
            return { ...stop, status: 'DEPARTED' as const };
          } else if (Math.abs(newProgress - stopPct) <= 6) {
            return { ...stop, status: 'CURRENT' as const };
          } else {
            return { ...stop, status: 'UPCOMING' as const };
          }
        });

        const updated = {
          ...b,
          progressPercent: newProgress,
          currentSpeedKmH: newSpeed,
          stops: updatedStops,
        };

        if (selectedBus.id === busId) {
          setSelectedBus(updated);
        }

        return updated;
      })
    );
  };

  const handleSearchPnr = (pnrCode: string) => {
    const found = MOCK_PNR_DATABASE[pnrCode];
    if (found) {
      const associatedBus = busServices.find((b) => b.id === found.busServiceId) || busServices[0];
      setActivePnrTicket(found);
      setSelectedBus(associatedBus);
    } else {
      // Fallback demo ticket
      const fallback: PNRTicket = {
        pnr: pnrCode,
        passengerName: 'Passenger',
        passengerPhone: '+91 94808 00000',
        seats: ['12 (Window)'],
        serviceNumber: selectedBus.serviceNumber,
        busServiceId: selectedBus.id,
        fromStation: selectedBus.fromStation,
        toStation: selectedBus.toStation,
        boardingPoint: selectedBus.stops[0].name,
        boardingTime: selectedBus.departureTime,
        journeyDate: '2026-09-23',
        totalFare: selectedBus.fare,
        status: 'CONFIRMED',
      };
      setActivePnrTicket(fallback);
    }
  };

  const handleSearchRoute = (origin: string, dest: string) => {
    setOriginFilter(origin);
    setDestFilter(dest);
    setActiveView('search');
  };

  const handleTrackBusServiceId = (serviceId: string) => {
    const bus = busServices.find((b) => b.id === serviceId);
    if (bus) {
      setSelectedBus(bus);
      setActiveView('tracker');
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }
  };

  const handleFilterFleetBrand = (brandName: string) => {
    setActiveView('search');
    // will filter in search
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      {/* Top 3-Zone Contract Header */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLang}
        activeView={activeView}
        onSelectView={setActiveView}
        onOpenSos={() => setIsSosOpen(true)}
      />

      {/* Main Content Viewport Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 lg:px-8 py-6 space-y-8">
        {/* Hero Section with Live Search Console */}
        <HeroSearch
          lang={lang}
          busServices={busServices}
          selectedBus={selectedBus}
          onSelectBus={(bus) => {
            setSelectedBus(bus);
            setActiveView('tracker');
          }}
          onSearchPnr={handleSearchPnr}
          onSearchRoute={handleSearchRoute}
        />

        {/* View 1: Live Interactive GPS Tracker & Stops Timeline */}
        {activeView === 'tracker' && (
          <div className="space-y-8 animate-fade">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                  <span>
                    {lang === 'kn' ? 'ಲೈವ್ ವಾಹನ ಟ್ರ್ಯಾಕಿಂಗ್ ಕಾಕ್‌ಪಿಟ್' : 'Live GPS Vehicle Tracking Cockpit'}
                  </span>
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  {lang === 'kn'
                    ? `ವಾಹನ ಸಂಖ್ಯೆ ${selectedBus.busNumber} ರ ನೈಜ ಸಮಯದ ಚಲನೆ ಮತ್ತು ನಿಲ್ದಾಣ ಪ್ರಗತಿ`
                    : `Real-time satellite positioning for ${selectedBus.busNumber} (${selectedBus.brand})`}
                </p>
              </div>

              {/* Quick Switch to other live buses */}
              <div className="hidden sm:flex items-center gap-2 text-xs">
                <span className="text-slate-500">Track another:</span>
                <select
                  value={selectedBus.id}
                  onChange={(e) => {
                    const found = busServices.find((b) => b.id === e.target.value);
                    if (found) setSelectedBus(found);
                  }}
                  className="bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-red-500"
                >
                  {busServices.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.busNumber} · {b.toCity} ({b.brand})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Live Map Tracker */}
            <LiveMapTracker
              lang={lang}
              bus={selectedBus}
              onUpdateBusProgress={handleUpdateBusProgress}
              onOpenSos={() => setIsSosOpen(true)}
            />

            {/* Itinerary Timeline */}
            <BusStopsTimeline
              lang={lang}
              stops={selectedBus.stops}
              busNumber={selectedBus.busNumber}
              delayMinutes={selectedBus.delayMinutes}
            />
          </div>
        )}

        {/* View 2: Live Station Platform Boards (PIDS) */}
        {activeView === 'boards' && (
          <div className="animate-fade">
            <StationDeparturesBoard
              lang={lang}
              busServices={busServices}
              onTrackBusService={handleTrackBusServiceId}
            />
          </div>
        )}

        {/* View: Karnataka Places & 31 Districts Directory */}
        {activeView === 'places' && (
          <div className="animate-fade">
            <KarnatakaPlacesDirectory
              lang={lang}
              onSelectOriginAndDest={(origin, dest) => {
                setOriginFilter(origin);
                setDestFilter(dest);
                setActiveView('search');
                window.scrollTo({ top: 400, behavior: 'smooth' });
              }}
              onExplorePlace={(place) => {
                setOriginFilter('Bengaluru');
                setDestFilter(place.name);
                setActiveView('search');
                window.scrollTo({ top: 400, behavior: 'smooth' });
              }}
            />
          </div>
        )}

        {/* View 3: Route Timetables & Seat Booking */}
        {activeView === 'search' && (
          <div className="animate-fade">
            <RouteSearchList
              lang={lang}
              busServices={busServices}
              originFilter={originFilter}
              destFilter={destFilter}
              onSelectBus={(bus) => {
                // If bus is not in busServices, add it so LiveMapTracker can track it
                if (!busServices.find((b) => b.id === bus.id)) {
                  setBusServices((prev) => [bus, ...prev]);
                }
                setSelectedBus(bus);
                setActiveView('tracker');
                window.scrollTo({ top: 400, behavior: 'smooth' });
              }}
              onViewSeatMap={(bus) => setActiveSeatMapBus(bus)}
            />
          </div>
        )}

        {/* View 4: Fleet Directory & Service Classes */}
        {activeView === 'fleet' && (
          <div className="animate-fade">
            <FleetShowcase
              lang={lang}
              onFilterFleet={handleFilterFleetBrand}
            />
          </div>
        )}

        {/* View 5: Passenger Support & Helpline */}
        {activeView === 'help' && (
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8 space-y-6 animate-fade">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                {lang === 'kn' ? 'ಪ್ರಯಾಣಿಕರ ಸಹಾಯವಾಣಿ ಮತ್ತು ನಿಯಂತ್ರಣ ಕೊಠಡಿ' : 'Passenger Support & Sarathi Central Helpline'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                {lang === 'kn'
                  ? 'ಕರ್ನಾಟಕ ರಾಜ್ಯ ರಸ್ತೆ ಸಾರಿಗೆ ನಿಗಮದ 24/7 ಕೇಂದ್ರ ನಿಯಂತ್ರಣ ಕೊಠಡಿ ಮತ್ತು ದೂರು ಪರಿಹಾರ ವ್ಯವಸ್ಥೆ'
                  : 'Round-the-clock telephone and grievance assistance across all Karnataka transport divisions.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-xs text-slate-400">24/7 Sarathi Toll-Free</div>
                <div className="text-xl font-bold font-mono text-white mt-1">080-49596666</div>
                <div className="text-xs text-slate-500 mt-2">
                  Live bus tracking, platform inquiries, and delay updates.
                </div>
              </div>

              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-xs text-slate-400">Women Passenger Helpline</div>
                <div className="text-xl font-bold font-mono text-amber-400 mt-1">1091 / 080-22221111</div>
                <div className="text-xs text-slate-500 mt-2">
                  Shakti Scheme support and transit security assistance.
                </div>
              </div>

              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-xs text-slate-400">Emergency & Ambulance</div>
                <div className="text-xl font-bold font-mono text-red-400 mt-1">112 / 108</div>
                <div className="text-xs text-slate-500 mt-2">
                  Immediate highway patrol and emergency medical response.
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-white">
                  {lang === 'kn' ? 'ಕಳೆದುಹೋದ ಲಗೇಜ್ ಅಥವಾ ಸೇವಾ ದೂರು ಸಲ್ಲಿಸಿ' : 'Report Lost Luggage or Register a Grievance'}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Direct dispatch to the concerned divisional traffic controller and depot managers.
                </p>
              </div>
              <button
                onClick={() => setIsSosOpen(true)}
                className="px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold text-xs transition-colors shadow-sm whitespace-nowrap"
              >
                Launch Helpdesk Modal
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Modals */}
      <PnrTrackerModal
        lang={lang}
        ticket={activePnrTicket}
        busService={selectedBus}
        onClose={() => setActivePnrTicket(null)}
        onTrackBus={(bus) => {
          setSelectedBus(bus);
          setActiveView('tracker');
        }}
      />

      <SeatMapModal
        lang={lang}
        bus={activeSeatMapBus}
        onClose={() => setActiveSeatMapBus(null)}
      />

      {isSosOpen && (
        <SosHelpModal
          lang={lang}
          onClose={() => setIsSosOpen(false)}
        />
      )}

      {/* Quiet, Accessible Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 px-4 lg:px-8 py-8 mt-12 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-7 h-7 rounded-lg bg-red-600 flex items-center justify-center text-white font-bold text-xs">
              K
            </div>
            <div>
              <div className="font-semibold text-white">
                Karnataka State Road Transport Corporation (KSRTC)
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                Government of Karnataka Undertaking · Sarathi Real-Time GPS Tracking System
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-[11px] text-slate-400">
            <button onClick={() => setActiveView('tracker')} className="hover:text-white transition-colors">
              Live Tracker
            </button>
            <button onClick={() => setActiveView('places')} className="hover:text-amber-400 transition-colors">
              All Karnataka Places (31 Districts)
            </button>
            <button onClick={() => setActiveView('boards')} className="hover:text-white transition-colors">
              Majestic & Regional Boards
            </button>
            <button onClick={() => setActiveView('fleet')} className="hover:text-white transition-colors">
              Fleet Guide
            </button>
            <button onClick={() => setIsSosOpen(true)} className="hover:text-red-400 transition-colors">
              Grievance Cell
            </button>
          </div>

          <div className="text-[11px] text-slate-500 font-mono">
            Control Room: 080-49596666
          </div>
        </div>
      </footer>
    </div>
  );
}
