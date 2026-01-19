'use client';

import { useLanguage } from '@/context/LanguageContext';

// ... imports
import Link from 'next/link';

export default function CazarePage() {
    const { t } = useLanguage();

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-[#003d82] text-center mb-12">{t('nav.informatii.cazare')}</h1>

            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <div className="bg-[#003d82] p-6 text-white">
                    <h2 className="text-2xl font-bold flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        {t('accommodation.camper.title')}
                    </h2>
                </div>

                <div className="p-8 space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="bg-blue-50 p-3 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#003d82]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-lg text-gray-700 font-medium">{t('accommodation.camper.description')}</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="bg-yellow-50 p-3 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-lg text-gray-700">{t('accommodation.camper.facility')}</p>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100">
                        <p className="text-gray-600 mb-4">{t('accommodation.camper.contact')}</p>
                        <Link href="/contact" className="inline-block bg-[#003d82] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#002a5c] transition-colors">
                            {t('nav.contact')}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
