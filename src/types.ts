export interface Activity {
  time: string;
  title: string;
  description: string;
  location?: string;
  cost?: string;
  type: 'sightseeing' | 'food' | 'transport' | 'leisure';
}

export interface DayPlan {
  day: number;
  date?: string;
  theme: string;
  activities: Activity[];
}

export interface Flight {
  number: string;
  airline: string;
  departureTime: string;
  arrivalTime: string;
  departureAirport: string;
  arrivalAirport: string;
  terminal?: string;
}

export interface PackingItem {
  category: string;
  items: string[];
}

export interface TravelNote {
  icon: string;
  text: string;
}

export interface Itinerary {
  destination: string;
  duration: number;
  summary: string;
  days: DayPlan[];
  flights?: {
    outbound?: Flight;
    return?: Flight;
  };
  packingList?: PackingItem[];
  travelNotes?: TravelNote[];
}
