'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function CookiePolicyPage() {
    const { t } = useLanguage();

    return (
        <div className="container">
            <h1 className="page-title text-center mb-10">{t('footer.cookies')}</h1>

            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10 md:p-14 text-gray-700 leading-relaxed">
                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-[#003d82] mb-4">Ce sunt cookie-urile?</h2>
                    <p>Cookie-urile sunt fișiere text mici care sunt plasate pe computerul sau dispozitivul dvs. mobil când vizitați un site web. Acestea sunt utilizate pe scară largă pentru a face site-urile web să funcționeze sau să funcționeze mai eficient, precum și pentru a furniza informații proprietarilor site-ului.</p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-[#003d82] mb-4">Cum folosim cookie-urile?</h2>
                    <p className="mb-4">{t('common.cookie.policy')}</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Îmbunătățirea experienței de navigare</li>
                        <li>Analiza traficului site-ului</li>
                        <li>Salvarea preferințelor utilizatorilor</li>
                        <li>Asigurarea funcționalității corecte a site-ului</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-[#003d82] mb-4">Tipuri de cookie-uri utilizate</h2>
                    <h3 className="text-xl font-semibold text-[#0066cc] mb-2">Cookie-uri esențiale</h3>
                    <p className="mb-4">Aceste cookie-uri sunt necesare pentru funcționarea site-ului și nu pot fi dezactivate în sistemele noastre. Ele sunt de obicei setate doar ca răspuns la acțiunile pe care le faceți, cum ar fi setarea preferințelor de confidențialitate, conectarea sau completarea formularelor.</p>

                    <h3 className="text-xl font-semibold text-[#0066cc] mb-2">Cookie-uri de performanță</h3>
                    <p>Aceste cookie-uri ne permit să numărăm vizitele și sursele de trafic, astfel încât să putem măsura și îmbunătăți performanța site-ului nostru. Ne ajută să știm care pagini sunt cele mai populare și mai puțin populare și să vedem cum vizitatorii se deplasează pe site.</p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-[#003d82] mb-4">Gestionarea cookie-urilor</h2>
                    <p>Puteți controla și/sau șterge cookie-urile după cum doriți. Puteți șterge toate cookie-urile care sunt deja pe computerul dvs. și puteți seta majoritatea browserelor pentru a preveni plasarea acestora. Totuși, dacă faceți acest lucru, este posibil să trebuiască să ajustați manual anumite preferințe de fiecare dată când vizitați un site, iar unele servicii și funcționalități pot să nu funcționeze.</p>
                </section>

                <div className="text-sm text-gray-500 pt-8 border-t border-gray-100">
                    <strong>Ultima actualizare:</strong> Noiembrie 2025
                </div>
            </div>
        </div>
    );
}
