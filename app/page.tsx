"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
  Menu,
  X,
  CheckCircle,
  Calendar,
  AlertCircle,
  Plus,
  Minus,
} from "lucide-react";
import { reviews } from "@/app/data/reviews";
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

const topServices = [
  { img: "/Services_images/Professional%20Teeth%20Whitenings.webp", title: "Professional Teeth Whitening", desc: "Experience a dazzling, brighter smile with our safe and effective professional bleaching." },
  { img: "/Services_images/Advanced%20Dental%20Implants.webp", title: "Advanced Dental Implants", desc: "Permanent, completely natural-looking tooth replacements to restore your perfect smile." },
  { img: "/Services_images/Premium%20Clear%20Aligners.webp", title: "Premium Clear Aligners", desc: "Straighten your teeth invisibly and comfortably without traditional metal braces." },
  { img: "/Services_images/Painless%20Root%20Canal%20Therapy.webp", title: "Painless Root Canal Therapy", desc: "Precision endodontic care designed exclusively for your highest comfort." },
];

const whyUs = [
  { icon: <Award className="w-5 h-5" />, title: "4.8★ on Google", desc: "1,655+ verified reviews." },
  { icon: <Shield className="w-5 h-5" />, title: "Almost Painless", desc: "Minimal discomfort anaesthesia." },
  { icon: <CheckCircle className="w-5 h-5" />, title: "Sterilised & Safe", desc: "ISO-grade sterilisation." },
  { icon: <Sparkles className="w-5 h-5" />, title: "Latest Tech", desc: "Digital X-rays & lasers." },
  { icon: <Clock className="w-5 h-5" />, title: "Flexible Timings", desc: "Open early & late." },
  { icon: <Users className="w-5 h-5" />, title: "Expert Team", desc: "Experienced specialists." },
];

const faqs = [
  { q: "Will the treatment hurt?", a: "Not at all. We specialize in pain-free dentistry using advanced administration techniques and premium anesthetics to ensure you feel absolutely comfortable." },
  { q: "Is it completely safe and hygienic?", a: "100%. We employ hospital-grade Class-B autoclaves for sterilization, ensuring every instrument exceeds international safety standards." },
  { q: "Are there any hidden costs?", a: "No. We believe in completely transparent pricing. You'll receive a detailed, easy-to-understand breakdown before any treatment begins." },
  { q: "Do you offer emergency appointments?", a: "Yes, we prioritize extreme discomfort and dental emergencies. We reserve exclusive slots daily for urgent care so you never have to wait in pain." },
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
    { label: "Why Us", href: "#differentiation" },
    { label: "Services", href: "/services" },
    { label: "Reviews", href: "#reviews" },
    { label: "Emergency", href: "#emergency" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:pt-6 pointer-events-none transition-all duration-300">
      <header
        className={`mx-auto max-w-5xl pointer-events-auto rounded-[28px] sm:rounded-full transition-all duration-500 overflow-hidden ${scrolled || open
          ? "bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-sky-100"
          : "bg-white/40 backdrop-blur-md border border-white/40 shadow-sm"
          }`}
      >
        <div className="px-5 py-3 sm:py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center shadow-inner">
              <Smile className="w-4 h-4 text-sky-600" />
            </div>
            <span className="font-bold text-[15px] leading-tight text-gray-900 transition-colors">
              Medicity <span className="text-sky-600">Dental</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] font-bold tracking-wide text-gray-700 transition-colors hover:text-sky-600"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-600 hover:bg-sky-500 text-white px-5 py-2.5 rounded-full text-[13px] font-bold transition-all shadow-[0_4px_14px_0_rgb(2,132,199,0.39)] active:scale-95 flex items-center gap-1.5"
            >
              Book Consultation
            </a>
          </div>

          <button
            className="md:hidden p-2 -mr-2 rounded-full text-gray-800 hover:bg-black/5 transition-colors active:scale-95"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

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
                className="text-gray-800 font-bold text-[15px] py-3 px-4 rounded-2xl hover:bg-sky-50 hover:text-sky-600 transition-colors active:scale-[0.98]"
              >
                {l.label}
              </a>
            ))}
            <a
              href={BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 bg-sky-600 hover:bg-sky-500 text-white py-3.5 px-4 rounded-2xl font-bold text-[15px] text-center shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" /> Book Consultation
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

// ─── 1. Hero (Above the Fold) ──────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-[95vh] flex flex-col items-center justify-center overflow-hidden pt-24 pb-12 bg-sky-50/50">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sky-100/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3" />
      </div>

      <div className="absolute inset-0 opacity-[0.3]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #bae6fd 1px, transparent 0)", backgroundSize: "32px 32px" }} />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-5 text-center flex flex-col items-center">

        {/* Cleaner Urgency Badge at the top */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-rose-50 border border-rose-200 text-rose-800 rounded-full px-4 py-1.5 mb-6 shadow-sm"
        >
          <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
          <span className="text-[12px] sm:text-[13px] font-bold tracking-wide">
            Limited Free Consultation Slots Left Today!
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[40px] leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-[72px] font-extrabold text-gray-900 mb-6 max-w-[17ch] mx-auto"
        >
          Guwahati&apos;s <br className="md:hidden" />
          <span className="text-sky-600">
            Most Trusted
          </span>{" "}
          <br className="md:hidden" />
          Dental Clinic
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[16px] sm:text-lg md:text-[20px] text-gray-600 max-w-[42ch] mx-auto mb-10 leading-relaxed font-medium"
        >
          Experience truly <strong className="text-sky-700 font-bold">painless, premium dentistry</strong>. From gentle cleanings to advanced implants, we prioritize your comfort above all else.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center w-full px-2"
        >
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <a
              href={BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-sky-600 text-white font-bold px-8 py-4 rounded-full text-[16px] shadow-[0_8px_30px_rgb(2,132,199,0.25)] active:scale-95 transition-transform w-full sm:w-auto hover:bg-sky-500"
            >
              <Calendar className="w-5 h-5" />
              Claim Free Consultation
            </a>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center justify-center gap-2 bg-white border border-sky-100 shadow-sm text-gray-700 font-semibold px-8 py-4 rounded-full text-[16px] active:scale-95 transition-transform w-full sm:w-auto hover:bg-sky-50"
            >
              <Phone className="w-5 h-5 text-sky-600" />
              Call Clinic Now
            </a>
          </div>

          {/* Micro-copy for trust */}
          <p className="mt-4 text-[13px] text-gray-500 font-medium">
            No-obligation consultation. Friendly guidance. Zero pressure.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 2. Instant Trust Strip ───────────────────────────────────────────────────
function StatsBanner() {
  const stats = [
    { value: "4.8★", label: "Google Rating" },
    { value: "1,655+", label: "Verified Reviews" },
    { value: "10+", label: "Years Experience" },
    { value: "15k+", label: "Happy Patients" },
  ];
  return (
    <section className="bg-white border-y border-gray-100 py-6 md:py-8 shadow-sm relative z-20">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:divide-x divide-gray-100">
        {stats.map((s) => (
          <div key={s.label} className="text-center px-2 py-2">
            <div className="text-[24px] sm:text-2xl md:text-3xl font-extrabold text-sky-600 tracking-tight">{s.value}</div>
            <div className="text-gray-500 text-[11px] sm:text-xs font-bold mt-1 uppercase tracking-wider">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── 3. Why Choose Medicity (Differentiation Block) ───────────────────────────
function ComparisonSection() {
  return (
    <section id="differentiation" className="py-16 md:py-24 bg-sky-50/30">
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-800 rounded-lg px-3 py-1 text-[11px] font-bold uppercase tracking-widest mb-4">
            The Medicity Standard
          </div>
          <h2 className="text-[32px] md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight leading-tight">
            Why Patients Choose <br className="sm:hidden" />
            <span className="text-sky-600">Medicity</span> Over Others
          </h2>
          <p className="text-gray-500 text-[15px] md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            We refuse to cut corners. See how our commitment to your comfort and safety stacks up against standard clinics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">

          {/* Us (Medicity) */}
          <div className="bg-white rounded-[24px] border border-sky-100 p-6 sm:p-8 shadow-xl shadow-sky-900/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-sky-500" />
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <CheckCircle className="text-sky-500 w-6 h-6" /> Premium Medicity Care
            </h3>
            <ul className="space-y-5">
              {[
                "Almost painless injection techniques",
                "Hospital-grade Class-B Autoclave sterilization",
                "Treated only by MDS Specialists",
                "Completely transparent pricing, zero hidden fees",
                "State-of-the-art Digital X-Rays & Lasers"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 bg-sky-100 rounded-full p-0.5">
                    <CheckCircle className="w-4 h-4 text-sky-600" />
                  </div>
                  <span className="text-gray-700 font-medium text-[15px] leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Them (Standard Clinics) */}
          <div className="bg-gray-50 rounded-[24px] border border-gray-200 p-6 sm:p-8 relative">
            <h3 className="text-2xl font-bold text-gray-600 mb-6 flex items-center gap-2">
              <X className="text-gray-400 w-6 h-6" /> Standard Clinics
            </h3>
            <ul className="space-y-5">
              {[
                "Standard syringes that cause discomfort",
                "Basic boiling or UV box cleaning",
                "Often treated by general dentists",
                "Unclear estimates with surprise bills",
                "Outdated or basic dental equipment"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 opacity-70">
                  <div className="mt-1">
                    <X className="w-4 h-4 text-gray-400" />
                  </div>
                  <span className="text-gray-500 font-medium text-[15px] leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-12 text-center flex flex-col items-center">
          <p className="text-sky-700 font-bold mb-4 text-[14px]">
            <Clock className="w-4 h-4 inline-block mr-1.5 align-text-bottom" />
            Limited Time: Free Consultation ends soon!
          </p>
          <a
            href={BOOKING_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-sky-600 text-white font-bold px-8 py-4 rounded-full text-[15px] shadow-lg active:scale-95 transition-all"
          >
            Claim Your Free Consultation
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── 4. The Medicity Difference ───────────────────────────────────────────────
function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[32px] md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            The Medicity <span className="text-sky-600">Difference</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {whyUs.map((item, i) => (
            <div key={item.title} className="flex gap-4 p-5 rounded-[20px] bg-slate-50 border border-slate-100 hover:border-sky-100 transition-colors">
              <div className="w-12 h-12 bg-white shadow-sm text-sky-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>
              <div className="flex-1 min-w-0 pt-0.5">
                <h3 className="font-bold text-gray-900 text-[16px] mb-1">{item.title}</h3>
                <p className="text-gray-500 text-[14px] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 5. Services ──────────────────────────────────────────────────────────────
function Services() {
  return (
    <section id="services" className="relative py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 relative z-10 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-[32px] md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Our Services
          </h2>
          <p className="text-gray-500 text-[16px] md:text-lg font-medium max-w-2xl mx-auto">Expert care for a healthy, beautiful smile. Here are some of our most requested treatments.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {topServices.map((svc, i) => (
            <div key={i} className="bg-white rounded-[20px] overflow-hidden shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-gray-100/80 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300">
              <div className="h-44 w-full relative overflow-hidden bg-gray-100">
                <img src={svc.img} alt={svc.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 sm:p-6 bg-white flex flex-col items-start text-left">
                <h3 className="font-extrabold text-gray-900 text-[16px] sm:text-[17px] mb-2 leading-tight">
                  {svc.title}
                </h3>
                <p className="text-gray-500 text-[13px] sm:text-[14px] leading-relaxed line-clamp-3">
                  {svc.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* White fade out at the bottom of the section wrapping into the View More button */}
        <div className="absolute bottom-0 left-0 w-full h-[350px] bg-gradient-to-t from-gray-50 via-gray-50/90 to-transparent flex items-end justify-center pb-12 z-20 pointer-events-none">
          <Link
            href="/services"
            className="pointer-events-auto inline-flex items-center justify-center gap-2 bg-white text-sky-700 hover:bg-sky-600 hover:text-white border border-sky-100 font-bold px-8 py-4 rounded-full text-[15px] active:scale-[0.98] transition-all shadow-[0_8px_30px_rgb(2,132,199,0.15)] mx-auto"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── 6. Social Proof (Reviews) ────────────────────────────────────────────────
function Reviews() {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 px-5">
          <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-100 text-amber-800 rounded-lg px-3 py-1 text-[11px] font-bold uppercase tracking-widest mb-4">
            <Star className="w-3 h-3 fill-amber-500 text-amber-500" /> Real Patient Stories
          </div>
          <h2 className="text-[32px] md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">
            Loved by <span className="text-sky-600">1,655+ Patients</span>
          </h2>
          <div className="flex items-center justify-center gap-2">
            <span className="font-bold text-gray-900 text-[18px]">Rated 4.8</span>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>
        </div>

        {/* Animated Reviews Carousel */}
        <AnimatedReviews reviews={reviews} />
      </div>
    </section>
  );
}

// ─── 7. Gallery ───────────────────────────────────────────────────────────────
function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-[32px] md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Real Smiles, <span className="text-sky-600">Real Care</span>
          </h2>
          <p className="text-gray-500 text-lg font-medium mt-4">Take a look inside our state-of-the-art clinic.</p>
        </div>
        <div className="-mx-5 sm:mx-0">
          <ParallaxScroll images={galleryImages} />
        </div>
      </div>
    </section>
  );
}

// ─── 8. Emergency Section ─────────────────────────────────────────────────────
function Emergency() {
  return (
    <section id="emergency" className="py-12 bg-rose-50 border-y border-rose-100">
      <div className="max-w-4xl mx-auto px-5 text-center flex flex-col items-center">
        <AlertCircle className="w-12 h-12 text-rose-500 mb-4 animate-bounce" />
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">
          🚨 Dental Emergency?
        </h2>
        <p className="text-gray-700 text-[16px] md:text-lg mb-6 font-medium max-w-xl mx-auto">
          Severe tooth pain or a broken tooth? <strong className="font-bold text-rose-600">Same-Day Appointments Available.</strong> Call us now to secure one of our limited daily emergency slots.
        </p>
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="bg-rose-600 hover:bg-rose-500 text-white font-bold px-8 py-4 rounded-full text-[16px] shadow-lg shadow-rose-600/20 active:scale-95 transition-transform flex items-center justify-center gap-2"
        >
          <Phone className="w-5 h-5 fill-current" /> Call For Emergency Care
        </a>
      </div>
    </section>
  );
}

// ─── 9. FAQs ──────────────────────────────────────────────────────────────────
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-[32px] md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-200 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <span className="font-bold text-gray-900 text-[16px] pr-4">{faq.q}</span>
                {openIndex === idx ? (
                  <Minus className="w-5 h-5 text-sky-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="overflow-hidden bg-white"
                  >
                    <div className="p-5 text-gray-600 text-[15px] leading-relaxed border-t border-gray-100">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 10. Contact / Footer ─────────────────────────────────────────────────────
function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-sky-900 to-slate-900 relative overflow-hidden">
      <div className="relative z-10 w-full max-w-4xl mx-auto px-5">
        <div className="bg-white/5 backdrop-blur-2xl rounded-[32px] border border-white/10 p-8 sm:p-12 md:p-16 text-center shadow-2xl">
          <h2 className="text-[32px] sm:text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
            Ready for your <br />
            <span className="text-sky-300">Perfect Smile?</span>
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-sky-400 hover:bg-sky-300 text-sky-950 font-bold px-8 py-4 rounded-full text-[16px] active:scale-95 transition-all shadow-[0_8px_30px_rgb(56,189,248,0.2)]">
              <Calendar className="w-5 h-5" />
              Book Free Consultation
            </a>
          </div>

          <div className="text-center font-bold text-sky-200 mb-8 flex flex-col sm:flex-row items-center justify-center gap-2 text-[15px]">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            </div>
            Rated 4.8 by 1,655+ patients
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-8 text-sky-100/80 text-[14px] bg-black/20 rounded-2xl p-5 md:p-6 w-full mx-auto border border-white/5">
            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2 hover:text-white transition-colors active:scale-[0.98]">
              <Phone className="w-4 h-4 text-sky-400" /> {PHONE_NUMBER}
            </a>
            <div className="hidden md:block w-px h-6 bg-white/20"></div>
            <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="flex items-start md:items-center justify-center gap-2 hover:text-white transition-colors text-center sm:text-left active:scale-[0.98]">
              <MapPin className="w-4 h-4 mt-0.5 md:mt-0 flex-shrink-0 text-sky-400" />
              <span className="line-clamp-2 md:line-clamp-1 max-w-[300px]">{ADDRESS}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-400 pt-16 pb-24 md:pb-16 px-5 border-t border-slate-900">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-sky-900/50 flex items-center justify-center">
            <Smile className="w-4 h-4 text-sky-400" />
          </div>
          <span className="font-bold text-white text-[15px]">Medicity Dental</span>
        </div>
        <p className="text-[13px] leading-relaxed text-gray-500 text-center max-w-sm">
          Guwahati's trusted multispeciality clinic. <br /> Painless, precision care.
        </p>
        <div className="mt-8 pt-6 border-t border-slate-900 w-full max-w-sm text-center text-[12px] text-gray-600 font-medium tracking-wide">
          © 2024 MEDICITY MULTISPECIALITY DENTAL CLINIC
        </div>
      </div>
    </footer>
  );
}

function FloatingCTA() {
  return (
    <a
      href={BOOKING_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-[60] flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold p-3.5 sm:px-6 sm:py-3.5 rounded-full shadow-[0_8px_30px_rgb(34,197,94,0.3)] active:scale-90 transition-transform text-[14px] cta-pulse"
      aria-label="Book via WhatsApp"
    >
      <MessageCircle className="w-6 h-6 sm:w-5 sm:h-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}

export default function HomePage() {
  return (
    <div className="bg-white selection:bg-sky-500/30 font-sans">
      <Navbar />
      <Hero />
      <StatsBanner />
      <ComparisonSection />
      <WhyChooseUs />
      <Services />
      <Reviews />
      <Gallery />
      <Emergency />
      <FAQSection />
      <Contact />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
