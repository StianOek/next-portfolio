import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

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

    // TODO: Integrate with email service
    // Options:
    // 1. Resend (https://resend.com) - Recommended for Next.js
    // 2. SendGrid
    // 3. Nodemailer with SMTP
    // 4. AWS SES
    
    // Example with Resend (install: npm install resend):
    /*
    import { Resend } from 'resend';
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'kontakt@yourdomain.com',
      to: 'stian.oek@gmail.com',
      subject: `Ny melding fra ${validatedData.name}`,
      html: `
        <h2>Ny melding fra kontaktskjema</h2>
        <p><strong>Navn:</strong> ${validatedData.name}</p>
        <p><strong>E-post:</strong> ${validatedData.email}</p>
        <p><strong>Melding:</strong></p>
        <p>${validatedData.message}</p>
      `,
      replyTo: validatedData.email,
    });
    */

    // For now, just log the data (remove this in production)
    console.log('Contact form submission:', validatedData);

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Message received successfully' 
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
          errors: error.errors 
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error' 
      },
      { status: 500 }
    );
  }
}
