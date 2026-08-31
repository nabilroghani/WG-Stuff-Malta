'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const currentImage =
    images[selectedIndex] ||
    images[0] ||
    'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1000&q=85';

  return (
    <div className="flex flex-col gap-4">
      {/* Main Large Image Display */}
      <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-white border border-slate-200 group shadow-sm">
        <motion.div
          key={selectedIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="relative h-full w-full bg-slate-100"
        >
          <Image
            src={currentImage}
            alt={`${productName} view ${selectedIndex + 1}`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className={cn(
              'object-cover object-center transition-transform duration-500',
              isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in group-hover:scale-105'
            )}
            onClick={() => setIsZoomed(!isZoomed)}
          />
        </motion.div>

        {/* Zoom Hint Toggle */}
        <button
          onClick={() => setIsZoomed(!isZoomed)}
          aria-label="Toggle zoom"
          className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 text-slate-700 hover:text-amber-600 transition-colors shadow-sm"
        >
          <Maximize2 className="h-4 w-4" />
        </button>
      </div>

      {/* Thumbnail Track */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSelectedIndex(idx);
                setIsZoomed(false);
              }}
              className={cn(
                'relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl border-2 transition-all shadow-xs',
                selectedIndex === idx
                  ? 'border-amber-500 shadow-sm scale-95'
                  : 'border-slate-200 hover:border-slate-400 opacity-70 hover:opacity-100'
              )}
            >
              <Image src={img} alt={`thumbnail ${idx + 1}`} fill className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
