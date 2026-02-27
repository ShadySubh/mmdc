"use client";
import { reviews, reviewsPageUrl } from "@/app/data/reviews";
import { ReviewCard } from "@/app/components/ReviewCard";
import Link from "next/link";
import { Star, ArrowLeft, ExternalLink } from "lucide-react";

export default function ReviewsPage() {
    const rating = 4.8;
    const total = 1655;

    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-50 via-teal-50/30 to-cyan-50/30">
            {/* Header */}
            <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span className="hidden sm:inline">Back to Home</span>
                    </Link>
                    <div className="flex-1" />
                    <a
                        href={reviewsPageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-teal-700 transition-colors"
                    >
                        <ExternalLink className="w-4 h-4" />
                        See on Google Maps
                    </a>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Hero Summary */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-white rounded-2xl shadow-md px-6 py-4 mb-6">
                        <span className="text-5xl font-bold text-gray-900">{rating}</span>
                        <div className="text-left">
                            <div className="flex gap-1 mb-1">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                            <p className="text-sm text-gray-500">
                                Based on{" "}
                                <span className="font-semibold text-gray-700">{total.toLocaleString()}</span>{" "}
                                Google Reviews
                            </p>
                        </div>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        What Our Patients Say
                    </h1>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        Real reviews from real patients. Every card below links directly to
                        the original Google Maps review.
                    </p>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 mb-12">
                    {[
                        { label: "5-Star Reviews", value: "94%", icon: "⭐" },
                        { label: "Google Reviews", value: "1,655+", icon: "🗺️" },
                        { label: "Patient Rating", value: "4.8/5", icon: "❤️" },
                    ].map((stat) => (
                        <div
                            key={stat.label}
                            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 text-center"
                        >
                            <div className="text-2xl mb-1">{stat.icon}</div>
                            <div className="text-xl md:text-2xl font-bold text-teal-600">
                                {stat.value}
                            </div>
                            <div className="text-xs md:text-sm text-gray-500">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review) => (
                        <div key={review.id} className="flex">
                            <div className="w-full">
                                <ReviewCard review={review} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA bottom */}
                <div className="mt-16 text-center">
                    <p className="text-gray-500 mb-4">
                        Want to see all {total.toLocaleString()} reviews?
                    </p>
                    <a
                        href={reviewsPageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                    >
                        View All on Google Maps
                        <ExternalLink className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </main>
    );
}
