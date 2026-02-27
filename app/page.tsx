"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Star,
  ArrowRight,
  ChevronDown,
  MessageCircle,
  Clock,
  Shield,
  Award,
  Smile,
  Sparkles,
  Users,
  ExternalLink,
  Menu,
  X,
  CheckCircle,
  Calendar,
} from "lucide-react";
import { reviews, reviewsPageUrl } from "@/app/data/reviews";
import { galleryImages } from "@/app/data/gallery";
import { AnimatedReviews } from "@/app/components/ReviewCard";
import { ParallaxScroll } from "@/app/components/ParallaxScroll";

// ─── Constants ───────────────────────────────────────────────────────────────
const CLINIC_NAME = "Medicity Multispeciality Dental Clinic";
const PHONE_NUMBER = "+919387868037";
const WHATSAPP_LINK = "https://wa.me/919387868037?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20Medicity%20Dental%20Clinic.";
const MAPS_LINK = "https://www.google.com/maps/place/Medicity+Multispeciality+Dental+Clinic/@26.1676,91.7526,17z";
const BOOKING_LINK = WHATSAPP_LINK;
const PLUS_CODE = "5QF2+XX Guwahati, Assam";
const ADDRESS = "Petrol Pump, GS Rd, near Ulubari, Manipuri Rajbari, Ulubari, Guwahati, Assam 781008";

const services = [
  { icon: "🦷", title: "Teeth Whitening", desc: "Professional bleaching for a dazzling smile." },
  { icon: "🔧", title: "Dental Implants", desc: "Permanent, natural tooth replacements." },
  { icon: "😁", title: "Orthodontics", desc: "Braces & Invisalign for straight teeth." },
  { icon: "🛡️", title: "Root Canal", desc: "Pain-free, precision root canal therapy." },
  { icon: "✨", title: "Smile Makeover", desc: "Complete aesthetic transformation via veneers." },
  { icon: "👶", title: "Pediatric Dentistry", desc: "Gentle, fun dental care for children." },
];

const whyUs = [
  { icon: <Award className="w-5 h-5" />, title: "4.8★ on Google", desc: "1,655+ verified reviews." },
  { icon: <Shield className="w-5 h-5" />, title: "100% Painless", desc: "Zero discomfort anaesthesia." },
  { icon: <CheckCircle className="w-5 h-5" />, title: "Sterilised & Safe", desc: "ISO-grade sterilisation." },
  { icon: <Sparkles className="w-5 h-5" />, title: "Latest Tech", desc: "Digital X-rays & lasers." },
  { icon: <Clock className="w-5 h-5" />, title: "Flexible Timings", desc: "Open early & late." },
  { icon: <Users className="w-5 h-5" />, title: "Expert Team", desc: "Experienced specialists." },
];

// ─── Nav ─────────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Treatments", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "Location", href: "#contact" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:pt-6 pointer-events-none transition-all duration-300">
      <header
        className={`mx-auto max-w-5xl pointer-events-auto rounded-[28px] sm:rounded-full transition-all duration-500 overflow-hidden ${scrolled || open
            ? "bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/50"
            : "bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
          }`}
      >
        <div className="px-5 py-3 sm:py-3.5 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center shadow-inner">
              <Smile className="w-4 h-4 text-white" />
            </div>
            <span
              className={`font-bold text-[15px] leading-tight transition-colors ${scrolled || open ? "text-gray-900" : "text-white"
                }`}
            >
              Medicity <span className="text-teal-500">Dental</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-[13px] font-bold tracking-wide transition-colors hover:text-teal-500 ${scrolled || open ? "text-gray-600" : "text-white/90"
                  }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 hover:bg-teal-500 text-white px-5 py-2.5 rounded-full text-[13px] font-bold transition-all shadow-md active:scale-95 flex items-center gap-1.5"
            >
              Book Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 -mr-2 rounded-full transition-colors active:scale-95 ${scrolled || open ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/20"
              }`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
            }`}
        >
          <div className="px-5 pb-5 pt-2 flex flex-col gap-2 bg-white/50">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-gray-800 font-bold text-[15px] py-3 px-4 rounded-2xl hover:bg-teal-50 hover:text-teal-600 transition-colors active:scale-[0.98]"
              >
                {l.label}
              </a>
            ))}
            <a
              href={BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 bg-gray-900 hover:bg-teal-500 text-white py-3.5 px-4 rounded-2xl font-bold text-[15px] text-center shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" /> Book Appointment
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-12">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-teal-800 to-cyan-900" />

      {/* Animated blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] aspect-square bg-teal-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-[60%] -right-[20%] w-[70%] aspect-square bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-5 text-center flex flex-col items-center">
        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5 mb-8 md:mb-10 shadow-lg shadow-black/5"
        >
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-white/95 text-[11px] md:text-xs font-semibold tracking-wide">
            4.8 · 1,655+ PATIENTS
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[38px] leading-[1.15] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-5 max-w-[15ch] mx-auto"
        >
          Guwahati&apos;s <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">
            Most Trusted
          </span>{" "}
          <br className="md:hidden" />
          Dental Clinic
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-white/80 max-w-[40ch] mx-auto mb-10 leading-relaxed font-medium"
        >
          <span className="text-teal-200">Painless, precision dentistry.</span> <br className="hidden sm:block" /> Implants, Braces, Whitening &amp; Root Canal.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-2"
        >
          <a
            href={BOOKING_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-teal-400 text-teal-950 font-bold px-8 py-4 rounded-full text-[15px] sm:text-base shadow-[0_8px_30px_rgb(20,184,166,0.3)] active:scale-95 transition-transform w-full sm:w-auto"
          >
            <Calendar className="w-5 h-5" />
            Book Free Consultation
          </a>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold px-8 py-4 rounded-full text-[15px] sm:text-base active:scale-95 transition-transform w-full sm:w-auto"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </motion.div>

        {/* Quick trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-3 opacity-80"
        >
          {[
            { icon: "Shield", text: "100% Painless" },
            { icon: "Trophy", text: "#1 Rated" },
            { icon: "Zap", text: "Same-Day" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-1.5 text-white text-[12px] font-medium tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-10 opacity-50">
        <ChevronDown className="w-5 h-5 text-white" />
      </div>
    </section>
  );
}

// ─── Stats Banner ─────────────────────────────────────────────────────────────
function StatsBanner() {
  const stats = [
    { value: "4.8★", label: "Google Rating" },
    { value: "1,655+", label: "Reviews" },
    { value: "10+", label: "Years" },
    { value: "15k+", label: "Patients" },
  ];
  return (
    <section className="bg-gradient-to-r from-teal-600 to-cyan-600 py-6 md:py-8">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-4 gap-2 sm:gap-6 divide-x divide-white/20">
        {stats.map((s) => (
          <div key={s.label} className="text-center px-1">
            <div className="text-[19px] sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">{s.value}</div>
            <div className="text-teal-100/90 text-[10px] sm:text-xs md:text-sm font-medium mt-0.5 uppercase tracking-wider">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────
function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-1.5 bg-teal-100/50 text-teal-800 rounded-lg px-3 py-1 text-[11px] font-bold uppercase tracking-widest mb-4">
            Treatments
          </div>
          <h2 className="text-[32px] md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight leading-[1.1]">
            Complete Care, <br className="sm:hidden" />
            <span className="text-teal-600">Under One Roof</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: Math.min(i * 0.05, 0.3), duration: 0.4 }}
              className="bg-white rounded-[20px] p-5 sm:p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100/50 active:scale-[0.98] transition-transform"
            >
              <div className="text-[28px] sm:text-3xl mb-3 sm:mb-4 bg-gray-50/80 w-12 sm:w-14 h-12 sm:h-14 rounded-2xl flex items-center justify-center">{svc.icon}</div>
              <h3 className="font-bold text-gray-900 text-[15px] sm:text-lg mb-1.5 tracking-tight leading-tight">
                {svc.title}
              </h3>
              <p className="text-gray-500 text-[12px] sm:text-sm leading-relaxed line-clamp-2">
                {svc.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 md:mt-14 text-center">
          <a
            href={BOOKING_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-teal-50 hover:bg-teal-100 text-teal-700 font-bold px-6 py-3.5 rounded-2xl text-[14px] active:scale-[0.98] transition-transform w-[calc(100%-2rem)] sm:w-auto mx-auto"
          >
            View All Treatments
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Why Choose Us ────────────────────────────────────────────────────────────
function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[32px] md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            The Medicity <span className="text-teal-600">Difference</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {whyUs.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: Math.min(i * 0.05, 0.3), duration: 0.3 }}
              className="flex gap-4 p-5 rounded-[20px] bg-gray-50/50 border border-gray-100/50"
            >
              <div className="w-11 h-11 bg-teal-100/50 text-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>
              <div className="flex-1 min-w-0 pt-0.5">
                <h3 className="font-bold text-gray-900 text-[15px] sm:text-base mb-0.5">{item.title}</h3>
                <p className="text-gray-500 text-[13px] sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Gallery ─────────────────────────────────────────────────────────────────
function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-white/60 overflow-hidden border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-1.5 bg-teal-50 text-teal-700 rounded-lg px-3 py-1 text-[11px] font-bold uppercase tracking-widest mb-4">
            Inside the Clinic
          </div>
          <h2 className="text-[32px] md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Real Smiles, <span className="text-teal-600">Real Care</span>
          </h2>
        </div>

        {/* Negative margins to intentionally crop edge images on mobile for an immersive feel */}
        <div className="-mx-5 sm:mx-0">
          <ParallaxScroll images={galleryImages} />
        </div>
      </div>
    </section>
  );
}

// ─── Reviews ─────────────────────────────────────────────────────────────────
function Reviews() {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-gray-50/50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 px-5">
          <div className="inline-flex items-center gap-1.5 bg-amber-100/50 text-amber-800 rounded-lg px-3 py-1 text-[11px] font-bold uppercase tracking-widest mb-4">
            <Star className="w-3 h-3 fill-amber-500 text-amber-500" /> Patient Reviews
          </div>
          <h2 className="text-[32px] md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">
            Loved by <span className="text-teal-600">1,655+</span>
          </h2>
          <div className="flex items-center justify-center gap-1.5">
            <span className="font-bold text-gray-900 text-[17px]">4.8</span>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>
        </div>

        {/* Animated Reviews Carousel */}
        <AnimatedReviews reviews={reviews} />

        <div className="mt-8 px-5 flex flex-col gap-3 max-w-sm mx-auto">
          <Link
            href="/reviews"
            className="flex items-center justify-center gap-2 bg-gray-900 text-white font-bold py-3.5 px-6 rounded-2xl text-[14px] active:scale-[0.98] transition-transform w-full shadow-lg shadow-gray-900/20"
          >
            Read All Reviews <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Elfsight Reviews Section ─────────────────────────────────────────────────
function ElfsightReviews() {
  return (
    <section className="py-8 md:py-16 bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="elfsight-app-84aa4e89-6cab-47e7-8a91-fd8afab9b5c9" data-elfsight-app-lazy />
      </div>
    </section>
  );
}

// ─── Contact / Booking CTA ────────────────────────────────────────────────────
function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-teal-900 to-teal-950 relative overflow-hidden">
      <div className="relative z-10 w-full max-w-4xl mx-auto px-5">
        <div className="bg-white/5 backdrop-blur-2xl rounded-[32px] border border-white/10 p-6 sm:p-12 md:p-16 text-center shadow-2xl">
          <h2 className="text-[32px] sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight leading-[1.1]">
            Ready for your <br />
            <span className="text-teal-300">Perfect Smile?</span>
          </h2>
          <p className="text-teal-100/70 text-[15px] md:text-lg mb-8 max-w-md mx-auto leading-relaxed">
            Message us on WhatsApp or call our desk. We'll find a time that works perfectly for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-teal-400 text-teal-950 font-bold px-8 py-4 rounded-full text-[15px] sm:text-base active:scale-95 transition-transform w-full sm:w-auto shadow-[0_8px_30px_rgb(20,184,166,0.3)]">
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center justify-center gap-2 bg-white/10 text-white font-semibold px-8 py-4 rounded-full text-[15px] sm:text-base active:scale-95 transition-transform w-full sm:w-auto border border-white/20">
              <Phone className="w-5 h-5" />
              Call Clinic
            </a>
          </div>

          <div className="mt-10 sm:mt-12 flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 text-teal-100/60 text-[13px] md:text-sm bg-black/20 rounded-2xl p-4 md:p-6 w-full max-w-2xl mx-auto border border-white/5">
            <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="flex items-start md:items-center justify-center gap-2 hover:text-white transition-colors text-center sm:text-left active:scale-[0.98]">
              <MapPin className="w-4 h-4 mt-0.5 md:mt-0 flex-shrink-0 text-teal-400" />
              <span>{ADDRESS}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 pt-16 pb-24 md:pb-16 px-5 border-t border-gray-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-10">
        <div className="text-center max-w-xs mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
              <Smile className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-white text-[15px]">Medicity Dental</span>
          </div>
          <p className="text-[13px] leading-relaxed text-gray-500">
            Guwahati's trusted multispeciality clinic. <br /> Painless, precision care.
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-gray-900/50 text-center text-[12px] text-gray-600 font-medium tracking-wide">
        © 2024 MEDICITY MULTISPECIALITY DENTAL CLINIC
      </div>
    </footer>
  );
}

// ─── Floating WhatsApp Button ─────────────────────────────────────────────────
function FloatingCTA() {
  return (
    <a
      href={BOOKING_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-[60] flex items-center gap-2 bg-teal-500 text-white font-bold p-3.5 sm:px-6 sm:py-3.5 rounded-full shadow-[0_8px_30px_rgb(20,184,166,0.5)] active:scale-90 transition-transform text-[14px] cta-pulse"
      aria-label="Book via WhatsApp"
    >
      <MessageCircle className="w-6 h-6 sm:w-5 sm:h-5" />
      <span className="hidden sm:inline">Book Now</span>
    </a>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <div className="bg-white selection:bg-teal-500/30">
      <Navbar />
      <Hero />
      <Reviews />
      <StatsBanner />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <ElfsightReviews />
      <Contact />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
