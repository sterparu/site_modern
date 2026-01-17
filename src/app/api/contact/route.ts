import { NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/email';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { nume, prenume, email, mesaj } = body;

        if (!nume || !prenume || !email || !mesaj) {
            return NextResponse.json(
                { error: 'Toate câmpurile sunt obligatorii' },
                { status: 400 }
            );
        }

        const adminEmail = process.env.ADMIN_EMAIL || 'contact@example.com';

        await sendContactEmail(adminEmail, {
            nume,
            prenume,
            email,
            mesaj
        });

        return NextResponse.json({ success: true, message: 'Mesaj trimis cu succes' });
    } catch (error) {
        console.error('Error handling contact form:', error);
        return NextResponse.json(
            { error: 'Eroare internă la trimiterea mesajului' },
            { status: 500 }
        );
    }
}
