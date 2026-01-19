'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function ProgramPage() {
    const { t } = useLanguage();

    const days = [
        {
            title: 'Ziua 1',
            date: 'Miercuri, 30 Septembrie 2026',
            events: [
                { time: '', title: t('competitie.program.event.opening'), description: '' },
                { time: '', title: t('competitie.program.event.vet_control'), description: '' },
            ]
        },
        {
            title: 'Ziua 2',
            date: 'Joi, 1 Octombrie 2026',
            events: [
                { time: '', title: t('competitie.program.event.cat_1_2'), description: '' },
            ]
        },
        {
            title: 'Ziua 3',
            date: 'Vineri, 2 Octombrie 2026',
            events: [
                { time: '', title: t('competitie.program.event.super_selection'), description: '' },
                { time: '', title: t('competitie.program.event.cat_3'), description: '' },
            ]
        },
        {
            title: 'Ziua 4',
            date: 'Sâmbătă, 3 Octombrie 2026',
            events: [
                { time: '', title: t('competitie.program.event.super_selection'), description: '' },
                { time: '', title: t('competitie.program.event.cat_3'), description: '' },
            ]
        },
        {
            title: 'Ziua 5',
            date: 'Duminică, 4 Octombrie 2026',
            events: [
                { time: '', title: t('competitie.program.event.cat_3'), description: '' },
                { time: '', title: t('competitie.program.event.closing'), description: '' },
            ]
        },
    ];

    return (
        <div className="container">
            <h1 className="page-title text-center mb-10">{t('nav.competitie.program')}</h1>

            <div className="max-w-4xl mx-auto space-y-8">
                {days.map((day, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                        <div className="bg-[#003d82] text-white p-6 flex flex-col md:flex-row justify-between items-center gap-2">
                            <h2 className="text-2xl font-bold">{day.title}</h2>
                            <span className="text-white/80 font-medium bg-white/10 px-4 py-1 rounded-full">{day.date}</span>
                        </div>
                        <div className="p-6">
                            <div className="space-y-6">
                                {day.events.map((event, idx) => (
                                    <div key={idx} className="flex flex-col md:flex-row gap-4 md:gap-8 p-4 hover:bg-gray-50 rounded-lg transition-colors border-l-4 border-transparent hover:border-[#d4af37]">
                                        {/* <div className="md:w-32 flex-shrink-0">
                                            <span className="text-[#0066cc] font-bold block">{event.time}</span>
                                        </div> */}
                                        <div>
                                            <h3 className="font-bold text-gray-800 text-lg mb-2">{event.title}</h3>
                                            <p className="text-gray-600 leading-relaxed">{event.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-8 rounded-r-lg">
                    <p className="text-gray-700 italic font-medium">
                        {t('competitie.program.notice')}
                    </p>
                </div>
            </div>
        </div >
    );
}
