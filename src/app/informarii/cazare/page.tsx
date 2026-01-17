'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function CazarePage() {
    const { t } = useLanguage();

    return (
        <div className="container">
            <h1 className="page-title text-center mb-12">{t('nav.informatii.cazare')}</h1>
            <div className="bg-white rounded-xl shadow-md p-10 text-center text-gray-500">
                <p className="text-xl">{t('common.soon')}</p>
            </div>
        </div>
    );
}
