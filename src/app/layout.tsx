import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
    title: 'Mondio 2026 - Campionatul Mondial de Mondioring',
    description: 'Site-ul oficial al Campionatului Mondial de Mondioring 2026',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ro">
            <body>
                <LanguageProvider>
                    <Navbar />
                    <div className="w-full bg-white relative">
                        <div className="max-w-[1200px] mx-auto px-4 py-4 md:py-6">
                            <div className="relative w-full h-[120px] md:h-[180px] flex justify-center">
                                <img
                                    src="/images/wc-logo.jpeg"
                                    alt="World Championship Logo"
                                    className="h-full w-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>
                    <main className="min-h-screen">
                        {children}
                    </main>
                    <Footer />
                </LanguageProvider>
            </body>
        </html>
    );
}
