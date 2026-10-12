import React, { useState } from 'react';
import { X, Check, Armchair, ShieldCheck, CreditCard } from 'lucide-react';
import { BusService } from '../types/bus';

interface SeatMapModalProps {
  lang: 'en' | 'kn';
  bus: BusService | null;
  onClose: () => void;
}

export const SeatMapModal: React.FC<SeatMapModalProps> = ({ lang, bus, onClose }) => {
  if (!bus) return null;

  const isSleeper = bus.brand.includes('Ambari');
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Generate seat map mock
  const bookedSeatNumbers = new Set(['L-02', 'L-05', 'L-08', 'U-03', 'U-07', '04', '07', '12', '16', '21']);

  const toggleSeat = (seatCode: string) => {
    if (bookedSeatNumbers.has(seatCode)) return;
    if (selectedSeats.includes(seatCode)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seatCode));
    } else {
      setSelectedSeats([...selectedSeats, seatCode]);
    }
  };

  const totalPayable = selectedSeats.length * bus.fare;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade">
      <div className="relative w-full max-w-xl rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/80">
          <div>
            <div className="text-xs uppercase font-semibold text-red-400">
              {lang === 'kn' ? 'ಆಸನ ವಿನ್ಯಾಸ ಮತ್ತು ಲಭ್ಯತೆ' : 'Seat Layout & Reservation'}
            </div>
            <h3 className="text-base font-bold text-white mt-0.5">
              {bus.busNumber} · {bus.brand}
            </h3>
            <div className="text-xs text-slate-400">
              {bus.fromCity} → {bus.toCity} ({bus.departureTime})
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Seat Diagram Body */}
        <div className="p-5 overflow-y-auto space-y-6">
          {/* Legend */}
          <div className="flex items-center justify-center gap-5 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded border border-slate-700 bg-slate-800" />
              <span>Available</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded bg-red-600 border border-red-500" />
              <span>Selected</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded bg-slate-800/40 border border-slate-800 text-slate-600 cursor-not-allowed" />
              <span>Occupied</span>
            </div>
          </div>

          {/* Sleeper Layout vs Seater Layout */}
          {isSleeper ? (
            <div className="space-y-4">
              <div className="text-xs font-semibold text-slate-300">
                Lower Deck (L) & Upper Deck (U) Sleeper Berths:
              </div>

              {/* Lower Deck Grid */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-[11px] text-slate-400 mb-2 font-medium">Lower Berths</div>
                <div className="grid grid-cols-5 gap-2">
                  {['L-01', 'L-02', 'L-03', 'L-04', 'L-05', 'L-06', 'L-07', 'L-08', 'L-09', 'L-10'].map((seat) => {
                    const isBooked = bookedSeatNumbers.has(seat);
                    const isSelected = selectedSeats.includes(seat);
                    return (
                      <button
                        key={seat}
                        disabled={isBooked}
                        onClick={() => toggleSeat(seat)}
                        className={`h-12 rounded-lg border text-xs font-mono font-semibold transition-all flex flex-col items-center justify-center ${
                          isSelected
                            ? 'bg-red-600 border-red-400 text-white shadow-md'
                            : isBooked
                            ? 'bg-slate-900/60 border-slate-800/80 text-slate-600 cursor-not-allowed'
                            : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-red-400'
                        }`}
                      >
                        <span>{seat}</span>
                        <span className="text-[9px] opacity-70">Single</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Upper Deck Grid */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-[11px] text-slate-400 mb-2 font-medium">Upper Berths</div>
                <div className="grid grid-cols-5 gap-2">
                  {['U-01', 'U-02', 'U-03', 'U-04', 'U-05', 'U-06', 'U-07', 'U-08', 'U-09', 'U-10'].map((seat) => {
                    const isBooked = bookedSeatNumbers.has(seat);
                    const isSelected = selectedSeats.includes(seat);
                    return (
                      <button
                        key={seat}
                        disabled={isBooked}
                        onClick={() => toggleSeat(seat)}
                        className={`h-12 rounded-lg border text-xs font-mono font-semibold transition-all flex flex-col items-center justify-center ${
                          isSelected
                            ? 'bg-red-600 border-red-400 text-white shadow-md'
                            : isBooked
                            ? 'bg-slate-900/60 border-slate-800/80 text-slate-600 cursor-not-allowed'
                            : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-red-400'
                        }`}
                      >
                        <span>{seat}</span>
                        <span className="text-[9px] opacity-70">Berth</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            /* Seater Layout (Airavat / Rajahamsa 2+2) */
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <div className="flex items-center justify-between text-[11px] text-slate-400 mb-3">
                <span>Front (Driver Cabin)</span>
                <span>Rear</span>
              </div>
              <div className="grid grid-cols-6 gap-2">
                {[
                  '01', '02', '03', '04', '05', '06',
                  '07', '08', '09', '10', '11', '12',
                  '13', '14', '15', '16', '17', '18',
                  '19', '20', '21', '22', '23', '24'
                ].map((seat) => {
                  const isBooked = bookedSeatNumbers.has(seat);
                  const isSelected = selectedSeats.includes(seat);
                  return (
                    <button
                      key={seat}
                      disabled={isBooked}
                      onClick={() => toggleSeat(seat)}
                      className={`h-11 rounded-lg border text-xs font-mono font-semibold transition-all flex flex-col items-center justify-center ${
                        isSelected
                          ? 'bg-red-600 border-red-400 text-white shadow-md'
                          : isBooked
                          ? 'bg-slate-900/60 border-slate-800/80 text-slate-600 cursor-not-allowed'
                          : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-red-400'
                      }`}
                    >
                      <Armchair className="w-3.5 h-3.5 mb-0.5" />
                      <span>{seat}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {bookingConfirmed && (
            <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs flex items-center gap-3">
              <Check className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <strong>Reservation Initialized!</strong> Seats [{selectedSeats.join(', ')}] locked for 10 minutes. Proceeding to KSRTC Sarathi Payment Gateway.
              </div>
            </div>
          )}
        </div>

        {/* Footer Summary & Book CTA */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-950 flex items-center justify-between gap-4">
          <div>
            <div className="text-xs text-slate-400">
              Selected: <strong className="text-white">{selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None'}</strong>
            </div>
            <div className="text-lg font-bold text-amber-300 font-mono tabular-nums">
              ₹{totalPayable} <span className="text-xs font-normal text-slate-400">(incl. GST)</span>
            </div>
          </div>

          <button
            disabled={selectedSeats.length === 0}
            onClick={() => setBookingConfirmed(true)}
            className="px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-500 disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs font-bold transition-colors shadow-sm flex items-center gap-2"
          >
            <CreditCard className="w-4 h-4" />
            <span>Proceed to Book</span>
          </button>
        </div>
      </div>
    </div>
  );
};
