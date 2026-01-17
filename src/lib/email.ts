import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_123');
const FROM_EMAIL = process.env.FROM_EMAIL || 'onboarding@resend.dev';

export async function sendRegistrationConfirmation(to: string, nume: string, linkEchipa: string) {
    try {
        const { data, error } = await resend.emails.send({
            from: FROM_EMAIL,
            to: [to],
            subject: 'Înregistrare Reușită - Competiție Mondio 2026',
            html: `
        <!DOCTYPE html>
        <html lang="ro">
        <head>
            <meta charset="UTF-8">
            <style>
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                }
                .container {
                    background-color: #ffffff;
                    border-radius: 12px;
                    padding: 40px;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                }
                .header {
                    background: linear-gradient(135deg, #003d82 0%, #0066cc 100%);
                    color: #fff;
                    padding: 30px;
                    border-radius: 12px 12px 0 0;
                    text-align: center;
                    margin: -40px -40px 30px -40px;
                }
                .header h1 {
                    margin: 0;
                    font-size: 24px;
                }
                .content {
                    color: #555;
                }
                .button {
                    display: inline-block;
                    padding: 15px 30px;
                    background: linear-gradient(135deg, #003d82 0%, #0066cc 100%);
                    color: #fff !important;
                    text-decoration: none;
                    border-radius: 8px;
                    font-weight: 600;
                    margin: 20px 0;
                }
                .footer {
                    margin-top: 30px;
                    padding-top: 20px;
                    border-top: 1px solid #e0e0e0;
                    font-size: 12px;
                    color: #999;
                    text-align: center;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>✓ Înregistrare Reușită!</h1>
                </div>
                <div class="content">
                    <p>Bună ziua, <strong>${nume}</strong>!</p>
                    <p>Mulțumim pentru înregistrarea la competiția Mondio 2026!</p>
                    <p>Pentru a finaliza înregistrarea și a adăuga membrii echipei, vă rugăm să accesați link-ul de mai jos:</p>
                    <p style="text-align: center;">
                        <a href="${linkEchipa}" class="button">Înregistrează Echipa</a>
                    </p>
                    <p><strong>Notă importantă:</strong> Acest link este unic și personal. Nu îl partajați cu alții.</p>
                    <p>Dacă aveți întrebări, nu ezitați să ne contactați.</p>
                    <p>Cu respect,<br>Echipa Mondio 2026</p>
                </div>
                <div class="footer">
                    <p>Acest email a fost trimis automat. Vă rugăm să nu răspundeți la acest email.</p>
                </div>
            </div>
        </body>
        </html>
      `,
        });

        if (error) {
            console.error('Error sending email:', error);
            throw error;
        }

        return { success: true, data };
    } catch (error) {
        console.error('Error in sendRegistrationConfirmation:', error);
        throw error;
    }
}

export async function sendContactEmail(to: string, contactData: { nume: string; prenume: string; email: string; mesaj: string }) {
    try {
        const { data, error } = await resend.emails.send({
            from: FROM_EMAIL,
            to: [to],
            replyTo: contactData.email,
            subject: `Mesaj nou de la ${contactData.nume} ${contactData.prenume} - Site Mondio 2026`,
            html: `
        <!DOCTYPE html>
        <html lang="ro">
        <head>
            <meta charset="UTF-8">
            <style>
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                }
                .container {
                    background-color: #ffffff;
                    border-radius: 12px;
                    padding: 40px;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                }
                .header {
                    background: linear-gradient(135deg, #003d82 0%, #0066cc 100%);
                    color: #fff;
                    padding: 20px;
                    border-radius: 12px 12px 0 0;
                    margin: -40px -40px 30px -40px;
                }
                .info {
                    background-color: #f8f9fa;
                    padding: 15px;
                    border-radius: 8px;
                    margin: 20px 0;
                }
                .message {
                    background-color: #fff;
                    border-left: 4px solid #003d82;
                    padding: 15px;
                    margin: 20px 0;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h2>Mesaj nou de pe site</h2>
                </div>
                <div class="info">
                    <p><strong>Nume:</strong> ${contactData.nume} ${contactData.prenume}</p>
                    <p><strong>Email:</strong> ${contactData.email}</p>
                </div>
                <div class="message">
                    <h3>Mesaj:</h3>
                    <p>${contactData.mesaj.replace(/\n/g, '<br>')}</p>
                </div>
            </div>
        </body>
        </html>
      `,
        });

        if (error) {
            console.error('Error sending contact email:', error);
            throw error;
        }

        return { success: true, data };
    } catch (error) {
        console.error('Error in sendContactEmail:', error);
        throw error;
    }
}
