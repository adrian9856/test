import { motion } from "motion/react";
import { DayPlan } from "../types";
import { ActivityCard } from "./ActivityCard";

export function DayView({ dayPlan }: { dayPlan: DayPlan }) {
  return (
    <div className="space-y-8">
      <div className="flex items-baseline gap-4">
        <h2 className="text-3xl font-bold text-slate-900">Day {dayPlan.day}</h2>
        <span className="text-lg font-medium text-slate-500">{dayPlan.theme}</span>
      </div>
      
      <div className="relative">
        {dayPlan.activities.map((activity, idx) => (
          <ActivityCard key={idx} activity={activity} index={idx} />
        ))}
      </div>
    </div>
  );
}
