import React, { useState, useEffect, useMemo } from 'react';
import {
  Play,
  Pause,
  FastForward,
  Bell,
  BellRing,
  Phone,
  Gauge,
  MapPin,
  Clock,
  Compass,
  AlertTriangle,
  Info,
  Volume2,
  Share2,
  CheckCircle2,
  Bus as BusIcon
} from 'lucide-react';
import { BusService, BusStop } from '../types/bus';
import { playTransitAlertSound } from '../utils/audioAlert';

interface LiveMapTrackerProps {
  lang: 'en' | 'kn';
  bus: BusService;
  onUpdateBusProgress: (busId: string, newProgress: number, newSpeed: number) => void;
  onOpenSos: () => void;
}

export const LiveMapTracker: React.FC<LiveMapTrackerProps> = ({
  lang,
  bus,
  onUpdateBusProgress,
  onOpenSos,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [speedMultiplier, setSpeedMultiplier] = useState<1 | 2 | 5>(1);
  const [trafficCondition, setTrafficCondition] = useState<'smooth' | 'moderate' | 'heavy'>('smooth');
  const [proximityAlertActive, setProximityAlertActive] = useState(false);
  const [selectedStop, setSelectedStop] = useState<BusStop | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [chimePlayed, setChimePlayed] = useState(false);

  // Live simulation tick
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      let speedChange = (Math.random() - 0.5) * 4;
      let baseSpeed = 70;
      if (trafficCondition === 'moderate') baseSpeed = 45;
      if (trafficCondition === 'heavy') baseSpeed = 25;

      const currentSpeed = Math.min(95, Math.max(15, Math.round(baseSpeed + speedChange)));
      const step = 0.25 * speedMultiplier;
      const nextProgress = bus.progressPercent + step;

      if (nextProgress >= 100) {
        onUpdateBusProgress(bus.id, 100, 0);
        setIsPlaying(false);
      } else {
        onUpdateBusProgress(bus.id, Number(nextProgress.toFixed(2)), currentSpeed);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying, speedMultiplier, trafficCondition, bus.progressPercent, bus.id, onUpdateBusProgress]);

  // Handle proximity alert sound
  useEffect(() => {
    if (proximityAlertActive && !chimePlayed && bus.progressPercent > 65) {
      playTransitAlertSound();
      setChimePlayed(true);
    }
  }, [proximityAlertActive, bus.progressPercent, chimePlayed]);

  // Compute SVG coordinates for the route
  const svgWidth = 960;
  const svgHeight = 280;

  // Project geographic coordinates into SVG viewport with nice curved spline
  const { pathD, stopPositions, busPos } = useMemo(() => {
    const stopsCount = bus.stops.length;
    const paddingX = 70;
    const usableWidth = svgWidth - paddingX * 2;
    
    // Map each stop to a natural road curve
    const positions = bus.stops.map((stop, idx) => {
      const x = paddingX + (idx / (stopsCount - 1)) * usableWidth;
      // create a subtle natural undulating highway curve
      const y = svgHeight / 2 + Math.sin((idx / (stopsCount - 1)) * Math.PI * 2.5) * 45;
      return { stop, x, y };
    });

    // Build SVG Path string
    let d = `M ${positions[0].x} ${positions[0].y}`;
    for (let i = 0; i < positions.length - 1; i++) {
      const p0 = positions[i];
      const p1 = positions[i + 1];
      const cx = (p0.x + p1.x) / 2;
      d += ` C ${cx} ${p0.y}, ${cx} ${p1.y}, ${p1.x} ${p1.y}`;
    }

    // Determine current bus position along the curve
    const t = Math.min(100, Math.max(0, bus.progressPercent)) / 100;
    const busIdxFloat = t * (stopsCount - 1);
    const currIndex = Math.min(Math.floor(busIdxFloat), stopsCount - 2);
    const frac = busIdxFloat - currIndex;

    const pA = positions[currIndex] || positions[0];
    const pB = positions[currIndex + 1] || positions[positions.length - 1];

    const busX = pA.x + (pB.x - pA.x) * frac;
    const busY = pA.y + (pB.y - pA.y) * frac;

    return { pathD: d, stopPositions: positions, busPos: { x: busX, y: busY } };
  }, [bus.stops, bus.progressPercent]);

  // Current active next stop
  const currentNextStop = bus.stops.find((s) => s.status === 'CURRENT') || bus.stops[bus.stops.length - 1];
  const distanceCoveredKm = Math.round((bus.progressPercent / 100) * bus.totalDistanceKm);
  const distanceRemainingKm = Math.max(0, bus.totalDistanceKm - distanceCoveredKm);

  const handleShareTrip = () => {
    const text = `Tracking KSRTC Bus ${bus.busNumber} (${bus.brand}) from ${bus.fromCity} to ${bus.toCity}. Current Speed: ${bus.currentSpeedKmH} km/h. Next Stop: ${currentNextStop.name}`;
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleAdvanceStop = () => {
    const nextProg = Math.min(99, bus.progressPercent + 15);
    onUpdateBusProgress(bus.id, nextProg, bus.currentSpeedKmH);
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 shadow-xl overflow-hidden">
      {/* Top Banner: Bus Identity & Live Status */}
      <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-950/60 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400 shrink-0">
            <BusIcon className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-white tracking-tight">
                {bus.busNumber}
              </span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-amber-300">
                {bus.brand}
              </span>
              <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                {bus.serviceNumber}
              </span>
            </div>
            <div className="text-xs text-slate-400 mt-0.5 flex items-center gap-1.5 flex-wrap">
              <span>{lang === 'kn' ? bus.fromCityKn : bus.fromCity}</span>
              <span className="text-slate-600">→</span>
              <span>{lang === 'kn' ? bus.toCityKn : bus.toCity}</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-300 font-medium">{bus.serviceClass}</span>
            </div>
          </div>
        </div>

        {/* Live Trip Status Pill & Actions */}
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/50 border border-emerald-800/60 text-emerald-400 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>
              {bus.delayMinutes === 0
                ? lang === 'kn'
                  ? 'ಸರಿಯಾದ ಸಮಯಕ್ಕೆ (On Time)'
                  : 'On Time'
                : lang === 'kn'
                ? `${bus.delayMinutes} ನಿಮಿಷ ವಿಳಂಬ`
                : `${bus.delayMinutes}m Delayed`}
            </span>
          </div>

          <button
            onClick={handleShareTrip}
            className="p-2 text-slate-400 hover:text-white rounded-lg border border-slate-800 bg-slate-900 hover:bg-slate-800 transition-colors"
            title="Copy tracking link"
          >
            <Share2 className="w-4 h-4" />
          </button>
          {copiedLink && (
            <span className="text-[11px] text-emerald-400 font-medium animate-fade">
              {lang === 'kn' ? 'ಲಿಂಕ್ ನಕಲಿಸಲಾಗಿದೆ!' : 'Tracking Link Copied!'}
            </span>
          )}
        </div>
      </div>

      {/* Main Interactive Vector Map Canvas */}
      <div className="relative bg-slate-950 p-4 sm:p-6 overflow-hidden">
        {/* Map Canvas Background Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '24px 24px',
          }}
        />

        {/* Top Info HUD Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs mb-3 text-slate-400 z-10 relative">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-white font-medium">
              <Compass className="w-4 h-4 text-red-500" />
              <span>
                {lang === 'kn' ? 'ಮುಂದಿನ ನಿಲ್ದಾಣ:' : 'Next Stop:'}{' '}
                <strong className="text-amber-300">
                  {lang === 'kn' ? currentNextStop.nameKn : currentNextStop.name}
                </strong>
              </span>
            </div>
            <span className="text-slate-600">|</span>
            <span className="tabular-nums">
              {lang === 'kn' ? 'ಪ್ಲಾಟ್‌ಫಾರ್ಮ್:' : 'Platform:'} <strong>{currentNextStop.platform}</strong>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-slate-300">
              <Gauge className="w-4 h-4 text-emerald-400" />
              <span>
                {lang === 'kn' ? 'ವೇಗ:' : 'Speed:'}{' '}
                <strong className="text-white font-mono tabular-nums">{bus.currentSpeedKmH} km/h</strong>
              </span>
            </div>
            <div className="flex items-center gap-1 text-slate-300">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>
                {lang === 'kn' ? 'ಅಂದಾಜು ಆಗಮನ:' : 'ETA:'}{' '}
                <strong className="text-white font-mono tabular-nums">{currentNextStop.estimatedTime}</strong>
              </span>
            </div>
          </div>
        </div>

        {/* SVG Route Visualization */}
        <div className="w-full overflow-x-auto pb-2">
          <div className="min-w-[720px] relative">
            <svg
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              className="w-full h-auto drop-shadow-lg select-none"
              style={{ maxHeight: '320px' }}
            >
              <defs>
                {/* Road Glow and Gradients */}
                <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ef4444" />
                  <stop offset="50%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>

                <filter id="busGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Highway Outer Border */}
              <path
                d={pathD}
                fill="none"
                stroke="#1e293b"
                strokeWidth="20"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Highway Asphalt Body */}
              <path
                d={pathD}
                fill="none"
                stroke="#0f172a"
                strokeWidth="14"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Highway Center Dashed Divider */}
              <path
                d={pathD}
                fill="none"
                stroke="#334155"
                strokeWidth="2"
                strokeDasharray="8 8"
                strokeLinecap="round"
              />

              {/* Completed Journey Trace */}
              <path
                d={pathD}
                fill="none"
                stroke="url(#routeGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="1200"
                strokeDashoffset={1200 - (1200 * bus.progressPercent) / 100}
                className="transition-all duration-700 ease-linear"
              />

              {/* Stops Pins along the route */}
              {stopPositions.map(({ stop, x, y }, i) => {
                const isDeparted = stop.status === 'DEPARTED';
                const isCurrent = stop.status === 'CURRENT';
                const isOrigin = i === 0;
                const isDestination = i === stopPositions.length - 1;
                const isSelected = selectedStop?.id === stop.id;

                return (
                  <g
                    key={stop.id}
                    className="cursor-pointer group"
                    onClick={() => setSelectedStop(stop)}
                  >
                    {/* Pulsing ring for current stop */}
                    {isCurrent && (
                      <circle
                        cx={x}
                        cy={y}
                        r="18"
                        className="animate-ping fill-amber-500/20 stroke-amber-400/60"
                        strokeWidth="1.5"
                      />
                    )}

                    {/* Pin Outer Node */}
                    <circle
                      cx={x}
                      cy={y}
                      r={isOrigin || isDestination ? 10 : 7}
                      fill={
                        isDeparted
                          ? '#10b981'
                          : isCurrent
                          ? '#f59e0b'
                          : '#475569'
                      }
                      stroke={isSelected ? '#ffffff' : '#0f172a'}
                      strokeWidth={isSelected ? 3 : 2}
                    />

                    {/* Inner highlight */}
                    <circle
                      cx={x}
                      cy={y}
                      r={isOrigin || isDestination ? 4 : 2.5}
                      fill="#ffffff"
                    />

                    {/* Stop Label - Alternating above and below path to avoid overlapping */}
                    <text
                      x={x}
                      y={i % 2 === 0 ? y - 18 : y + 26}
                      textAnchor="middle"
                      className={`text-[11px] font-semibold select-none transition-colors ${
                        isCurrent
                          ? 'fill-amber-300 font-bold'
                          : isDeparted
                          ? 'fill-slate-300'
                          : 'fill-slate-500'
                      }`}
                    >
                      {lang === 'kn' ? stop.nameKn : stop.name}
                    </text>

                    {/* ETA or Platform text */}
                    <text
                      x={x}
                      y={i % 2 === 0 ? y - 32 : y + 40}
                      textAnchor="middle"
                      className="text-[9px] font-mono fill-slate-400 select-none tabular-nums"
                    >
                      {stop.estimatedTime} · {stop.platform}
                    </text>
                  </g>
                );
              })}

              {/* Dynamic Live Bus Location Marker */}
              <g
                transform={`translate(${busPos.x}, ${busPos.y})`}
                filter="url(#busGlow)"
                className="transition-all duration-700 ease-linear select-none"
              >
                {/* Radar ripple rings */}
                <circle r="22" className="animate-ping fill-red-500/10 stroke-red-500/40" strokeWidth="1" />
                <circle r="14" fill="#ef4444" stroke="#ffffff" strokeWidth="2.5" />

                {/* Bus Silhouette Icon inside marker */}
                <g transform="translate(-6, -6) scale(0.5)">
                  <path
                    d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"
                    fill="#ffffff"
                  />
                </g>

                {/* Live Floating Bus Label */}
                <g transform="translate(0, -28)">
                  <rect
                    x="-45"
                    y="-12"
                    width="90"
                    height="20"
                    rx="10"
                    fill="#1e1b4b"
                    stroke="#ef4444"
                    strokeWidth="1.5"
                  />
                  <text
                    x="0"
                    y="2"
                    textAnchor="middle"
                    className="text-[10px] font-mono font-bold fill-white tabular-nums"
                  >
                    {bus.currentSpeedKmH} km/h
                  </text>
                </g>
              </g>
            </svg>
          </div>
        </div>

        {/* Selected Stop Details Popover (if user clicks any stop pin) */}
        {selectedStop && (
          <div className="mt-3 p-3 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-between gap-4 text-xs animate-fade">
            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <div className="font-semibold text-white">
                  {lang === 'kn' ? selectedStop.nameKn : selectedStop.name} ({selectedStop.city})
                </div>
                <div className="text-slate-400">
                  {lang === 'kn' ? 'ಅಂದಾಜು ಆಗಮನ:' : 'Scheduled:'}{' '}
                  <span className="text-white font-mono tabular-nums">{selectedStop.scheduledTime}</span> · Platform:{' '}
                  <span className="text-amber-300 font-semibold">{selectedStop.platform}</span> · Distance:{' '}
                  <span className="text-slate-300 tabular-nums">{selectedStop.distanceFromStartKm} km</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setSelectedStop(null)}
              className="px-2 py-1 text-slate-400 hover:text-white text-xs rounded border border-slate-700 hover:bg-slate-800"
            >
              Close
            </button>
          </div>
        )}
      </div>

      {/* Cockpit Controls & Simulation Console */}
      <div className="p-4 sm:p-5 bg-slate-950/90 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Column 1: Journey Progress Metrics */}
        <div>
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
            <span>{lang === 'kn' ? 'ಪ್ರಯಾಣ ಪ್ರಗತಿ' : 'Trip Progress'}</span>
            <span className="text-white font-mono tabular-nums font-semibold">
              {Math.round(bus.progressPercent)}%
            </span>
          </div>
          <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden mb-2">
            <div
              className="h-full bg-gradient-to-r from-red-600 via-amber-500 to-emerald-500 transition-all duration-500 ease-out"
              style={{ width: `${bus.progressPercent}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-[11px] text-slate-400 tabular-nums">
            <span>
              {lang === 'kn' ? 'ಮುಗಿದಿದೆ:' : 'Covered:'}{' '}
              <strong className="text-white">{distanceCoveredKm} km</strong>
            </span>
            <span>
              {lang === 'kn' ? 'ಉಳಿದಿದೆ:' : 'Remaining:'}{' '}
              <strong className="text-white">{distanceRemainingKm} km</strong>
            </span>
          </div>
        </div>

        {/* Column 2: Live Simulator Controls */}
        <div className="flex flex-col justify-center gap-2">
          <div className="text-xs font-semibold text-slate-300 flex items-center justify-between">
            <span>{lang === 'kn' ? 'ಜಿಪಿಎಸ್ ಸಿಮ್ಯುಲೇಟರ್ ನಿಯಂತ್ರಣ' : 'Live GPS Simulation'}</span>
            <span className="text-[10px] text-slate-500 font-mono">
              {isPlaying ? 'STREAMING 1000ms' : 'PAUSED'}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {/* Play/Pause Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 border transition-colors ${
                isPlaying
                  ? 'bg-amber-600/20 border-amber-500/40 text-amber-300 hover:bg-amber-600/30'
                  : 'bg-emerald-600/20 border-emerald-500/40 text-emerald-300 hover:bg-emerald-600/30'
              }`}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5" />
                  <span>Resume</span>
                </>
              )}
            </button>

            {/* Speed Multiplier */}
            <button
              onClick={() => {
                const next = speedMultiplier === 1 ? 2 : speedMultiplier === 2 ? 5 : 1;
                setSpeedMultiplier(next as 1 | 2 | 5);
              }}
              className="py-1.5 px-2.5 rounded-lg text-xs font-mono font-medium border border-slate-700 bg-slate-900 text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
              title="Simulation speed multiplier"
            >
              {speedMultiplier}x
            </button>

            {/* Jump Stop Button */}
            <button
              onClick={handleAdvanceStop}
              className="py-1.5 px-2.5 rounded-lg text-xs font-medium border border-slate-700 bg-slate-900 text-slate-300 hover:text-white hover:border-slate-500 transition-colors flex items-center gap-1"
              title="Fast advance to next stop"
            >
              <FastForward className="w-3.5 h-3.5" />
              <span>Next Stop</span>
            </button>
          </div>

          {/* Traffic Simulator Dropdown */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-500">{lang === 'kn' ? 'ರಸ್ತೆ ಪರಿಸ್ಥಿತಿ:' : 'Road condition:'}</span>
            <button
              onClick={() => setTrafficCondition('smooth')}
              className={`px-2 py-0.5 rounded text-[11px] transition-colors ${
                trafficCondition === 'smooth'
                  ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                  : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              Clear Expressway
            </button>
            <button
              onClick={() => setTrafficCondition('moderate')}
              className={`px-2 py-0.5 rounded text-[11px] transition-colors ${
                trafficCondition === 'moderate'
                  ? 'bg-amber-950 text-amber-400 border border-amber-800'
                  : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              Toll Plaza
            </button>
            <button
              onClick={() => setTrafficCondition('heavy')}
              className={`px-2 py-0.5 rounded text-[11px] transition-colors ${
                trafficCondition === 'heavy'
                  ? 'bg-red-950 text-red-400 border border-red-800'
                  : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              Ghat Rain
            </button>
          </div>
        </div>

        {/* Column 3: Proximity Alert & Crew Contacts */}
        <div className="flex flex-col justify-between gap-2 border-t md:border-t-0 md:border-l border-slate-800 pt-3 md:pt-0 md:pl-5">
          {/* Wake Me Up Proximity Alert Toggle */}
          <div className="flex items-center justify-between gap-2">
            <div>
              <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                {proximityAlertActive ? (
                  <BellRing className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
                ) : (
                  <Bell className="w-3.5 h-3.5 text-slate-400" />
                )}
                <span>{lang === 'kn' ? 'ಎಚ್ಚರಿಕೆ ಅಲಾರಾಂ (Wake Me Up)' : 'Proximity Arrival Alert'}</span>
              </div>
              <div className="text-[10px] text-slate-400">
                {lang === 'kn' ? 'ನಿಲ್ದಾಣ ಸಮೀಪಿಸಿದಾಗ ಧ್ವನಿ ಸದ್ದು ಮಾಡುತ್ತದೆ' : 'Chimes when bus is near next stop'}
              </div>
            </div>
            <button
              onClick={() => {
                setProximityAlertActive(!proximityAlertActive);
                if (!proximityAlertActive) playTransitAlertSound();
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                proximityAlertActive
                  ? 'bg-amber-500/20 border-amber-500/60 text-amber-300'
                  : 'bg-slate-900 border-slate-700 text-slate-300 hover:text-white'
              }`}
            >
              {proximityAlertActive ? 'Enabled' : 'Enable'}
            </button>
          </div>

          {/* Crew Info & Call Action */}
          <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
            <div>
              <div className="text-slate-400 text-[10px] uppercase tracking-wider">
                {bus.crew.depot}
              </div>
              <div className="font-semibold text-white">
                {bus.crew.driverName} <span className="text-slate-500 font-normal">({lang === 'kn' ? 'ಚಾಲಕ' : 'Driver'})</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <a
                href={`tel:${bus.crew.driverPhone.replace(/[\s-]/g, '')}`}
                className="p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors"
                title={`Call Driver: ${bus.crew.driverPhone}`}
              >
                <Phone className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={onOpenSos}
                className="px-2 py-1 rounded-md bg-red-600/20 hover:bg-red-600/30 text-red-400 border border-red-500/30 text-[11px] font-semibold"
              >
                SOS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
