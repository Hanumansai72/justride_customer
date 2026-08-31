import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'How does JustRide connect to my motorcycle navigation?',
      a: 'JustRide pairs to your iPhone or Android smartphone via Bluetooth 5.3 Low Energy (BLE). You simply select your destination in the JustRide companion app, put your phone in your pocket or backpack, and turn-by-turn vectors and distances are instantly streamed to the handlebar display.',
    },
    {
      q: 'Will my phone battery drain quickly while riding?',
      a: 'No! Because your smartphone screen stays completely turned off inside your pocket and BLE uses ultra-low transmission wattage, your phone consumes less than 4-5% battery over an entire 8-hour touring day.',
    },
    {
      q: 'Is JustRide completely waterproof in heavy rain?',
      a: 'Yes. JustRide is IP67 rated with hermetically sealed gaskets and hydrophobic optical glass coating. It operates smoothly in pouring monsoon rain, mud, and dust storms.',
    },
    {
      q: 'Does it fit my motorcycle handlebar diameter?',
      a: 'Every JustRide package includes CNC aluminum universal mount adapters fitting 22mm (7/8"), 28mm (1-1/8" fat bars), and 32mm (1-1/4") cruiser handlebars, as well as an optional mirror stem clamp.',
    },
    {
      q: 'Do I need a separate cellular SIM card or subscription?',
      a: 'No subscription or SIM card is required. JustRide utilizes your smartphone GPS and offline maps without any monthly charges.',
    },
  ];

  return (
    <section className="px-margin-mobile md:px-margin-desktop py-20 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <span className="font-label-caps text-xs text-primary font-bold uppercase tracking-widest block mb-2">
          Frequently Asked Questions
        </span>
        <h2 className="font-headline-xl text-headline-xl text-on-surface font-extrabold tracking-tight">
          Everything You Need to Know
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-surface-container/80 border border-outline-variant/40 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                className="w-full p-5 text-left flex justify-between items-center gap-4 hover:bg-surface-container-high/40 transition-colors"
              >
                <span className="font-headline-md text-base md:text-lg font-semibold text-on-surface">
                  {faq.q}
                </span>
                <span
                  className={`material-symbols-outlined text-primary text-xl transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                >
                  expand_more
                </span>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-5 text-sm text-on-surface-variant leading-relaxed border-t border-outline-variant/10 pt-3"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
