import { motion } from "motion/react";
import { DayPlan } from "../types";
import { ActivityCard } from "./ActivityCard";

export function DayView({ dayPlan }: { dayPlan: DayPlan }) {
  return (
    <div className="space-y-8">
      <div className="relative">
        {dayPlan.activities.map((activity, idx) => (
          <ActivityCard key={idx} activity={activity} index={idx} />
        ))}
      </div>
    </div>
  );
}
