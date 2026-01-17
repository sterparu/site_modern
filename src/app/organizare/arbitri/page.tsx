'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function ArbitriPage() {
    const { t } = useLanguage();

    return (
        <div className="container">
            <h1 className="page-title text-center mb-12">{t('nav.organizare.arbitri')}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-xl group">
                        <div className="h-64 bg-gradient-to-br from-[#003d82] to-[#0066cc] flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-white/10 skew-y-6 transform origin-bottom-left group-hover:skew-y-0 transition-transform duration-500"></div>
                            <span className="text-white font-medium text-lg relative z-10 opacity-70 group-hover:opacity-100 transition-opacity">
                                {t(`organizare.arbitri.card${item}.photo`)}
                            </span>
                        </div>
                        <div className="p-8">
                            <h3 className="text-xl font-bold text-[#003d82] mb-3">{t(`organizare.arbitri.card${item}.name`)}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {t(`organizare.arbitri.card${item}.bio`)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
