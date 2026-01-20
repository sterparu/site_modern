import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
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
                    <Hero />
                    <main className="min-h-screen">
                        {children}
                    </main>
                    <Footer />
                </LanguageProvider>
            </body>
        </html>
    );
}
