'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function ProgramPage() {
    const { t } = useLanguage();

    const days = [
        {
            title: 'Ziua 1',
            date: 'Miercuri, 30 Septembrie 2026',
            events: [
                { time: '09:00 - 10:00', title: 'Înregistrare participanți', description: 'Verificarea acreditărilor și distribuirea kiturilor oficiale pentru echipe și handleri.' },
                { time: '10:00 - 11:30', title: 'Ceremonie de deschidere', description: 'Defilarea delegațiilor, intonarea imnurilor și briefingul oficial privind regulile și siguranța.' },
                { time: '11:30 - 13:00', title: 'Runda eliminatorie - Grupa A', description: 'Primele dueluri eliminatorii ale Grupei A, cu evaluare tehnică completă și punctaj provizoriu.' },
                { time: '14:00 - 15:30', title: 'Runda eliminatorie - Grupa B', description: 'Continuarea rundelor eliminatorii pentru Grupa B și stabilirea clasamentului provizoriu.' },
            ]
        },
        {
            title: 'Ziua 2',
            date: 'Joi, 1 Octombrie 2026',
            events: [
                { time: '09:00 - 10:30', title: 'Meciuri sferturi de finală - Partea 1', description: 'Primele două meciuri de sferturi, cu accent pe exercițiile de obediență și control în ring.' },
                { time: '11:00 - 12:30', title: 'Meciuri sferturi de finală - Partea 2', description: 'Seria a doua de sferturi, cu scenarii de protecție și rezistență în fața figurantului.' },
                { time: '14:00 - 15:30', title: 'Meciuri sferturi de finală - Partea 3', description: 'Ultimele dueluri din sferturi și confirmarea semifinaliștilor pentru ziua următoare.' },
            ]
        },
        {
            title: 'Ziua 3',
            date: 'Vineri, 2 Octombrie 2026',
            events: [
                { time: '10:00 - 11:30', title: 'Semifinală 1', description: 'Semifinala 1 stabilește primul finalist printr-un parcurs complet de exerciții.' },
                { time: '12:00 - 13:30', title: 'Semifinală 2', description: 'A doua semifinală desemnează adversarul din finală și centralizează punctajele tehnice.' },
                { time: '15:00 - 16:30', title: 'Meci pentru locul 3', description: 'Confruntarea pentru medalia de bronz și departajarea finală a clasamentului.' },
            ]
        },
        {
            title: 'Ziua 4',
            date: 'Sâmbătă, 3 Octombrie 2026',
            events: [
                { time: '10:00 - 12:00', title: 'Pauză - Pregătire pentru finală', description: 'Perioadă de refacere, inspecție a terenului și briefing tehnic înainte de finală.' },
                { time: '14:00 - 16:00', title: 'Meciul final', description: 'Finala mare cu toate probele la intensitate maximă și arbitraj live.' },
            ]
        },
        {
            title: 'Ziua 5',
            date: 'Duminică, 4 Octombrie 2026',
            events: [
                { time: '10:00 - 11:00', title: 'Premierea participanților', description: 'Festivitatea de premiere pentru podium și acordarea trofeelor speciale.' },
                { time: '11:30 - 13:00', title: 'Ceremonie de închidere', description: 'Ceremonie oficială cu discursuri, predarea drapelului și mulțumiri partenerilor.' },
                { time: '14:00 - 16:00', title: 'Eveniment social', description: 'Recepție și eveniment social dedicat delegațiilor, sponsorilor și voluntarilor.' },
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
                                        <div className="md:w-32 flex-shrink-0">
                                            <span className="text-[#0066cc] font-bold block">{event.time}</span>
                                        </div>
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
            </div>
        </div>
    );
}
