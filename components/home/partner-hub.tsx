import React from 'react';
import { MapPin, Phone, Sparkles } from 'lucide-react';

export function PartnerHub() {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-12 relative overflow-hidden shadow-sm">
          {/* Ambient Light */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-800 text-xs font-heading font-black uppercase tracking-wider shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Malta Partner Stockists & Studios
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl font-black uppercase text-slate-900 tracking-tight leading-tight">
                EXPERIENCE THE GEAR IN PERSON ACROSS MALTA
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                Prefer to test the softness of an Albino brush or pick up detailing chemicals
                instantly without waiting for delivery? Visit our authorized Malta partner locations
                or order online for fast island-wide shipping.
              </p>

              <div className="pt-2">
                <a
                  href="https://wa.me/35679080602"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-black text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4" /> Message on WhatsApp (+356 7908 0602)
                </a>
              </div>
            </div>

            {/* Right Location Cards */}
            <div className="lg:col-span-6 space-y-4">
              {/* Location 1: Ta' Spiru Car Wash */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 transition-all group shadow-xs hover:shadow-md">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-amber-500" />
                      <h4 className="font-heading text-lg font-black uppercase text-slate-900 group-hover:text-amber-700 transition-colors">
                        Ta&apos; Spiru Car Wash
                      </h4>
                    </div>
                    <p className="text-xs text-slate-500 flex items-center gap-1.5 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                      Fgura, Malta • Pro Detailing Studio & Full Product Line
                    </p>
                  </div>

                  <span className="px-2.5 py-1 rounded-full bg-amber-50 border border-amber-300 text-[10px] font-bold text-amber-800 uppercase tracking-wider">
                    Official Hub
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-3 border-t border-slate-100 pt-3">
                  Ta&apos; Spiru is a premier stockist using Work Stuff & Good Stuff daily for
                  high-end detailing, ceramic coatings, and paint correction.
                </p>
              </div>

              {/* Location 2: Quad Car Wash */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 transition-all group shadow-xs hover:shadow-md">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-amber-500" />
                      <h4 className="font-heading text-lg font-black uppercase text-slate-900 group-hover:text-amber-700 transition-colors">
                        Quad Car Wash
                      </h4>
                    </div>
                    <p className="text-xs text-slate-500 flex items-center gap-1.5 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                      The Quad Central, Mrieħel, Malta
                    </p>
                  </div>

                  <span className="px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-bold text-slate-700 uppercase tracking-wider">
                    Retail Stockist
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-3 border-t border-slate-100 pt-3">
                  Conveniently purchase selected Work Stuff wash mitts, drying towels, and Good
                  Stuff maintenance chemicals at The Quad Central business hub.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
