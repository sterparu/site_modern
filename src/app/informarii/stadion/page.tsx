'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function StadionPage() {
    const { t } = useLanguage();

    return (
        <div className="container">
            <h1 className="page-title text-center mb-12">{t('nav.informatii.stadion')}</h1>

            <div className="flex flex-wrap gap-8 justify-center items-start">
                {/* Legend */}
                <div className="flex-1 min-w-[300px] max-w-sm bg-white rounded-2xl shadow-xl p-8 space-y-6">
                    <h2 className="text-2xl font-bold text-[#003d82] border-b border-gray-100 pb-4">{t('info.stadium.legend')}</h2>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-4 text-lg font-semibold text-gray-700">
                            <span className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold shadow-md">1</span>
                            {t('info.stadium.item1')}
                        </li>
                        <li className="flex items-center gap-4 text-lg font-semibold text-gray-700">
                            <span className="w-10 h-10 rounded-xl bg-yellow-400 text-gray-900 flex items-center justify-center font-bold shadow-md">2</span>
                            {t('info.stadium.item2')}
                        </li>
                        <li className="flex items-center gap-4 text-lg font-semibold text-gray-700">
                            <span className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-md">3</span>
                            {t('info.stadium.item3')}
                        </li>
                        <li className="flex items-center gap-4 text-lg font-semibold text-gray-700">
                            <span className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold shadow-md">4</span>
                            {t('info.stadium.item4')}
                        </li>
                    </ul>
                </div>

                {/* Map Image */}
                <div className="flex-1 min-w-[320px] max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden p-2">
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-100">
                        <Image
                            src="/images/informarii/stadion.png"
                            alt="Stadion Progresul Pecica - hartă zonală"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
