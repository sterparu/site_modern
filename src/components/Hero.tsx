'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className="relative w-full min-h-[550px] md:min-h-0 md:h-[500px] flex items-center justify-center overflow-hidden mb-8">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg-final.jpg"
                    alt="Mondioring Action"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#003d82]/90 to-[#003d82]/40 mix-blend-multiply"></div>
            </div>

            {/* Hero Content */}
            <div className="container relative z-10 text-white flex flex-col md:flex-row items-center gap-6 md:gap-12 px-4 md:px-6">
                <div className="flex-1 text-center md:text-left w-full">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 tracking-tight leading-time font-heading">
                        <span className="block drop-shadow-md text-2xl sm:text-3xl md:text-5xl">FCI WORLD CHAMPIONSHIP</span>
                        <span className="block text-[#ff4500] drop-shadow-lg text-4xl sm:text-5xl md:text-7xl my-1 md:my-2">MONDIORING</span>
                        <span className="block text-xl sm:text-2xl md:text-4xl mt-2 font-light opacity-90">PECICA, ROMANIA 2026</span>
                    </h1>

                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start w-full max-w-lg mx-auto md:mx-0">
                        <Link href="/competitie/program" className="w-full sm:w-auto">
                            <button className="w-full bg-[#003d82] hover:bg-[#002a5c] text-white font-bold py-3 px-4 md:px-8 rounded-full shadow-lg transform hover:scale-105 transition-all uppercase tracking-wider text-sm md:text-lg">
                                {t('nav.competitie.program')}
                            </button>
                        </Link>
                        <Link href="/competitie/inregistrare" className="w-full sm:w-auto">
                            <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-4 md:px-8 rounded-full shadow-lg transform hover:scale-105 transition-all uppercase tracking-wider text-sm md:text-lg">
                                {t('nav.competitie.inregistrare')}
                            </button>
                        </Link>
                        <Link href="/live" className="w-full sm:w-auto">
                            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 md:px-8 rounded-full shadow-lg transform hover:scale-105 transition-all uppercase tracking-wider text-sm md:text-lg flex items-center justify-center gap-2">
                                <span className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full animate-pulse"></span>
                                {t('nav.liveStream')}
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Logo on the right */}
                <div className="hidden md:block relative w-1/3 max-w-[280px] animate-fade-in-up ml-auto">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-blue-500 rounded-full blur-[80px] opacity-40 animate-pulse"></div>

                    {/* Glass Container */}
                    <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
                        <div className="relative w-full aspect-auto min-h-[150px] flex items-center justify-center">
                            <div className="relative w-full h-[180px]">
                                <Image
                                    src="/images/wc-logo.jpeg"
                                    alt="World Championship Logo"
                                    fill
                                    className="object-contain drop-shadow-xl rounded-lg"
                                />
                            </div>
                        </div>
                        <div className="mt-4 text-center">
                            <span className="text-xs font-bold tracking-[0.2em] text-white/80 uppercase">Official Event</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#f8f9fa] to-transparent z-10"></div>
        </section>
    );
}
