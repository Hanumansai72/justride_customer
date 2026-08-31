import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'partnership',
    message: '',
  });

  const [formState, setFormState] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('loading');

    setTimeout(() => {
      // Simulate successful transmission
      setFormState('success');
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'partnership',
      message: '',
    });
    setFormState('idle');
  };

  return (
    <div className="w-full flex-grow relative overflow-hidden py-16 md:py-24 px-margin-mobile md:px-margin-desktop">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/3 pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-secondary-container/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-14 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono font-bold uppercase mb-4">
            Direct Communication Channels
          </div>
          <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-surface mb-3 tracking-tight font-extrabold leading-tight">
            Let’s Build the Future of <br className="hidden md:block" />
            <span className="text-primary text-glow">Connected Riding.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Whether you're inquiring about our enterprise solutions, partnership opportunities, dealership networks, or just want to talk shop, our team is ready to engage.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Contact Info (4 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            {/* Direct Lines */}
            <div className="glass-panel p-6 md:p-7 rounded-2xl flex flex-col gap-5 shadow-lg border border-outline-variant/40 hover:border-primary/40 transition-colors">
              <h3 className="font-headline-md text-xl font-bold text-on-surface">Direct Lines</h3>

              <div className="flex items-start gap-3.5 group">
                <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-on-primary transition-all">
                  <span className="material-symbols-outlined text-xl" data-icon="mail">mail</span>
                </div>
                <div>
                  <div className="font-label-caps text-[11px] text-on-surface-variant mb-0.5 tracking-wider font-bold">
                    GENERAL INQUIRIES
                  </div>
                  <a
                    className="font-body-md text-sm md:text-base font-semibold text-on-surface hover:text-primary transition-colors block"
                    href="mailto:hello@justride.io"
                  >
                    hello@justride.io
                  </a>
                </div>
              </div>

              <div className="h-px w-full bg-outline-variant/40"></div>

              <div className="flex items-start gap-3.5 group">
                <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-on-primary transition-all">
                  <span className="material-symbols-outlined text-xl" data-icon="business_center">business_center</span>
                </div>
                <div>
                  <div className="font-label-caps text-[11px] text-on-surface-variant mb-0.5 tracking-wider font-bold">
                    BUSINESS & PARTNERSHIPS
                  </div>
                  <a
                    className="font-body-md text-sm md:text-base font-semibold text-on-surface hover:text-primary transition-colors block"
                    href="mailto:business@justride.io"
                  >
                    business@justride.io
                  </a>
                </div>
              </div>
            </div>

            {/* Global HQ Card */}
            <div className="glass-panel p-6 md:p-7 rounded-2xl shadow-lg border border-outline-variant/40 hover:border-primary/40 transition-colors">
              <div className="font-label-caps text-[11px] text-primary mb-3 font-bold tracking-wider uppercase flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                GLOBAL HARDWARE HQ
              </div>
              <div className="relative w-full h-44 rounded-xl overflow-hidden mb-4 border border-outline-variant/40 bg-surface-container-high flex items-center justify-center group">
                {/* Visual Placeholder for Map */}
                <div className="absolute inset-0 bg-[radial-gradient(#4be277_1px,transparent_1px)] [background-size:16px_16px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary flex items-center justify-center text-primary mb-2 shadow-glow-sm">
                    <span className="material-symbols-outlined text-2xl" data-icon="location_on">location_on</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-on-surface">R&D Lab & Engineering Hub</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-highest/90 via-transparent to-transparent"></div>
              </div>
              <p className="font-body-md text-sm text-on-surface leading-relaxed">
                <strong className="text-on-surface font-semibold">JustRide Technologies</strong><br />
                Financial District & Electronic City<br />
                Hyderabad & Bangalore, India
              </p>
            </div>
          </motion.div>

          {/* Right: Contact Form (8 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <div className="glass-panel p-7 md:p-10 rounded-3xl h-full relative border border-outline-variant/50 shadow-2xl overflow-hidden">
              {/* Form State Overlays */}
              <AnimatePresence>
                {/* Loading State */}
                {formState === 'loading' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-surface/90 backdrop-blur-md z-20 flex flex-col items-center justify-center rounded-3xl p-6"
                  >
                    <div className="w-14 h-14 rounded-full border-3 border-primary/20 border-t-primary animate-spin mb-4"></div>
                    <div className="font-mono text-base font-bold text-on-surface">Transmitting payload...</div>
                    <p className="text-xs text-on-surface-variant mt-1">Establishing 256-bit encrypted tunnel</p>
                  </motion.div>
                )}

                {/* Success State */}
                {formState === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute inset-0 bg-surface/98 z-20 flex flex-col items-center justify-center rounded-3xl p-8 text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-5 border-2 border-primary shadow-glow">
                      <span className="material-symbols-outlined text-primary text-4xl" data-icon="check_circle">
                        check_circle
                      </span>
                    </div>
                    <h3 className="font-headline-xl text-2xl md:text-3xl font-extrabold text-on-surface mb-2">
                      Message Secured
                    </h3>
                    <p className="font-body-md text-sm md:text-base text-on-surface-variant max-w-md mb-8 leading-relaxed">
                      Your inquiry has been successfully logged in our system. A JustRide rider specialist will reach out within 24 hours.
                    </p>
                    <button
                      onClick={resetForm}
                      type="button"
                      className="px-8 py-3.5 border border-primary text-primary rounded font-label-caps text-xs tracking-widest font-bold hover:bg-primary hover:text-on-primary transition-all duration-300 shadow-glow-sm cursor-pointer"
                    >
                      SEND ANOTHER MESSAGE
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-6" id="contact-form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-caps text-xs text-on-surface-variant font-bold tracking-wider" htmlFor="name">
                      Full Name
                    </label>
                    <div className="relative glow-effect rounded-lg">
                      <input
                        className="w-full bg-surface-container-low border border-outline-variant/60 text-on-surface rounded-lg p-3 pl-10 focus:outline-none focus:border-primary transition-all font-body-md text-sm placeholder:text-on-surface-variant/40"
                        id="name"
                        placeholder="Jane Doe"
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant pointer-events-none text-xl" data-icon="person">
                        person
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-caps text-xs text-on-surface-variant font-bold tracking-wider" htmlFor="email">
                      Email Address
                    </label>
                    <div className="relative glow-effect rounded-lg">
                      <input
                        className="w-full bg-surface-container-low border border-outline-variant/60 text-on-surface rounded-lg p-3 pl-10 focus:outline-none focus:border-primary transition-all font-body-md text-sm placeholder:text-on-surface-variant/40"
                        id="email"
                        placeholder="jane@company.com"
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant pointer-events-none text-xl" data-icon="mail">
                        mail
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-caps text-xs text-on-surface-variant font-bold tracking-wider" htmlFor="phone">
                      Phone Number (Optional)
                    </label>
                    <div className="relative glow-effect rounded-lg">
                      <input
                        className="w-full bg-surface-container-low border border-outline-variant/60 text-on-surface rounded-lg p-3 pl-10 focus:outline-none focus:border-primary transition-all font-body-md text-sm placeholder:text-on-surface-variant/40"
                        id="phone"
                        placeholder="+1 (555) 000-0000"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant pointer-events-none text-xl" data-icon="phone">
                        phone
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-caps text-xs text-on-surface-variant font-bold tracking-wider" htmlFor="subject">
                      Subject Category
                    </label>
                    <div className="relative glow-effect rounded-lg">
                      <select
                        className="w-full bg-surface-container-low border border-outline-variant/60 text-on-surface rounded-lg p-3 pr-10 focus:outline-none focus:border-primary transition-all font-body-md text-sm appearance-none cursor-pointer"
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      >
                        <option value="partnership">Partnership Inquiry</option>
                        <option value="enterprise">Enterprise Solutions</option>
                        <option value="dealer">Dealership & Distribution</option>
                        <option value="press">Press & Media</option>
                        <option value="other">General / Other</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline-variant pointer-events-none text-2xl" data-icon="arrow_drop_down">
                        arrow_drop_down
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-label-caps text-xs text-on-surface-variant font-bold tracking-wider" htmlFor="message">
                    Message Content
                  </label>
                  <div className="relative glow-effect rounded-lg">
                    <textarea
                      className="w-full bg-surface-container-low border border-outline-variant/60 text-on-surface rounded-lg p-3.5 focus:outline-none focus:border-primary transition-all font-body-md text-sm placeholder:text-on-surface-variant/40 resize-none"
                      id="message"
                      placeholder="Detail your inquiry, fleet size, or motorcycle model specifications here..."
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>
                </div>

                <div className="mt-2 flex justify-end">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative bg-primary text-on-primary px-8 py-3.5 rounded-lg font-label-caps text-xs font-bold tracking-wider hover:bg-primary-fixed transition-all flex items-center gap-2 shadow-glow-sm cursor-pointer"
                    type="submit"
                  >
                    <span className="btn-glow"></span>
                    <span>SEND MESSAGE</span>
                    <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1" data-icon="send">
                      send
                    </span>
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
