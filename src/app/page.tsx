'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
    const { t } = useLanguage();

    return (
        <div className="container">
            {/* Welcome Section */}
            <section className="bg-gradient-to-br from-[#003d82] to-[#0066cc] text-white rounded-2xl shadow-xl overflow-hidden mb-12 transform transition-all hover:scale-[1.01]">
                <div className="flex flex-col md:flex-row gap-10 p-10 md:p-14 items-center">
                    <div className="flex-1 text-left">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white drop-shadow-md">
                            {t('home.welcome.heading')}
                        </h2>
                        <div className="space-y-4 text-lg opacity-95 leading-relaxed">
                            <p>
                                {t('home.welcome.paragraph1')}
                            </p>
                            <p>
                                {t('home.welcome.paragraph2')}
                            </p>
                            <p className="font-semibold text-xl mt-4">
                                {t('home.welcome.paragraph3')}
                            </p>
                        </div>
                    </div>
                    <div className="flex-shrink-0 text-center">
                        <div className="relative w-64 h-80 mb-4 mx-auto rotate-1 hover:rotate-0 transition-transform duration-500">
                            {/* Placeholder for the president image - assuming it exists or will be added */}
                            <div className="w-full h-full bg-white/10 rounded-xl overflow-hidden shadow-2xl border-4 border-white/20">
                                <Image
                                    src="/images/cristian_stefanescu.jpg"
                                    alt="Cristian Stefanescu"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <p className="text-lg font-bold text-white drop-shadow-sm">Cristian Stefanescu</p>
                        <p className="text-sm opacity-80">Președinte ACHR</p>
                    </div>
                </div>
            </section>

            {/* Sponsors Section */}
            <section className="bg-white rounded-2xl shadow-lg p-10 md:p-14">
                <h2 className="text-3xl font-bold text-[#003d82] mb-10 text-center relative inline-block left-1/2 -translate-x-1/2 after:content-[''] after:block after:w-16 after:h-1 after:bg-[#d4af37] after:mx-auto after:mt-3 after:rounded-full">
                    {t('home.sponsors.title')}
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {/* Sponsor Items */}
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className="group h-40 flex items-center justify-center p-6 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 hover:border-[#d4af37] hover:bg-yellow-50/30 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-1">
                            <span className="text-gray-400 font-medium group-hover:text-[#d4af37] transition-colors">
                                Sponsor {item}
                            </span>
                            {/* Use Image component when real images are available */}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
