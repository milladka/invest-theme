
export function Who() {
    const Details = [
        {
            id: 1,
            title: 'Seed & early-stage funding',
            src: '/image/1.webp',
            desc: 'We provide the capital you need to build, launch, and grow — from idea to traction.'
        },
        {
            id: 2,
            title: 'Expert mentorship and coaching',
            src: '/image/1.webp',
            desc: 'Work closely with seasoned founders, investors, and domain experts to sharpen your strategy.'
        },
        {
            id: 3,
            title: 'Co-working spaces',
            src: '/image/1.webp',
            desc: 'Get guidance on legal, financial, and operational matters from trusted advisors.'
        },
        {
            id: 4,
            title: 'Legal & business support',
            src: '/image/1.webp',
            desc: 'Tap into our network of global VCs and angels to fuel your next funding round.'
        },
        {
            id: 5,
            title: 'Access to global investor networks',
            src: '/image/1.webp',
            desc: 'Pitch, connect, and grow through exclusive events, workshops, and investor showcases.'
        },
        {
            id: 6,
            title: 'Community events & demo days',
            src: '/image/1.webp',
            desc: 'We provide the capital you need to build, launch, and grow — from idea to traction.'
        }
    ]
    return (
        <div className="relative min-h-96 mt-10 lg:mt-32 py-28 lg:py-32">
            <div className="container mx-auto p-5 lg:p-0">
                <div className="text-center font-bold text-3xl xl:text-4xl font-[family-name:var(--font-kumbh-sans)] text-slate-700 bg-white lg:bg-transparent">What We Offer</div>
                <div className="text-center font-bold text-md xl:text-lg font-[family-name:var(--font-kumbh-sans)] text-slate-500 mt-5">More Than Just Capital</div>
                <div className="text-center text-md xl:text-md font-[family-name:var(--font-kumbh-sans)] text-slate-500 mt-2">
                    We provide a full ecosystem to accelerate your growth
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-3 xl:gap-8 mt-10 lg:mt-16">
                    {
                        Details.map((item, index) => {
                            return (
                                <div className="text-center gap-1 p-5 bg-white flex-col lg:p-5 flex items-center justify-center rounded-lg text-lg border border-sky-100 shadow-xs shadow-sky-100" key={index}>

                                    <div className="capitalize text-slate-500 font-semibold">
                                        {item.title}
                                    </div>
                                    <div className="text-sm text-slate-400">
                                        {item.desc}
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>


            </div>
            <div className="u-cover-absolute"></div>
        </div>
    )
}