'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [desktopLanguageMenuOpen, setDesktopLanguageMenuOpen] = useState(false);
    const [mobileLanguageMenuOpen, setMobileLanguageMenuOpen] = useState(false);
    const pathname = usePathname();
    const { t, language, setLanguage, languages } = useLanguage();
    const desktopLanguageDropdownRef = useRef<HTMLLIElement>(null);
    const mobileLanguageDropdownRef = useRef<HTMLDivElement>(null);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };

    const currentLanguage = languages.find(l => l.code === language) || languages[0];

    // Close language dropdowns when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (desktopLanguageDropdownRef.current && !desktopLanguageDropdownRef.current.contains(event.target as Node)) {
                setDesktopLanguageMenuOpen(false);
            }
            if (mobileLanguageDropdownRef.current && !mobileLanguageDropdownRef.current.contains(event.target as Node)) {
                setMobileLanguageMenuOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="relative bg-[#003d82] shadow-md z-50">
            <div className="max-w-[1200px] mx-auto px-5 min-h-[80px] flex justify-between items-center">
                {/* Logos */}
                <div className="flex gap-5 items-center">
                </div>

                {/* Desktop Menu */}
                <ul className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-full left-0 w-full md:w-auto bg-[#0056b3] md:bg-transparent shadow-xl md:shadow-none z-40 transition-all`}>
                    <li>
                        <Link href="/" onClick={handleLinkClick} className="block text-[#ecf0f1] py-7 px-8 text-lg font-medium hover:bg-[#0056b3] transition-colors">
                            {t('nav.home')}
                        </Link>
                    </li>
                    <li className="relative group">
                        <span className="block text-[#ecf0f1] py-7 px-8 text-lg font-medium hover:bg-[#0056b3] transition-colors cursor-pointer">
                            {t('nav.organizare')}
                        </span>
                        <ul className="hidden group-hover:block absolute top-full left-0 bg-[#0056b3] min-w-[220px] shadow-xl py-2 z-50">
                            <li><Link href="/organizare/arbitri" onClick={handleLinkClick} className="block text-[#ecf0f1] py-3 px-5 hover:bg-[#003d82] hover:pl-6 transition-all">{t('nav.organizare.arbitri')}</Link></li>
                            <li><Link href="/organizare/uam" onClick={handleLinkClick} className="block text-[#ecf0f1] py-3 px-5 hover:bg-[#003d82] hover:pl-6 transition-all">{t('nav.organizare.uam')}</Link></li>
                            <li><Link href="/organizare/standuri-comerciale" onClick={handleLinkClick} className="block text-[#ecf0f1] py-3 px-5 hover:bg-[#003d82] hover:pl-6 transition-all">{t('nav.organizare.standuri')}</Link></li>
                        </ul>
                    </li>
                    <li className="relative group">
                        <span className="block text-[#ecf0f1] py-7 px-8 text-lg font-medium hover:bg-[#0056b3] transition-colors cursor-pointer">
                            {t('nav.competitie')}
                        </span>
                        <ul className="hidden group-hover:block absolute top-full left-0 bg-[#0056b3] min-w-[220px] shadow-xl py-2 z-50">
                            <li><Link href="/competitie/program" onClick={handleLinkClick} className="block text-[#ecf0f1] py-3 px-5 hover:bg-[#003d82] hover:pl-6 transition-all">{t('nav.competitie.program')}</Link></li>
                            <li><Link href="/competitie/participanti" onClick={handleLinkClick} className="block text-[#ecf0f1] py-3 px-5 hover:bg-[#003d82] hover:pl-6 transition-all">{t('nav.competitie.participanti')}</Link></li>
                            <li><Link href="/competitie/inregistrare" onClick={handleLinkClick} className="block text-[#ecf0f1] py-3 px-5 hover:bg-[#003d82] hover:pl-6 transition-all">{t('nav.competitie.inregistrare')}</Link></li>
                        </ul>
                    </li>
                    <li className="relative group">
                        <span className="block text-[#ecf0f1] py-7 px-8 text-lg font-medium hover:bg-[#0056b3] transition-colors cursor-pointer">
                            {t('nav.informatii')}
                        </span>
                        <ul className="hidden group-hover:block absolute top-full left-0 bg-[#0056b3] min-w-[220px] shadow-xl py-2 z-50">
                            <li><Link href="/informarii/stadion" onClick={handleLinkClick} className="block text-[#ecf0f1] py-3 px-5 hover:bg-[#003d82] hover:pl-6 transition-all">{t('nav.informatii.stadion')}</Link></li>
                            <li><Link href="/informarii/cum-ajungi" onClick={handleLinkClick} className="block text-[#ecf0f1] py-3 px-5 hover:bg-[#003d82] hover:pl-6 transition-all">{t('nav.informatii.cumAjungi')}</Link></li>
                            <li><Link href="/informarii/cazare" onClick={handleLinkClick} className="block text-[#ecf0f1] py-3 px-5 hover:bg-[#003d82] hover:pl-6 transition-all">{t('nav.informatii.cazare')}</Link></li>
                        </ul>
                    </li>
                    <li className="relative group">
                        <span className="block text-[#ecf0f1] py-7 px-8 text-lg font-medium hover:bg-[#0056b3] transition-colors cursor-pointer">
                            {t('nav.superselectie')}
                        </span>
                        <ul className="hidden group-hover:block absolute top-full left-0 bg-[#0056b3] min-w-[220px] shadow-xl py-2 z-50">
                            <li><Link href="/superselectie" onClick={handleLinkClick} className="block text-[#ecf0f1] py-3 px-5 hover:bg-[#003d82] hover:pl-6 transition-all">{t('nav.superselectie.despre')}</Link></li>
                            <li><Link href="/superselectie/program" onClick={handleLinkClick} className="block text-[#ecf0f1] py-3 px-5 hover:bg-[#003d82] hover:pl-6 transition-all">{t('nav.superselectie.program')}</Link></li>
                            <li><Link href="/superselectie/participanti" onClick={handleLinkClick} className="block text-[#ecf0f1] py-3 px-5 hover:bg-[#003d82] hover:pl-6 transition-all">{t('nav.superselectie.participanti')}</Link></li>
                            <li><Link href="/superselectie/rezultate" onClick={handleLinkClick} className="block text-[#ecf0f1] py-3 px-5 hover:bg-[#003d82] hover:pl-6 transition-all">{t('nav.superselectie.rezultate')}</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link href="/contact" onClick={handleLinkClick} className="block text-[#ecf0f1] py-7 px-8 text-lg font-medium hover:bg-[#0056b3] transition-colors">
                            {t('nav.contact')}
                        </Link>
                    </li>
                    {/* Desktop Language Switcher - Hidden on Mobile */}
                    <li className="relative hidden md:block" ref={desktopLanguageDropdownRef}>
                        <button
                            onClick={() => setDesktopLanguageMenuOpen(!desktopLanguageMenuOpen)}
                            className="w-full md:w-auto flex items-center gap-2 text-[#ecf0f1] py-7 px-8 text-lg font-medium hover:bg-[#0056b3] transition-colors appearance-none bg-transparent border-none cursor-pointer focus:outline-none"
                        >
                            <span className="text-2xl">{currentLanguage.flag}</span>
                            <span>{currentLanguage.code.toUpperCase()}</span>
                            <span className={`text-xs ml-1 transition-transform duration-200 ${desktopLanguageMenuOpen ? 'rotate-180' : ''}`}>▼</span>
                        </button>

                        {/* Dropdown */}
                        {desktopLanguageMenuOpen && (
                            <div className="absolute top-full right-0 mt-0 w-full md:w-56 bg-white rounded-b-xl shadow-2xl py-2 z-[60] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => {
                                            setLanguage(lang.code);
                                            setDesktopLanguageMenuOpen(false);
                                        }}
                                        className={`w-full text-left px-5 py-3 hover:bg-gray-100 flex items-center gap-3 transition-colors ${language === lang.code ? 'bg-gray-50 border-l-4 border-[#003d82]' : 'border-l-4 border-transparent'}`}
                                    >
                                        <span className="text-2xl">{lang.flag}</span>
                                        <div className="flex flex-col">
                                            <span className={`text-sm font-semibold ${language === lang.code ? 'text-[#003d82]' : 'text-gray-700'}`}>
                                                {lang.name}
                                            </span>
                                            <span className="text-xs text-gray-400 uppercase tracking-wider">{lang.code}</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        )}
                    </li>

                    {/* Logos */}
                    <li className="flex items-center gap-4 px-8 py-4 md:py-0 md:border-l md:border-white/20 md:ml-2">
                        <div className="relative w-12 h-12 bg-white/10 rounded-lg p-1">
                            <Image
                                src="/images/logos/fc_fara_fundal.png"
                                alt="FCI Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="relative w-12 h-12 bg-white/10 rounded-lg p-1">
                            <Image
                                src="/images/logos/achr.png"
                                alt="ACHR Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="relative w-12 h-12 bg-white/10 rounded-lg p-1">
                            <Image
                                src="/images/logos/mondio3.png"
                                alt="Mondio Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </li>
                </ul>

                {/* Mobile Right Actions: Language + Toggle */}
                <div className="flex items-center gap-2 md:hidden">
                    {/* Mobile Logos */}
                    <div className="flex items-center gap-2 mr-1">
                        <div className="relative w-8 h-8 bg-white/10 rounded-md p-0.5">
                            <Image
                                src="/images/logos/fc_fara_fundal.png"
                                alt="FCI Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="relative w-8 h-8 bg-white/10 rounded-md p-0.5">
                            <Image
                                src="/images/logos/achr.png"
                                alt="ACHR Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="relative w-8 h-8 bg-white/10 rounded-md p-0.5">
                            <Image
                                src="/images/logos/mondio3.png"
                                alt="Mondio Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Mobile Language Switcher */}
                    <div className="relative" ref={mobileLanguageDropdownRef}>
                        <button
                            onClick={() => setMobileLanguageMenuOpen(!mobileLanguageMenuOpen)}
                            className="flex items-center gap-2 text-white bg-white/10 p-2 rounded-lg"
                        >
                            <span className="text-xl">{currentLanguage.flag}</span>
                            <span className="text-sm font-bold">{currentLanguage.code.toUpperCase()}</span>
                        </button>

                        {/* Mobile Language Dropdown */}
                        {mobileLanguageMenuOpen && (
                            <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-2xl py-2 z-[70] overflow-hidden">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => {
                                            setLanguage(lang.code);
                                            setMobileLanguageMenuOpen(false);
                                        }}
                                        className={`w-full text-left px-4 py-3 hover:bg-gray-100 flex items-center gap-3 transition-colors ${language === lang.code ? 'bg-gray-50 border-l-4 border-[#003d82]' : 'border-l-4 border-transparent'}`}
                                    >
                                        <span className="text-2xl">{lang.flag}</span>
                                        <div className="flex flex-col">
                                            <span className={`text-sm font-semibold ${language === lang.code ? 'text-[#003d82]' : 'text-gray-700'}`}>
                                                {lang.name}
                                            </span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Mobile Toggle */}
                    <button onClick={toggleMobileMenu} className="flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-2 z-50">
                        <span className={`block w-6 h-0.5 bg-white rounded-sm transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-white rounded-sm transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-white rounded-sm transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
