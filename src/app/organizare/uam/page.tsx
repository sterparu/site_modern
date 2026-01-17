'use client';

import Link from 'next/link';
import Image from 'next/image';
import { uamMembers } from './uam-data';
import { useLanguage } from '@/context/LanguageContext';

export default function UAMPage() {
    const { t } = useLanguage();

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-10 text-[#003d82]">
                {t('nav.organizare.uam')} - Adjudicators
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {uamMembers.map((member) => (
                    <Link href={`/organizare/uam/${member.slug}`} key={member.slug} className="group w-full max-w-xs block">
                        <div className="flex flex-col items-center cursor-pointer p-4 rounded-xl hover:bg-gray-50 transition-colors">
                            <div className="relative w-64 h-64 mb-4 overflow-hidden rounded-full border-4 border-[#003d82] shadow-lg transition-transform transform group-hover:scale-105">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-[#003d82] mb-1 group-hover:text-[#0056b3] transition-colors">{member.name}</h3>
                                <p className="text-gray-600 font-medium">{member.category}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
