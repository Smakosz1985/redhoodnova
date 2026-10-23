import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return Response.json({ error: 'Wszystkie pola są wymagane.' }, { status: 400 });
    }

   const data = await resend.emails.send({
  from: 'AeroFlux Studio <contact@aerofluxstudio.com>', // <-- Twój zweryfikowany adres
  to: ['aerofluxstudio.de@gmail.com'], // <-- Skrzynka, na którą odbierasz maile
  subject: `[AFS Contact] ${subject || 'Nowa wiadomość'} od ${name}`,
  replyTo: email,
      html: `
        <div style="font-family: sans-serif; color: #333;">
          <h2 style="color: #06b6d4;">Nowa wiadomość z aerofluxstudio.com</h2>
          <p><strong>Imię / Firma:</strong> ${name}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Temat:</strong> ${subject || 'Nie podano'}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Wiadomość:</strong></p>
          <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 8px;">${message}</p>
        </div>
      `,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}