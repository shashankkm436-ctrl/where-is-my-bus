export interface KarnatakaPlace {
  id: string;
  name: string;
  nameKn: string;
  district: string;
  districtKn: string;
  division: 'Bengaluru' | 'Mysuru' | 'Kittur Karnataka' | 'Kalyana Karnataka' | 'Coastal & Malnad';
  category: 'District Capital' | 'Major Commercial Hub' | 'Pilgrimage & Heritage' | 'Hill Station & Nature' | 'Taluk Headquarters';
  busStandName: string;
  busStandNameKn: string;
  lat: number;
  lng: number;
  popular?: boolean;
}

export interface KarnatakaDistrict {
  id: string;
  name: string;
  nameKn: string;
  division: 'Bengaluru' | 'Mysuru' | 'Kittur Karnataka' | 'Kalyana Karnataka' | 'Coastal & Malnad';
  hq: string;
  hqKn: string;
}

export const KARNATAKA_DISTRICTS: KarnatakaDistrict[] = [
  // Bengaluru Division
  { id: 'blr-urban', name: 'Bengaluru Urban', nameKn: 'ಬೆಂಗಳೂರು ನಗರ', division: 'Bengaluru', hq: 'Bengaluru', hqKn: 'ಬೆಂಗಳೂರು' },
  { id: 'blr-rural', name: 'Bengaluru Rural', nameKn: 'ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ', division: 'Bengaluru', hq: 'Nelamangala / Devanahalli', hqKn: 'ದೇವನಹಳ್ಳಿ' },
  { id: 'ramanagara', name: 'Ramanagara', nameKn: 'ರಾಮನಗರ', division: 'Bengaluru', hq: 'Ramanagara', hqKn: 'ರಾಮನಗರ' },
  { id: 'kolar', name: 'Kolar', nameKn: 'ಕೋಲಾರ', division: 'Bengaluru', hq: 'Kolar', hqKn: 'ಕೋಲಾರ' },
  { id: 'chikkaballapura', name: 'Chikkaballapura', nameKn: 'ಚಿಕ್ಕಬಳ್ಳಾಪುರ', division: 'Bengaluru', hq: 'Chikkaballapura', hqKn: 'ಚಿಕ್ಕಬಳ್ಳಾಪುರ' },
  { id: 'tumakuru', name: 'Tumakuru', nameKn: 'ತುಮಕೂರು', division: 'Bengaluru', hq: 'Tumakuru', hqKn: 'ತುಮಕೂರು' },
  { id: 'chitradurga', name: 'Chitradurga', nameKn: 'ಚಿತ್ರದುರ್ಗ', division: 'Bengaluru', hq: 'Chitradurga', hqKn: 'ಚಿತ್ರದುರ್ಗ' },
  { id: 'davanagere', name: 'Davanagere', nameKn: 'ದಾವಣಗೆರೆ', division: 'Bengaluru', hq: 'Davanagere', hqKn: 'ದಾವಣಗೆರೆ' },
  { id: 'shivamogga', name: 'Shivamogga', nameKn: 'ಶಿವಮೊಗ್ಗ', division: 'Bengaluru', hq: 'Shivamogga', hqKn: 'ಶಿವಮೊಗ್ಗ' },

  // Mysuru Division
  { id: 'mysuru', name: 'Mysuru', nameKn: 'ಮೈಸೂರು', division: 'Mysuru', hq: 'Mysuru', hqKn: 'ಮೈಸೂರು' },
  { id: 'mandya', name: 'Mandya', nameKn: 'ಮಂಡ್ಯ', division: 'Mysuru', hq: 'Mandya', hqKn: 'ಮಂಡ್ಯ' },
  { id: 'chamarajanagar', name: 'Chamarajanagar', nameKn: 'ಚಾಮರಾಜನಗರ', division: 'Mysuru', hq: 'Chamarajanagar', hqKn: 'ಚಾಮರಾಜನಗರ' },
  { id: 'hassan', name: 'Hassan', nameKn: 'ಹಾಸನ', division: 'Mysuru', hq: 'Hassan', hqKn: 'ಹಾಸನ' },
  { id: 'kodagu', name: 'Kodagu (Coorg)', nameKn: 'ಕೊಡಗು', division: 'Mysuru', hq: 'Madikeri', hqKn: 'ಮಡಿಕೇರಿ' },
  { id: 'chikkamagaluru', name: 'Chikkamagaluru', nameKn: 'ಚಿಕ್ಕಮಗಳೂರು', division: 'Mysuru', hq: 'Chikkamagaluru', hqKn: 'ಚಿಕ್ಕಮಗಳೂರು' },

  // Coastal & Malnad
  { id: 'dakshina-kannada', name: 'Dakshina Kannada', nameKn: 'ದಕ್ಷಿಣ ಕನ್ನಡ', division: 'Coastal & Malnad', hq: 'Mangaluru', hqKn: 'ಮಂಗಳೂರು' },
  { id: 'udupi', name: 'Udupi', nameKn: 'ಉಡುಪಿ', division: 'Coastal & Malnad', hq: 'Udupi', hqKn: 'ಉಡುಪಿ' },
  { id: 'uttara-kannada', name: 'Uttara Kannada', nameKn: 'ಉತ್ತರ ಕನ್ನಡ', division: 'Coastal & Malnad', hq: 'Karwar', hqKn: 'ಕಾರವಾರ' },

  // Kittur Karnataka (Belagavi Division)
  { id: 'belagavi', name: 'Belagavi', nameKn: 'ಬೆಳಗಾವಿ', division: 'Kittur Karnataka', hq: 'Belagavi', hqKn: 'ಬೆಳಗಾವಿ' },
  { id: 'dharwad', name: 'Dharwad', nameKn: 'ಧಾರವಾಡ', division: 'Kittur Karnataka', hq: 'Dharwad / Hubballi', hqKn: 'ಹುಬ್ಬಳ್ಳಿ - ಧಾರವಾಡ' },
  { id: 'bagalkote', name: 'Bagalkote', nameKn: 'ಬಾಗಲಕೋಟೆ', division: 'Kittur Karnataka', hq: 'Bagalkote', hqKn: 'ಬಾಗಲಕೋಟೆ' },
  { id: 'vijayapura', name: 'Vijayapura (Bijapur)', nameKn: 'ವಿಜಯಪುರ', division: 'Kittur Karnataka', hq: 'Vijayapura', hqKn: 'ವಿಜಯಪುರ' },
  { id: 'gadag', name: 'Gadag', nameKn: 'ಗದಗ', division: 'Kittur Karnataka', hq: 'Gadag', hqKn: 'ಗದಗ' },
  { id: 'haveri', name: 'Haveri', nameKn: 'ಹಾವೇರಿ', division: 'Kittur Karnataka', hq: 'Haveri', hqKn: 'ಹಾವೇರಿ' },

  // Kalyana Karnataka (Kalaburagi Division)
  { id: 'kalaburagi', name: 'Kalaburagi (Gulbarga)', nameKn: 'ಕಲಬುರಗಿ', division: 'Kalyana Karnataka', hq: 'Kalaburagi', hqKn: 'ಕಲಬುರಗಿ' },
  { id: 'ballari', name: 'Ballari (Bellary)', nameKn: 'ಬಳ್ಳಾರಿ', division: 'Kalyana Karnataka', hq: 'Ballari', hqKn: 'ಬಳ್ಳಾರಿ' },
  { id: 'vijayanagara', name: 'Vijayanagara', nameKn: 'ವಿಜಯನಗರ', division: 'Kalyana Karnataka', hq: 'Hosapete', hqKn: 'ಹೊಸಪೇಟೆ' },
  { id: 'bidar', name: 'Bidar', nameKn: 'ಬೀದರ್', division: 'Kalyana Karnataka', hq: 'Bidar', hqKn: 'ಬೀದರ್' },
  { id: 'raichur', name: 'Raichur', nameKn: 'ರಾಯಚೂರು', division: 'Kalyana Karnataka', hq: 'Raichur', hqKn: 'ರಾಯಚೂರು' },
  { id: 'koppal', name: 'Koppal', nameKn: 'ಕೊಪ್ಪಳ', division: 'Kalyana Karnataka', hq: 'Koppal', hqKn: 'ಕೊಪ್ಪಳ' },
  { id: 'yadgir', name: 'Yadgir', nameKn: 'ಯಾದಗಿರಿ', division: 'Kalyana Karnataka', hq: 'Yadgir', hqKn: 'ಯಾದಗಿರಿ' },
];

export const ALL_KARNATAKA_PLACES: KarnatakaPlace[] = [
  // 1. Bengaluru Urban & Hubs
  { id: 'bengaluru', name: 'Bengaluru', nameKn: 'ಬೆಂಗಳೂರು', district: 'Bengaluru Urban', districtKn: 'ಬೆಂಗಳೂರು ನಗರ', division: 'Bengaluru', category: 'District Capital', busStandName: 'Kempegowda Bus Station (Majestic)', busStandNameKn: 'ಕೆಂಪೇಗೌಡ ಬಸ್ ನಿಲ್ದಾಣ (ಮೆಜೆಸ್ಟಿಕ್)', lat: 12.9784, lng: 77.5726, popular: true },
  { id: 'blr-airport', name: 'Bengaluru Airport (KIA)', nameKn: 'ಕೆಂಪೇಗೌಡ ಅಂತಾರಾಷ್ಟ್ರೀಯ ವಿಮಾನ ನಿಲ್ದಾಣ', district: 'Bengaluru Urban', districtKn: 'ಬೆಂಗಳೂರು ನಗರ', division: 'Bengaluru', category: 'Major Commercial Hub', busStandName: 'KIA Terminal 1 & 2 Flybus Bay', busStandNameKn: 'ವಿಮಾನ ನಿಲ್ದಾಣ ಫ್ಲೈಬಸ್ ಬೇ', lat: 13.1986, lng: 77.7066, popular: true },
  { id: 'kengeri', name: 'Kengeri', nameKn: 'ಕೆಂಗೇರಿ', district: 'Bengaluru Urban', districtKn: 'ಬೆಂಗಳೂರು ನಗರ', division: 'Bengaluru', category: 'Major Commercial Hub', busStandName: 'Kengeri TTMC Terminal', busStandNameKn: 'ಕೆಂಗೇರಿ ಟಿಟಿಎಂಸಿ ಟರ್ಮಿನಲ್', lat: 12.9176, lng: 77.4839 },
  { id: 'shantinagar', name: 'Shantinagar (Bengaluru)', nameKn: 'ಶಾಂತಿನಗರ', district: 'Bengaluru Urban', districtKn: 'ಬೆಂಗಳೂರು ನಗರ', division: 'Bengaluru', category: 'Major Commercial Hub', busStandName: 'Shantinagar TTMC Concourse', busStandNameKn: 'ಶಾಂತಿನಗರ ಟಿಟಿಎಂಸಿ', lat: 12.9545, lng: 77.5950 },
  { id: 'satellite-mctc', name: 'Satellite Mysore Road (MCTC)', nameKn: 'ಮೈಸೂರು ರಸ್ತೆ ಸ್ಯಾಟಲೈಟ್ ನಿಲ್ದಾಣ', district: 'Bengaluru Urban', districtKn: 'ಬೆಂಗಳೂರು ನಗರ', division: 'Bengaluru', category: 'Major Commercial Hub', busStandName: 'Mysore Road Satellite Bus Station', busStandNameKn: 'ಸ್ಯಾಟಲೈಟ್ ಬಸ್ ನಿಲ್ದಾಣ', lat: 12.9554, lng: 77.5348 },

  // 2. Bengaluru Rural
  { id: 'nelamangala', name: 'Nelamangala', nameKn: 'ನೆಲಮಂಗಲ', district: 'Bengaluru Rural', districtKn: 'ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ', division: 'Bengaluru', category: 'Taluk Headquarters', busStandName: 'Nelamangala KSRTC Toll Bus Stand', busStandNameKn: 'ನೆಲಮಂಗಲ ಕೆಎಸ್ಆರ್‌ಟಿಸಿ ನಿಲ್ದಾಣ', lat: 13.0970, lng: 77.3918 },
  { id: 'devanahalli', name: 'Devanahalli', nameKn: 'ದೇವನಹಳ್ಳಿ', district: 'Bengaluru Rural', districtKn: 'ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ', division: 'Bengaluru', category: 'Taluk Headquarters', busStandName: 'Devanahalli KSRTC Stand', busStandNameKn: 'ದೇವನಹಳ್ಳಿ ಬಸ್ ನಿಲ್ದಾಣ', lat: 13.2484, lng: 77.7126 },
  { id: 'doddaballapura', name: 'Doddaballapura', nameKn: 'ದೊಡ್ಡಬಳ್ಳಾಪುರ', district: 'Bengaluru Rural', districtKn: 'ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ', division: 'Bengaluru', category: 'Taluk Headquarters', busStandName: 'Doddaballapura KSRTC Depot Stand', busStandNameKn: 'ದೊಡ್ಡಬಳ್ಳಾಪುರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 13.2929, lng: 77.5430 },
  { id: 'hoskote', name: 'Hoskote', nameKn: 'ಹೊಸಕೋಟೆ', district: 'Bengaluru Rural', districtKn: 'ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ', division: 'Bengaluru', category: 'Taluk Headquarters', busStandName: 'Hoskote KSRTC Stand', busStandNameKn: 'ಹೊಸಕೋಟೆ ಬಸ್ ನಿಲ್ದಾಣ', lat: 13.0694, lng: 77.7981 },

  // 3. Ramanagara
  { id: 'ramanagara', name: 'Ramanagara', nameKn: 'ರಾಮನಗರ', district: 'Ramanagara', districtKn: 'ರಾಮನಗರ', division: 'Bengaluru', category: 'District Capital', busStandName: 'Ramanagara New Central Bus Stand', busStandNameKn: 'ರಾಮನಗರ ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 12.7214, lng: 77.2798, popular: true },
  { id: 'channapatna', name: 'Channapatna', nameKn: 'ಚನ್ನಪಟ್ಟಣ', district: 'Ramanagara', districtKn: 'ರಾಮನಗರ', division: 'Bengaluru', category: 'Taluk Headquarters', busStandName: 'Channapatna Toy City Bus Stand', busStandNameKn: 'ಚನ್ನಪಟ್ಟಣ ಬಸ್ ನಿಲ್ದಾಣ', lat: 12.6518, lng: 77.2089 },
  { id: 'kanakapura', name: 'Kanakapura', nameKn: 'ಕನಕಪುರ', district: 'Ramanagara', districtKn: 'ರಾಮನಗರ', division: 'Bengaluru', category: 'Taluk Headquarters', busStandName: 'Kanakapura KSRTC Bus Stand', busStandNameKn: 'ಕನಕಪುರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 12.5461, lng: 77.4199 },
  { id: 'magadi', name: 'Magadi', nameKn: 'ಮಾಗಡಿ', district: 'Ramanagara', districtKn: 'ರಾಮನಗರ', division: 'Bengaluru', category: 'Taluk Headquarters', busStandName: 'Magadi Kempegowda Bus Stand', busStandNameKn: 'ಮಾಗಡಿ ಬಸ್ ನಿಲ್ದಾಣ', lat: 12.9575, lng: 77.2289 },
  { id: 'bidadi', name: 'Bidadi', nameKn: 'ಬಿದದಿ', district: 'Ramanagara', districtKn: 'ರಾಮನಗರ', division: 'Bengaluru', category: 'Major Commercial Hub', busStandName: 'Bidadi Smart Industrial Bus Stop', busStandNameKn: 'ಬಿದದಿ ಬಸ್ ನಿಲ್ದಾಣ', lat: 12.8001, lng: 77.3871 },

  // 4. Mysuru
  { id: 'mysuru', name: 'Mysuru', nameKn: 'ಮೈಸೂರು', district: 'Mysuru', districtKn: 'ಮೈಸೂರು', division: 'Mysuru', category: 'District Capital', busStandName: 'Mysuru Suburban Central Bus Stand', busStandNameKn: 'ಮೈಸೂರು ಉಪನಗರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 12.3088, lng: 76.6574, popular: true },
  { id: 'nanjangud', name: 'Nanjangud', nameKn: 'ನಂಜನಗೂಡು', district: 'Mysuru', districtKn: 'ಮೈಸೂರು', division: 'Mysuru', category: 'Pilgrimage & Heritage', busStandName: 'Nanjangud Srikanteshwara Bus Stand', busStandNameKn: 'ನಂಜನಗೂಡು ಬಸ್ ನಿಲ್ದಾಣ', lat: 12.1197, lng: 76.6806 },
  { id: 'hunsur', name: 'Hunsur', nameKn: 'ಹುಣಸೂರು', district: 'Mysuru', districtKn: 'ಮೈಸೂರು', division: 'Mysuru', category: 'Taluk Headquarters', busStandName: 'Hunsur Central KSRTC Bus Stand', busStandNameKn: 'ಹುಣಸೂರು ಬಸ್ ನಿಲ್ದಾಣ', lat: 12.3090, lng: 76.2891 },
  { id: 'periyapatna', name: 'Periyapatna', nameKn: 'ಪಿರಿಯಾಪಟ್ಟಣ', district: 'Mysuru', districtKn: 'ಮೈಸೂರು', division: 'Mysuru', category: 'Taluk Headquarters', busStandName: 'Periyapatna KSRTC Bus Stand', busStandNameKn: 'ಪಿರಿಯಾಪಟ್ಟಣ ಬಸ್ ನಿಲ್ದಾಣ', lat: 12.3400, lng: 76.0964 },
  { id: 'kr-nagar', name: 'KR Nagar', nameKn: 'ಕೃಷ್ಣರಾಜನಗರ', district: 'Mysuru', districtKn: 'ಮೈಸೂರು', division: 'Mysuru', category: 'Taluk Headquarters', busStandName: 'KR Nagar Bus Stand', busStandNameKn: 'ಕೆ.ಆರ್. ನಗರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 12.4419, lng: 76.3860 },
  { id: 't-narasipura', name: 'T Narasipura', nameKn: 'ಟಿ. ನರಸೀಪುರ', district: 'Mysuru', districtKn: 'ಮೈಸೂರು', division: 'Mysuru', category: 'Pilgrimage & Heritage', busStandName: 'T. Narasipura Triveni Sangama Stand', busStandNameKn: 'ಟಿ. ನರಸೀಪುರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 12.2127, lng: 76.9038 },
  { id: 'hd-kote', name: 'HD Kote', nameKn: 'ಹೆಚ್.ಡಿ. ಕೋಟೆ', district: 'Mysuru', districtKn: 'ಮೈಸೂರು', division: 'Mysuru', category: 'Taluk Headquarters', busStandName: 'Heggadadevankote Bus Stand', busStandNameKn: 'ಹೆಚ್.ಡಿ. ಕೋಟೆ ಬಸ್ ನಿಲ್ದಾಣ', lat: 11.9686, lng: 76.3312 },

  // 5. Mandya
  { id: 'mandya', name: 'Mandya', nameKn: 'ಮಂಡ್ಯ', district: 'Mandya', districtKn: 'ಮಂಡ್ಯ', division: 'Mysuru', category: 'District Capital', busStandName: 'Mandya Central KSRTC Bus Stand', busStandNameKn: 'ಮಂಡ್ಯ ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 12.5242, lng: 76.8958, popular: true },
  { id: 'maddur', name: 'Maddur', nameKn: 'ಮದ್ದೂರು', district: 'Mandya', districtKn: 'ಮಂಡ್ಯ', division: 'Mysuru', category: 'Taluk Headquarters', busStandName: 'Maddur Highway Bus Stand', busStandNameKn: 'ಮದ್ದೂರು ಬಸ್ ನಿಲ್ದಾಣ', lat: 12.5843, lng: 77.0456 },
  { id: 'srirangapatna', name: 'Srirangapatna', nameKn: 'ಶ್ರೀರಂಗಪಟ್ಟಣ', district: 'Mandya', districtKn: 'ಮಂಡ್ಯ', division: 'Mysuru', category: 'Pilgrimage & Heritage', busStandName: 'Srirangapatna Fort Bus Stand', busStandNameKn: 'ಶ್ರೀರಂಗಪಟ್ಟಣ ಬಸ್ ನಿಲ್ದಾಣ', lat: 12.4237, lng: 76.6953 },
  { id: 'malavalli', name: 'Malavalli', nameKn: 'ಮಳವಳ್ಳಿ', district: 'Mandya', districtKn: 'ಮಂಡ್ಯ', division: 'Mysuru', category: 'Taluk Headquarters', busStandName: 'Malavalli KSRTC Stand', busStandNameKn: 'ಮಳವಳ್ಳಿ ಬಸ್ ನಿಲ್ದಾಣ', lat: 12.3857, lng: 77.0583 },
  { id: 'nagamangala', name: 'Nagamangala', nameKn: 'ನಾಗಮಂಗಲ', district: 'Mandya', districtKn: 'ಮಂಡ್ಯ', division: 'Mysuru', category: 'Taluk Headquarters', busStandName: 'Nagamangala KSRTC Stand', busStandNameKn: 'ನಾಗಮಂಗಲ ಬಸ್ ನಿಲ್ದಾಣ', lat: 12.8203, lng: 76.7583 },
  { id: 'pandavapura', name: 'Pandavapura', nameKn: 'ಪಾಂಡವಪುರ', district: 'Mandya', districtKn: 'ಮಂಡ್ಯ', division: 'Mysuru', category: 'Taluk Headquarters', busStandName: 'Pandavapura Bus Stand', busStandNameKn: 'ಪಾಂಡವಪುರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 12.4960, lng: 76.6710 },
  { id: 'kr-pete', name: 'KR Pete', nameKn: 'ಕೆ.ಆರ್. ಪೇಟೆ', district: 'Mandya', districtKn: 'ಮಂಡ್ಯ', division: 'Mysuru', category: 'Taluk Headquarters', busStandName: 'Krishnarajpete Bus Stand', busStandNameKn: 'ಕೆ.ಆರ್. ಪೇಟೆ ಬಸ್ ನಿಲ್ದಾಣ', lat: 12.6586, lng: 76.4914 },

  // 6. Chamarajanagar
  { id: 'chamarajanagar', name: 'Chamarajanagar', nameKn: 'ಚಾಮರಾಜನಗರ', district: 'Chamarajanagar', districtKn: 'ಚಾಮರಾಜನಗರ', division: 'Mysuru', category: 'District Capital', busStandName: 'Chamarajanagar Central Bus Stand', busStandNameKn: 'ಚಾಮರಾಜನಗರ ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 11.9261, lng: 76.9437, popular: true },
  { id: 'kollegal', name: 'Kollegal', nameKn: 'ಕೊಳ್ಳೇಗಾಲ', district: 'Chamarajanagar', districtKn: 'ಚಾಮರಾಜನಗರ', division: 'Mysuru', category: 'Taluk Headquarters', busStandName: 'Kollegal Silk City Bus Stand', busStandNameKn: 'ಕೊಳ್ಳೇಗಾಲ ಬಸ್ ನಿಲ್ದಾಣ', lat: 12.1554, lng: 77.1189 },
  { id: 'gundlupet', name: 'Gundlupet', nameKn: 'ಗುಂಡ್ಲುಪೇಟೆ', district: 'Chamarajanagar', districtKn: 'ಚಾಮರಾಜನಗರ', division: 'Mysuru', category: 'Taluk Headquarters', busStandName: 'Gundlupet Gateway Stand', busStandNameKn: 'ಗುಂಡ್ಲುಪೇಟೆ ಬಸ್ ನಿಲ್ದಾಣ', lat: 11.8080, lng: 76.6894 },
  { id: 'mm-hills', name: 'Male Mahadeshwara Hills (MM Hills)', nameKn: 'ಮಲೆ ಮಹದೇಶ್ವರ ಬೆಟ್ಟ', district: 'Chamarajanagar', districtKn: 'ಚಾಮರಾಜನಗರ', division: 'Mysuru', category: 'Pilgrimage & Heritage', busStandName: 'MM Hills Hilltop Bus Stand', busStandNameKn: 'ಎಂ.ಎಂ. ಹಿಲ್ಸ್ ಬಸ್ ನಿಲ್ದಾಣ', lat: 11.9960, lng: 77.5620, popular: true },
  { id: 'bandipur', name: 'Bandipur', nameKn: 'ಬಂಡೀಪುರ', district: 'Chamarajanagar', districtKn: 'ಚಾಮರಾಜನಗರ', division: 'Mysuru', category: 'Hill Station & Nature', busStandName: 'Bandipur National Park Gate', busStandNameKn: 'ಬಂಡೀಪುರ ಸಫಾರಿ ಗೇಟ್', lat: 11.6667, lng: 76.6333 },

  // 7. Hassan
  { id: 'hassan', name: 'Hassan', nameKn: 'ಹಾಸನ', district: 'Hassan', districtKn: 'ಹಾಸನ', division: 'Mysuru', category: 'District Capital', busStandName: 'Hassan New Central Bus Stand', busStandNameKn: 'ಹಾಸನ ಹೊಸ ಬಸ್ ನಿಲ್ದಾಣ', lat: 13.0033, lng: 76.1004, popular: true },
  { id: 'sakleshpur', name: 'Sakleshpur', nameKn: 'ಸಕಲೇಶಪುರ', district: 'Hassan', districtKn: 'ಹಾಸನ', division: 'Mysuru', category: 'Hill Station & Nature', busStandName: 'Sakleshpur Ghat Bus Stand', busStandNameKn: 'ಸಕಲೇಶಪುರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 12.9439, lng: 75.7876, popular: true },
  { id: 'belur', name: 'Belur', nameKn: 'ಬೇಲೂರು', district: 'Hassan', districtKn: 'ಹಾಸನ', division: 'Mysuru', category: 'Pilgrimage & Heritage', busStandName: 'Belur Chennakeshavaswamy Stand', busStandNameKn: 'ಬೇಲೂರು ಬಸ್ ನಿಲ್ದಾಣ', lat: 13.1633, lng: 75.8647, popular: true },
  { id: 'halebidu', name: 'Halebidu', nameKn: 'ಹಳೇಬೀಡು', district: 'Hassan', districtKn: 'ಹಾಸನ', division: 'Mysuru', category: 'Pilgrimage & Heritage', busStandName: 'Halebidu Hoysaleshwara Stand', busStandNameKn: 'ಹಳೇಬೀಡು ಬಸ್ ನಿಲ್ದಾಣ', lat: 13.2185, lng: 75.9922 },
  { id: 'channarayapatna', name: 'Channarayapatna', nameKn: 'ಚನ್ನರಾಯಪಟ್ಟಣ', district: 'Hassan', districtKn: 'ಹಾಸನ', division: 'Mysuru', category: 'Taluk Headquarters', busStandName: 'Channarayapatna KSRTC Stand', busStandNameKn: 'ಚನ್ನರಾಯಪಟ್ಟಣ ಬಸ್ ನಿಲ್ದಾಣ', lat: 12.9056, lng: 76.3934 },
  { id: 'shravanabelagola', name: 'Shravanabelagola', nameKn: 'ಶ್ರವಣಬೆಳಗೊಳ', district: 'Hassan', districtKn: 'ಹಾಸನ', division: 'Mysuru', category: 'Pilgrimage & Heritage', busStandName: 'Shravanabelagola Gommateshwara Stand', busStandNameKn: 'ಶ್ರವಣಬೆಳಗೊಳ ಬಸ್ ನಿಲ್ದಾಣ', lat: 12.8580, lng: 76.4862, popular: true },
  { id: 'arsikere', name: 'Arsikere', nameKn: 'ಅರಸೀಕೆರೆ', district: 'Hassan', districtKn: 'ಹಾಸನ', division: 'Mysuru', category: 'Taluk Headquarters', busStandName: 'Arsikere Central Junction Stand', busStandNameKn: 'ಅರಸೀಕೆರೆ ಬಸ್ ನಿಲ್ದಾಣ', lat: 13.3138, lng: 76.2570 },
  { id: 'holonarasipura', name: 'Holenarasipura', nameKn: 'ಹೊಳೆನರಸೀಪುರ', district: 'Hassan', districtKn: 'ಹಾಸನ', division: 'Mysuru', category: 'Taluk Headquarters', busStandName: 'Holenarasipura KSRTC Stand', busStandNameKn: 'ಹೊಳೆನರಸೀಪುರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 12.7915, lng: 76.2415 },

  // 8. Kodagu (Coorg)
  { id: 'madikeri', name: 'Madikeri', nameKn: 'ಮಡಿಕೇರಿ', district: 'Kodagu (Coorg)', districtKn: 'ಕೊಡಗು', division: 'Mysuru', category: 'District Capital', busStandName: 'Madikeri Hill Central Bus Stand', busStandNameKn: 'ಮಡಿಕೇರಿ ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 12.4244, lng: 75.7382, popular: true },
  { id: 'kushalnagar', name: 'Kushalnagar', nameKn: 'ಕುಶಾಲನಗರ', district: 'Kodagu (Coorg)', districtKn: 'ಕೊಡಗು', division: 'Mysuru', category: 'Taluk Headquarters', busStandName: 'Kushalnagar KSRTC Stand', busStandNameKn: 'ಕುಶಾಲನಗರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 12.4568, lng: 75.9592, popular: true },
  { id: 'virajpet', name: 'Virajpet', nameKn: 'ವಿರಾಜಪೇಟೆ', district: 'Kodagu (Coorg)', districtKn: 'ಕೊಡಗು', division: 'Mysuru', category: 'Taluk Headquarters', busStandName: 'Virajpet Clock Tower Bus Stand', busStandNameKn: 'ವಿರಾಜಪೇಟೆ ಬಸ್ ನಿಲ್ದಾಣ', lat: 12.2025, lng: 75.8037 },
  { id: 'somwarpet', name: 'Somwarpet', nameKn: 'ಸೋಮವಾರಪೇಟೆ', district: 'Kodagu (Coorg)', districtKn: 'ಕೊಡಗು', division: 'Mysuru', category: 'Taluk Headquarters', busStandName: 'Somwarpet Bus Stand', busStandNameKn: 'ಸೋಮವಾರಪೇಟೆ ಬಸ್ ನಿಲ್ದಾಣ', lat: 12.5975, lng: 75.8647 },
  { id: 'gonikoppal', name: 'Gonikoppal', nameKn: 'ಗೋಣಿಕೊಪ್ಪ', district: 'Kodagu (Coorg)', districtKn: 'ಕೊಡಗು', division: 'Mysuru', category: 'Major Commercial Hub', busStandName: 'Gonikoppal South Coorg Stand', busStandNameKn: 'ಗೋಣಿಕೊಪ್ಪ ಬಸ್ ನಿಲ್ದಾಣ', lat: 12.1864, lng: 75.9328 },
  { id: 'talakaveri', name: 'Talakaveri / Bhagamandala', nameKn: 'ತಲಕಾವೇರಿ / ಭಾಗಮಂಡಲ', district: 'Kodagu (Coorg)', districtKn: 'ಕೊಡಗು', division: 'Mysuru', category: 'Pilgrimage & Heritage', busStandName: 'Bhagamandala Sangama Bus Stand', busStandNameKn: 'ಭಾಗಮಂಡಲ ಬಸ್ ನಿಲ್ದಾಣ', lat: 12.3917, lng: 75.5292 },

  // 9. Chikkamagaluru
  { id: 'chikkamagaluru', name: 'Chikkamagaluru', nameKn: 'ಚಿಕ್ಕಮಗಳೂರು', district: 'Chikkamagaluru', districtKn: 'ಚಿಕ್ಕಮಗಳೂರು', division: 'Mysuru', category: 'District Capital', busStandName: 'Chikkamagaluru KSRTC Central Stand', busStandNameKn: 'ಚಿಕ್ಕಮಗಳೂರು ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 13.3161, lng: 75.7720, popular: true },
  { id: 'sringeri', name: 'Sringeri', nameKn: 'ಶೃಂಗೇರಿ', district: 'Chikkamagaluru', districtKn: 'ಚಿಕ್ಕಮಗಳೂರು', division: 'Mysuru', category: 'Pilgrimage & Heritage', busStandName: 'Sringeri Sharada Peetham Stand', busStandNameKn: 'ಶೃಂಗೇರಿ ಶಾರದಾ ಪೀಠ ಬಸ್ ನಿಲ್ದಾಣ', lat: 13.4184, lng: 75.2536, popular: true },
  { id: 'horanadu', name: 'Horanadu', nameKn: 'ಹೊರನಾಡು', district: 'Chikkamagaluru', districtKn: 'ಚಿಕ್ಕಮಗಳೂರು', division: 'Mysuru', category: 'Pilgrimage & Heritage', busStandName: 'Horanadu Annapoorneshwari Stand', busStandNameKn: 'ಹೊರನಾಡು ಅನ್ನಪೂರ್ಣೇಶ್ವರಿ ನಿಲ್ದಾಣ', lat: 13.2758, lng: 75.3421, popular: true },
  { id: 'mudigere', name: 'Mudigere', nameKn: 'ಮೂಡಿಗೆರೆ', district: 'Chikkamagaluru', districtKn: 'ಚಿಕ್ಕಮಗಳೂರು', division: 'Mysuru', category: 'Taluk Headquarters', busStandName: 'Mudigere Bus Stand', busStandNameKn: 'ಮೂಡಿಗೆರೆ ಬಸ್ ನಿಲ್ದಾಣ', lat: 13.1367, lng: 75.6428 },
  { id: 'tarikere', name: 'Tarikere', nameKn: 'ತರೀಕೆರೆ', district: 'Chikkamagaluru', districtKn: 'ಚಿಕ್ಕಮಗಳೂರು', division: 'Mysuru', category: 'Taluk Headquarters', busStandName: 'Tarikere KSRTC Stand', busStandNameKn: 'ತರೀಕೆರೆ ಬಸ್ ನಿಲ್ದಾಣ', lat: 13.7144, lng: 75.8156 },
  { id: 'kadur', name: 'Kadur', nameKn: 'ಕಡೂರು', district: 'Chikkamagaluru', districtKn: 'ಚಿಕ್ಕಮಗಳೂರು', division: 'Mysuru', category: 'Taluk Headquarters', busStandName: 'Kadur Junction Bus Stand', busStandNameKn: 'ಕಡೂರು ಬಸ್ ನಿಲ್ದಾಣ', lat: 13.5544, lng: 76.0125 },
  { id: 'kudremukh', name: 'Kudremukh', nameKn: 'ಕುದುರೆಮುಖ', district: 'Chikkamagaluru', districtKn: 'ಚಿಕ್ಕಮಗಳೂರು', division: 'Mysuru', category: 'Hill Station & Nature', busStandName: 'Kudremukh Forest Colony Stand', busStandNameKn: 'ಕುದುರೆಮುಖ ಬಸ್ ನಿಲ್ದಾಣ', lat: 13.2189, lng: 75.2550 },

  // 10. Dakshina Kannada
  { id: 'mangaluru', name: 'Mangaluru', nameKn: 'ಮಂಗಳೂರು', district: 'Dakshina Kannada', districtKn: 'ದಕ್ಷಿಣ ಕನ್ನಡ', division: 'Coastal & Malnad', category: 'District Capital', busStandName: 'KSRTC Bejai Terminal, Mangaluru', busStandNameKn: 'ಮಂಗಳೂರು ಕೆಎಸ್‌ಆರ್‌ಟಿಸಿ ಬಿಜೈ ಟರ್ಮಿನಲ್', lat: 12.8858, lng: 74.8465, popular: true },
  { id: 'dharmasthala', name: 'Dharmasthala', nameKn: 'ಧರ್ಮಸ್ಥಳ', district: 'Dakshina Kannada', districtKn: 'ದಕ್ಷಿಣ ಕನ್ನಡ', division: 'Coastal & Malnad', category: 'Pilgrimage & Heritage', busStandName: 'Dharmasthala Manjunatha Kshetra Stand', busStandNameKn: 'ಧರ್ಮಸ್ಥಳ ಬಸ್ ನಿಲ್ದಾಣ', lat: 12.9555, lng: 75.3811, popular: true },
  { id: 'subramanya', name: 'Kukke Subramanya', nameKn: 'ಕುಕ್ಕೆ ಸುಬ್ರಹ್ಮಣ್ಯ', district: 'Dakshina Kannada', districtKn: 'ದಕ್ಷಿಣ ಕನ್ನಡ', division: 'Coastal & Malnad', category: 'Pilgrimage & Heritage', busStandName: 'Kukke Subramanya Temple Stand', busStandNameKn: 'ಕುಕ್ಕೆ ಸುಬ್ರಹ್ಮಣ್ಯ ಬಸ್ ನಿಲ್ದಾಣ', lat: 12.6631, lng: 75.6175, popular: true },
  { id: 'puttur', name: 'Puttur', nameKn: 'ಪುತ್ತೂರು', district: 'Dakshina Kannada', districtKn: 'ದಕ್ಷಿಣ ಕನ್ನಡ', division: 'Coastal & Malnad', category: 'Taluk Headquarters', busStandName: 'Puttur Mahalingeshwara Stand', busStandNameKn: 'ಪುತ್ತೂರು ಬಸ್ ನಿಲ್ದಾಣ', lat: 12.7667, lng: 75.2000 },
  { id: 'bantwal', name: 'Bantwal / BC Road', nameKn: 'ಬಂಟ್ವಾಳ / ಬಿ.ಸಿ. ರೋಡ್', district: 'Dakshina Kannada', districtKn: 'ದಕ್ಷಿಣ ಕನ್ನಡ', division: 'Coastal & Malnad', category: 'Taluk Headquarters', busStandName: 'BC Road Kaikamba Terminal', busStandNameKn: 'ಬಿ.ಸಿ. ರೋಡ್ ಬಸ್ ನಿಲ್ದಾಣ', lat: 12.8791, lng: 75.0347 },
  { id: 'sullia', name: 'Sullia', nameKn: 'ಸುಳ್ಯ', district: 'Dakshina Kannada', districtKn: 'ದಕ್ಷಿಣ ಕನ್ನಡ', division: 'Coastal & Malnad', category: 'Taluk Headquarters', busStandName: 'Sullia KSRTC Bus Stand', busStandNameKn: 'ಸುಳ್ಯ ಬಸ್ ನಿಲ್ದಾಣ', lat: 12.5606, lng: 75.3900 },
  { id: 'moodabidri', name: 'Moodabidri', nameKn: 'ಮೂಡುಬಿದಿರೆ', district: 'Dakshina Kannada', districtKn: 'ದಕ್ಷಿಣ ಕನ್ನಡ', division: 'Coastal & Malnad', category: 'Pilgrimage & Heritage', busStandName: 'Moodabidri Jain Kashi Stand', busStandNameKn: 'ಮೂಡುಬಿದಿರೆ ಬಸ್ ನಿಲ್ದಾಣ', lat: 13.0694, lng: 74.9961 },
  { id: 'belthangady', name: 'Belthangady', nameKn: 'ಬೆಳ್ತಂಗಡಿ', district: 'Dakshina Kannada', districtKn: 'ದಕ್ಷಿಣ ಕನ್ನಡ', division: 'Coastal & Malnad', category: 'Taluk Headquarters', busStandName: 'Belthangady KSRTC Stand', busStandNameKn: 'ಬೆಳ್ತಂಗಡಿ ಬಸ್ ನಿಲ್ದಾಣ', lat: 13.0031, lng: 75.2536 },

  // 11. Udupi
  { id: 'udupi', name: 'Udupi', nameKn: 'ಉಡುಪಿ', district: 'Udupi', districtKn: 'ಉಡುಪಿ', division: 'Coastal & Malnad', category: 'District Capital', busStandName: 'Udupi Service & KSRTC Stand', busStandNameKn: 'ಉಡುಪಿ ಬಸ್ ನಿಲ್ದಾಣ', lat: 13.3409, lng: 74.7421, popular: true },
  { id: 'manipal', name: 'Manipal', nameKn: 'ಮಣಿಪಾಲ', district: 'Udupi', districtKn: 'ಉಡುಪಿ', division: 'Coastal & Malnad', category: 'Major Commercial Hub', busStandName: 'Manipal University Tiger Circle', busStandNameKn: 'ಮಣಿಪಾಲ ಟೈಗರ್ ಸರ್ಕಲ್', lat: 13.3525, lng: 74.7928, popular: true },
  { id: 'kundapura', name: 'Kundapura', nameKn: 'ಕುಂದಾಪುರ', district: 'Udupi', districtKn: 'ಉಡುಪಿ', division: 'Coastal & Malnad', category: 'Taluk Headquarters', busStandName: 'Kundapura Shastri Circle KSRTC Stand', busStandNameKn: 'ಕುಂದಾಪುರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 13.6264, lng: 74.6931, popular: true },
  { id: 'kollur', name: 'Kollur Mookambika', nameKn: 'ಕೊಲ್ಲೂರು ಮೂಕಾಂಬಿಕಾ', district: 'Udupi', districtKn: 'ಉಡುಪಿ', division: 'Coastal & Malnad', category: 'Pilgrimage & Heritage', busStandName: 'Kollur Mookambika Temple Stand', busStandNameKn: 'ಕೊಲ್ಲೂರು ಬಸ್ ನಿಲ್ದಾಣ', lat: 13.8647, lng: 74.9789, popular: true },
  { id: 'karkala', name: 'Karkala', nameKn: 'ಕಾರ್ಕಳ', district: 'Udupi', districtKn: 'ಉಡುಪಿ', division: 'Coastal & Malnad', category: 'Pilgrimage & Heritage', busStandName: 'Karkala Gommateshwara Stand', busStandNameKn: 'ಕಾರ್ಕಳ ಬಸ್ ನಿಲ್ದಾಣ', lat: 13.2128, lng: 74.9961 },
  { id: 'byndoor', name: 'Byndoor', nameKn: 'ಬೈಂದೂರು', district: 'Udupi', districtKn: 'ಉಡುಪಿ', division: 'Coastal & Malnad', category: 'Taluk Headquarters', busStandName: 'Byndoor Coastal Bus Stand', busStandNameKn: 'ಬೈಂದೂರು ಬಸ್ ನಿಲ್ದಾಣ', lat: 13.8697, lng: 74.6300 },
  { id: 'malpe', name: 'Malpe Beach', nameKn: 'ಮಲ್ಪೆ', district: 'Udupi', districtKn: 'ಉಡುಪಿ', division: 'Coastal & Malnad', category: 'Hill Station & Nature', busStandName: 'Malpe Port Bus Stand', busStandNameKn: 'ಮಲ್ಪೆ ಬಂದರು ನಿಲ್ದಾಣ', lat: 13.3583, lng: 74.7042 },

  // 12. Uttara Kannada
  { id: 'karwar', name: 'Karwar', nameKn: 'ಕಾರವಾರ', district: 'Uttara Kannada', districtKn: 'ಉತ್ತರ ಕನ್ನಡ', division: 'Coastal & Malnad', category: 'District Capital', busStandName: 'Karwar Seaside Central Bus Stand', busStandNameKn: 'ಕಾರವಾರ ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 14.8136, lng: 74.1297, popular: true },
  { id: 'gokarna', name: 'Gokarna', nameKn: 'ಗೋಕರ್ಣ', district: 'Uttara Kannada', districtKn: 'ಉತ್ತರ ಕನ್ನಡ', division: 'Coastal & Malnad', category: 'Pilgrimage & Heritage', busStandName: 'Gokarna Mahabaleshwara Stand', busStandNameKn: 'ಗೋಕರ್ಣ ಬಸ್ ನಿಲ್ದಾಣ', lat: 14.5479, lng: 74.3188, popular: true },
  { id: 'murudeshwara', name: 'Murudeshwara', nameKn: 'ಮುರುಡೇಶ್ವರ', district: 'Uttara Kannada', districtKn: 'ಉತ್ತರ ಕನ್ನಡ', division: 'Coastal & Malnad', category: 'Pilgrimage & Heritage', busStandName: 'Murudeshwara Shiva Temple Stand', busStandNameKn: 'ಮುರುಡೇಶ್ವರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 14.0940, lng: 74.4899, popular: true },
  { id: 'sirsi', name: 'Sirsi', nameKn: 'ಶಿರಸಿ', district: 'Uttara Kannada', districtKn: 'ಉತ್ತರ ಕನ್ನಡ', division: 'Coastal & Malnad', category: 'Taluk Headquarters', busStandName: 'Sirsi Marikamba KSRTC Stand', busStandNameKn: 'ಶಿರಸಿ ಮಾರಿಕಾಂಬಾ ಬಸ್ ನಿಲ್ದಾಣ', lat: 14.6196, lng: 74.8354, popular: true },
  { id: 'bhatkal', name: 'Bhatkal', nameKn: 'ಭಟ್ಕಳ', district: 'Uttara Kannada', districtKn: 'ಉತ್ತರ ಕನ್ನಡ', division: 'Coastal & Malnad', category: 'Taluk Headquarters', busStandName: 'Bhatkal Shamsuddin Circle Stand', busStandNameKn: 'ಭಟ್ಕಳ ಬಸ್ ನಿಲ್ದಾಣ', lat: 13.9878, lng: 74.5614 },
  { id: 'honnavar', name: 'Honnavar', nameKn: 'ಹೊನ್ನಾವರ', district: 'Uttara Kannada', districtKn: 'ಉತ್ತರ ಕನ್ನಡ', division: 'Coastal & Malnad', category: 'Taluk Headquarters', busStandName: 'Honnavar Sharavathi Stand', busStandNameKn: 'ಹೊನ್ನಾವರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 14.2797, lng: 74.4439 },
  { id: 'kumta', name: 'Kumta', nameKn: 'ಕುಮಟಾ', district: 'Uttara Kannada', districtKn: 'ಉತ್ತರ ಕನ್ನಡ', division: 'Coastal & Malnad', category: 'Taluk Headquarters', busStandName: 'Kumta Central Stand', busStandNameKn: 'ಕುಮಟಾ ಬಸ್ ನಿಲ್ದಾಣ', lat: 14.4258, lng: 74.4172 },
  { id: 'dandeli', name: 'Dandeli', nameKn: 'ದಾಂಡೇಲಿ', district: 'Uttara Kannada', districtKn: 'ಉತ್ತರ ಕನ್ನಡ', division: 'Coastal & Malnad', category: 'Hill Station & Nature', busStandName: 'Dandeli Jungle Safari Bus Stand', busStandNameKn: 'ದಾಂಡೇಲಿ ಬಸ್ ನಿಲ್ದಾಣ', lat: 15.2411, lng: 74.6231, popular: true },
  { id: 'ankola', name: 'Ankola', nameKn: 'ಅಂಕೋಲಾ', district: 'Uttara Kannada', districtKn: 'ಉತ್ತರ ಕನ್ನಡ', division: 'Coastal & Malnad', category: 'Taluk Headquarters', busStandName: 'Ankola KSRTC Stand', busStandNameKn: 'ಅಂಕೋಲಾ ಬಸ್ ನಿಲ್ದಾಣ', lat: 14.6644, lng: 74.3000 },
  { id: 'yellapur', name: 'Yellapur', nameKn: 'ಯಲ್ಲಾಪುರ', district: 'Uttara Kannada', districtKn: 'ಉತ್ತರ ಕನ್ನಡ', division: 'Coastal & Malnad', category: 'Taluk Headquarters', busStandName: 'Yellapur Ghat Stand', busStandNameKn: 'ಯಲ್ಲಾಪುರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 14.9644, lng: 74.7125 },

  // 13. Shivamogga
  { id: 'shivamogga', name: 'Shivamogga (Shimoga)', nameKn: 'ಶಿವಮೊಗ್ಗ', district: 'Shivamogga', districtKn: 'ಶಿವಮೊಗ್ಗ', division: 'Bengaluru', category: 'District Capital', busStandName: 'Shivamogga KSRTC Central Stand', busStandNameKn: 'ಶಿವಮೊಗ್ಗ ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 13.9299, lng: 75.5681, popular: true },
  { id: 'bhadravathi', name: 'Bhadravathi', nameKn: 'ಭದ್ರಾವತಿ', district: 'Shivamogga', districtKn: 'ಶಿವಮೊಗ್ಗ', division: 'Bengaluru', category: 'Taluk Headquarters', busStandName: 'Bhadravathi VISL Steel City Stand', busStandNameKn: 'ಭದ್ರಾವತಿ ಬಸ್ ನಿಲ್ದಾಣ', lat: 13.8400, lng: 75.7000 },
  { id: 'sagara', name: 'Sagara', nameKn: 'ಸಾಗರ', district: 'Shivamogga', districtKn: 'ಶಿವಮೊಗ್ಗ', division: 'Bengaluru', category: 'Taluk Headquarters', busStandName: 'Sagara KSRTC Bus Stand', busStandNameKn: 'ಸಾಗರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 14.1667, lng: 75.0333 },
  { id: 'jog-falls', name: 'Jog Falls', nameKn: 'ಜೋಗ ಜಲಪಾತ', district: 'Shivamogga', districtKn: 'ಶಿವಮೊಗ್ಗ', division: 'Bengaluru', category: 'Hill Station & Nature', busStandName: 'Jog Falls Viewpoint Bus Stand', busStandNameKn: 'ಜೋಗ ಫಾಲ್ಸ್ ಬಸ್ ನಿಲ್ದಾಣ', lat: 14.2285, lng: 74.8122, popular: true },
  { id: 'thirthahalli', name: 'Thirthahalli', nameKn: 'ತೀರ್ಥಹಳ್ಳಿ', district: 'Shivamogga', districtKn: 'ಶಿವಮೊಗ್ಗ', division: 'Bengaluru', category: 'Taluk Headquarters', busStandName: 'Thirthahalli Tunga Bridge Stand', busStandNameKn: 'ತೀರ್ಥಹಳ್ಳಿ ಬಸ್ ನಿಲ್ದಾಣ', lat: 13.6894, lng: 75.2403, popular: true },
  { id: 'shikaripura', name: 'Shikaripura', nameKn: 'ಶಿಕಾರಿಪುರ', district: 'Shivamogga', districtKn: 'ಶಿವಮೊಗ್ಗ', division: 'Bengaluru', category: 'Taluk Headquarters', busStandName: 'Shikaripura KSRTC Stand', busStandNameKn: 'ಶಿಕಾರಿಪುರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 14.2694, lng: 75.3528 },
  { id: 'soraba', name: 'Soraba', nameKn: 'ಸೊರಬ', district: 'Shivamogga', districtKn: 'ಶಿವಮೊಗ್ಗ', division: 'Bengaluru', category: 'Taluk Headquarters', busStandName: 'Soraba KSRTC Stand', busStandNameKn: 'ಸೊರಬ ಬಸ್ ನಿಲ್ದಾಣ', lat: 14.3858, lng: 75.0931 },

  // 14. Tumakuru
  { id: 'tumakuru', name: 'Tumakuru (Tumkur)', nameKn: 'ತುಮಕೂರು', district: 'Tumakuru', districtKn: 'ತುಮಕೂರು', division: 'Bengaluru', category: 'District Capital', busStandName: 'Tumakuru KSRTC Central Stand', busStandNameKn: 'ತುಮಕೂರು ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 13.3409, lng: 77.1010, popular: true },
  { id: 'siddaganga', name: 'Siddaganga Kshetra', nameKn: 'ಸಿದ್ಧಗಂಗಾ ಮಠ', district: 'Tumakuru', districtKn: 'ತುಮಕೂರು', division: 'Bengaluru', category: 'Pilgrimage & Heritage', busStandName: 'Siddaganga Mutt Bus Halt', busStandNameKn: 'ಸಿದ್ಧಗಂಗಾ ಮಠ ನಿಲ್ದಾಣ', lat: 13.3150, lng: 77.1350 },
  { id: 'tiptur', name: 'Tiptur', nameKn: 'ತಿಪಟೂರು', district: 'Tumakuru', districtKn: 'ತುಮಕೂರು', division: 'Bengaluru', category: 'Taluk Headquarters', busStandName: 'Tiptur Coconut City Bus Stand', busStandNameKn: 'ತಿಪಟೂರು ಬಸ್ ನಿಲ್ದಾಣ', lat: 13.2564, lng: 76.4789, popular: true },
  { id: 'sira', name: 'Sira', nameKn: 'ಶಿರಾ', district: 'Tumakuru', districtKn: 'ತುಮಕೂರು', division: 'Bengaluru', category: 'Taluk Headquarters', busStandName: 'Sira Highway Terminal', busStandNameKn: 'ಶಿರಾ ಬಸ್ ನಿಲ್ದಾಣ', lat: 13.7441, lng: 76.9038 },
  { id: 'kunigal', name: 'Kunigal', nameKn: 'ಕುಣಿಗಲ್', district: 'Tumakuru', districtKn: 'ತುಮಕೂರು', division: 'Bengaluru', category: 'Taluk Headquarters', busStandName: 'Kunigal Stud Farm Bus Stand', busStandNameKn: 'ಕುಣಿಗಲ್ ಬಸ್ ನಿಲ್ದಾಣ', lat: 13.0238, lng: 77.0276 },
  { id: 'madhugiri', name: 'Madhugiri', nameKn: 'ಮಧುಗಿರಿ', district: 'Tumakuru', districtKn: 'ತುಮಕೂರು', division: 'Bengaluru', category: 'Pilgrimage & Heritage', busStandName: 'Madhugiri Monolith Stand', busStandNameKn: 'ಮಧುಗಿರಿ ಬಸ್ ನಿಲ್ದಾಣ', lat: 13.6631, lng: 77.2089 },
  { id: 'pavagada', name: 'Pavagada', nameKn: 'ಪಾವಗಡ', district: 'Tumakuru', districtKn: 'ತುಮಕೂರು', division: 'Bengaluru', category: 'Taluk Headquarters', busStandName: 'Pavagada Solar Park Stand', busStandNameKn: 'ಪಾವಗಡ ಬಸ್ ನಿಲ್ದಾಣ', lat: 14.1017, lng: 77.2798 },
  { id: 'gubbi', name: 'Gubbi', nameKn: 'ಗುಬ್ಬಿ', district: 'Tumakuru', districtKn: 'ತುಮಕೂರು', division: 'Bengaluru', category: 'Taluk Headquarters', busStandName: 'Gubbi KSRTC Stand', busStandNameKn: 'ಗುಬ್ಬಿ ಬಸ್ ನಿಲ್ದಾಣ', lat: 13.3108, lng: 76.9389 },

  // 15. Chitradurga
  { id: 'chitradurga', name: 'Chitradurga', nameKn: 'ಚಿತ್ರದುರ್ಗ', district: 'Chitradurga', districtKn: 'ಚಿತ್ರದುರ್ಗ', division: 'Bengaluru', category: 'District Capital', busStandName: 'Chitradurga Fort City KSRTC Stand', busStandNameKn: 'ಚಿತ್ರದುರ್ಗ ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 14.2251, lng: 76.4024, popular: true },
  { id: 'challakere', name: 'Challakere', nameKn: 'ಚಳ್ಳಕೆರೆ', district: 'Chitradurga', districtKn: 'ಚಿತ್ರದುರ್ಗ', division: 'Bengaluru', category: 'Taluk Headquarters', busStandName: 'Challakere Science City Stand', busStandNameKn: 'ಚಳ್ಳಕೆರೆ ಬಸ್ ನಿಲ್ದಾಣ', lat: 14.3167, lng: 76.6500 },
  { id: 'hiriyur', name: 'Hiriyur', nameKn: 'ಹಿರಿಯೂರು', district: 'Chitradurga', districtKn: 'ಚಿತ್ರದುರ್ಗ', division: 'Bengaluru', category: 'Taluk Headquarters', busStandName: 'Hiriyur Vani Vilasa Stand', busStandNameKn: 'ಹಿರಿಯೂರು ಬಸ್ ನಿಲ್ದಾಣ', lat: 13.9458, lng: 76.6200 },
  { id: 'hosadurga', name: 'Hosadurga', nameKn: 'ಹೊಸದುರ್ಗ', district: 'Chitradurga', districtKn: 'ಚಿತ್ರದುರ್ಗ', division: 'Bengaluru', category: 'Taluk Headquarters', busStandName: 'Hosadurga KSRTC Stand', busStandNameKn: 'ಹೊಸದುರ್ಗ ಬಸ್ ನಿಲ್ದಾಣ', lat: 13.7981, lng: 76.2861 },
  { id: 'holalkere', name: 'Holalkere', nameKn: 'ಹೊಳಲ್ಕೆರೆ', district: 'Chitradurga', districtKn: 'ಚಿತ್ರದುರ್ಗ', division: 'Bengaluru', category: 'Taluk Headquarters', busStandName: 'Holalkere Ganapathi Stand', busStandNameKn: 'ಹೊಳಲ್ಕೆರೆ ಬಸ್ ನಿಲ್ದಾಣ', lat: 14.0333, lng: 76.1833 },
  { id: 'molakalmuru', name: 'Molakalmuru', nameKn: 'ಮೊಳಕಾಲ್ಮುರು', district: 'Chitradurga', districtKn: 'ಚಿತ್ರದುರ್ಗ', division: 'Bengaluru', category: 'Taluk Headquarters', busStandName: 'Molakalmuru Silk Sari Stand', busStandNameKn: 'ಮೊಳಕಾಲ್ಮುರು ಬಸ್ ನಿಲ್ದಾಣ', lat: 14.7333, lng: 76.7500 },

  // 16. Davanagere
  { id: 'davanagere', name: 'Davanagere', nameKn: 'ದಾವಣಗೆರೆ', district: 'Davanagere', districtKn: 'ದಾವಣಗೆರೆ', division: 'Bengaluru', category: 'District Capital', busStandName: 'Davanagere Central Bus Stand', busStandNameKn: 'ದಾವಣಗೆರೆ ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 14.4644, lng: 75.9218, popular: true },
  { id: 'harihara', name: 'Harihara', nameKn: 'ಹರಿಹರ', district: 'Davanagere', districtKn: 'ದಾವಣಗೆರೆ', division: 'Bengaluru', category: 'Taluk Headquarters', busStandName: 'Harihara Harihareshwara Stand', busStandNameKn: 'ಹರಿಹರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 14.5125, lng: 75.8042 },
  { id: 'honnali', name: 'Honnali', nameKn: 'ಹೊನ್ನಾಳಿ', district: 'Davanagere', districtKn: 'ದಾವಣಗೆರೆ', division: 'Bengaluru', category: 'Taluk Headquarters', busStandName: 'Honnali Tunga Stand', busStandNameKn: 'ಹೊನ್ನಾಳಿ ಬಸ್ ನಿಲ್ದಾಣ', lat: 14.2464, lng: 75.6428 },
  { id: 'channagiri', name: 'Channagiri', nameKn: 'ಚನ್ನಗಿರಿ', district: 'Davanagere', districtKn: 'ದಾವಣಗೆರೆ', division: 'Bengaluru', category: 'Taluk Headquarters', busStandName: 'Channagiri Areca Stand', busStandNameKn: 'ಚನ್ನಗಿರಿ ಬಸ್ ನಿಲ್ದಾಣ', lat: 14.0258, lng: 75.9286 },

  // 17. Kolar
  { id: 'kolar', name: 'Kolar', nameKn: 'ಕೋಲಾರ', district: 'Kolar', districtKn: 'ಕೋಲಾರ', division: 'Bengaluru', category: 'District Capital', busStandName: 'Kolar Central Bus Stand', busStandNameKn: 'ಕೋಲಾರ ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 13.1367, lng: 78.1292, popular: true },
  { id: 'kgf', name: 'KGF (Kolar Gold Fields)', nameKn: 'ಕೆ.ಜಿ.ಎಫ್ (ಚಿನ್ನದ ಗಣಿ)', district: 'Kolar', districtKn: 'ಕೋಲಾರ', division: 'Bengaluru', category: 'Major Commercial Hub', busStandName: 'Robertsonpet KGF Central Stand', busStandNameKn: 'ರಾಬರ್ಟ್‌ಸನ್‌ಪೇಟ್ ಕೆಜಿಎಫ್ ನಿಲ್ದಾಣ', lat: 12.9600, lng: 78.2700, popular: true },
  { id: 'mulbagal', name: 'Mulbagal', nameKn: 'ಮುಳಬಾಗಿಲು', district: 'Kolar', districtKn: 'ಕೋಲಾರ', division: 'Bengaluru', category: 'Pilgrimage & Heritage', busStandName: 'Mulbagal Anjaneya Kshetra Stand', busStandNameKn: 'ಮುಳಬಾಗಿಲು ಬಸ್ ನಿಲ್ದಾಣ', lat: 13.1610, lng: 78.3940 },
  { id: 'bangarapet', name: 'Bangarapet', nameKn: 'ಬಂಗಾರಪೇಟೆ', district: 'Kolar', districtKn: 'ಕೋಲಾರ', division: 'Bengaluru', category: 'Taluk Headquarters', busStandName: 'Bangarapet Junction Stand', busStandNameKn: 'ಬಂಗಾರಪೇಟೆ ಬಸ್ ನಿಲ್ದಾಣ', lat: 12.9800, lng: 78.2000 },
  { id: 'malur', name: 'Malur', nameKn: 'ಮಾಲೂರು', district: 'Kolar', districtKn: 'ಕೋಲಾರ', division: 'Bengaluru', category: 'Taluk Headquarters', busStandName: 'Malur KSRTC Stand', busStandNameKn: 'ಮಾಲೂರು ಬಸ್ ನಿಲ್ದಾಣ', lat: 13.0033, lng: 77.9400 },
  { id: 'srinivaspur', name: 'Srinivaspur', nameKn: 'ಶ್ರೀನಿವಾಸಪುರ', district: 'Kolar', districtKn: 'ಕೋಲಾರ', division: 'Bengaluru', category: 'Taluk Headquarters', busStandName: 'Srinivaspur Mango City Stand', busStandNameKn: 'ಶ್ರೀನಿವಾಸಪುರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 13.3375, lng: 78.2125 },

  // 18. Chikkaballapura
  { id: 'chikkaballapura', name: 'Chikkaballapura', nameKn: 'ಚಿಕ್ಕಬಳ್ಳಾಪುರ', district: 'Chikkaballapura', districtKn: 'ಚಿಕ್ಕಬಳ್ಳಾಪುರ', division: 'Bengaluru', category: 'District Capital', busStandName: 'Chikkaballapura Central Stand', busStandNameKn: 'ಚಿಕ್ಕಬಳ್ಳಾಪುರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 13.4355, lng: 77.7275, popular: true },
  { id: 'nandi-hills', name: 'Nandi Hills', nameKn: 'ನಂದಿ ಬೆಟ್ಟ', district: 'Chikkaballapura', districtKn: 'ಚಿಕ್ಕಬಳ್ಳಾಪುರ', division: 'Bengaluru', category: 'Hill Station & Nature', busStandName: 'Nandi Hills Top Gate', busStandNameKn: 'ನಂದಿ ಹಿಲ್ಸ್ ನಿಲ್ದಾಣ', lat: 13.3702, lng: 77.6835, popular: true },
  { id: 'chintamani', name: 'Chintamani', nameKn: 'ಚಿಂತಾಮಣಿ', district: 'Chikkaballapura', districtKn: 'ಚಿಕ್ಕಬಳ್ಳಾಪುರ', division: 'Bengaluru', category: 'Taluk Headquarters', busStandName: 'Chintamani KSRTC Bus Stand', busStandNameKn: 'ಚಿಂತಾಮಣಿ ಬಸ್ ನಿಲ್ದಾಣ', lat: 13.4000, lng: 78.0667 },
  { id: 'gauribidanur', name: 'Gauribidanur', nameKn: 'ಗೌರಿಬಿದನೂರು', district: 'Chikkaballapura', districtKn: 'ಚಿಕ್ಕಬಳ್ಳಾಪುರ', division: 'Bengaluru', category: 'Taluk Headquarters', busStandName: 'Gauribidanur KSRTC Stand', busStandNameKn: 'ಗೌರಿಬಿದನೂರು ಬಸ್ ನಿಲ್ದಾಣ', lat: 13.6128, lng: 77.5186 },
  { id: 'bagepalli', name: 'Bagepalli', nameKn: 'ಬಾಗೇಪಲ್ಲಿ', district: 'Chikkaballapura', districtKn: 'ಚಿಕ್ಕಬಳ್ಳಾಪುರ', division: 'Bengaluru', category: 'Taluk Headquarters', busStandName: 'Bagepalli Border Highway Stand', busStandNameKn: 'ಬಾಗೇಪಲ್ಲಿ ಬಸ್ ನಿಲ್ದಾಣ', lat: 13.7844, lng: 77.7936 },
  { id: 'sidlaghatta', name: 'Sidlaghatta', nameKn: 'ಶಿಡ್ಲಘಟ್ಟ', district: 'Chikkaballapura', districtKn: 'ಚಿಕ್ಕಬಳ್ಳಾಪುರ', division: 'Bengaluru', category: 'Taluk Headquarters', busStandName: 'Sidlaghatta Silk Stand', busStandNameKn: 'ಶಿಡ್ಲಘಟ್ಟ ಬಸ್ ನಿಲ್ದಾಣ', lat: 13.3894, lng: 77.8631 },

  // 19. Dharwad & Hubballi
  { id: 'hubballi', name: 'Hubballi (Hubli)', nameKn: 'ಹುಬ್ಬಳ್ಳಿ', district: 'Dharwad', districtKn: 'ಧಾರವಾಡ', division: 'Kittur Karnataka', category: 'Major Commercial Hub', busStandName: 'Hubballi New Bus Stand (Gokul Road)', busStandNameKn: 'ಹುಬ್ಬಳ್ಳಿ ಹೊಸ ಬಸ್ ನಿಲ್ದಾಣ (ಗೋಕುಲ ರಸ್ತೆ)', lat: 15.3524, lng: 75.1278, popular: true },
  { id: 'dharwad', name: 'Dharwad', nameKn: 'ಧಾರವಾಡ', district: 'Dharwad', districtKn: 'ಧಾರವಾಡ', division: 'Kittur Karnataka', category: 'District Capital', busStandName: 'Dharwad Old CBT & BRTS Terminal', busStandNameKn: 'ಧಾರವಾಡ ಸಿಬಿಟಿ ಬಸ್ ನಿಲ್ದಾಣ', lat: 15.4589, lng: 75.0078, popular: true },
  { id: 'kalghatgi', name: 'Kalghatgi', nameKn: 'ಕಲಘಟಗಿ', district: 'Dharwad', districtKn: 'ಧಾರವಾಡ', division: 'Kittur Karnataka', category: 'Taluk Headquarters', busStandName: 'Kalghatgi NWKRTC Stand', busStandNameKn: 'ಕಲಘಟಗಿ ಬಸ್ ನಿಲ್ದಾಣ', lat: 15.1833, lng: 74.9667 },
  { id: 'navalgund', name: 'Navalgund', nameKn: 'ನವಲಗುಂದ', district: 'Dharwad', districtKn: 'ಧಾರವಾಡ', division: 'Kittur Karnataka', category: 'Taluk Headquarters', busStandName: 'Navalgund Jamakhana Stand', busStandNameKn: 'ನವಲಗುಂದ ಬಸ್ ನಿಲ್ದಾಣ', lat: 15.5667, lng: 75.3667 },

  // 20. Belagavi
  { id: 'belagavi', name: 'Belagavi (Belgaum)', nameKn: 'ಬೆಳಗಾವಿ', district: 'Belagavi', districtKn: 'ಬೆಳಗಾವಿ', division: 'Kittur Karnataka', category: 'District Capital', busStandName: 'Belagavi Central Bus Stand (CBT)', busStandNameKn: 'ಬೆಳಗಾವಿ ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 15.8497, lng: 74.4977, popular: true },
  { id: 'gokak', name: 'Gokak', nameKn: 'ಗೋಕಾಕ್', district: 'Belagavi', districtKn: 'ಬೆಳಗಾವಿ', division: 'Kittur Karnataka', category: 'Taluk Headquarters', busStandName: 'Gokak Falls City Bus Stand', busStandNameKn: 'ಗೋಕಾಕ್ ಬಸ್ ನಿಲ್ದಾಣ', lat: 16.1667, lng: 74.8333, popular: true },
  { id: 'chikodi', name: 'Chikkodi', nameKn: 'ಚಿಕ್ಕೋಡಿ', district: 'Belagavi', districtKn: 'ಬೆಳಗಾವಿ', division: 'Kittur Karnataka', category: 'Taluk Headquarters', busStandName: 'Chikkodi Central Bus Stand', busStandNameKn: 'ಚಿಕ್ಕೋಡಿ ಬಸ್ ನಿಲ್ದಾಣ', lat: 16.4333, lng: 74.6000 },
  { id: 'bailhongal', name: 'Bailhongal', nameKn: 'ಬೈಲಹೊಂಗಲ', district: 'Belagavi', districtKn: 'ಬೆಳಗಾವಿ', division: 'Kittur Karnataka', category: 'Taluk Headquarters', busStandName: 'Bailhongal Kittur Chennamma Stand', busStandNameKn: 'ಬೈಲಹೊಂಗಲ ಬಸ್ ನಿಲ್ದಾಣ', lat: 15.8167, lng: 74.8667 },
  { id: 'athani', name: 'Athani', nameKn: 'ಅಥಣಿ', district: 'Belagavi', districtKn: 'ಬೆಳಗಾವಿ', division: 'Kittur Karnataka', category: 'Taluk Headquarters', busStandName: 'Athani NWKRTC Stand', busStandNameKn: 'ಅಥಣಿ ಬಸ್ ನಿಲ್ದಾಣ', lat: 16.7333, lng: 75.0667 },
  { id: 'ramdurg', name: 'Ramdurg', nameKn: 'ರಾಮದುರ್ಗ', district: 'Belagavi', districtKn: 'ಬೆಳಗಾವಿ', division: 'Kittur Karnataka', category: 'Taluk Headquarters', busStandName: 'Ramdurg KSRTC Stand', busStandNameKn: 'ರಾಮದುರ್ಗ ಬಸ್ ನಿಲ್ದಾಣ', lat: 15.9500, lng: 75.3000 },
  { id: 'saundatti', name: 'Saundatti (Yellamma)', nameKn: 'ಸವದತ್ತಿ (ಯಲ್ಲಮ್ಮನ ಗುಡ್ಡ)', district: 'Belagavi', districtKn: 'ಬೆಳಗಾವಿ', division: 'Kittur Karnataka', category: 'Pilgrimage & Heritage', busStandName: 'Saundatti Renuka Yellamma Stand', busStandNameKn: 'ಸವದತ್ತಿ ಬಸ್ ನಿಲ್ದಾಣ', lat: 15.7667, lng: 75.1167, popular: true },
  { id: 'nippani', name: 'Nippani', nameKn: 'ನಿಪ್ಪಾಣಿ', district: 'Belagavi', districtKn: 'ಬೆಳಗಾವಿ', division: 'Kittur Karnataka', category: 'Major Commercial Hub', busStandName: 'Nippani Highway Stand', busStandNameKn: 'ನಿಪ್ಪಾಣಿ ಬಸ್ ನಿಲ್ದಾಣ', lat: 16.4000, lng: 74.3833 },
  { id: 'khanapur', name: 'Khanapur', nameKn: 'ಖಾನಾಪುರ', district: 'Belagavi', districtKn: 'ಬೆಳಗಾವಿ', division: 'Kittur Karnataka', category: 'Taluk Headquarters', busStandName: 'Khanapur Forest Gateway Stand', busStandNameKn: 'ಖಾನಾಪುರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 15.6333, lng: 74.5167 },

  // 21. Bagalkote
  { id: 'bagalkote', name: 'Bagalkote', nameKn: 'ಬಾಗಲಕೋಟೆ', district: 'Bagalkote', districtKn: 'ಬಾಗಲಕೋಟೆ', division: 'Kittur Karnataka', category: 'District Capital', busStandName: 'Bagalkote Navanagar New Bus Stand', busStandNameKn: 'ಬಾಗಲಕೋಟೆ ನವನಗರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 16.1875, lng: 75.6989, popular: true },
  { id: 'badami', name: 'Badami', nameKn: 'ಬಾದಾಮಿ', district: 'Bagalkote', districtKn: 'ಬಾಗಲಕೋಟೆ', division: 'Kittur Karnataka', category: 'Pilgrimage & Heritage', busStandName: 'Badami Cave Temples KSRTC Stand', busStandNameKn: 'ಬಾದಾಮಿ ಗುಹಾಂತರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 15.9186, lng: 75.6811, popular: true },
  { id: 'aihole-pattadakal', name: 'Pattadakal & Aihole', nameKn: 'ಪಟ್ಟದಕಲ್ಲು ಮತ್ತು ಐಹೊಳೆ', district: 'Bagalkote', districtKn: 'ಬಾಗಲಕೋಟೆ', division: 'Kittur Karnataka', category: 'Pilgrimage & Heritage', busStandName: 'Pattadakal UNESCO Heritage Halt', busStandNameKn: 'ಪಟ್ಟದಕಲ್ಲು ಬಸ್ ನಿಲ್ದಾಣ', lat: 15.9483, lng: 75.8167, popular: true },
  { id: 'jamkhandi', name: 'Jamkhandi', nameKn: 'ಜಮಖಂಡಿ', district: 'Bagalkote', districtKn: 'ಬಾಗಲಕೋಟೆ', division: 'Kittur Karnataka', category: 'Taluk Headquarters', busStandName: 'Jamkhandi Royal Bus Stand', busStandNameKn: 'ಜಮಖಂಡಿ ಬಸ್ ನಿಲ್ದಾಣ', lat: 16.5167, lng: 75.3000 },
  { id: 'mudhol', name: 'Mudhol', nameKn: 'ಮುಧೋಳ', district: 'Bagalkote', districtKn: 'ಬಾಗಲಕೋಟೆ', division: 'Kittur Karnataka', category: 'Taluk Headquarters', busStandName: 'Mudhol Hound City Bus Stand', busStandNameKn: 'ಮುಧೋಳ ಬಸ್ ನಿಲ್ದಾಣ', lat: 16.3333, lng: 75.2833 },
  { id: 'ilkal', name: 'Ilkal', nameKn: 'ಇಳಕಲ್', district: 'Bagalkote', districtKn: 'ಬಾಗಲಕೋಟೆ', division: 'Kittur Karnataka', category: 'Taluk Headquarters', busStandName: 'Ilkal Saree City Bus Stand', busStandNameKn: 'ಇಳಕಲ್ ಸೀರೆ ನಗರಿ ಬಸ್ ನಿಲ್ದಾಣ', lat: 15.9667, lng: 76.1333, popular: true },
  { id: 'kudalasangama', name: 'Kudalasangama', nameKn: 'ಕೂಡಲಸಂಗಮ', district: 'Bagalkote', districtKn: 'ಬಾಗಲಕೋಟೆ', division: 'Kittur Karnataka', category: 'Pilgrimage & Heritage', busStandName: 'Kudalasangama Aikya Mantapa Stand', busStandNameKn: 'ಕೂಡಲಸಂಗಮ ಬಸ್ ನಿಲ್ದಾಣ', lat: 16.2167, lng: 76.0833, popular: true },

  // 22. Vijayapura (Bijapur)
  { id: 'vijayapura', name: 'Vijayapura (Bijapur)', nameKn: 'ವಿಜಯಪುರ', district: 'Vijayapura (Bijapur)', districtKn: 'ವಿಜಯಪುರ', division: 'Kittur Karnataka', category: 'District Capital', busStandName: 'Vijayapura Gol Gumbaz Central Stand', busStandNameKn: 'ವಿಜಯಪುರ ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 16.8302, lng: 75.7100, popular: true },
  { id: 'almatti', name: 'Almatti Dam', nameKn: 'ಆಲಮಟ್ಟಿ', district: 'Vijayapura (Bijapur)', districtKn: 'ವಿಜಯಪುರ', division: 'Kittur Karnataka', category: 'Hill Station & Nature', busStandName: 'Almatti Lal Bahadur Shastri Dam Stand', busStandNameKn: 'ಆಲಮಟ್ಟಿ ಡ್ಯಾಂ ಬಸ್ ನಿಲ್ದಾಣ', lat: 16.3314, lng: 75.8872, popular: true },
  { id: 'indi', name: 'Indi', nameKn: 'ಇಂಡಿ', district: 'Vijayapura (Bijapur)', districtKn: 'ವಿಜಯಪುರ', division: 'Kittur Karnataka', category: 'Taluk Headquarters', busStandName: 'Indi NWKRTC Stand', busStandNameKn: 'ಇಂಡಿ ಬಸ್ ನಿಲ್ದಾಣ', lat: 17.1833, lng: 75.9667 },
  { id: 'muddebihal', name: 'Muddebihal', nameKn: 'ಮುದ್ದೇಬಿಹಾಳ', district: 'Vijayapura (Bijapur)', districtKn: 'ವಿಜಯಪುರ', division: 'Kittur Karnataka', category: 'Taluk Headquarters', busStandName: 'Muddebihal KSRTC Stand', busStandNameKn: 'ಮುದ್ದೇಬಿಹಾಳ ಬಸ್ ನಿಲ್ದಾಣ', lat: 16.3333, lng: 76.1333 },
  { id: 'sindagi', name: 'Sindagi', nameKn: 'ಸಿಂದಗಿ', district: 'Vijayapura (Bijapur)', districtKn: 'ವಿಜಯಪುರ', division: 'Kittur Karnataka', category: 'Taluk Headquarters', busStandName: 'Sindagi Bus Stand', busStandNameKn: 'ಸಿಂದಗಿ ಬಸ್ ನಿಲ್ದಾಣ', lat: 16.9167, lng: 76.2333 },
  { id: 'basavana-bagewadi', name: 'Basavana Bagewadi', nameKn: 'ಬಸವನ ಬಾಗೇವಾಡಿ', district: 'Vijayapura (Bijapur)', districtKn: 'ವಿಜಯಪುರ', division: 'Kittur Karnataka', category: 'Pilgrimage & Heritage', busStandName: 'Basavana Bagewadi Janmasthala Stand', busStandNameKn: 'ಬಸವನ ಬಾಗೇವಾಡಿ ಬಸ್ ನಿಲ್ದಾಣ', lat: 16.5833, lng: 75.9667 },

  // 23. Gadag
  { id: 'gadag', name: 'Gadag - Betageri', nameKn: 'ಗದಗ - ಬೆಟಗೇರಿ', district: 'Gadag', districtKn: 'ಗದಗ', division: 'Kittur Karnataka', category: 'District Capital', busStandName: 'Gadag Central Bus Stand', busStandNameKn: 'ಗದಗ ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 15.4167, lng: 75.6333, popular: true },
  { id: 'shirahatti', name: 'Shirahatti', nameKn: 'ಶಿರಹಟ್ಟಿ', district: 'Gadag', districtKn: 'ಗದಗ', division: 'Kittur Karnataka', category: 'Taluk Headquarters', busStandName: 'Shirahatti Fakkreshwar Stand', busStandNameKn: 'ಶಿರಹಟ್ಟಿ ಬಸ್ ನಿಲ್ದಾಣ', lat: 15.2333, lng: 75.5833 },
  { id: 'ron', name: 'Ron', nameKn: 'ರೋಣ', district: 'Gadag', districtKn: 'ಗದಗ', division: 'Kittur Karnataka', category: 'Taluk Headquarters', busStandName: 'Ron KSRTC Bus Stand', busStandNameKn: 'ರೋಣ ಬಸ್ ನಿಲ್ದಾಣ', lat: 15.7000, lng: 75.7333 },
  { id: 'lakshmeshwar', name: 'Lakshmeshwar', nameKn: 'ಲಕ್ಷ್ಮೇಶ್ವರ', district: 'Gadag', districtKn: 'ಗದಗ', division: 'Kittur Karnataka', category: 'Pilgrimage & Heritage', busStandName: 'Lakshmeshwar Someshwara Stand', busStandNameKn: 'ಲಕ್ಷ್ಮೇಶ್ವರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 15.1333, lng: 75.4667 },
  { id: 'mundargi', name: 'Mundargi', nameKn: 'ಮುಂಡರಗಿ', district: 'Gadag', districtKn: 'ಗದಗ', division: 'Kittur Karnataka', category: 'Taluk Headquarters', busStandName: 'Mundargi Bus Stand', busStandNameKn: 'ಮುಂಡರಗಿ ಬಸ್ ನಿಲ್ದಾಣ', lat: 15.2167, lng: 75.9000 },
  { id: 'gajendragad', name: 'Gajendragad', nameKn: 'ಗಜೇಂದ್ರಗಡ', district: 'Gadag', districtKn: 'ಗದಗ', division: 'Kittur Karnataka', category: 'Taluk Headquarters', busStandName: 'Gajendragad Fort Stand', busStandNameKn: 'ಗಜೇಂದ್ರಗಡ ಬಸ್ ನಿಲ್ದಾಣ', lat: 15.7333, lng: 75.9833 },

  // 24. Haveri
  { id: 'haveri', name: 'Haveri', nameKn: 'ಹಾವೇರಿ', district: 'Haveri', districtKn: 'ಹಾವೇರಿ', division: 'Kittur Karnataka', category: 'District Capital', busStandName: 'Haveri Central Bus Stand', busStandNameKn: 'ಹಾವೇರಿ ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 14.7972, lng: 75.4014, popular: true },
  { id: 'ranebennur', name: 'Ranebennur', nameKn: 'ರಾಣೆಬೆನ್ನೂರು', district: 'Haveri', districtKn: 'ಹಾವೇರಿ', division: 'Kittur Karnataka', category: 'Major Commercial Hub', busStandName: 'Ranebennur Blackbuck City Stand', busStandNameKn: 'ರಾಣೆಬೆನ್ನೂರು ಬಸ್ ನಿಲ್ದಾಣ', lat: 14.6225, lng: 75.6214, popular: true },
  { id: 'byadgi', name: 'Byadgi', nameKn: 'ಬ್ಯಾಡಗಿ', district: 'Haveri', districtKn: 'ಹಾವೇರಿ', division: 'Kittur Karnataka', category: 'Major Commercial Hub', busStandName: 'Byadgi Chilli Market Bus Stand', busStandNameKn: 'ಬ್ಯಾಡಗಿ ಮೆಣಸಿನಕಾಯಿ ಮಾರ್ಕೆಟ್ ನಿಲ್ದಾಣ', lat: 14.6833, lng: 75.4833, popular: true },
  { id: 'hangal', name: 'Hangal', nameKn: 'ಹಾನಗಲ್', district: 'Haveri', districtKn: 'ಹಾವೇರಿ', division: 'Kittur Karnataka', category: 'Taluk Headquarters', busStandName: 'Hangal Tarakeshwara Stand', busStandNameKn: 'ಹಾನಗಲ್ ಬಸ್ ನಿಲ್ದಾಣ', lat: 14.7667, lng: 75.1333 },
  { id: 'shiggaon', name: 'Shiggaon', nameKn: 'ಶಿಗ್ಗಾಂವಿ', district: 'Haveri', districtKn: 'ಹಾವೇರಿ', division: 'Kittur Karnataka', category: 'Taluk Headquarters', busStandName: 'Shiggaon Highway Bus Stand', busStandNameKn: 'ಶಿಗ್ಗಾಂವಿ ಬಸ್ ನಿಲ್ದಾಣ', lat: 14.9833, lng: 75.2333 },
  { id: 'hirekerur', name: 'Hirekerur', nameKn: 'ಹಿರೇಕೆರೂರು', district: 'Haveri', districtKn: 'ಹಾವೇರಿ', division: 'Kittur Karnataka', category: 'Taluk Headquarters', busStandName: 'Hirekerur Bus Stand', busStandNameKn: 'ಹಿರೇಕೆರೂರು ಬಸ್ ನಿಲ್ದಾಣ', lat: 14.4667, lng: 75.3833 },
  { id: 'savanur', name: 'Savanur', nameKn: 'ಸವಣೂರು', district: 'Haveri', districtKn: 'ಹಾವೇರಿ', division: 'Kittur Karnataka', category: 'Taluk Headquarters', busStandName: 'Savanur Baobab Tree Stand', busStandNameKn: 'ಸವಣೂರು ಬಸ್ ನಿಲ್ದಾಣ', lat: 14.9667, lng: 75.3500 },

  // 25. Kalaburagi (Gulbarga)
  { id: 'kalaburagi', name: 'Kalaburagi (Gulbarga)', nameKn: 'ಕಲಬುರಗಿ', district: 'Kalaburagi (Gulbarga)', districtKn: 'ಕಲಬುರಗಿ', division: 'Kalyana Karnataka', category: 'District Capital', busStandName: 'Kalaburagi Central Bus Stand (KKRTC)', busStandNameKn: 'ಕಲಬುರಗಿ ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 17.3297, lng: 76.8343, popular: true },
  { id: 'ganagapura', name: 'Ganagapura Dattatreya', nameKn: 'ಗಾಣಗಾಪುರ ದತ್ತಾತ್ರೇಯ', district: 'Kalaburagi (Gulbarga)', districtKn: 'ಕಲಬುರಗಿ', division: 'Kalyana Karnataka', category: 'Pilgrimage & Heritage', busStandName: 'Ganagapura Temple Kshetra Stand', busStandNameKn: 'ಗಾಣಗಾಪುರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 17.2000, lng: 76.5167, popular: true },
  { id: 'sedam', name: 'Sedam', nameKn: 'ಸೇಡಂ', district: 'Kalaburagi (Gulbarga)', districtKn: 'ಕಲಬುರಗಿ', division: 'Kalyana Karnataka', category: 'Taluk Headquarters', busStandName: 'Sedam Cement Hub Bus Stand', busStandNameKn: 'ಸೇಡಂ ಬಸ್ ನಿಲ್ದಾಣ', lat: 17.1833, lng: 77.2833 },
  { id: 'chittapur', name: 'Chittapur', nameKn: 'ಚಿತ್ತಾಪುರ', district: 'Kalaburagi (Gulbarga)', districtKn: 'ಕಲಬುರಗಿ', division: 'Kalyana Karnataka', category: 'Taluk Headquarters', busStandName: 'Chittapur Sannati Buddhist Stand', busStandNameKn: 'ಚಿತ್ತಾಪುರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 17.1167, lng: 77.0833 },
  { id: 'aland', name: 'Aland', nameKn: 'ಆಳಂದ', district: 'Kalaburagi (Gulbarga)', districtKn: 'ಕಲಬುರಗಿ', division: 'Kalyana Karnataka', category: 'Taluk Headquarters', busStandName: 'Aland KKRTC Stand', busStandNameKn: 'ಆಳಂದ ಬಸ್ ನಿಲ್ದಾಣ', lat: 17.5667, lng: 76.5667 },
  { id: 'afzalpur', name: 'Afzalpur', nameKn: 'ಅಫಜಲಪುರ', district: 'Kalaburagi (Gulbarga)', districtKn: 'ಕಲಬುರಗಿ', division: 'Kalyana Karnataka', category: 'Taluk Headquarters', busStandName: 'Afzalpur Bhima Stand', busStandNameKn: 'ಅಫಜಲಪುರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 17.2000, lng: 76.3500 },
  { id: 'jewargi', name: 'Jewargi', nameKn: 'ಜೇವರ್ಗಿ', district: 'Kalaburagi (Gulbarga)', districtKn: 'ಕಲಬುರಗಿ', division: 'Kalyana Karnataka', category: 'Taluk Headquarters', busStandName: 'Jewargi KKRTC Bus Stand', busStandNameKn: 'ಜೇವರ್ಗಿ ಬಸ್ ನಿಲ್ದಾಣ', lat: 17.0167, lng: 76.7667 },
  { id: 'chincholi', name: 'Chincholi', nameKn: 'ಚಿಂಚೋಳಿ', district: 'Kalaburagi (Gulbarga)', districtKn: 'ಕಲಬುರಗಿ', division: 'Kalyana Karnataka', category: 'Hill Station & Nature', busStandName: 'Chincholi Wildlife Stand', busStandNameKn: 'ಚಿಂಚೋಳಿ ಬಸ್ ನಿಲ್ದಾಣ', lat: 17.4667, lng: 77.4333 },

  // 26. Ballari (Bellary)
  { id: 'ballari', name: 'Ballari (Bellary)', nameKn: 'ಬಳ್ಳಾರಿ', district: 'Ballari (Bellary)', districtKn: 'ಬಳ್ಳಾರಿ', division: 'Kalyana Karnataka', category: 'District Capital', busStandName: 'Ballari Central Bus Stand', busStandNameKn: 'ಬಳ್ಳಾರಿ ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 15.1394, lng: 76.9214, popular: true },
  { id: 'siruguppa', name: 'Siruguppa', nameKn: 'ಸಿರುಗುಪ್ಪ', district: 'Ballari (Bellary)', districtKn: 'ಬಳ್ಳಾರಿ', division: 'Kalyana Karnataka', category: 'Taluk Headquarters', busStandName: 'Siruguppa Tungabhadra Stand', busStandNameKn: 'ಸಿರುಗುಪ್ಪ ಬಸ್ ನಿಲ್ದಾಣ', lat: 15.6333, lng: 76.9000 },
  { id: 'sandur', name: 'Sandur', nameKn: 'ಸಂಡೂರು', district: 'Ballari (Bellary)', districtKn: 'ಬಳ್ಳಾರಿ', division: 'Kalyana Karnataka', category: 'Hill Station & Nature', busStandName: 'Sandur Kumaraswamy Temple Stand', busStandNameKn: 'ಸಂಡೂರು ಬಸ್ ನಿಲ್ದಾಣ', lat: 15.0833, lng: 76.5500, popular: true },
  { id: 'kurugodu', name: 'Kurugodu', nameKn: 'ಕುರುಗೋಡು', district: 'Ballari (Bellary)', districtKn: 'ಬಳ್ಳಾರಿ', division: 'Kalyana Karnataka', category: 'Taluk Headquarters', busStandName: 'Kurugodu Basaveshwara Stand', busStandNameKn: 'ಕುರುಗೋಡು ಬಸ್ ನಿಲ್ದಾಣ', lat: 15.3500, lng: 76.8333 },
  { id: 'kampli', name: 'Kampli', nameKn: 'ಕಂಪ್ಲಿ', district: 'Ballari (Bellary)', districtKn: 'ಬಳ್ಳಾರಿ', division: 'Kalyana Karnataka', category: 'Taluk Headquarters', busStandName: 'Kampli Sugar Stand', busStandNameKn: 'ಕಂಪ್ಲಿ ಬಸ್ ನಿಲ್ದಾಣ', lat: 15.4000, lng: 76.6000 },

  // 27. Vijayanagara
  { id: 'hosapete', name: 'Hosapete (Hospet)', nameKn: 'ಹೊಸಪೇಟೆ', district: 'Vijayanagara', districtKn: 'ವಿಜಯನಗರ', division: 'Kalyana Karnataka', category: 'District Capital', busStandName: 'Hosapete KSRTC / KKRTC Central Stand', busStandNameKn: 'ಹೊಸಪೇಟೆ ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 15.2714, lng: 76.3917, popular: true },
  { id: 'hampi', name: 'Hampi Heritage', nameKn: 'ಹಂಪಿ ವಿಶ್ವ ಪರಂಪರೆ ತಾಣ', district: 'Vijayanagara', districtKn: 'ವಿಜಯನಗರ', division: 'Kalyana Karnataka', category: 'Pilgrimage & Heritage', busStandName: 'Hampi Virupaksha Bazaar Stand', busStandNameKn: 'ಹಂಪಿ ವಿರುಪಾಕ್ಷ ಬಸ್ ನಿಲ್ದಾಣ', lat: 15.3350, lng: 76.4600, popular: true },
  { id: 'harapanahalli', name: 'Harapanahalli', nameKn: 'ಹರಪನಹಳ್ಳಿ', district: 'Vijayanagara', districtKn: 'ವಿಜಯನಗರ', division: 'Kalyana Karnataka', category: 'Taluk Headquarters', busStandName: 'Harapanahalli Bus Stand', busStandNameKn: 'ಹರಪನಹಳ್ಳಿ ಬಸ್ ನಿಲ್ದಾಣ', lat: 14.8000, lng: 75.9833 },
  { id: 'kudligi', name: 'Kudligi', nameKn: 'ಕೂಡ್ಲಿಗಿ', district: 'Vijayanagara', districtKn: 'ವಿಜಯನಗರ', division: 'Kalyana Karnataka', category: 'Taluk Headquarters', busStandName: 'Kudligi Highway Stand', busStandNameKn: 'ಕೂಡ್ಲಿಗಿ ಬಸ್ ನಿಲ್ದಾಣ', lat: 14.9000, lng: 76.3833 },
  { id: 'kotturu', name: 'Kotturu', nameKn: 'ಕೊಟ್ಟೂರು', district: 'Vijayanagara', districtKn: 'ವಿಜಯನಗರ', division: 'Kalyana Karnataka', category: 'Pilgrimage & Heritage', busStandName: 'Kotturu Gurubasaveshwara Stand', busStandNameKn: 'ಕೊಟ್ಟೂರು ಬಸ್ ನಿಲ್ದಾಣ', lat: 14.8167, lng: 76.2167 },
  { id: 'hoovina-hadagali', name: 'Hoovina Hadagali', nameKn: 'ಹೂವಿನ ಹಡಗಲಿ', district: 'Vijayanagara', districtKn: 'ವಿಜಯನಗರ', division: 'Kalyana Karnataka', category: 'Taluk Headquarters', busStandName: 'Hadagali Jasmine City Stand', busStandNameKn: 'ಹೂವಿನ ಹಡಗಲಿ ಬಸ್ ನಿಲ್ದಾಣ', lat: 15.0167, lng: 75.9500 },

  // 28. Bidar
  { id: 'bidar', name: 'Bidar', nameKn: 'ಬೀದರ್', district: 'Bidar', districtKn: 'ಬೀದರ್', division: 'Kalyana Karnataka', category: 'District Capital', busStandName: 'Bidar Fort Central Bus Stand', busStandNameKn: 'ಬೀದರ್ ಕೋಟೆ ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 17.9104, lng: 77.5199, popular: true },
  { id: 'basavakalyan', name: 'Basavakalyan', nameKn: 'ಬಸವಕಲ್ಯಾಣ', district: 'Bidar', districtKn: 'ಬೀದರ್', division: 'Kalyana Karnataka', category: 'Pilgrimage & Heritage', busStandName: 'Basavakalyan Anubhava Mantapa Stand', busStandNameKn: 'ಬಸವಕಲ್ಯಾಣ ಬಸ್ ನಿಲ್ದಾಣ', lat: 17.8744, lng: 76.9536, popular: true },
  { id: 'humnabad', name: 'Humnabad', nameKn: 'ಹುಮ್ನಾಬಾದ್', district: 'Bidar', districtKn: 'ಬೀದರ್', division: 'Kalyana Karnataka', category: 'Pilgrimage & Heritage', busStandName: 'Humnabad Maniknagar Kshetra Stand', busStandNameKn: 'ಹುಮ್ನಾಬಾದ್ ಬಸ್ ನಿಲ್ದಾಣ', lat: 17.7667, lng: 77.1333, popular: true },
  { id: 'bhalki', name: 'Bhalki', nameKn: 'ಭಾಲ್ಕಿ', district: 'Bidar', districtKn: 'ಬೀದರ್', division: 'Kalyana Karnataka', category: 'Taluk Headquarters', busStandName: 'Bhalki Hiremath Stand', busStandNameKn: 'ಭಾಲ್ಕಿ ಬಸ್ ನಿಲ್ದಾಣ', lat: 18.0333, lng: 77.2167 },
  { id: 'aurad', name: 'Aurad', nameKn: 'ಔರಾದ್', district: 'Bidar', districtKn: 'ಬೀದರ್', division: 'Kalyana Karnataka', category: 'Taluk Headquarters', busStandName: 'Aurad Border KSRTC Stand', busStandNameKn: 'ಔರಾದ್ ಬಸ್ ನಿಲ್ದಾಣ', lat: 18.2500, lng: 77.4333 },

  // 29. Raichur
  { id: 'raichur', name: 'Raichur', nameKn: 'ರಾಯಚೂರು', district: 'Raichur', districtKn: 'ರಾಯಚೂರು', division: 'Kalyana Karnataka', category: 'District Capital', busStandName: 'Raichur Central Bus Stand (KKRTC)', busStandNameKn: 'ರಾಯಚೂರು ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 16.2076, lng: 77.3463, popular: true },
  { id: 'sindhanur', name: 'Sindhanur', nameKn: 'ಸಿಂಧನೂರು', district: 'Raichur', districtKn: 'ರಾಯಚೂರು', division: 'Kalyana Karnataka', category: 'Major Commercial Hub', busStandName: 'Sindhanur Paddy Hub Bus Stand', busStandNameKn: 'ಸಿಂಧನೂರು ಬಸ್ ನಿಲ್ದಾಣ', lat: 15.7667, lng: 76.7667, popular: true },
  { id: 'manvi', name: 'Manvi', nameKn: 'ಮಾನ್ವಿ', district: 'Raichur', districtKn: 'ರಾಯಚೂರು', division: 'Kalyana Karnataka', category: 'Taluk Headquarters', busStandName: 'Manvi Cheluvaraya Stand', busStandNameKn: 'ಮಾನ್ವಿ ಬಸ್ ನಿಲ್ದಾಣ', lat: 15.9833, lng: 77.0500 },
  { id: 'lingsugur', name: 'Lingsugur', nameKn: 'ಲಿಂಗಸೂಗೂರು', district: 'Raichur', districtKn: 'ರಾಯಚೂರು', division: 'Kalyana Karnataka', category: 'Taluk Headquarters', busStandName: 'Lingsugur Bus Stand', busStandNameKn: 'ಲಿಂಗಸೂಗೂರು ಬಸ್ ನಿಲ್ದಾಣ', lat: 16.1667, lng: 76.5167 },
  { id: 'devadurga', name: 'Devadurga', nameKn: 'ದೇವದುರ್ಗ', district: 'Raichur', districtKn: 'ರಾಯಚೂರು', division: 'Kalyana Karnataka', category: 'Taluk Headquarters', busStandName: 'Devadurga Bus Stand', busStandNameKn: 'ದೇವದುರ್ಗ ಬಸ್ ನಿಲ್ದಾಣ', lat: 16.4167, lng: 76.9333 },
  { id: 'maski', name: 'Maski', nameKn: 'ಮಸ್ಕಿ', district: 'Raichur', districtKn: 'ರಾಯಚೂರು', division: 'Kalyana Karnataka', category: 'Taluk Headquarters', busStandName: 'Maski Ashoka Inscription Stand', busStandNameKn: 'ಮಸ್ಕಿ ಬಸ್ ನಿಲ್ದಾಣ', lat: 15.9667, lng: 76.6667 },

  // 30. Koppal
  { id: 'koppal', name: 'Koppal', nameKn: 'ಕೊಪ್ಪಳ', district: 'Koppal', districtKn: 'ಕೊಪ್ಪಳ', division: 'Kalyana Karnataka', category: 'District Capital', busStandName: 'Koppal Central Bus Stand', busStandNameKn: 'ಕೊಪ್ಪಳ ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 15.3486, lng: 76.1550, popular: true },
  { id: 'gangavathi', name: 'Gangavathi', nameKn: 'ಗಂಗಾವತಿ', district: 'Koppal', districtKn: 'ಕೊಪ್ಪಳ', division: 'Kalyana Karnataka', category: 'Major Commercial Hub', busStandName: 'Gangavathi Rice Bowl Bus Stand', busStandNameKn: 'ಗಂಗಾವತಿ ಬಸ್ ನಿಲ್ದಾಣ', lat: 15.4333, lng: 76.5333, popular: true },
  { id: 'anegundi', name: 'Anegundi (Kishkindha)', nameKn: 'ಆನೆಗುಂದಿ (ಕಿಷ್ಕಿಂಧೆ)', district: 'Koppal', districtKn: 'ಕೊಪ್ಪಳ', division: 'Kalyana Karnataka', category: 'Pilgrimage & Heritage', busStandName: 'Anegundi Heritage Bus Halt', busStandNameKn: 'ಆನೆಗುಂದಿ ಬಸ್ ನಿಲ್ದಾಣ', lat: 15.3500, lng: 76.5000, popular: true },
  { id: 'kushtagi', name: 'Kushtagi', nameKn: 'ಕುಷ್ಟಗಿ', district: 'Koppal', districtKn: 'ಕೊಪ್ಪಳ', division: 'Kalyana Karnataka', category: 'Taluk Headquarters', busStandName: 'Kushtagi Highway Bus Stand', busStandNameKn: 'ಕುಷ್ಟಗಿ ಬಸ್ ನಿಲ್ದಾಣ', lat: 15.7500, lng: 76.2000 },
  { id: 'yelburga', name: 'Yelburga', nameKn: 'ಯಲಬುರ್ಗಾ', district: 'Koppal', districtKn: 'ಕೊಪ್ಪಳ', division: 'Kalyana Karnataka', category: 'Taluk Headquarters', busStandName: 'Yelburga Bus Stand', busStandNameKn: 'ಯಲಬುರ್ಗಾ ಬಸ್ ನಿಲ್ದಾಣ', lat: 15.6000, lng: 76.0167 },

  // 31. Yadgir
  { id: 'yadgir', name: 'Yadgir', nameKn: 'ಯಾದಗಿರಿ', district: 'Yadgir', districtKn: 'ಯಾದಗಿರಿ', division: 'Kalyana Karnataka', category: 'District Capital', busStandName: 'Yadgir Hill Fort Central Stand', busStandNameKn: 'ಯಾದಗಿರಿ ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 16.7700, lng: 77.1300, popular: true },
  { id: 'shahapur', name: 'Shahapur', nameKn: 'ಶಹಾಪುರ', district: 'Yadgir', districtKn: 'ಯಾದಗಿರಿ', division: 'Kalyana Karnataka', category: 'Taluk Headquarters', busStandName: 'Shahapur Sleeping Buddha Stand', busStandNameKn: 'ಶಹಾಪುರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 16.7000, lng: 76.8333 },
  { id: 'shorapur', name: 'Shorapur (Surpur)', nameKn: 'ಶೋರಾಪುರ (ಸುರಪುರ)', district: 'Yadgir', districtKn: 'ಯಾದಗಿರಿ', division: 'Kalyana Karnataka', category: 'Taluk Headquarters', busStandName: 'Surpur Raja Venkatappa Nayaka Stand', busStandNameKn: 'ಸುರಪುರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 16.5167, lng: 76.7500 },
  { id: 'gurmitkal', name: 'Gurmitkal', nameKn: 'ಗುರಮಿಟ್ಕಲ್', district: 'Yadgir', districtKn: 'ಯಾದಗಿರಿ', division: 'Kalyana Karnataka', category: 'Taluk Headquarters', busStandName: 'Gurmitkal Waterfalls Stand', busStandNameKn: 'ಗುರಮಿಟ್ಕಲ್ ಬಸ್ ನಿಲ್ದಾಣ', lat: 16.8667, lng: 77.4000 },

  // Major Interstate Border Connections popular with KSRTC travelers
  { id: 'tirupati', name: 'Tirupati (Andhra Pradesh)', nameKn: 'ತಿರುಪತಿ (ಆಂಧ್ರಪ್ರದೇಶ)', district: 'Interstate', districtKn: 'ಹೊರರಾಜ್ಯ', division: 'Bengaluru', category: 'Pilgrimage & Heritage', busStandName: 'Tirupati Central RTC Bus Station', busStandNameKn: 'ತಿರುಪತಿ ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 13.6288, lng: 79.4192, popular: true },
  { id: 'ooty', name: 'Ooty (Udhagamandalam)', nameKn: 'ಊಟಿ (ತಮಿಳುನಾಡು)', district: 'Interstate', districtKn: 'ಹೊರರಾಜ್ಯ', division: 'Mysuru', category: 'Hill Station & Nature', busStandName: 'Ooty Central Bus Stand', busStandNameKn: 'ಊಟಿ ಕೇಂದ್ರ ಬಸ್ ನಿಲ್ದಾಣ', lat: 11.4102, lng: 76.6950, popular: true },
  { id: 'panaji', name: 'Panaji (Goa)', nameKn: 'ಪಣಜಿ (ಗೋವಾ)', district: 'Interstate', districtKn: 'ಹೊರರಾಜ್ಯ', division: 'Kittur Karnataka', category: 'Hill Station & Nature', busStandName: 'Kadamba Panaji Bus Stand', busStandNameKn: 'ಪಣಜಿ ಕದಂಬ ಬಸ್ ನಿಲ್ದಾಣ', lat: 15.4909, lng: 73.8278, popular: true },
  { id: 'mantralayam', name: 'Mantralayam', nameKn: 'ಮಂತ್ರಾಲಯ', district: 'Interstate', districtKn: 'ಹೊರರಾಜ್ಯ', division: 'Kalyana Karnataka', category: 'Pilgrimage & Heritage', busStandName: 'Mantralayam Raghavendra Swamy Stand', busStandNameKn: 'ಮಂತ್ರಾಲಯ ಬಸ್ ನಿಲ್ದಾಣ', lat: 15.9392, lng: 77.4289, popular: true },
];

export const POPULAR_CITIES = ALL_KARNATAKA_PLACES.filter(p => p.popular).map(p => ({
  name: p.name,
  nameKn: p.nameKn
}));

export function findPlaceByName(nameOrQuery: string): KarnatakaPlace | undefined {
  if (!nameOrQuery) return undefined;
  const q = nameOrQuery.toLowerCase().trim();
  return ALL_KARNATAKA_PLACES.find(
    p => p.name.toLowerCase() === q ||
         p.id.toLowerCase() === q ||
         p.nameKn === nameOrQuery.trim() ||
         p.name.toLowerCase().includes(q)
  );
}

export function searchKarnatakaPlaces(query: string): KarnatakaPlace[] {
  if (!query || !query.trim()) return ALL_KARNATAKA_PLACES;
  const q = query.toLowerCase().trim();
  return ALL_KARNATAKA_PLACES.filter(
    p => p.name.toLowerCase().includes(q) ||
         p.nameKn.includes(query.trim()) ||
         p.district.toLowerCase().includes(q) ||
         p.districtKn.includes(query.trim()) ||
         p.busStandName.toLowerCase().includes(q) ||
         p.division.toLowerCase().includes(q)
  );
}

export function getPlacesByDistrict(districtName: string): KarnatakaPlace[] {
  return ALL_KARNATAKA_PLACES.filter(
    p => p.district.toLowerCase() === districtName.toLowerCase() ||
         p.districtKn === districtName
  );
}

export function getPlacesByDivision(divisionName: string): KarnatakaPlace[] {
  return ALL_KARNATAKA_PLACES.filter(
    p => p.division.toLowerCase() === divisionName.toLowerCase()
  );
}

