import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { RefreshCw, TrendingUp } from "lucide-react";

export function CurrencyConverter() {
  const [twd, setTwd] = useState<string>("100");
  const [krw, setKrw] = useState<number>(0);
  const rate = 42.5; // Approximate rate: 1 TWD = 42.5 KRW

  useEffect(() => {
    const val = parseFloat(twd);
    if (!isNaN(val)) {
      setKrw(val * rate);
    } else {
      setKrw(0);
    }
  }, [twd]);

  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">匯率換算</h3>
        <TrendingUp className="h-4 w-4 text-primary" />
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="text-xs font-semibold text-slate-500 mb-1 block">台幣 (TWD)</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
            <input
              type="number"
              value={twd}
              onChange={(e) => setTwd(e.target.value)}
              className="w-full rounded-xl bg-slate-50 pl-8 pr-4 py-3 text-sm font-bold text-slate-900 outline-none ring-primary focus:ring-2"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="rounded-full bg-primary/10 p-2">
            <RefreshCw className="h-4 w-4 text-primary" />
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-500 mb-1 block">韓元 (KRW)</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₩</span>
            <div className="w-full rounded-xl bg-primary/5 pl-8 pr-4 py-3 text-sm font-bold text-primary">
              {krw.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </div>
          </div>
        </div>
        
        <p className="text-[10px] text-slate-400 text-center italic">
          預估匯率: 1 TWD ≈ {rate} KRW
        </p>
      </div>
    </div>
  );
}
