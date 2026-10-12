import React from 'react';
import { X, Ticket, QrCode, MapPin, Clock, User, Phone, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { PNRTicket, BusService } from '../types/bus';

interface PnrTrackerModalProps {
  lang: 'en' | 'kn';
  ticket: PNRTicket | null;
  busService: BusService | null;
  onClose: () => void;
  onTrackBus: (bus: BusService) => void;
}

export const PnrTrackerModal: React.FC<PnrTrackerModalProps> = ({
  lang,
  ticket,
  busService,
  onClose,
  onTrackBus,
}) => {
  if (!ticket) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade">
      <div className="relative w-full max-w-lg rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden">
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-red-600 to-amber-600 px-6 py-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-2.5">
            <Ticket className="w-5 h-5" />
            <div>
              <div className="text-xs uppercase tracking-wider font-semibold opacity-90">
                {lang === 'kn' ? 'ಕರ್ನಾಟಕ ಸಾರಿಗೆ ಇ-ಟಿಕೆಟ್' : 'KSRTC Official m-Ticket'}
              </div>
              <div className="text-base font-bold font-mono">PNR: {ticket.pnr}</div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-black/20 hover:bg-black/40 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Boarding Pass Body */}
        <div className="p-6 space-y-5 bg-slate-950/90 text-xs">
          {/* Passenger & Status */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
            <div>
              <div className="text-slate-400">{lang === 'kn' ? 'ಪ್ರಯಾಣಿಕರ ಹೆಸರು' : 'Passenger Name'}</div>
              <div className="text-sm font-bold text-white flex items-center gap-1.5 mt-0.5">
                <User className="w-3.5 h-3.5 text-red-400" />
                <span>{ticket.passengerName}</span>
              </div>
              <div className="text-slate-400 mt-1">{ticket.passengerPhone}</div>
            </div>
            <div className="text-right">
              <div className="text-slate-400">{lang === 'kn' ? 'ಸ್ಥಿತಿ' : 'Status'}</div>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-950 border border-emerald-800 text-emerald-400 mt-0.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{ticket.status}</span>
              </span>
            </div>
          </div>

          {/* Service & Seats */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-slate-400">{lang === 'kn' ? 'ಸೇವಾ ಸಂಖ್ಯೆ' : 'Service Code'}</div>
              <div className="text-sm font-bold font-mono text-white mt-0.5">
                {ticket.serviceNumber}
              </div>
              {busService && (
                <div className="text-[11px] text-amber-400 mt-1 font-semibold">{busService.brand}</div>
              )}
            </div>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-slate-400">{lang === 'kn' ? 'ನಿಗದಿಪಡಿಸಿದ ಆಸನಗಳು' : 'Allocated Seats / Berths'}</div>
              <div className="text-sm font-bold text-amber-300 font-mono mt-0.5">
                {ticket.seats.join(', ')}
              </div>
              <div className="text-[11px] text-slate-400 mt-1">Total Paid: ₹{ticket.totalFare}</div>
            </div>
          </div>

          {/* Boarding Point Guidance */}
          <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-white font-semibold">
              <MapPin className="w-4 h-4 text-red-400" />
              <span>{lang === 'kn' ? 'ಹತ್ತುವ ಸ್ಥಳ ಮತ್ತು ನಿಗದಿತ ಸಮಯ' : 'Boarding Point & Reporting Time'}</span>
            </div>
            <div className="text-slate-300 text-xs pl-6">
              <strong>{ticket.boardingPoint}</strong>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-[11px] pl-6">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>
                Report at <strong>{ticket.boardingTime}</strong> on {ticket.journeyDate}
              </span>
            </div>
          </div>

          {/* Live Bus Tracking Action */}
          {busService && (
            <div className="p-4 rounded-xl bg-red-950/40 border border-red-800/60 flex items-center justify-between gap-3">
              <div>
                <div className="font-semibold text-white text-xs">
                  {lang === 'kn' ? 'ನಿಮ್ಮ ಬಸ್ ಲೈವ್ ಜಿಪಿಎಸ್ ಸಕ್ರಿಯವಾಗಿದೆ' : 'Your Bus is Live on GPS'}
                </div>
                <div className="text-slate-400 text-[11px] mt-0.5">
                  Reg: {busService.busNumber} · Speed: {busService.currentSpeedKmH} km/h
                </div>
              </div>
              <button
                onClick={() => {
                  onTrackBus(busService);
                  onClose();
                }}
                className="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold text-xs transition-colors flex items-center gap-1 shadow-sm whitespace-nowrap"
              >
                <span>Track Bus Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Conductor Contact */}
          {busService?.crew && (
            <div className="flex items-center justify-between text-slate-400 pt-2 border-t border-slate-800">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>
                  Conductor: <strong>{busService.crew.conductorName}</strong>
                </span>
              </div>
              <a
                href={`tel:${busService.crew.conductorPhone.replace(/[\s-]/g, '')}`}
                className="text-amber-400 hover:underline font-mono text-xs"
              >
                {busService.crew.conductorPhone}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
