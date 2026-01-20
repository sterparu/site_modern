'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
    const { t } = useLanguage();

    return (
        <div className="flex flex-col min-h-screen">


            <div className="container">
                {/* President Message (Moved from Welcome) */}
                <section className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16 border-l-8 border-[#003d82]">
                    <div className="flex flex-col md:flex-row gap-10 p-10 md:p-14 items-center">
                        <div className="flex-1 text-left">
                            <h2 className="text-3xl font-bold mb-6 text-[#003d82] font-heading">
                                {t('home.welcome.heading')}
                            </h2>
                            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                                <p>
                                    {t('home.welcome.paragraph1')}
                                </p>
                                <p>
                                    {t('home.welcome.paragraph2')}
                                </p>
                                <p className="font-semibold text-xl mt-4 text-[#003d82]">
                                    {t('home.welcome.paragraph3')}
                                </p>
                            </div>
                        </div>
                        <div className="flex-shrink-0 text-center">
                            <div className="relative w-64 h-64 mb-4 mx-auto rounded-full overflow-hidden border-4 border-[#003d82] shadow-2xl">
                                <Image
                                    src="/images/cristian_stefanescu.jpg"
                                    alt="Cristian Stefanescu"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <p className="text-xl font-bold text-[#003d82]">Cristian Ștefănescu</p>
                            <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Președinte ACHR</p>
                        </div>
                    </div>
                </section>

                {/* Mayor Section */}
                <section className="bg-gradient-to-br from-[#003d82] to-[#0066cc] text-white rounded-2xl shadow-xl overflow-hidden mb-12 transform transition-all hover:scale-[1.01]">
                    <div className="flex flex-col md:flex-row gap-10 p-10 md:p-14 items-center">
                        <div className="flex-1 text-left">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white drop-shadow-md">
                                {t('home.mayor.heading')}
                            </h2>
                            <div className="space-y-4 text-lg opacity-95 leading-relaxed">
                                <p>{t('home.mayor.text.p1')}</p>
                                <p>{t('home.mayor.text.p2')}</p>
                                <p>{t('home.mayor.text.p3')}</p>
                                <p>{t('home.mayor.text.p4')}</p>
                                <p className="font-semibold text-xl mt-4">
                                    {t('home.mayor.text.p5')}
                                </p>
                            </div>
                        </div>
                        <div className="flex-shrink-0 text-center">
                            <div className="relative w-64 h-80 mb-4 mx-auto rotate-1 hover:rotate-0 transition-transform duration-500">
                                {/* User needs to ensure this image exists */}
                                <div className="w-full h-full bg-white/10 rounded-xl overflow-hidden shadow-2xl border-4 border-white/20">
                                    <Image
                                        src="/images/primar.jpeg"
                                        alt="Petru Antal"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <p className="text-lg font-bold text-white drop-shadow-sm">{t('home.mayor.name')}</p>
                            <p className="text-sm opacity-80">{t('home.mayor.role')}</p>
                        </div>
                    </div>
                </section>


            </div>
        </div>
    );
}
