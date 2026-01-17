'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function StanduriPage() {
    const { t } = useLanguage();

    return (
        <div className="container">
            <h1 className="page-title text-center mb-12">{t('nav.organizare.standuri')}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1">
                        <div className="h-56 bg-gray-100 flex items-center justify-center border-b border-gray-100">
                            <span className="text-gray-400 font-medium text-lg">Foto Stand {item}</span>
                        </div>
                        <div className="p-8">
                            <h3 className="text-xl font-bold text-[#003d82] mb-3">Nume Stand {item}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
