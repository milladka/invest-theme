'use client';

import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat py-24 px-6 sm:px-12"
            style={{
                backgroundImage: 'url(/image/bg.jpg)', // 📸 تصویر دلخواهت رو اینجا بگذار
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

            {/* Content */}
            <div className="relative max-w-4xl mx-auto text-center text-white z-10">
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                    Ready to bring your startup to life?
                </h2>
                <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                    We invest in bold founders solving real-world problems. If you're building something great, we’d love to hear from you.
                </p>
                <a
                    href="/apply"
                    className="inline-flex items-center px-6 py-3 bg-invest text-white rounded-full text-md transition"
                >
                    Apply Today
                    <ArrowRight className="ml-2 w-5 h-5" />
                </a>
            </div>
        </section>
    );
}