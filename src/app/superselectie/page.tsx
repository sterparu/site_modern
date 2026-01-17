'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function SuperSelectiePage() {
    const { t } = useLanguage();

    return (
        <div className="container">
            <h1 className="page-title text-center mb-12">{t('nav.superselectie')}</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <Link href="/superselectie/program" className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:-translate-y-2 hover:shadow-xl transition-all group">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <span className="text-4xl">📅</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#003d82] mb-2">{t('nav.superselectie.program')}</h3>
                    <p className="text-gray-500 text-center">{t('nav.superselectie')} - {t('nav.superselectie.program')}</p>
                </Link>

                <Link href="/superselectie/participanti" className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:-translate-y-2 hover:shadow-xl transition-all group">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <span className="text-4xl">🐕</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#003d82] mb-2">{t('nav.superselectie.participanti')}</h3>
                    <p className="text-gray-500 text-center">{t('nav.superselectie')} - {t('nav.superselectie.participanti')}</p>
                </Link>

                <Link href="/superselectie/rezultate" className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:-translate-y-2 hover:shadow-xl transition-all group">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <span className="text-4xl">🏆</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#003d82] mb-2">{t('nav.superselectie.rezultate')}</h3>
                    <p className="text-gray-500 text-center">{t('nav.superselectie')} - {t('nav.superselectie.rezultate')}</p>
                </Link>
            </div>
        </div>
    );
}
