'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const portfolioItems = [
    {
        title: 'AI-Powered SaaS Platform',
        description: 'A scalable platform with integrated AI tools for business automation.',
        imageUrl: '/image/4.jpg',
    },
    {
        title: 'E-commerce Redesign',
        description: 'A sleek and modern e-commerce site redesign to boost sales and customer engagement.',
        imageUrl: '/image/5.jpg',
    },
    {
        title: 'E-commerce Redesign',
        description: 'A sleek and modern e-commerce site redesign to boost sales and customer engagement.',
        imageUrl: '/image/6.jpg',
    },
    {
        title: 'E-commerce Redesign',
        description: 'A sleek and modern e-commerce site redesign to boost sales and customer engagement.',
        imageUrl: '/image/7.jpg',
    },
    {
        title: 'E-commerce Redesign',
        description: 'A sleek and modern e-commerce site redesign to boost sales and customer engagement.',
        imageUrl: '/image/3.webp',
    },
    // Add more portfolio items here...
];

export default function Portfolio() {
    return (
        <section className="py-25 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-[family-name:var(--font-kumbh-sans)] text-4xl font-bold text-center text-gray-900 mb-8">
                    Portfolio & Success Stories
                </h2>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    navigation
                    loop
                    autoplay={{ delay: 5000 }}
                >
                    {portfolioItems.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="rounded-lg overflow-hidden shadow-xs bg-slate-50 m-3">
                                <img src={item.imageUrl} alt={item.title} className="w-full h-56 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-800 font-(family-name:--font-mulish)">{item.title}</h3>
                                    <p className="text-gray-600 text-sm mt-2 font-(family-name:--font-mulish)">{item.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}