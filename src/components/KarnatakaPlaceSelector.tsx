import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Search, ChevronDown, Check, Building2, Landmark } from 'lucide-react';
import { ALL_KARNATAKA_PLACES, KarnatakaPlace } from '../data/karnatakaPlaces';

interface KarnatakaPlaceSelectorProps {
  label?: string;
  labelKn?: string;
  selectedPlaceName: string;
  onSelectPlace: (place: KarnatakaPlace) => void;
  lang: 'en' | 'kn';
  placeholder?: string;
}

export const KarnatakaPlaceSelector: React.FC<KarnatakaPlaceSelectorProps> = ({
  label,
  labelKn,
  selectedPlaceName,
  onSelectPlace,
  lang,
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedDivision, setSelectedDivision] = useState<string>('ALL');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const divisions = [
    { id: 'ALL', name: 'All Karnataka (31 Districts)', nameKn: 'ಸಮಗ್ರ ಕರ್ನಾಟಕ' },
    { id: 'Bengaluru', name: 'Bengaluru Div', nameKn: 'ಬೆಂಗಳೂರು ವಿಭಾಗ' },
    { id: 'Mysuru', name: 'Mysuru Div', nameKn: 'ಮೈಸೂರು ವಿಭಾಗ' },
    { id: 'Coastal & Malnad', name: 'Coastal & Malnad', nameKn: 'ಕರಾವಳಿ - ಮಲೆನಾಡು' },
    { id: 'Kittur Karnataka', name: 'Kittur Karnataka', nameKn: 'ಕಿತ್ತೂರು ಕರ್ನಾಟಕ' },
    { id: 'Kalyana Karnataka', name: 'Kalyana Karnataka', nameKn: 'ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ' },
  ];

  const currentPlace = ALL_KARNATAKA_PLACES.find(
    (p) => p.name.toLowerCase() === selectedPlaceName.toLowerCase() || p.id === selectedPlaceName
  );

  const filteredPlaces = ALL_KARNATAKA_PLACES.filter((p) => {
    if (selectedDivision !== 'ALL' && p.division !== selectedDivision) return false;
    if (!query.trim()) return true;
    const q = query.toLowerCase().trim();
    return (
      p.name.toLowerCase().includes(q) ||
      p.nameKn.includes(query.trim()) ||
      p.district.toLowerCase().includes(q) ||
      p.districtKn.includes(query.trim()) ||
      p.busStandName.toLowerCase().includes(q)
    );
  });

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {label && (
        <label className="block text-xs font-medium text-slate-400 mb-1">
          {lang === 'kn' && labelKn ? labelKn : label}
        </label>
      )}

      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-slate-900 border border-slate-700 hover:border-slate-600 focus:border-red-500 focus:ring-1 focus:ring-red-500 rounded-lg pl-9 pr-8 py-2.5 text-left text-sm text-white focus:outline-none transition-all flex items-center justify-between"
      >
        <MapPin className="w-4 h-4 text-red-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        <span className="truncate block font-medium">
          {currentPlace
            ? lang === 'kn'
              ? `${currentPlace.nameKn} (${currentPlace.name})`
              : `${currentPlace.name} · ${currentPlace.district}`
            : placeholder || (lang === 'kn' ? 'ಸ್ಥಳವನ್ನು ಆಯ್ಕೆಮಾಡಿ' : 'Select a Place')}
        </span>
        <ChevronDown className={`w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-1.5 z-50 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden backdrop-blur-xl animate-fade">
          {/* Search Input Box */}
          <div className="p-2.5 border-b border-slate-800 bg-slate-950/80">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={
                  lang === 'kn'
                    ? 'ಕರ್ನಾಟಕದ ಯಾವುದೇ ನಗರ, ತಾಲೂಕು, ಧಾರ್ಮಿಕ ಕ್ಷೇತ್ರ ಹುಡುಕಿ...'
                    : 'Search 120+ Karnataka places, districts, towns...'
                }
                className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
              />
            </div>

            {/* Division Filter Badges */}
            <div className="flex items-center gap-1 overflow-x-auto mt-2 pb-1 scrollbar-none text-[11px]">
              {divisions.map((div) => (
                <button
                  type="button"
                  key={div.id}
                  onClick={() => setSelectedDivision(div.id)}
                  className={`px-2 py-0.5 rounded whitespace-nowrap transition-colors ${
                    selectedDivision === div.id
                      ? 'bg-red-600 text-white font-medium'
                      : 'bg-slate-800/80 text-slate-400 hover:text-white'
                  }`}
                >
                  {lang === 'kn' ? div.nameKn : div.name}
                </button>
              ))}
            </div>
          </div>

          {/* Places List (High density, clean typography) */}
          <div className="max-h-64 overflow-y-auto divide-y divide-slate-800/60 p-1">
            {filteredPlaces.length === 0 ? (
              <div className="p-4 text-center text-xs text-slate-500">
                {lang === 'kn'
                  ? 'ಯಾವುದೇ ಸ್ಥಳ ಕಂಡುಬಂದಿಲ್ಲ. ಬೇರೆ ಹೆಸರನ್ನು ಹುಡುಕಿ.'
                  : 'No Karnataka places found matching query.'}
              </div>
            ) : (
              filteredPlaces.map((place) => {
                const isSelected =
                  place.name.toLowerCase() === selectedPlaceName.toLowerCase() ||
                  place.id === selectedPlaceName;

                return (
                  <button
                    type="button"
                    key={place.id}
                    onClick={() => {
                      onSelectPlace(place);
                      setIsOpen(false);
                      setQuery('');
                    }}
                    className={`w-full px-3 py-2 text-left flex items-start justify-between rounded-lg transition-colors group ${
                      isSelected
                        ? 'bg-red-950/50 text-white border-l-2 border-red-500'
                        : 'hover:bg-slate-800/60 text-slate-300'
                    }`}
                  >
                    <div className="min-w-0 pr-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-white group-hover:text-red-400 transition-colors">
                          {lang === 'kn' ? place.nameKn : place.name}
                        </span>
                        <span className="text-[11px] text-slate-400">
                          {lang === 'kn' ? place.name : place.nameKn}
                        </span>
                        {place.popular && (
                          <span className="text-[9px] uppercase tracking-wide text-amber-400/90 font-mono">
                            ★ Hub
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-400 truncate mt-0.5">
                        <span>{place.busStandName}</span>
                        <span className="mx-1 text-slate-600">·</span>
                        <span className="text-slate-500">{place.district}</span>
                      </div>
                    </div>

                    {isSelected && (
                      <Check className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    )}
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
};
