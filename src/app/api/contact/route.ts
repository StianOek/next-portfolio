import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';
import { CONTACT } from '@/constants/contact';

const resend = new Resend(process.env.RESEND_API_KEY);

// Validation schema matching the frontend
const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(2000),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validatedData = contactSchema.parse(body);

    // Send email using Resend
    const result = await resend.emails.send({
      from: 'Kontaktskjema <onboarding@resend.dev>', // TODO: Change to 'kontakt@stianiher.dev' after domain verification
      to: CONTACT.email,
      replyTo: validatedData.email,
      subject: `Ny melding fra ${validatedData.name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .content {
                background: #f9fafb;
                padding: 30px;
                border-radius: 0 0 10px 10px;
              }
              .field {
                margin-bottom: 20px;
              }
              .label {
                font-weight: 600;
                color: #374151;
                margin-bottom: 5px;
                display: block;
              }
              .value {
                color: #1f2937;
                background: white;
                padding: 12px;
                border-radius: 6px;
                border-left: 3px solid #ef4444;
              }
              .message-box {
                white-space: pre-wrap;
                word-wrap: break-word;
              }
              .footer {
                margin-top: 20px;
                padding-top: 20px;
                border-top: 1px solid #e5e7eb;
                font-size: 12px;
                color: #6b7280;
                text-align: center;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">📬 Ny melding fra kontaktskjema</h1>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">👤 Navn:</span>
                <div class="value">${validatedData.name}</div>
              </div>
              
              <div class="field">
                <span class="label">📧 E-post:</span>
                <div class="value">
                  <a href="mailto:${validatedData.email}" style="color: #ef4444; text-decoration: none;">
                    ${validatedData.email}
                  </a>
                </div>
              </div>
              
              <div class="field">
                <span class="label">💬 Melding:</span>
                <div class="value message-box">${validatedData.message}</div>
              </div>
              
              <div class="footer">
                Sendt fra stianihler.dev kontaktskjema
              </div>
            </div>
          </body>
        </html>
      `,
    });

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Validation error',
          errors: error.issues 
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send message. Please try again.' 
      },
      { status: 500 }
    );
  }
}
