"use client"
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Menu } from "@/app/components/menu";

export function Header() {

    const [navBg, setNavBg] = useState(false);

    const changeNavBg = e => {
        window.scrollY >= 100 ? setNavBg(true) : setNavBg(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNavBg);
        return () => {
            window.removeEventListener('scroll', changeNavBg);
        };
    }, []);

    const textRef = useRef();
    useEffect(() => {
        gsap.fromTo(
            textRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1, ease: "ease" }
        );
    }, []);

    return (
        <header ref={textRef} className={`text-white ${navBg ? 'bg-white shadow' : ''} duration-100 transition-all z-10 opacity-0 fixed w-full h-20 lg:h-25 px-5 lg:px-10 xl:px-16 py-1 items-center justify-between flex`}>
            <div className="flex-1/5 p-1 font-[family-name:var(--font-kumbh-sans)]">
                <h1 className={`font-bold text-xl transition-all lg:text-4xl ${navBg ? 'text-slate-800' : ''} `}><span className="text-invest">I</span>nvestment<span className="text-invest text-2xl lg:text-5xl">.</span></h1>
            </div>
            <div className="flex-3/5 hidden xl:block">
                <Menu navBg={navBg} />
            </div>
            <div className={`flex-1/5 hidden xl:block ${navBg ? 'text-slate-800' : ''}`}>
                +1 800 555 5555
            </div>
        </header>
    )
}