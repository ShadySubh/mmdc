"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
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
  { icon: "🦷", title: "Teeth Whitening", desc: "Professional bleaching for a dazzling, camera-ready smile in just one visit." },
  { icon: "🔧", title: "Dental Implants", desc: "Permanent, natural-looking tooth replacements that feel just like your own." },
  { icon: "😁", title: "Orthodontics", desc: "Braces & Invisalign to straighten your teeth discreetly and comfortably." },
  { icon: "🛡️", title: "Root Canal", desc: "Pain-free, precision root canal therapy to save your natural tooth." },
  { icon: "✨", title: "Smile Makeover", desc: "Complete aesthetic transformation — veneers, bonding, contouring & more." },
  { icon: "👶", title: "Pediatric Dentistry", desc: "Gentle, fun dental care for children that builds lifelong healthy habits." },
];

const whyUs = [
  { icon: <Award className="w-6 h-6" />, title: "4.8★ on Google", desc: "1,655+ verified five-star reviews from real patients across Guwahati." },
  { icon: <Shield className="w-6 h-6" />, title: "100% Painless", desc: "Advanced anaesthesia protocols — most patients report zero discomfort." },
  { icon: <CheckCircle className="w-6 h-6" />, title: "Sterilised & Safe", desc: "ISO-grade autoclave sterilisation after every single procedure." },
  { icon: <Sparkles className="w-6 h-6" />, title: "Latest Technology", desc: "Digital X-rays, laser dentistry & CAD/CAM crowns all under one roof." },
  { icon: <Clock className="w-6 h-6" />, title: "Flexible Timings", desc: "Early morning & evening appointments to fit your busy schedule." },
  { icon: <Users className="w-6 h-6" />, title: "Expert Team", desc: "BDS & MDS specialists with decades of combined clinical experience." },
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
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/95 backdrop-blur-md shadow-md"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
            <Smile className="w-5 h-5 text-white" />
          </div>
          <span
            className={`font-bold text-sm leading-tight transition-colors ${scrolled ? "text-gray-900" : "text-white"
              }`}
          >
            Medicity <br className="hidden" />
            <span className="text-teal-400">Dental</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-teal-500 ${scrolled ? "text-gray-700" : "text-white/90"
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
            className="bg-teal-500 hover:bg-teal-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-gray-700" : "text-white"
            }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-xl border-t border-gray-100 px-4 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-gray-700 font-medium text-lg py-2 border-b border-gray-50 hover:text-teal-600"
            >
              {l.label}
            </a>
          ))}
          <a
            href={BOOKING_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 bg-teal-500 text-white py-3 rounded-full font-semibold text-center hover:bg-teal-600 transition-colors"
          >
            📅 Book Appointment
          </a>
        </div>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-teal-800 to-cyan-900" />

      {/* Animated blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
        >
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-white/90 text-sm font-medium">
            4.8 · 1,655 Reviews on Google Maps
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4"
        >
          Guwahati&apos;s{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">
            Most Trusted
          </span>{" "}
          Dental Clinic
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Experience{" "}
          <span className="text-teal-300 font-semibold">painless, precision dentistry</span> by
          expert specialists. Implants · Braces · Whitening · Root Canal &amp; more — all under one roof.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href={BOOKING_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-teal-400 hover:bg-teal-300 text-teal-900 font-bold px-8 py-4 rounded-full text-lg shadow-2xl shadow-teal-900/50 hover:shadow-teal-900/70 transition-all duration-300 hover:-translate-y-1"
          >
            <Calendar className="w-5 h-5" />
            Book Free Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </motion.div>

        {/* Quick trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3"
        >
          {[
            { icon: "✅", text: "100% Painless" },
            { icon: "🏆", text: "#1 Rated in Guwahati" },
            { icon: "🔬", text: "Advanced Technology" },
            { icon: "⚡", text: "Same-Day Appointments" },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-2 text-white/70 text-sm"
            >
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <ChevronDown className="w-6 h-6 text-white/50" />
      </div>
    </section>
  );
}

// ─── Stats Banner ─────────────────────────────────────────────────────────────
function StatsBanner() {
  const stats = [
    { value: "4.8★", label: "Google Rating" },
    { value: "1,655+", label: "Patient Reviews" },
    { value: "10+", label: "Years of Excellence" },
    { value: "15,000+", label: "Happy Patients" },
  ];
  return (
    <section className="bg-gradient-to-r from-teal-600 to-cyan-600 py-8">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-2xl md:text-3xl font-extrabold text-white">{s.value}</div>
            <div className="text-teal-100 text-sm mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────
function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" /> Our Treatments
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Complete Dental Care, <span className="text-teal-600">All Under One Roof</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            From routine clean-ups to full smile makeovers — our specialists handle everything with precision and care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg border border-gray-100 hover:border-teal-200 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{svc.icon}</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-teal-600 transition-colors">
                {svc.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{svc.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={BOOKING_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            Book Your Treatment
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
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            <Shield className="w-4 h-4" /> Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            The Medicity <span className="text-teal-600">Difference</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Thousands of patients trust us. Here&apos;s why.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUs.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex gap-4 p-5 rounded-2xl hover:bg-teal-50 transition-colors group"
            >
              <div className="w-12 h-12 bg-teal-100 group-hover:bg-teal-200 text-teal-600 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
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
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            <Smile className="w-4 h-4" /> Patient Gallery
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Real Smiles, <span className="text-teal-600">Real Results</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Every smile here belongs to a real patient who walked out of our clinic with transformed confidence.
          </p>
        </div>
        <ParallaxScroll images={galleryImages} />
        <div className="mt-8 text-center">
          <a
            href={BOOKING_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            Get Your Smile Transformed
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Reviews ─────────────────────────────────────────────────────────────────
function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            <Star className="w-4 h-4 fill-amber-500" /> Patient Reviews
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
            Loved by <span className="text-teal-600">1,655+ Patients</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            {[1, 2, 3, 4, 5].map(i => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
            <span className="font-bold text-gray-900 text-lg">4.8</span>
            <span className="text-gray-400">on Google</span>
          </div>
          <p className="text-gray-500">Hover to pause · Click any card to read on Google Maps</p>
        </div>

        {/* Animated Reviews Carousel */}
        <AnimatedReviews reviews={reviews} />

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            See All Reviews
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={reviewsPageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border-2 border-gray-200 hover:border-teal-400 text-gray-700 hover:text-teal-700 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5"
          >
            <ExternalLink className="w-4 h-4" />
            View on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Elfsight Reviews Section ─────────────────────────────────────────────────
function ElfsightReviews() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Live Google Reviews</h2>
          <p className="text-gray-500 text-sm mt-1">Powered by Google Maps — auto-updated daily</p>
        </div>
        {/* Elfsight embed */}
        <div
          className="elfsight-app-84aa4e89-6cab-47e7-8a91-fd8afab9b5c9"
          data-elfsight-app-lazy
        />
      </div>
    </section>
  );
}

// ─── Contact / Booking CTA ────────────────────────────────────────────────────
function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-teal-900 via-teal-800 to-cyan-900 relative overflow-hidden"
    >
      {/* bg blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
          <Calendar className="w-4 h-4" /> Book Appointment
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
          Ready for Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">
            Perfect Smile?
          </span>
        </h2>
        <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
          Book a free consultation today. Our team will guide you through the best treatment plan for your smile.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={BOOKING_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-teal-400 hover:bg-teal-300 text-teal-900 font-bold px-8 py-4 rounded-full text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </a>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </div>

        {/* Address */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/60 text-sm">
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 hover:text-white transition-colors max-w-xs text-center sm:text-left"
          >
            <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-teal-400" />
            <span>{ADDRESS}</span>
          </a>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-teal-400" />
            <span>Mon–Sat · 9 AM – 8 PM</span>
          </div>
        </div>

        {/* Google Maps embed */}
        <div className="mt-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.3543!2d91.7526!3d26.1676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5908b1cc7233%3A0x5d2f3fb5c0e3c15f!2sMedicity+Multispeciality+Dental+Clinic!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="280"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Medicity Dental Clinic Location"
          />
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
              <Smile className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-white text-sm">Medicity Dental</span>
          </div>
          <p className="text-sm leading-relaxed">
            Guwahati&apos;s most trusted multispeciality dental clinic, delivering painless, precision care since 2010.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm">
            {[
              { label: "Book Appointment", href: BOOKING_LINK },
              { label: "All Reviews", href: "/reviews" },
              { label: "Google Maps", href: MAPS_LINK },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="hover:text-teal-400 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <div className="text-sm space-y-2">
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
              {ADDRESS}
            </p>
            <p className="text-gray-500 text-xs">Plus Code: {PLUS_CODE}</p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-gray-800 text-center text-xs text-gray-600">
        © 2024 Medicity Multispeciality Dental Clinic. All rights reserved.
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
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-5 py-3 rounded-full shadow-2xl shadow-teal-500/40 hover:shadow-teal-500/60 transition-all duration-300 hover:-translate-y-1 text-sm"
      aria-label="Book Appointment via WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:inline">Book Now</span>
    </a>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
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
    </>
  );
}
