'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function SuperSelectieParticipantiPage() {
    const { t } = useLanguage();

    return (
        <div className="container">
            <h1 className="page-title text-center mb-10">{t('nav.superselectie.participanti')}</h1>

            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg border border-gray-100 p-8 text-center text-gray-500">
                <p className="text-lg">{t('common.soon')}</p>
            </div>
        </div>
    );
}
