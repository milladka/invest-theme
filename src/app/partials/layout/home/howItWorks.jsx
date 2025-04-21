// components/HowItWorks.tsx
import { Lightbulb, Search, Users, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
    {
        icon: Lightbulb,
        title: "Apply",
        subtitle: "Share Your Vision",
        description:
            "Tell us about your startup, your mission, and what problem you’re solving. Your journey starts here.",
        bgColor: "bg-invest",
    },
    {
        icon: Search,
        title: "Review",
        subtitle: "Evaluation & Feedback",
        description:
            "Our investment team will analyze your product, market fit, and team to assess the potential for partnership.",
        bgColor: "bg-invest",
    },
    {
        icon: Users,
        title: "Meet",
        subtitle: "Get in Front of Us",
        description:
            "If selected, you'll be invited for a pitch meeting. We’ll dive deep into your roadmap and vision.",
        bgColor: "bg-invest",
    },
    {
        icon: Rocket,
        title: "Invest & Accelerate",
        subtitle: "Fuel for Growth",
        description:
            "Receive funding, mentorship, and access to a global network — everything you need to scale with confidence.",
        bgColor: "bg-yellow-500",
    },
];

export default function HowItWorks() {
    return (
        <section className="bg-white overflow-hidden py-20 px-5 lg:mx-0 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-indigo-100">
            <div className="relative max-w-5xl mx-auto">
                <h2 className="font-(family-name:--font-mulish) text-4xl font-bold text-center text-gray-900 mb-6">
                    How It Works
                </h2>
                <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16 font-[family-name:var(--font-kumbh-sans)]">
                    Our process is designed to discover, support, and scale the next generation of breakthrough startups.
                </p>

                <div className="relative border-l-2 border-gray-200 space-y-16 mx-5 lg:mx-0">
                    {steps.map((step, index) => (
                        <div key={index} className="relative pl-12">
                            <div className="absolute -left-5 top-1">
                                <span className={`flex items-center justify-center w-10 h-10 rounded-full ${step.bgColor} text-white shadow-lg`}>
                                    {<step.icon className="w-5 h-5" />}
                                </span>
                            </div>
                            <div className="text-left">
                                <h3 className="font-[family-name:var(--font-kumbh-sans)] text-2xl font-semibold text-gray-800">
                                    {step.title}
                                </h3>
                                <p className="font-[family-name:var(--font-kumbh-sans)] text-slate-800 mt-1">{step.subtitle}</p>
                                <p className="font-[family-name:var(--font-kumbh-sans)] text-gray-600 mt-2 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center py-15">
                <Link
                        href="/contact"
                        className="inline-block px-6 py-3 bg-invest text-white rounded-full text-lg font-medium  transition"
                    >
                        Get In Touch
                        <ArrowRight className="inline ml-2 w-5 h-5" />
                    </Link>
                </div>
                <div className="absolute right-[-100px] top-20 w-[300px] h-[300px] bg-gradient-to-tr from-indigo-200 to-purple-200 rounded-full blur-3xl opacity-30 z-0" />
            </div>
        </section>
    );
}
