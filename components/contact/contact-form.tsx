'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Check, Loader2 } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'product-inquiry',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate inquiry submission
    await new Promise((resolve) => setTimeout(resolve, 900));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'product-inquiry',
      message: '',
    });
  };

  return (
    <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 shadow-sm">
      <div className="mb-6">
        <h3 className="font-heading text-2xl font-black uppercase text-slate-900 tracking-tight">
          Send Us a Message
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Have a question about product compatibility or bulk studio orders? Fill out the form below.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white mx-auto shadow-md">
              <Check className="w-6 h-6 stroke-[3]" />
            </div>
            <h4 className="font-heading text-xl font-black uppercase text-slate-900">
              Message Received!
            </h4>
            <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
              Thank you for contacting WG Stuff Malta. Our team will get back to you within a few
              hours. For faster responses, feel free to WhatsApp us directly.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-4 px-4 py-2 rounded-xl bg-white border border-slate-300 text-xs font-bold text-slate-700 hover:text-slate-900 uppercase tracking-wider shadow-xs"
            >
              Send Another Inquiry
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Mario Borg"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. mario@example.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+356 7900 0000"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Topic / Inquiry Type
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 focus:outline-none focus:border-amber-500 transition-colors"
                >
                  <option value="product-inquiry">Product Advice / Application</option>
                  <option value="order-status">Order Status / Delivery</option>
                  <option value="studio-bulk">Commercial Studio / Bulk Pricing</option>
                  <option value="other">General Question</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Your Message *
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="How can we assist you with your car detailing needs?"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex h-12 items-center justify-center gap-2 rounded-xl bg-brand-amber hover:bg-amber-400 text-slate-950 font-heading font-black text-xs uppercase tracking-wider shadow-amber-glow transition-all duration-200 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Sending Message...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Send Direct Inquiry
                </>
              )}
            </button>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
}
