// components/LetsTalkButton.tsx
"use client";

import { ArrowRight } from "lucide-react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";

export default function LetsTalkButton() {
    const buttonRef = useRef(null);
    const rightGroupRef = useRef(null);
    const leftGroupRef = useRef(null);

    useEffect(() => {
        const rightGroup = rightGroupRef.current;
        const leftGroup = leftGroupRef.current;

        gsap.set(leftGroup, { x: -40, opacity: 0 });

        const handleEnter = () => {
            gsap.to(rightGroup, {
                x: 40,
                opacity: 0,
                duration: 0.3,
                ease: "power2.out",
            });
            gsap.to(leftGroup, {
                x: 0,
                opacity: 1,
                duration: 0.3,
                delay: 0.05,
                ease: "power2.out",
            });
        };

        const handleLeave = () => {
            gsap.to(rightGroup, {
                x: 0,
                opacity: 1,
                duration: 0.3,
                delay: 0.05,
                ease: "power2.out",
            });
            gsap.to(leftGroup, {
                x: -40,
                opacity: 0,
                duration: 0.3,
                ease: "power2.out",
            });
        };

        const btn = buttonRef.current;
        btn.addEventListener("mouseenter", handleEnter);
        btn.addEventListener("mouseleave", handleLeave);

        return () => {
            btn.removeEventListener("mouseenter", handleEnter);
            btn.removeEventListener("mouseleave", handleLeave);
        };
    }, []);

    return (
        <Link
            href={'/'}
            ref={buttonRef}
            className="relative flex items-center justify-center w-48 h-12 bg-invest text-white rounded-full overflow-hidden"
        >
            <div
                ref={rightGroupRef}
                className="absolute flex items-center gap-2 font-[family-name:var(--font-kumbh-sans)]"
            >
                <span>Let’s talk</span>
                <ArrowRight size={20} />
            </div>

            <div
                ref={leftGroupRef}
                className="absolute flex items-center gap-2 font-[family-name:var(--font-kumbh-sans)]"
            >
                <ArrowRight size={20} />
                <span>Let’s talk</span>
            </div>
        </Link>
    );
}
