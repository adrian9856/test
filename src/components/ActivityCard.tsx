import { motion } from "motion/react";
import { MapPin, Clock, DollarSign, Info, Utensils, Car, Camera, Coffee, ChevronRight } from "lucide-react";
import { Activity } from "../types";
import { cn } from "../lib/utils";

const iconMap = {
  sightseeing: Camera,
  food: Utensils,
  transport: Car,
  leisure: Coffee,
};

export function ActivityCard({ activity, index }: { activity: Activity; index: number }) {
  const Icon = iconMap[activity.type] || Info;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative flex gap-6 pb-8 last:pb-0"
    >
      {/* Timeline Line */}
      <div className="absolute left-[19px] top-2 bottom-0 w-px bg-slate-200 group-last:hidden" />

      {/* Icon Circle */}
      <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm ring-4 ring-slate-50 transition-colors group-hover:border-primary group-hover:bg-primary/5">
        <Icon className="h-5 w-5 text-slate-500 group-hover:text-primary" />
      </div>

      {/* Content */}
      <div className="flex-1 pt-1">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-primary">{activity.time}</span>
            <h4 className="text-lg font-medium text-slate-900">{activity.title}</h4>
          </div>
          {activity.cost && (
            <div className="flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
              <DollarSign className="h-3 w-3" />
              {activity.cost}
            </div>
          )}
        </div>
        
        <p className="mt-1 text-slate-600 leading-relaxed">{activity.description}</p>
        
        {activity.location && (
          <div className="mt-2 flex items-center justify-between gap-1 text-sm text-slate-400">
            <div className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              <span>{activity.location}</span>
            </div>
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activity.location + " " + activity.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-pink-400 hover:text-pink-500 transition-colors flex items-center gap-1"
            >
              查看地圖
              <ChevronRight className="h-3 w-3" />
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}
