'use client';

import { useRef, useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';
import Link from 'next/link';
import LetsTalkButton from '@/app/components/letsTalkButton';

export default function MobileSidebar({ navBg }) {
    const [open, setOpen] = useState(false);
    const sidebarRef = useRef(null);
    const backdropRef = useRef(null);

    useEffect(() => {
        if (open) {
            gsap.to(sidebarRef.current, {
                x: 0,
                duration: 0.3,
                ease: 'power2.out',
            });
            gsap.to(backdropRef.current, {
                opacity: 1,
                pointerEvents: 'auto',
                duration: 0.3,
            });
        } else {
            gsap.to(sidebarRef.current, {
                x: '-100%',
                duration: 0.3,
                ease: 'power2.in',
            });
            gsap.to(backdropRef.current, {
                opacity: 0,
                pointerEvents: 'none',
                duration: 0.3,
            });
        }
    }, [open]);

    return (
        <div className="xl:hidden">
            {/* Toggle Button */}
            <button onClick={() => setOpen(true)} className={`p-2  z-50 relative  ${navBg ? 'text-slate-800' : 'text-white'}`}>
                <Menu className="w-6 h-6" />
            </button>

            {/* Backdrop */}
            <div
                ref={backdropRef}
                className="fixed inset-0 bg-black/50 opacity-0 pointer-events-none z-40"
                onClick={() => setOpen(false)}
            />

            {/* Sidebar */}
            <div
                ref={sidebarRef}
                className="fixed p-5 top-0 left-0 h-full w-full bg-slate-900 z-50 shadow-lg -translate-x-full"
            >
                <div className="flex items-center justify-between px-5 py-5">
                    <h1 className={`font-bold text-xl transition-all lg:text-4xl text-white`}><span className="text-invest">I</span>nvestment<span className="text-invest text-2xl lg:text-5xl">.</span></h1>
                    <button onClick={() => setOpen(false)} className={`p-1 text-white`}>
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <nav className="px-4 py-6 space-y-4 text-white">
                    <Link href="/" className="block hover:text-black">Home</Link>
                    <Link href="/" className="block hover:text-black">About</Link>
                    <Link href="/" className="block hover:text-black">Portfolio</Link>
                    <Link href="/" className="block hover:text-black">Apply</Link>
                    <Link href="/" className="block hover:text-black">Contact</Link>
                </nav>
                <div>
                    <LetsTalkButton />
                </div>
            </div>
        </div>
    );
}