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

export interface Itinerary {
  destination: string;
  duration: number;
  summary: string;
  days: DayPlan[];
}
