'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function RegistrationPage() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        nume: '',
        prenume: '',
        email: '',
        telefon: '',
        tara: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
            const res = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || 'Eroare la înregistrare');
            }

            setStatus('success');
        } catch (error: any) {
            setStatus('error');
            setErrorMessage(error.message || 'A apărut o eroare. Vă rugăm să încercați din nou.');
        }
    };

    if (status === 'success') {
        return (
            <div className="container">
                <div className="max-w-2xl mx-auto bg-white rounded-2xl p-10 shadow-lg text-center">
                    <h1 className="text-3xl font-bold text-[#003d82] mb-6">{t('registration.success.title')}</h1>
                    <p className="text-lg text-gray-600 mb-4">
                        {t('registration.success.message')}, <strong>{formData.prenume} {formData.nume}</strong>!
                    </p>
                    <p className="text-gray-600 mb-8">
                        {t('registration.success.info')} <strong>{formData.email}</strong>.
                    </p>
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded mb-8 text-left">
                        <p className="text-sm text-yellow-800">
                            <strong>{t('registration.success.note')}</strong>
                        </p>
                    </div>
                    <button
                        onClick={() => {
                            setStatus('idle');
                            setFormData({ nume: '', prenume: '', email: '', telefon: '', tara: '' });
                        }}
                        className="btn"
                    >
                        {t('registration.success.back')}
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="max-w-2xl mx-auto">
                <h1 className="page-title text-center mb-6">{t('registration.title')}</h1>

                <div className="bg-blue-50 border-l-4 border-[#003d82] p-6 rounded-r-lg shadow-sm mb-10">
                    <p className="text-[#003d82]">
                        <strong>{t('registration.notice.label')}</strong> {t('registration.notice.text')}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
                    <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="nume" className="form-label">{t('registration.form.nume')}</label>
                                <input
                                    type="text"
                                    id="nume"
                                    name="nume"
                                    required
                                    className="form-control"
                                    value={formData.nume}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="prenume" className="form-label">{t('registration.form.prenume')}</label>
                                <input
                                    type="text"
                                    id="prenume"
                                    name="prenume"
                                    required
                                    className="form-control"
                                    value={formData.prenume}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="form-label">{t('registration.form.email')}</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="form-control"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="telefon" className="form-label">{t('registration.form.telefon')}</label>
                            <input
                                type="tel"
                                id="telefon"
                                name="telefon"
                                required
                                className="form-control"
                                value={formData.telefon}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="tara" className="form-label">{t('registration.form.tara')}</label>
                            <input
                                type="text"
                                id="tara"
                                name="tara"
                                required
                                className="form-control"
                                value={formData.tara}
                                onChange={handleChange}
                            />
                        </div>

                        {status === 'error' && (
                            <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm border border-red-100">
                                {errorMessage}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full btn mt-4 flex justify-center"
                        >
                            {status === 'loading' ? 'Se procesează...' : t('registration.form.submit')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
