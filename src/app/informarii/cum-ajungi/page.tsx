'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function CumAjungiPage() {
    const { t } = useLanguage();

    return (
        <div className="container">
            <h1 className="page-title text-center mb-12">{t('nav.informatii.cumAjungi')}</h1>

            <div className="page-content">
                <div className="mb-8 text-center md:text-left">
                    <h2 className="text-2xl font-bold text-[#003d82] mb-2">{t('info.directions.location')}</h2>
                    <p className="text-xl text-gray-700 font-semibold">Stadion Progresul Pecica</p>
                </div>

                <div className="w-full h-[500px] mb-8 rounded-xl overflow-hidden shadow-lg border border-gray-100">
                    <iframe
                        src="https://www.google.com/maps?q=Stadion+Progresul+Pecica+Arad+Romania&output=embed&zoom=16"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full"
                        title="Harta Stadion Progresul Pecica"
                    >
                    </iframe>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm transition-all hover:shadow-md">
                        <h3 className="text-xl font-bold text-[#003d82] mb-4 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {t('info.directions.address')}
                        </h3>
                        <p className="text-gray-600 leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: t('contact.info.location.text') }}>
                        </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm transition-all hover:shadow-md">
                        <h3 className="text-xl font-bold text-[#003d82] mb-4 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {t('info.directions.instructions')}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            {t('info.directions.instructions.text')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
