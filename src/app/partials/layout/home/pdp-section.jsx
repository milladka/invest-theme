import { ArrowRight, BriefcaseBusiness, ChartPie, FolderKanban, LandPlot, Loader, Telescope } from "lucide-react"
import Link from "next/link"

export function PdpSection() {
    const details = [
        {
            id: 1,
            title: 'data & analytics',
            desc: 'Compellingly develop the cost effective infrastructures with intuitivism.',
            icon: <ChartPie strokeWidth={1} size={60} />,
            link: '/'
        },
        {
            id: 2,
            title: 'content planning',
            desc: 'Dynamically recapitalize bleeding-edge leadership skills for all apps.',
            icon: <LandPlot strokeWidth={1} size={60} />,
            link: '/'
        },
        {
            id: 3,
            title: 'sales management',
            desc: 'Compellingly develop the cost effective infrastructures with intuitivism.',
            icon: <FolderKanban strokeWidth={1} size={60} />,
            link: '/'
        },
        {
            id: 4,
            title: 'business consulting',
            desc: 'Dynamically recapitalize bleeding-edge leadership skills for all apps.',
            icon: <BriefcaseBusiness strokeWidth={1} size={60} />,
            link: '/'
        },
        {
            id: 5,
            title: 'private taxation',
            desc: 'Compellingly develop the cost effective infrastructures with intuitivism.',
            icon: <Loader strokeWidth={1} size={60} />,
            link: '/'
        },
        {
            id: 6,
            title: 'marketing strategy',
            desc: 'Dynamically recapitalize bleeding-edge leadership skills for all apps.',
            icon: <Telescope strokeWidth={1} size={60} />,
            link: '/'
        }
    ]
    return (
        <div className="mt-5 lg:mt-10 w-full p-5 lg:p-0">
            <div className="container m-auto">
                <div className="capitalize text-invest mb-2 font-[family-name:var(--font-kumbh-sans)] text-xs lg:text-lg">
                    Passionate – Dedicated – Professional
                </div>
                <div className="capitalize font-bold text-xl lg:text-2xl xl:text-4xl mt-5 text-slate-700">
                    achieve your goals with purpose & strategy
                </div>
                <div className="mt-10 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
                    {
                        details.map((item, index) => {
                            return (
                                <div key={index} className="bg-slate-100 border-b-4 border-invest hover:-translate-y-1 transition-all group p-5 lg:p-15 rounded-xl flex items-start flex-col gap-3">
                                    <div className="bg-white group-hover:border-slate-400 transition-all text-lg text-slate-400 border-slate-200 rounded-full p-2 border-2 w-25 h-25 flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <div className="capitalize font-bold text-lg lg:text-xl xl:text-2xl mt-5 text-slate-600">
                                        {item.title}
                                    </div>
                                    <div className="capitalize text-slate-400 mb-2 font-[family-name:var(--font-kumbh-sans)] text-sm">
                                        {item.desc}
                                    </div>
                                    <div>
                                        <Link href="/" className="font-[(family-name:--font-mulish)] font-bold tracking-wide flex items-center justify-center gap-2 text-slate-600 rounded-full transition-all duration-300 hover:bg-slate-600 hover:text-white group-hover:text-invest bg-white px-2 lg:px-5 py-1 lg:py-4 text-xs lg:text-sm">View Details <ArrowRight size={18} /></Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}