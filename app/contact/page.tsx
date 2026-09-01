import React from 'react';
import type { Metadata } from 'next';
import { Phone, Mail, MapPin, MessageSquare, HelpCircle } from 'lucide-react';
import { ContactForm } from '@/components/contact/contact-form';
import { ScrollDrawnCurve } from '@/components/about/scroll-drawn-curve';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export const metadata: Metadata = {
  title: 'Contact WG Stuff Malta | Phone, WhatsApp & Locations',
  description:
    'Contact Work Stuff & Good Stuff Malta. Phone & WhatsApp: +356 7908 0602. Local stockists at Ta Spiru Car Wash and Quad Car Wash.',
};

export default function ContactPage() {
  const faqs = [
    {
      q: 'How fast is delivery across Malta & Gozo?',
      a: 'We dispatch all orders within 24 to 48 hours. Delivery is completely FREE across Malta and Gozo on all orders over €50 (standard fee is €4.50 for smaller orders).',
    },
    {
      q: 'Can I pick up products in person instead of waiting for delivery?',
      a: "Yes! Selected Work Stuff and Good Stuff products can be purchased and collected directly at our official partner locations: Ta' Spiru Car Wash in Fgura and Quad Car Wash at The Quad Central, Mrieħel.",
    },
    {
      q: 'What payment methods do you accept online?',
      a: 'Our checkout is powered by Stripe and supports Visa, Mastercard, Maestro, Apple Pay, Google Pay, and European debit cards in EUR (€) with 256-bit SSL encryption.',
    },
    {
      q: 'Are these products genuine European imports?',
      a: 'Yes, 100%. We are the direct authorized Malta importer and distributor for both Work Stuff (Poland) and Good Stuff (Poland). Every product is guaranteed genuine.',
    },
    {
      q: 'Do you offer commercial pricing for professional detailing studios?',
      a: 'Yes, we supply numerous detailing studios, mobile valeters, and bodyshop facilities across Malta. Contact us on WhatsApp (+356 7908 0602) or email workstuffmalta@gmail.com for trade terms.',
    },
  ];

  return (
    <div className="relative overflow-hidden py-12 bg-slate-50 min-h-screen text-slate-900">
      <ScrollDrawnCurve />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Title */}
        <ScrollReveal effect="settle" className="max-w-3xl space-y-3">
          <span className="text-xs font-heading font-black uppercase tracking-widest text-amber-700">
            Get In Touch With WG Stuff Malta
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-black uppercase text-slate-900 tracking-tight leading-tight">
            WE&apos;RE HERE TO HELP YOUR DETAIL.
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Have a question about which brush to use on delicate piano black trims, how to dial in
            Sour Shampoo dilution, or tracking your order? Reach out directly.
          </p>
        </ScrollReveal>

        {/* 3 Quick Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Card 1: WhatsApp Direct */}
          <ScrollReveal index={0} effect="settle"><a
            href="https://wa.me/35679080602"
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full p-6 rounded-3xl bg-emerald-50 border border-emerald-300 hover:border-emerald-500 transition-all group space-y-3 shadow-xs hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 group-hover:scale-105 transition-transform">
              <MessageSquare className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-heading font-black text-emerald-800 uppercase tracking-wider block">
              Fastest Response
            </span>
            <h3 className="font-heading text-xl font-black uppercase text-slate-900">WhatsApp Chat</h3>
            <p className="text-xs text-slate-700 font-bold">+356 7908 0602</p>
            <span className="text-xs text-emerald-700 font-bold group-hover:underline inline-block pt-1">
              Start WhatsApp Chat →
            </span>
          </a></ScrollReveal>

          {/* Card 2: Phone */}
          <ScrollReveal index={1} effect="settle"><a
            href="tel:+35679080602"
            className="block h-full p-6 rounded-3xl bg-white border border-slate-200 hover:border-amber-400 transition-all group space-y-3 shadow-xs hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 group-hover:scale-105 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-heading font-black text-slate-500 uppercase tracking-wider block">
              Direct Phone
            </span>
            <h3 className="font-heading text-xl font-black uppercase text-slate-900">Call Specialist</h3>
            <p className="text-xs text-slate-700 font-bold">+356 7908 0602</p>
            <span className="text-xs text-amber-700 font-bold group-hover:underline inline-block pt-1">
              Call Now →
            </span>
          </a></ScrollReveal>

          {/* Card 3: Email */}
          <ScrollReveal index={2} effect="settle"><a
            href="mailto:workstuffmalta@gmail.com"
            className="block h-full p-6 rounded-3xl bg-white border border-slate-200 hover:border-amber-400 transition-all group space-y-3 shadow-xs hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 group-hover:scale-105 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-heading font-black text-slate-500 uppercase tracking-wider block">
              Official Email
            </span>
            <h3 className="font-heading text-xl font-black uppercase text-slate-900">Email Support</h3>
            <p className="text-xs text-slate-700 font-bold truncate">workstuffmalta@gmail.com</p>
            <span className="text-xs text-amber-700 font-bold group-hover:underline inline-block pt-1">
              Send Email →
            </span>
          </a></ScrollReveal>
        </div>

        {/* Main Grid: Contact Form + Map & Physical Locations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form Left */}
          <ScrollReveal effect="settle" className="lg:col-span-7">
            <ContactForm />
          </ScrollReveal>

          {/* Physical Locations & Map Right */}
          <ScrollReveal index={1} effect="settle" className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-white border border-slate-200 p-8 space-y-6 shadow-sm">
              <h3 className="font-heading text-2xl font-black uppercase text-slate-900 tracking-tight">
                Malta Stockist Locations
              </h3>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <h4 className="font-heading text-base font-black uppercase text-slate-900">
                      Ta&apos; Spiru Car Wash (Official Hub)
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 pl-6">
                    Fgura, Malta • Full product range available for purchase and pro application.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <h4 className="font-heading text-base font-black uppercase text-slate-900">
                      Quad Car Wash
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 pl-6">
                    The Quad Central, Mrieħel, Malta • Select stock available.
                  </p>
                </div>
              </div>

              {/* Malta Map Visual Box */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
                <iframe
                  title="Malta Detailing Locations Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51785.49842407289!2d14.475249!3d35.889348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e4529f8f2d5fb%3A0x280544f8087955b2!2sMalta!5e0!3m2!1sen!2smt!4v1680000000000!5m2!1sen!2smt"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* FAQ Accordion Section */}
        <ScrollReveal effect="settle" className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 space-y-8 shadow-sm">
          <div className="max-w-2xl">
            <div className="flex items-center gap-1.5 text-xs font-heading font-black uppercase tracking-widest text-amber-700">
              <HelpCircle className="w-4 h-4" /> Got Questions?
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-black uppercase text-slate-900 tracking-tight mt-1">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <ScrollReveal
                key={idx}
                index={idx}
                effect="settle"
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2"
              >
                <h4 className="font-heading text-base font-black uppercase text-slate-900">
                  {faq.q}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">{faq.a}</p>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
