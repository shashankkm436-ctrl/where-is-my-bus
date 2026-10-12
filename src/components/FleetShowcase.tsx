import React from 'react';
import { ShieldCheck, Wind, Zap, Tv, Coffee, ArrowUpRight, Bus } from 'lucide-react';

interface FleetShowcaseProps {
  lang: 'en' | 'kn';
  onFilterFleet: (brandName: string) => void;
}

export const FleetShowcase: React.FC<FleetShowcaseProps> = ({ lang, onFilterFleet }) => {
  const fleetData = [
    {
      name: 'Ambari Utsav',
      nameKn: 'ಅಂಬಾರಿ ಉತ್ಸವ',
      category: 'Volvo 9600 15M Multi-Axle AC Sleeper',
      desc: 'The gold standard in luxury intercity travel. Aerodynamic Scandinavian silhouette, premium memory-foam berths, individual AC ducts, USB-C fast charging, reading spotlights, and panoramic darkened safety windows.',
      features: ['Individual AC Vents', 'Privacy Curtains', 'USB-A & USB-C', 'Luggage Compartment', 'Panic SOS Button'],
      idealFor: 'Long-distance overnight routes (Bengaluru to Mangaluru, Belagavi, Goa, Hyderabad, Mumbai)',
      fareRange: '₹950 - ₹1,800',
    },
    {
      name: 'Airavat Club Class',
      nameKn: 'ಐರಾವತ ಕ್ಲಬ್ ಕ್ಲಾಸ್',
      category: 'Volvo B11R Multi-Axle AC Semi-Sleeper',
      desc: 'Karnataka\'s premier highway express. High-deck luxury seating with motorized footrests, dual-zone digital climate control, air-suspension float, and complimentary bottled mineral water.',
      features: ['Semi-Sleeper Velvet Reclining', 'High-Speed Air Suspension', 'Dual AC Zones', 'GPS Live Tracking'],
      idealFor: 'Day & Evening Express (Bengaluru to Mysuru, Hubballi, Hassan, Tirupati, Ooty, Kozhikode)',
      fareRange: '₹360 - ₹950',
    },
    {
      name: 'Flybus',
      nameKn: 'ಫ್ಲೈಬಸ್ (ವಿಮಾನ ನಿಲ್ದಾಣ ಎಕ್ಸ್‌ಪ್ರೆಸ್)',
      category: 'Airport Direct Coach with Chemical Toilet',
      desc: 'Dedicated airport non-stop shuttle connecting Kempegowda International Airport (BLR) directly to Mysuru, Madikeri, and Coimbatore without transiting downtown city traffic.',
      features: ['In-Coach Chemical Restroom', 'Live Flight Radar Displays', 'Direct Expressway Clearance', 'Wi-Fi Onboard'],
      idealFor: 'Flight passengers commuting between BLR Airport and Mysuru / Coorg',
      fareRange: '₹820 - ₹1,100',
    },
    {
      name: 'Rajahamsa Executive',
      nameKn: 'ರಾಜಹಂಸ ಎಕ್ಸಿಕ್ಯುಟಿವ್',
      category: 'Non-AC Ultra Deluxe 2+2 Pushback',
      desc: 'The trusted workhorse of intercity travel. Wide cushioned seats with generous legroom, pneumatic air suspension for smooth rural roads, and mobile charging facilities at every row.',
      features: ['Pushback 2+2 Seating', 'Air Suspension Comfort', 'Mobile Charging Ports', 'Emergency Panic Alarms'],
      idealFor: 'Inter-district express transit across all major Karnataka taluks and towns',
      fareRange: '₹280 - ₹650',
    },
    {
      name: 'Karnataka Sarige',
      nameKn: 'ಕರ್ನಾಟಕ ಸಾರಿಗೆ',
      category: 'State Lifeline Express (Red Bus)',
      desc: 'Connecting thousands of villages, taluks, and towns round-the-clock. Fully subsidized, affordable, and supporting the landmark Shakti scheme for women travelers across Karnataka.',
      features: ['Shakti Free Travel for Women', 'Affordable State Regulated Fares', 'Luggage Roof Rack', 'High-Frequency Timetables'],
      idealFor: 'Daily workers, students, rural commuters, and intercity short hops',
      fareRange: '₹40 - ₹350',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-left max-w-3xl">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          {lang === 'kn' ? 'ಕೆ.ಎಸ್.ಆರ್.ಟಿ.ಸಿ ಬಸ್ ಮಾದರಿಗಳು ಮತ್ತು ಸೌಲಭ್ಯಗಳು' : 'The KSRTC Fleet · World-Class Transit for Karnataka'}
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          {lang === 'kn'
            ? 'ಐಷಾರಾಮಿ ಅಂಬಾರಿ ಉತ್ಸವದಿಂದ ಹಿಡಿದು ಜನಪ್ರಿಯ ಕರ್ನಾಟಕ ಸಾರಿಗೆಯವರೆಗೆ, ಪ್ರತಿ ಪ್ರಯಾಣಿಕರ ಅಗತ್ಯಕ್ಕೆ ತಕ್ಕಂತೆ ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ.'
            : 'From multi-axle luxury sleeper coaches to high-frequency point-to-point city express services.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {fleetData.map((bus) => (
          <div
            key={bus.name}
            className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 flex flex-col justify-between hover:border-slate-700 transition-all group shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-red-950/60 border border-red-800/50 text-red-300">
                  {lang === 'kn' ? bus.nameKn : bus.name}
                </span>
                <span className="text-xs font-mono font-bold text-amber-300">
                  {bus.fareRange}
                </span>
              </div>

              <h3 className="text-base font-bold text-white mt-2 group-hover:text-red-400 transition-colors">
                {bus.name}
              </h3>
              <div className="text-xs text-slate-400 font-medium">{bus.category}</div>

              <p className="text-xs text-slate-300 mt-3 line-clamp-3 leading-relaxed">
                {bus.desc}
              </p>

              {/* Feature Chips */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {bus.features.map((feat, i) => (
                  <span
                    key={i}
                    className="text-[11px] px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300"
                  >
                    {feat}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between">
              <div className="text-[11px] text-slate-500 max-w-[170px] truncate">
                {bus.idealFor}
              </div>
              <button
                onClick={() => onFilterFleet(bus.name)}
                className="text-xs font-semibold text-red-400 hover:text-red-300 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
              >
                <span>Find Buses</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
