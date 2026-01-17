'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function ParticipantsPage() {
    const { t } = useLanguage();

    return (
        <div className="container">
            <h1 className="page-title text-center mb-10">{t('nav.competitie.participanti')}</h1>

            <div className="max-w-3xl mx-auto bg-white rounded-2xl p-12 shadow-lg text-center border-t-4 border-[#003d82]">
                <div className="mb-6 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                    {t('common.soon')}
                </p>
            </div>
        </div>
    );
}
