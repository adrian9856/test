import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Calendar, Plane, ChevronRight, Share2, Download, Edit3, Sparkles } from "lucide-react";
import { Itinerary } from "./types";
import { MOCK_ITINERARY } from "./mockData";
import { DayView } from "./components/DayView";
import { CurrencyConverter } from "./components/CurrencyConverter";
import { FlightDetails } from "./components/FlightDetails";
import { PackingList } from "./components/PackingList";
import { TravelNotes } from "./components/TravelNotes";
import { SakuraEffect } from "./components/SakuraEffect";
import { cn } from "./lib/utils";

export default function App() {
  const [itinerary, setItinerary] = useState<Itinerary>(MOCK_ITINERARY);
  const [activeDay, setActiveDay] = useState(0);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("連結已複製到剪貼簿！");
  };

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
      {/* Animated Background Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-64 w-64 rounded-full bg-pink-100/20 blur-3xl"
            animate={{
              x: [Math.random() * 100, Math.random() * 500, Math.random() * 100],
              y: [Math.random() * 100, Math.random() * 500, Math.random() * 100],
            }}
            transition={{
              duration: 25 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <header className="relative h-[65vh] min-h-[550px] overflow-hidden bg-slate-900 z-10">
        {/* Sakura Petals Effect */}
        <SakuraEffect />

        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 opacity-70"
        >
          <img 
            src={`https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop`}
            alt="Sakura Trees"
            className="h-full w-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        
        <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative inline-block">
              <motion.h1 
                className="mb-6 text-6xl font-extrabold text-white md:text-8xl tracking-tighter drop-shadow-2xl font-display"
                initial={{ letterSpacing: "0.1em" }}
                animate={{ letterSpacing: "-0.02em" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                {itinerary.destination}
              </motion.h1>
              {/* Decorative line under title */}
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 1 }}
                className="h-1.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent absolute bottom-4 left-0"
              />
            </div>

            <div className="flex items-center justify-center gap-8 text-slate-100 mt-6">
              <div className="flex items-center gap-2 group">
                <Calendar className="h-6 w-6 text-pink-300 group-hover:scale-110 transition-transform" />
                <span className="text-xl font-bold">{itinerary.duration} 天</span>
              </div>
              <div className="h-2 w-2 rounded-full bg-pink-400/50" />
              <div className="flex items-center gap-2 group">
                <MapPin className="h-6 w-6 text-pink-300 group-hover:scale-110 transition-transform" />
                <span className="text-xl font-bold">南韓</span>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Sidebar Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Action Buttons */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-wrap gap-3"
              >
                <button 
                  onClick={handleShare}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-pink-500 px-4 py-3 text-sm font-bold text-white transition-all hover:bg-pink-600 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-pink-200"
                >
                  <Share2 className="h-4 w-4" />
                  分享行程
                </button>
                <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-600 transition-all hover:bg-slate-50 hover:scale-[1.02] active:scale-[0.98]">
                  <Download className="h-4 w-4" />
                </button>
              </motion.div>

              {/* Flight Details */}
              {itinerary.flights?.outbound && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <FlightDetails flight={itinerary.flights.outbound} title="去程班機" />
                </motion.div>
              )}
              {itinerary.flights?.return && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <FlightDetails flight={itinerary.flights.return} title="回程班機" />
                </motion.div>
              )}

              {/* Currency Converter */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <CurrencyConverter />
              </motion.div>
            </div>
          </div>

          {/* Itinerary Accordion */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="px-4 text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">行程時間軸</h3>
            
            {itinerary.days.map((day, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="overflow-hidden rounded-3xl bg-white shadow-sm border border-slate-100"
              >
                <button
                  onClick={() => setActiveDay(activeDay === idx ? -1 : idx)}
                  className={cn(
                    "flex w-full items-center justify-between p-6 transition-all",
                    activeDay === idx ? "bg-pink-50" : "hover:bg-slate-50"
                  )}
                >
                  <div className="flex flex-col items-start text-left">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-pink-400">第 {day.day} 天</span>
                    <span className="font-bold text-lg text-slate-900">{day.theme}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: activeDay === idx ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className={cn(
                      "h-5 w-5 transition-colors",
                      activeDay === idx ? "text-pink-500" : "text-slate-400"
                    )} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {activeDay === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-6 md:p-8 border-t border-slate-100 bg-white">
                        <DayView dayPlan={day} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}

            {/* Packing List & Notes */}
            <div className="grid grid-cols-1 gap-8 pt-8">
              {itinerary.packingList && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <PackingList packingList={itinerary.packingList} />
                </motion.div>
              )}
              {itinerary.travelNotes && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <TravelNotes notes={itinerary.travelNotes} />
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-200 bg-white py-12 mt-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
            您的專屬南韓旅遊夥伴
          </p>
          <p className="mt-4 text-xs text-slate-400">
            © 2026 為現代探險者精心打造。
          </p>
        </div>
      </footer>
    </div>
  );
}
