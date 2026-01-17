
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { sendRegistrationConfirmation } from '@/lib/email';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { nume, prenume, email, telefon, tara } = body;

        // Validation
        if (!nume || !prenume || !email || !telefon || !tara) {
            return NextResponse.json(
                { error: 'Toate câmpurile sunt obligatorii.' },
                { status: 400 }
            );
        }

        // 1. Insert into Supabase
        const { data, error } = await supabase
            .from('registrations')
            .insert([
                {
                    nume,
                    prenume,
                    email,
                    telefon,
                    tara,
                    created_at: new Date().toISOString(),
                    email_sent: false // Default to false
                }
            ])
            .select() // Select to get the ID back
            .single();

        if (error) {
            console.error('Supabase error:', error);
            return NextResponse.json(
                { error: 'Eroare la salvarea datelor. Vă rugăm să încercați din nou.' },
                { status: 500 }
            );
        }

        const registrationId = data.id;

        // 2. Send Email
        // TODO: Replace with actual team registration link provided by user
        const linkEchipa = 'https://example.com/formular-echipa-placeholder';

        try {
            await sendRegistrationConfirmation(email, `${prenume} ${nume}`, linkEchipa);

            // 3. Update email_sent status
            await supabase
                .from('registrations')
                .update({ email_sent: true })
                .eq('id', registrationId);

        } catch (emailError) {
            console.error('Email sending error:', emailError);
            // We verify the registration was successful even if email failed
        }

        return NextResponse.json({ success: true, data });

    } catch (error) {
        console.error('Registration error:', error);
        return NextResponse.json(
            { error: 'A apărut o eroare internă.' },
            { status: 500 }
        );
    }
}
