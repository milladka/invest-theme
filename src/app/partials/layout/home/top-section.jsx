"use client"
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";
import Link from "next/link";


export default function TopSection() {
  const textRef = useRef();
  const textRef2 = useRef();
  const textRef3 = useRef();

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.75 }
    );
    gsap.fromTo(
      textRef2.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 1 }
    );
    gsap.fromTo(
      textRef3.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 1.25 }
    );
  }, []);

  return (
    <>
      <div className="px-2 lg:px-52 xl:px-58 2xl:px-85 min-h-90 lg:min-h-[750px] w-full bg-top-t bg-origin-border bg-center flex-col bg-no-repeat bg-cover gap-7 flex items-center justify-center">

        <div ref={textRef} className="font-(family-name:--font-mulish) 3xl:px-10 opacity-0 font-bold text-center text-white text-lg lg:text-3xl xl:text-4xl 2xl:text-5xl leading-7 lg:leading-13 xl:leading-20 capitalize">
          making your business profitable for <br /> today and tomorrow
        </div>
        <div ref={textRef2} className="text-white opacity-0 capitalize text-xs md:text-lg xl:text-2xl text-center">
          Inspiring customers & supporting through experience
        </div>
        <div ref={textRef3} className="opacity-0  flex items-center justify-center gap-3">
          <div>
            <Link href="/" className="font-(family-name:--font-mulish) flex items-center justify-center gap-2 text-white rounded-full transition-all border-2 border-[#f73760] duration-300 hover:bg-transparent bg-invest px-2 lg:px-5 py-1 lg:py-4 text-xs lg:text-sm">Our Projects <ArrowRight size={18} /></Link>
          </div>
          <div>
            <Link href="/" className="font-(family-name:--font-mulish) flex items-center justify-center gap-2 text-slate-600 bg-white rounded-full transition-all border-2 hover:text-white border-white duration-300 hover:bg-transparent px-2 lg:px-5 py-1 lg:py-4 text-xs lg:text-sm">Learn More <ArrowRight size={18} /></Link>
          </div>
        </div>

      </div>
      <div className="font-[family-name:var(--font-kumbh-sans)] container mx-auto bg-white p-5 rounded-2xl min-h-30 isolate -translate-y-15 shadow-xl flex flex-col md:flex-row items-center justify-around">
        <div className="text-center w-full p-3 ">
          <div className="text-lg lg:text-xl capitalize font-bold">experienced team</div>
          <div className="text-slate-400">Cursus ultrices diam</div>
        </div>
        <div className="text-center w-full p-3 lg:border-l-2 lg:border-invest">
          <div className="text-lg lg:text-xl capitalize font-bold">digital solutions</div>
          <div className="text-slate-400">Magna augue temp</div>
        </div>
        <div className="text-center w-full p-3 lg:border-l-2 lg:border-invest">
          <div className="text-lg lg:text-xl capitalize font-bold">24/7 support</div>
          <div className="text-slate-400">Nunc quisa volutpat</div>
        </div>
        <div className="text-center w-full p-3 lg:border-l-2 lg:border-invest">
          <div className="text-lg lg:text-xl capitalize font-bold">applicable ideas</div>
          <div className="text-slate-400">Cursus ultrices diam</div>
        </div>
      </div>
    </>
  );
}