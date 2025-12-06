import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, appName, platform, message, budget, promoCode } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Format the email content
    const emailContent = `
New Contact Form Submission from Organic Boost Website

Name: ${name}
Email: ${email}
${appName ? `App Name: ${appName}` : ''}
${platform ? `Platform: ${platform}` : ''}
${budget ? `Budget: ${budget}` : ''}
${promoCode ? `Promo Code: ${promoCode}` : ''}

Message:
${message || 'No message provided'}
    `.trim();

    // Format HTML email
    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${appName ? `<p><strong>App Name:</strong> ${appName}</p>` : ''}
      ${platform ? `<p><strong>Platform:</strong> ${platform}</p>` : ''}
      ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ''}
      ${promoCode ? `<p><strong>Promo Code:</strong> ${promoCode}</p>` : ''}
      ${
        message
          ? `<p><strong>Message:</strong><br>${message.replace(
              /\n/g,
              '<br>'
            )}</p>`
          : ''
      }
    `;

    // Send email using Resend
    if (!resend) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        {
          error:
            'Email service is not configured. Please set RESEND_API_KEY in environment variables.',
        },
        { status: 500 }
      );
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: 'ilya@organicaso.com',
      replyTo: email,
      subject: `New Contact Form: ${name} - Organic Boost`,
      text: emailContent,
      html: htmlContent,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully', id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
