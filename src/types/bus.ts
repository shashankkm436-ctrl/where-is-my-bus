export type BusBrand =
  | 'Ambari Utsav'
  | 'Airavat Club Class'
  | 'Flybus'
  | 'Rajahamsa Executive'
  | 'Karnataka Sarige';

export type BusTripStatus =
  | 'ON_TIME'
  | 'SLIGHT_DELAY'
  | 'DELAYED'
  | 'ARRIVED'
  | 'BOARDING'
  | 'IN_TRANSIT';

export interface BusCrew {
  driverName: string;
  driverPhone: string;
  conductorName: string;
  conductorPhone: string;
  depot: string;
}

export interface BusStop {
  id: string;
  name: string;
  nameKn: string;
  city: string;
  scheduledTime: string;
  estimatedTime: string;
  platform: string;
  status: 'DEPARTED' | 'CURRENT' | 'UPCOMING';
  distanceFromStartKm: number;
  lat: number;
  lng: number;
  haltMinutes: number;
}

export interface BusService {
  id: string;
  serviceNumber: string;
  busNumber: string;
  brand: BusBrand;
  brandKn: string;
  serviceClass: string;
  serviceClassKn: string;
  fromCity: string;
  fromCityKn: string;
  fromStation: string;
  toCity: string;
  toCityKn: string;
  toStation: string;
  departureTime: string;
  arrivalTime: string;
  totalDistanceKm: number;
  fare: number;
  availableSeats: number;
  totalSeats: number;
  currentStatus: BusTripStatus;
  delayMinutes: number;
  currentSpeedKmH: number;
  progressPercent: number;
  nextStopId: string;
  crew: BusCrew;
  stops: BusStop[];
  routePath: [number, number][]; // [lat, lng]
  amenities: string[];
  pnrDemo: string;
  vehicleModel: string;
}

export interface StationScheduleItem {
  id: string;
  serviceNumber: string;
  busNumber: string;
  brand: BusBrand;
  origin: string;
  destination: string;
  destinationKn: string;
  via: string;
  scheduledTime: string;
  estimatedTime: string;
  platform: string;
  status: BusTripStatus;
  delayMinutes: number;
  type: 'DEPARTURE' | 'ARRIVAL';
  busServiceId: string;
}

export interface PNRTicket {
  pnr: string;
  passengerName: string;
  passengerPhone: string;
  seats: string[];
  serviceNumber: string;
  busServiceId: string;
  fromStation: string;
  toStation: string;
  boardingPoint: string;
  boardingTime: string;
  journeyDate: string;
  totalFare: number;
  status: 'CONFIRMED' | 'BOARDED' | 'CANCELLED';
}
