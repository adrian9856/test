import { motion } from "motion/react";
import { Plane, ArrowRight, MapPin, Clock } from "lucide-react";
import { Flight } from "../types";

export function FlightDetails({ flight, title }: { flight: Flight; title: string }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-100">
      <div className="flex items-center gap-2 mb-4">
        <Plane className="h-4 w-4 text-pink-400" />
        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">{title}</h3>
      </div>
      
      <div className="flex items-center justify-between gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-slate-900">{flight.departureAirport}</div>
          <div className="text-xs font-medium text-slate-400">{flight.departureTime}</div>
        </div>
        
        <div className="flex-1 flex flex-col items-center gap-1">
          <div className="text-[10px] font-bold text-pink-400 uppercase tracking-tighter">{flight.airline} {flight.number}</div>
          <div className="w-full h-px bg-slate-100 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2">
              <ArrowRight className="h-3 w-3 text-slate-300" />
            </div>
          </div>
          {flight.terminal && (
            <div className="text-[10px] font-medium text-slate-400">第 {flight.terminal} 航廈</div>
          )}
        </div>

        <div className="text-center">
          <div className="text-2xl font-bold text-slate-900">{flight.arrivalAirport}</div>
          <div className="text-xs font-medium text-slate-400">{flight.arrivalTime}</div>
        </div>
      </div>
    </div>
  );
}
