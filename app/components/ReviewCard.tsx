"use client";
import { useEffect, useRef, useCallback } from "react";
import { Review } from "@/app/data/reviews";
import { Star } from "lucide-react";

// ─── Star Rating ──────────────────────────────────────────────────────────────
function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
                <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < rating ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"
                        }`}
                />
            ))}
        </div>
    );
}

// ─── Avatar ────────────────────────────────────────────────────────────────────
function AvatarCircle({ initials, name }: { initials: string; name: string }) {
    const palettes = [
        "bg-teal-500", "bg-cyan-600", "bg-blue-500",
        "bg-indigo-500", "bg-violet-500", "bg-sky-600",
    ];
    const color = palettes[name.charCodeAt(0) % palettes.length];
    return (
        <div
            className={`w-9 h-9 rounded-full ${color} flex items-center justify-center text-white font-bold text-xs flex-shrink-0`}
        >
            {initials}
        </div>
    );
}

// ─── Google G SVG ─────────────────────────────────────────────────────────────
function GoogleIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 48 48" aria-hidden="true" className="flex-shrink-0">
            <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
            <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" />
            <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z" />
            <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z" />
        </svg>
    );
}

// ─── Review Card ─────────────────────────────────────────────────────────────
interface ReviewCardProps {
    review: Review;
    compact?: boolean;
}

export function ReviewCard({ review, compact = false }: ReviewCardProps) {
    return (
        <a
            href={review.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-2xl shadow-sm active:scale-[0.98] transition-transform duration-150 border border-gray-100 cursor-pointer"
            style={{
                width: compact ? "240px" : undefined,
                minWidth: compact ? "240px" : "280px",
                maxWidth: compact ? "240px" : "360px",
            }}
        >
            <div className="p-4">
                <div className="flex items-center gap-2.5 mb-2.5">
                    <AvatarCircle initials={review.avatar} name={review.name} />
                    <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900 text-[13px] leading-tight truncate">
                            {review.name}
                        </p>
                        <p className="text-[11px] text-gray-400 mt-0.5">{review.date}</p>
                    </div>
                    <GoogleIcon />
                </div>
                <StarRating rating={review.rating} />
                <p className="mt-2 text-[12px] text-gray-600 leading-relaxed line-clamp-3">
                    {review.text}
                </p>
            </div>
        </a>
    );
}

// ─── Animated Reviews Carousel ────────────────────────────────────────────────
interface AnimatedReviewsProps {
    reviews: Review[];
}

export function AnimatedReviews({ reviews }: AnimatedReviewsProps) {
    const trackRef = useRef<HTMLDivElement>(null);
    const animRef = useRef<Animation | null>(null);
    const pausedByTouch = useRef(false);

    const startAnim = useCallback(() => {
        const track = trackRef.current;
        if (!track) return;
        // Cancel any existing
        animRef.current?.cancel();
        const totalWidth = track.scrollWidth / 2;
        animRef.current = track.animate(
            [
                { transform: "translateX(0px)" },
                { transform: `translateX(-${totalWidth}px)` },
            ],
            {
                duration: 32000,
                iterations: Infinity,
                easing: "linear",
            }
        );
    }, []);

    useEffect(() => {
        // Small delay so layout is painted first
        const t = setTimeout(startAnim, 100);
        return () => {
            clearTimeout(t);
            animRef.current?.cancel();
        };
    }, [reviews, startAnim]);

    // Desktop hover handlers
    const pause = () => { if (!pausedByTouch.current) animRef.current?.pause(); };
    const play = () => { if (!pausedByTouch.current) animRef.current?.play(); };

    // Mobile touch handlers
    const onTouchStart = () => {
        pausedByTouch.current = true;
        animRef.current?.pause();
    };
    const onTouchEnd = () => {
        pausedByTouch.current = false;
        animRef.current?.play();
    };

    const doubled = [...reviews, ...reviews];

    return (
        <div
            className="overflow-hidden w-full py-2 -mx-4 px-4"
            onMouseEnter={pause}
            onMouseLeave={play}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
        >
            <div
                ref={trackRef}
                className="flex gap-3 w-max"
                style={{ willChange: "transform" }}
            >
                {doubled.map((review, idx) => (
                    <ReviewCard key={`${review.id}-${idx}`} review={review} compact />
                ))}
            </div>
        </div>
    );
}
