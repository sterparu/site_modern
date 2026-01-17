'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#003d82] text-[#ecf0f1] py-10 mt-10 shadow-[0_-2px_5px_rgba(0,0,0,0.2)]">
            <div className="max-w-[1200px] mx-auto px-5 text-center">
                <div className="mb-4">
                    <p className="font-semibold text-lg mb-2">Mondio 2026</p>
                    <p className="text-sm">Competiție Internațională de Mondioring</p>
                    <p className="text-sm">{t('footer.copyright').replace('2026', currentYear.toString())}</p>
                </div>

                <div className="flex justify-center gap-4 text-sm mt-4">
                    <Link href="/politica-cookies" className="hover:text-white underline">Politica Cookie-uri</Link>
                </div>

                <p className="text-xs text-white/70 mt-6">
                    {t('footer.powered')}
                </p>
            </div>
        </footer>
    );
}
