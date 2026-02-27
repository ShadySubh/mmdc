"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Smile, Phone, Calendar, ArrowRight, Menu, X, ArrowLeft } from "lucide-react";

const PHONE_NUMBER = "+919387868037";
const WHATSAPP_LINK = "https://wa.me/919387868037?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20Medicity%20Dental%20Clinic.";
const BOOKING_LINK = WHATSAPP_LINK;

const allServices = [
    { img: "/Services_images/Professional%20Teeth%20Whitenings.webp", title: "Professional Teeth Whitening", desc: "Experience a dazzling, brighter smile with our safe and effective professional bleaching. Remove years of stains in a single visit." },
    { img: "/Services_images/Advanced%20Dental%20Implants.webp", title: "Advanced Dental Implants", desc: "Permanent, completely natural-looking tooth replacements to restore your perfect smile and biting strength." },
    { img: "/Services_images/Premium%20Clear%20Aligners.webp", title: "Premium Clear Aligners", desc: "Straighten your teeth invisibly and comfortably without traditional metal braces. Perfect for adults and teens." },
    { img: "/Services_images/Painless%20Root%20Canal%20Therapy.webp", title: "Painless Root Canal Therapy", desc: "Precision endodontic care designed exclusively for your highest comfort. Save your natural tooth without the pain." },
    { img: "/Services_images/Bridges%20and%20Crowns.webp", title: "Bridges and Crowns", desc: "High-quality ceramic and zirconia restorations that repair damaged teeth with extreme durability and ideal aesthetics." },
    { img: "/Services_images/Pediatric%20(Kids)%20Dentistry.webp", title: "Pediatric (Kids) Dentistry", desc: "Gentle, fun, and fear-free dental care tailored specifically for children to ensure a lifetime of healthy brushing." },
    { img: "/Services_images/Smile%20Makeovers%20(Veneers).webp", title: "Smile Makeovers (Veneers)", desc: "Complete aesthetic transformation using ultra-thin porcelain veneers to give you a Hollywood smile." },
    { img: "/Services_images/Tooth-Colored%20Fillings.webp", title: "Tooth-Colored Fillings", desc: "Durable and completely natural-looking composite cavity repairs that perfectly blend with your existing teeth." },
    { img: "/Services_images/Custom%20Dentures.webp", title: "Custom Dentures", desc: "High-quality, incredibly comfortable and precise removable replacements customized for perfect retention." },
];

function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:pt-6 pointer-events-none transition-all duration-300">
            <header
                className={`mx-auto max-w-5xl pointer-events-auto rounded-[28px] sm:rounded-full transition-all duration-500 overflow-hidden ${scrolled || open
                    ? "bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-sky-100"
                    : "bg-white/80 backdrop-blur-md border border-gray-200 shadow-sm"
                    }`}
            >
                <div className="px-5 py-3 sm:py-3.5 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center shadow-inner">
                            <Smile className="w-4 h-4 text-sky-600" />
                        </div>
                        <span className="font-bold text-[15px] leading-tight text-gray-900 transition-colors">
                            Medicity <span className="text-sky-600">Dental</span>
                        </span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-7">
                        <Link href="/" className="text-[13px] font-bold tracking-wide text-gray-700 transition-colors hover:text-sky-600 flex items-center gap-1.5"><ArrowLeft className="w-4 h-4" /> Back to Home</Link>
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
                        <Link href="/" onClick={() => setOpen(false)} className="text-gray-800 font-bold text-[15px] py-3 px-4 rounded-2xl hover:bg-sky-50 hover:text-sky-600 transition-colors active:scale-[0.98] flex items-center gap-2">
                            <ArrowLeft className="w-4 h-4" /> Back to Home
                        </Link>
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

export default function ServicesPage() {
    return (
        <div className="bg-gray-50 min-h-screen selection:bg-sky-500/30 font-sans pb-24">
            <Navbar />

            {/* Header */}
            <section className="pt-32 md:pt-40 pb-12 px-5">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-[36px] sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
                        Premium Dental <br className="sm:hidden" />
                        <span className="text-sky-600">Treatments</span>
                    </h1>
                    <p className="text-gray-600 text-[16px] md:text-lg max-w-2xl mx-auto font-medium">
                        Comprehensive, highly advanced, and completely painless dental care tailored precisely to your needs.
                    </p>
                </div>
            </section>

            {/* Grid */}
            <section className="px-5">
                <div className="max-w-6xl mx-auto">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {allServices.map((svc, i) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                key={i}
                                className="bg-white rounded-[24px] overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 hover:border-sky-100 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col"
                            >
                                <div className="h-56 sm:h-64 w-full relative overflow-hidden bg-gray-100 shrink-0">
                                    <img src={svc.img} alt={svc.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="p-6 md:p-8 flex flex-col flex-1">
                                    <h3 className="font-extrabold text-gray-900 text-[18px] md:text-[20px] mb-3 leading-tight">
                                        {svc.title}
                                    </h3>
                                    <p className="text-gray-500 text-[14px] md:text-[15px] leading-relaxed mb-6 flex-1">
                                        {svc.desc}
                                    </p>
                                    <a
                                        href={BOOKING_LINK}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center font-bold text-sky-600 hover:text-sky-700 text-[14px] md:text-[15px] group"
                                    >
                                        Consult About This <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mt-20 px-5">
                <div className="max-w-3xl mx-auto bg-sky-900 rounded-[32px] p-8 md:p-12 text-center shadow-xl relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Don't see your treatment?</h2>
                        <p className="text-sky-100 mb-8 max-w-lg mx-auto md:text-lg">We offer a full spectrum of dental procedures. Get in touch with our experts for a custom evaluation.</p>
                        <a
                            href={`tel:${PHONE_NUMBER}`}
                            className="inline-flex items-center justify-center gap-2 bg-white text-sky-900 font-bold px-8 py-4 rounded-full text-[15px] sm:text-base active:scale-95 transition-transform w-full sm:w-auto hover:bg-gray-50 hover:text-gray-900"
                        >
                            <Phone className="w-5 h-5 text-sky-600" />
                            Call Us
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
