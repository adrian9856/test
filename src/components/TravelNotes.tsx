import { motion } from "motion/react";
import { Info } from "lucide-react";
import { TravelNote } from "../types";

export function TravelNotes({ notes }: { notes: TravelNote[] }) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm border border-slate-100">
      <div className="flex items-center gap-2 mb-6">
        <Info className="h-5 w-5 text-pink-400" />
        <h3 className="text-lg font-bold text-slate-900">旅遊叮嚀</h3>
      </div>
      
      <div className="space-y-4">
        {notes.map((note, idx) => (
          <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <span className="text-xl shrink-0">{note.icon}</span>
            <p className="text-sm text-slate-600 leading-relaxed">{note.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
