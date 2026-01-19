'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactPage() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        nume: '',
        prenume: '',
        email: '',
        mesaj: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                throw new Error('Eroare la trimiterea mesajului');
            }

            setStatus('success');
            setFormData({ nume: '', prenume: '', email: '', mesaj: '' });
        } catch (error) {
            setStatus('error');
            setErrorMessage('A apărut o eroare. Vă rugăm să încercați din nou.');
        }
    };

    return (
        <div className="container">
            <h1 className="page-title text-center mb-12">{t('nav.contact')}</h1>

            <div className="grid md:grid-cols-2 gap-10">
                {/* Contact Info */}
                <div className="bg-[#003d82] text-white rounded-2xl p-10 shadow-lg h-fit">
                    <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-white/20">{t('contact.info.title')}</h2>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-[#d4af37] font-semibold text-lg mb-2">{t('contact.info.location.title')}</h3>
                            <p className="opacity-90" dangerouslySetInnerHTML={{ __html: t('contact.info.location.text') }}></p>
                        </div>

                        <div>
                            <h3 className="text-[#d4af37] font-semibold text-lg mb-2">{t('contact.info.phone.title')}</h3>
                            <p className="opacity-90">+40 741 952 880</p>
                        </div>

                        <div>
                            <h3 className="text-[#d4af37] font-semibold text-lg mb-2">{t('contact.info.email.title')}</h3>
                            <p className="opacity-90">mondioringroexams@gmail.com</p>
                        </div>


                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white rounded-2xl p-10 shadow-lg">
                    <h2 className="text-2xl font-bold text-[#003d82] mb-6">{t('contact.form.title')}</h2>

                    {status === 'success' ? (
                        <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-xl text-center">
                            <h3 className="font-bold text-xl mb-2">Mesaj Trimis!</h3>
                            <p>Vă mulțumim pentru mesaj. Vă vom răspunde în cel mai scurt timp posibil.</p>
                            <button
                                onClick={() => setStatus('idle')}
                                className="mt-4 text-green-700 hover:text-green-800 font-semibold underline"
                            >
                                Trimite un nou mesaj
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="nume" className="block text-sm font-semibold text-[#003d82]">{t('contact.form.nume')}</label>
                                    <input
                                        type="text"
                                        id="nume"
                                        name="nume"
                                        value={formData.nume}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0066cc] focus:ring-2 focus:ring-[#0066cc]/20 outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="prenume" className="block text-sm font-semibold text-[#003d82]">{t('contact.form.prenume')}</label>
                                    <input
                                        type="text"
                                        id="prenume"
                                        name="prenume"
                                        value={formData.prenume}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0066cc] focus:ring-2 focus:ring-[#0066cc]/20 outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-semibold text-[#003d82]">{t('contact.form.email')}</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0066cc] focus:ring-2 focus:ring-[#0066cc]/20 outline-none transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="mesaj" className="block text-sm font-semibold text-[#003d82]">{t('contact.form.mesaj')}</label>
                                <textarea
                                    id="mesaj"
                                    name="mesaj"
                                    rows={5}
                                    value={formData.mesaj}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0066cc] focus:ring-2 focus:ring-[#0066cc]/20 outline-none transition-all resize-none"
                                ></textarea>
                            </div>

                            {status === 'error' && (
                                <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm">
                                    {errorMessage}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full py-4 bg-gradient-to-r from-[#003d82] to-[#0066cc] text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === 'loading' ? 'Se trimite...' : t('contact.form.submit')}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
