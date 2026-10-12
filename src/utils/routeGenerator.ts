import { BusService, BusStop, BusBrand } from '../types/bus';
import { ALL_KARNATAKA_PLACES, findPlaceByName, KarnatakaPlace } from '../data/karnatakaPlaces';

// Calculate approximate haversine distance in km
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  // Multiply by road curvature factor (~1.3 for Karnataka terrain)
  return Math.round(R * c * 1.32);
}

// Generate realistic intermediate stops between any origin and destination
function generateIntermediateStops(
  origin: KarnatakaPlace,
  destination: KarnatakaPlace,
  totalDistanceKm: number
): KarnatakaPlace[] {
  // Find places roughly between origin and destination
  const minLat = Math.min(origin.lat, destination.lat);
  const maxLat = Math.max(origin.lat, destination.lat);
  const minLng = Math.min(origin.lng, destination.lng);
  const maxLng = Math.max(origin.lng, destination.lng);

  const candidates = ALL_KARNATAKA_PLACES.filter(
    (p) =>
      p.id !== origin.id &&
      p.id !== destination.id &&
      p.lat >= minLat - 0.25 &&
      p.lat <= maxLat + 0.25 &&
      p.lng >= minLng - 0.25 &&
      p.lng <= maxLng + 0.25
  );

  // Sort candidates by projected distance along vector from origin to destination
  const dx = destination.lng - origin.lng;
  const dy = destination.lat - origin.lat;
  const lenSq = dx * dx + dy * dy || 1;

  const scored = candidates.map((p) => {
    const t = ((p.lng - origin.lng) * dx + (p.lat - origin.lat) * dy) / lenSq;
    // Perpendicular distance error
    const perpX = origin.lng + t * dx - p.lng;
    const perpY = origin.lat + t * dy - p.lat;
    const perpDist = Math.sqrt(perpX * perpX + perpY * perpY);
    return { place: p, t, perpDist };
  });

  // Filter those reasonably close to the line and between 0.15 and 0.85 progress
  const filtered = scored
    .filter((s) => s.t > 0.12 && s.t < 0.88 && s.perpDist < 0.45)
    .sort((a, b) => a.t - b.t);

  // Take up to 3 intermediate stops
  return filtered.slice(0, 3).map((s) => s.place);
}

export function generateDynamicServicesForRoute(
  originName: string,
  destName: string
): BusService[] {
  const origin = findPlaceByName(originName) || ALL_KARNATAKA_PLACES[0];
  const dest = findPlaceByName(destName) || ALL_KARNATAKA_PLACES[10];

  const totalDistance = Math.max(45, calculateDistance(origin.lat, origin.lng, dest.lat, dest.lng));
  const intermediates = generateIntermediateStops(origin, dest, totalDistance);

  const classes: {
    brand: BusBrand;
    brandKn: string;
    serviceClass: string;
    serviceClassKn: string;
    fareRatePerKm: number;
    model: string;
    depTime: string;
    arrHourDelta: number;
    seats: number;
  }[] = [
    {
      brand: 'Airavat Club Class',
      brandKn: 'ಐರಾವತ ಕ್ಲಬ್ ಕ್ಲಾಸ್',
      serviceClass: 'Multi-Axle AC Semi-Sleeper (Volvo B11R)',
      serviceClassKn: 'ಮಲ್ಟಿ-ಆಕ್ಸಲ್ ಎಸಿ ಸೆಮಿ-ಸ್ಲೀಪರ್',
      fareRatePerKm: 2.4,
      model: 'Volvo B11R Multi-Axle Euro-VI',
      depTime: '07:15',
      arrHourDelta: Math.max(1.5, totalDistance / 55),
      seats: 48,
    },
    {
      brand: 'Karnataka Sarige',
      brandKn: 'ಕರ್ನಾಟಕ ಸಾರಿಗೆ',
      serviceClass: 'Point-to-Point Express Red Bus',
      serviceClassKn: 'ಎಕ್ಸ್‌ಪ್ರೆಸ್ ಕೆಂಪು ಬಸ್ (ಶಕ್ತಿ ಯೋಜನೆ ಅನ್ವಯ)',
      fareRatePerKm: 1.4,
      model: 'Ashok Leyland Viking BS6 Express',
      depTime: '09:00',
      arrHourDelta: Math.max(1.8, totalDistance / 48),
      seats: 52,
    },
    {
      brand: 'Rajahamsa Executive',
      brandKn: 'ರಾಜಹಂಸ ಎಕ್ಸಿಕ್ಯುಟಿವ್',
      serviceClass: 'Non-AC Ultra Deluxe 2+2 Pushback',
      serviceClassKn: 'ನಾನ್-ಎಸಿ ಅಲ್ಟ್ರಾ ಡೀಲಕ್ಸ್ ಪುಶ್‌ಬ್ಯಾಕ್',
      fareRatePerKm: 1.8,
      model: 'Tata Marcopolo BS6 Executive',
      depTime: '13:30',
      arrHourDelta: Math.max(1.6, totalDistance / 50),
      seats: 44,
    },
    {
      brand: 'Ambari Utsav',
      brandKn: 'ಅಂಬಾರಿ ಉತ್ಸವ',
      serviceClass: 'Volvo 9600 AC Luxury Sleeper',
      serviceClassKn: 'ವೋಲ್ವೋ 9600 ಎಸಿ ಸ್ಲೀಪರ್',
      fareRatePerKm: 3.1,
      model: 'Volvo 9600 15M Super-Luxury Sleeper',
      depTime: '21:30',
      arrHourDelta: Math.max(1.5, totalDistance / 55),
      seats: 40,
    },
  ];

  return classes.map((cls, idx) => {
    const fare = Math.round(totalDistance * cls.fareRatePerKm);
    const busRegDigits = 1000 + ((origin.name.length * 137 + dest.name.length * 79 + idx * 311) % 8999);
    const busNumber = `KA-09-F-${busRegDigits}`;
    const serviceCode = `${cls.depTime.replace(':', '')}${origin.name.slice(0, 3).toUpperCase()}-${dest.name.slice(0, 3).toUpperCase()}`;

    // build stops
    const stopsList: BusStop[] = [];

    // Origin
    stopsList.push({
      id: `stop-${idx}-origin`,
      name: origin.busStandName,
      nameKn: origin.busStandNameKn,
      city: origin.name,
      scheduledTime: cls.depTime,
      estimatedTime: cls.depTime,
      platform: `Bay 0${(idx % 6) + 1}`,
      status: 'DEPARTED',
      distanceFromStartKm: 0,
      lat: origin.lat,
      lng: origin.lng,
      haltMinutes: 10,
    });

    // Intermediates
    intermediates.forEach((inter, iIdx) => {
      const frac = (iIdx + 1) / (intermediates.length + 1);
      const stopDist = Math.round(totalDistance * frac);
      const minutesFromStart = Math.round((stopDist / 50) * 60);
      const [depH, depM] = cls.depTime.split(':').map(Number);
      const totalM = depH * 60 + depM + minutesFromStart;
      const stopH = String(Math.floor(totalM / 60) % 24).padStart(2, '0');
      const stopMStr = String(totalM % 60).padStart(2, '0');
      const timeStr = `${stopH}:${stopMStr}`;

      stopsList.push({
        id: `stop-${idx}-inter-${inter.id}`,
        name: inter.busStandName,
        nameKn: inter.busStandNameKn,
        city: inter.name,
        scheduledTime: timeStr,
        estimatedTime: timeStr,
        platform: `Bay 0${((iIdx + idx) % 4) + 1}`,
        status: iIdx === 0 ? 'CURRENT' : 'UPCOMING',
        distanceFromStartKm: stopDist,
        lat: inter.lat,
        lng: inter.lng,
        haltMinutes: 5,
      });
    });

    // Calculate arrival time
    const totalMinutes = Math.round(cls.arrHourDelta * 60);
    const [dH, dM] = cls.depTime.split(':').map(Number);
    const arrTotalM = dH * 60 + dM + totalMinutes;
    const arrH = String(Math.floor(arrTotalM / 60) % 24).padStart(2, '0');
    const arrMStr = String(arrTotalM % 60).padStart(2, '0');
    const arrTime = `${arrH}:${arrMStr}`;

    // Destination
    stopsList.push({
      id: `stop-${idx}-dest`,
      name: dest.busStandName,
      nameKn: dest.busStandNameKn,
      city: dest.name,
      scheduledTime: arrTime,
      estimatedTime: arrTime,
      platform: `Platform 0${((idx + 2) % 8) + 1}`,
      status: 'UPCOMING',
      distanceFromStartKm: totalDistance,
      lat: dest.lat,
      lng: dest.lng,
      haltMinutes: 0,
    });

    // Build route coordinates path
    const routeCoords: [number, number][] = [
      [origin.lat, origin.lng],
      ...intermediates.map((it) => [it.lat, it.lng] as [number, number]),
      [dest.lat, dest.lng],
    ];

    return {
      id: `gen-${origin.id}-${dest.id}-${cls.brand.toLowerCase().replace(/\s+/g, '-')}`,
      serviceNumber: serviceCode,
      busNumber: busNumber,
      brand: cls.brand,
      brandKn: cls.brandKn,
      serviceClass: cls.serviceClass,
      serviceClassKn: cls.serviceClassKn,
      fromCity: origin.name,
      fromCityKn: origin.nameKn,
      fromStation: origin.busStandName,
      toCity: dest.name,
      toCityKn: dest.nameKn,
      toStation: dest.busStandName,
      departureTime: cls.depTime,
      arrivalTime: arrTime,
      totalDistanceKm: totalDistance,
      fare: fare,
      availableSeats: Math.max(4, Math.floor(cls.seats * 0.35) - idx * 2),
      totalSeats: cls.seats,
      currentStatus: 'ON_TIME',
      delayMinutes: 0,
      currentSpeedKmH: 68,
      progressPercent: 35,
      nextStopId: stopsList[1]?.id || stopsList[0].id,
      stops: stopsList,
      routePath: routeCoords,
      amenities:
        cls.brand === 'Ambari Utsav'
          ? ['Individual Sleeper Berths', 'Air Conditioned', 'USB-C Charging', 'Privacy Curtains', 'CCTV']
          : cls.brand === 'Airavat Club Class'
          ? ['Pushback Velvet Seats', 'Dual AC', 'Water Bottle', 'Charging Socket', 'GPS Live']
          : ['Safe & Sanitized', 'Express Connectivity', 'Luggage Compartment', 'Trained Drivers'],
      pnrDemo: `KSRTC${busRegDigits}9`,
      vehicleModel: cls.model,
      crew: {
        driverName: 'Suresh Kumar',
        driverPhone: '+91 94808 21450',
        conductorName: 'Manjunath B.',
        conductorPhone: '+91 94808 21451',
        depot: `${origin.district} Central Depot`,
      },
    };
  });
}
