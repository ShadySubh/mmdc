"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { GalleryImage } from "@/app/data/gallery";

interface ParallaxScrollProps {
    images: GalleryImage[];
}

export function ParallaxScroll({ images }: ParallaxScrollProps) {
    const gridRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        container: gridRef,
    });

    const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

    const third = Math.ceil(images.length / 3);
    const firstPart = images.slice(0, third);
    const secondPart = images.slice(third, 2 * third);
    const thirdPart = images.slice(2 * third);

    return (
        <div
            className="h-[44rem] items-start overflow-y-auto w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] hide-scrollbar"
            ref={gridRef}
        >
            <div className="grid grid-cols-2 md:grid-cols-3 items-start max-w-5xl mx-auto gap-4 py-8 px-4">
                <div className="grid gap-4">
                    {firstPart.map((img, idx) => (
                        <motion.div style={{ y: translateFirst }} key={`col1-${idx}`}>
                            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-lg">
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-4">
                    {secondPart.map((img, idx) => (
                        <motion.div style={{ y: translateSecond }} key={`col2-${idx}`}>
                            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-lg">
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-4 hidden md:grid">
                    {thirdPart.map((img, idx) => (
                        <motion.div style={{ y: translateThird }} key={`col3-${idx}`}>
                            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-lg">
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
