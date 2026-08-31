import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="py-24 bg-slate-50 min-h-[70vh] flex items-center justify-center text-slate-900">
      <div className="max-w-md w-full mx-auto px-4 text-center space-y-6">
        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white border border-slate-200 text-amber-600 mx-auto shadow-sm">
          <Compass className="h-10 w-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-heading font-black uppercase tracking-widest text-amber-700">
            404 • Page Not Found
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-black uppercase text-slate-900 tracking-tight">
            OFF THE TRACK
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            The detailing product or category page you are looking for has moved or does not exist.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-amber text-slate-950 font-heading font-black text-xs uppercase tracking-wider hover:bg-amber-400 shadow-amber-glow transition-all flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Home
          </Link>
          <Link
            href="/work-stuff"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-slate-900 border border-slate-300 hover:border-slate-400 font-heading font-black text-xs uppercase tracking-wider transition-all shadow-xs"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}
