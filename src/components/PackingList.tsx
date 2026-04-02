import { motion } from "motion/react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { PackingItem } from "../types";

export function PackingList({ packingList }: { packingList: PackingItem[] }) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm border border-slate-100">
      <div className="flex items-center gap-2 mb-6">
        <CheckCircle2 className="h-5 w-5 text-pink-400" />
        <h3 className="text-lg font-bold text-slate-900">行李清單</h3>
      </div>
      
      <div className="space-y-6">
        {packingList.map((category, idx) => (
          <div key={idx}>
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">{category.category}</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {category.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                  <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
