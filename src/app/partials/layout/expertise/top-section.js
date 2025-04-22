"use client"
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";


export default function TopSectionExpertise() {
    const textRef = useRef();
    const textRef2 = useRef();

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
    }, []);

    return (
        <>
            <div className="px-2 lg:px-52 xl:px-58 2xl:px-85 min-h-90 lg:min-h-[550px] py-25 w-full bg-top-t-2 bg-origin-border bg-center flex-col bg-no-repeat bg-cover gap-7 flex items-center justify-center">

                <div ref={textRef} className="font-(family-name:--font-mulish) 3xl:px-10 opacity-0 font-bold text-center text-white text-lg lg:text-3xl xl:text-4xl 2xl:text-5xl leading-7 lg:leading-13 xl:leading-20 capitalize">
                    Expertise
                </div>
                <div ref={textRef2} className="text-white opacity-0 capitalize text-xs md:text-lg xl:text-2xl text-center">
                    Inspiring customers & supporting through experience
                </div>
                <div className="text-white hidden xl:flex font-[family-name:var(--font-kumbh-sans)] container mx-auto bg-transparent p-5 rounded-2xl min-h-30 isolate  flex-col md:flex-row items-center justify-around">
                    <div className="text-center w-full p-3 ">
                        <div className="text-lg lg:text-xl capitalize font-bold">experienced team</div>
                        <div className="text-white">Cursus ultrices diam</div>
                    </div>
                    <div className="text-center w-full p-3 lg:border-l-2 lg:border-invest">
                        <div className="text-lg lg:text-xl capitalize font-bold">digital solutions</div>
                        <div className="text-white">Magna augue temp</div>
                    </div>
                    <div className="text-center w-full p-3 lg:border-l-2 lg:border-invest">
                        <div className="text-lg lg:text-xl capitalize font-bold">24/7 support</div>
                        <div className="text-white">Nunc quisa volutpat</div>
                    </div>
                    <div className="text-center w-full p-3 lg:border-l-2 lg:border-invest">
                        <div className="text-lg lg:text-xl capitalize font-bold">applicable ideas</div>
                        <div className="text-white">Cursus ultrices diam</div>
                    </div>
                </div>

            </div>

        </>
    );
}