import React, { useState } from 'react';
import {
  MapPin,
  Search,
  Building2,
  Compass,
  ArrowRight,
  Bus,
  Sparkles,
  Landmark,
  Trees,
  Navigation,
} from 'lucide-react';
import {
  ALL_KARNATAKA_PLACES,
  KARNATAKA_DISTRICTS,
  KarnatakaPlace,
} from '../data/karnatakaPlaces';

interface KarnatakaPlacesDirectoryProps {
  lang: 'en' | 'kn';
  onSelectOriginAndDest: (origin: string, dest: string) => void;
  onExplorePlace: (place: KarnatakaPlace) => void;
}

export const KarnatakaPlacesDirectory: React.FC<KarnatakaPlacesDirectoryProps> = ({
  lang,
  onSelectOriginAndDest,
  onExplorePlace,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDivision, setSelectedDivision] = useState<string>('ALL');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('ALL');

  const divisions = [
    { id: 'ALL', name: 'All 31 Districts', nameKn: 'ಎಲ್ಲಾ 31 ಜಿಲ್ಲೆಗಳು' },
    { id: 'Bengaluru', name: 'Bengaluru Division', nameKn: 'ಬೆಂಗಳೂರು ವಿಭಾಗ' },
    { id: 'Mysuru', name: 'Mysuru Division', nameKn: 'ಮೈಸೂರು ವಿಭಾಗ' },
    { id: 'Coastal & Malnad', name: 'Coastal & Malnad', nameKn: 'ಕರಾವಳಿ ಮತ್ತು ಮಲೆನಾಡು' },
    { id: 'Kittur Karnataka', name: 'Kittur Karnataka', nameKn: 'ಕಿತ್ತೂರು ಕರ್ನಾಟಕ' },
    { id: 'Kalyana Karnataka', name: 'Kalyana Karnataka', nameKn: 'ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ' },
  ];

  const categories = [
    { id: 'ALL', name: 'All Places', nameKn: 'ಎಲ್ಲಾ ಸ್ಥಳಗಳು' },
    { id: 'District Capital', name: 'District Capitals', nameKn: 'ಜಿಲ್ಲಾ ಕೇಂದ್ರಗಳು' },
    { id: 'Pilgrimage & Heritage', name: 'Pilgrimage & Heritage', nameKn: 'ಪುಣ್ಯಕ್ಷೇತ್ರ & ಪರಂಪರೆ' },
    { id: 'Hill Station & Nature', name: 'Hill Stations & Nature', nameKn: 'ಗಿರಿಧಾಮ & ಪ್ರಕೃತಿ' },
    { id: 'Major Commercial Hub', name: 'Commercial Hubs', nameKn: 'ಪ್ರಮುಖ ನಗರಗಳು' },
  ];

  // Filter districts based on division
  const availableDistricts = KARNATAKA_DISTRICTS.filter((d) =>
    selectedDivision === 'ALL' ? true : d.division === selectedDivision
  );

  const filteredPlaces = ALL_KARNATAKA_PLACES.filter((p) => {
    if (selectedDivision !== 'ALL' && p.division !== selectedDivision) return false;
    if (selectedCategory !== 'ALL' && p.category !== selectedCategory) return false;
    if (selectedDistrict !== 'ALL' && p.district.toLowerCase() !== selectedDistrict.toLowerCase()) return false;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      return (
        p.name.toLowerCase().includes(q) ||
        p.nameKn.includes(searchQuery.trim()) ||
        p.district.toLowerCase().includes(q) ||
        p.districtKn.includes(searchQuery.trim()) ||
        p.busStandName.toLowerCase().includes(q) ||
        p.busStandNameKn.includes(searchQuery.trim())
      );
    }
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Banner / Header */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-red-400 mb-1.5">
              <Compass className="w-3.5 h-3.5" />
              <span>
                {lang === 'kn'
                  ? 'ಸಮಗ್ರ ಕರ್ನಾಟಕ ಬಸ್ ಸಂಪರ್ಕ ಜಾಲ'
                  : 'Complete Karnataka State Bus Transit Network'}
              </span>
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
              {lang === 'kn'
                ? 'ಕರ್ನಾಟಕದ ಎಲ್ಲಾ ಸ್ಥಳಗಳು ಮತ್ತು ಬಸ್ ನಿಲ್ದಾಣಗಳು'
                : 'All Karnataka Places, Districts & Bus Terminals'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl">
              {lang === 'kn'
                ? '31 ಜಿಲ್ಲೆಗಳು, 120+ ನಗರಗಳು, ತಾಲೂಕು ಕೇಂದ್ರಗಳು ಮತ್ತು ಪ್ರಸಿದ್ಧ ಯಾತ್ರಾಸ್ಥಳಗಳನ್ನು ಒಳಗೊಂಡ ಕೆ.ಎಸ್.ಆರ್.ಟಿ.ಸಿ ಬಸ್ ಜಾಲ. ನೇರವಾಗಿ ಬಸ್ ಲೈವ್ ಟ್ರ್ಯಾಕ್ ಮಾಡಿ ಅಥವಾ ವೇಳಾಪಟ್ಟಿ ಪರಿಶೀಲಿಸಿ.'
                : 'Explore all 31 Karnataka districts and 120+ cities, taluks, coastal towns, and pilgrimage centers connected by KSRTC, NWKRTC, and KKRTC express & luxury services.'}
            </p>
          </div>

          <div className="flex items-center gap-4 bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-center shrink-0">
            <div>
              <div className="text-xl sm:text-2xl font-black text-white tabular-nums">31</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">Districts</div>
            </div>
            <div className="w-px h-8 bg-slate-800" />
            <div>
              <div className="text-xl sm:text-2xl font-black text-red-400 tabular-nums">120+</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">Places</div>
            </div>
            <div className="w-px h-8 bg-slate-800" />
            <div>
              <div className="text-xl sm:text-2xl font-black text-emerald-400 tabular-nums">100%</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">Connected</div>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="mt-6 pt-5 border-t border-slate-800/80 space-y-3.5">
          {/* Search Input & District Selector */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="relative sm:col-span-2">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  lang === 'kn'
                    ? 'ಸ್ಥಳದ ಹೆಸರು, ಜಿಲ್ಲೆ ಅಥವಾ ಬಸ್ ನಿಲ್ದಾಣ ಹುಡುಕಿ (ಉದಾ: ಮೈಸೂರು, ಶೃಂಗೇರಿ, ಗೋಕರ್ಣ, ಹಂಪಿ)...'
                    : 'Search any Karnataka place, district or bus stand (e.g. Gokarna, Sringeri, Hampi, Belagavi)...'
                }
                className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
              />
            </div>

            {/* District dropdown */}
            <div>
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-red-500"
              >
                <option value="ALL">
                  {lang === 'kn' ? 'ಎಲ್ಲಾ ಜಿಲ್ಲೆಗಳು (31)' : 'All Districts (31 Districts)'}
                </option>
                {availableDistricts.map((d) => (
                  <option key={d.id} value={d.name}>
                    {lang === 'kn' ? `${d.nameKn} (${d.name})` : d.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Division Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs scrollbar-none">
            <span className="text-slate-500 text-xs font-medium mr-1 shrink-0">
              {lang === 'kn' ? 'ವಿಭಾಗ:' : 'Division:'}
            </span>
            {divisions.map((div) => (
              <button
                key={div.id}
                onClick={() => {
                  setSelectedDivision(div.id);
                  setSelectedDistrict('ALL');
                }}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors text-xs ${
                  selectedDivision === div.id
                    ? 'bg-red-600 text-white font-semibold shadow-sm'
                    : 'bg-slate-950 border border-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                {lang === 'kn' ? div.nameKn : div.name}
              </button>
            ))}
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs scrollbar-none">
            <span className="text-slate-500 text-xs font-medium mr-1 shrink-0">
              {lang === 'kn' ? 'ವರ್ಗ:' : 'Category:'}
            </span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-2.5 py-1 rounded-md whitespace-nowrap transition-colors text-[11px] ${
                  selectedCategory === cat.id
                    ? 'bg-slate-700 text-white font-semibold'
                    : 'bg-slate-950/70 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {lang === 'kn' ? cat.nameKn : cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Places Grid */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1">
        <span>
          {lang === 'kn'
            ? `${filteredPlaces.length} ಸ್ಥಳಗಳು ಕಂಡುಬಂದಿವೆ`
            : `Showing ${filteredPlaces.length} Karnataka places`}
        </span>
        <span className="text-slate-500">
          {lang === 'kn' ? 'ನೇರ ಬಸ್ ಟ್ರ್ಯಾಕಿಂಗ್ ಲಭ್ಯವಿದೆ' : 'Live GPS & Route Search enabled'}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPlaces.map((place) => {
          return (
            <div
              key={place.id}
              className="rounded-xl border border-slate-800 bg-slate-900/90 hover:border-slate-700 p-4 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header: Place name & district */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-red-400 transition-colors flex items-center gap-1.5">
                      <span>{place.name}</span>
                      {place.popular && (
                        <span className="text-[10px] text-amber-400 font-normal">★</span>
                      )}
                    </h3>
                    <div className="text-xs text-slate-400 font-medium">
                      {place.nameKn}
                    </div>
                  </div>

                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono shrink-0">
                    {place.division}
                  </span>
                </div>

                {/* District & Bus Stand */}
                <div className="mt-3 space-y-1.5 text-xs text-slate-300">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Building2 className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span className="text-slate-400">{lang === 'kn' ? 'ಜಿಲ್ಲೆ:' : 'District:'}</span>
                    <span className="text-slate-200 font-medium">{place.district}</span>
                    <span className="text-slate-500">({place.districtKn})</span>
                  </div>

                  <div className="flex items-start gap-1.5 text-slate-300">
                    <Bus className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-slate-200 font-medium leading-tight">
                        {place.busStandName}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {place.busStandNameKn}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between gap-2 text-xs">
                <button
                  onClick={() => onSelectOriginAndDest(place.name, 'Bengaluru')}
                  className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors text-[11px] flex items-center gap-1"
                  title={`Buses to Bengaluru`}
                >
                  <span>→ Bengaluru</span>
                </button>

                <button
                  onClick={() => onSelectOriginAndDest('Bengaluru', place.name)}
                  className="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-medium transition-colors text-[11px] flex items-center gap-1.5 shadow-sm"
                >
                  <span>{lang === 'kn' ? 'ಬಸ್ ಹುಡುಕಿ' : 'Find Buses'}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
