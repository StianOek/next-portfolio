# Email Integration Setup

The contact form is ready to use, but you need to integrate an email service to receive messages.

## Recommended: Resend (Easiest for Next.js)

### 1. Install Resend
```bash
npm install resend
```

### 2. Get API Key
- Sign up at [resend.com](https://resend.com)
- Get your API key from the dashboard
- Add to `.env.local`:
```
RESEND_API_KEY=re_your_api_key_here
```

### 3. Update API Route
Uncomment the Resend code in `src/app/api/contact/route.ts` and update:
- `from`: Use your verified domain (e.g., `kontakt@yourdomain.com`)
- `to`: Your email address (`mail@stianiher.dev`)

### 4. Verify Domain (Optional but Recommended)
- Add your domain in Resend dashboard
- Add DNS records to verify
- This allows sending from your own domain

---

## Alternative: SendGrid

### 1. Install SendGrid
```bash
npm install @sendgrid/mail
```

### 2. Setup
```typescript
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

await sgMail.send({
  to: 'mail@stianiher.dev',
  from: 'kontakt@yourdomain.com',
  subject: `Ny kontaktmelding: ${validatedData.subject}`,
  html: `...`,
  replyTo: validatedData.email,
});
```

---

## Alternative: Nodemailer (SMTP)

### 1. Install Nodemailer
```bash
npm install nodemailer
```

### 2. Setup with Gmail or other SMTP
```typescript
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD, // Use App Password for Gmail
  },
});

await transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: 'mail@stianiher.dev',
  subject: `Ny kontaktmelding: ${validatedData.subject}`,
  html: `...`,
  replyTo: validatedData.email,
});
```

---

## Testing

For development, you can use:
- [Mailtrap](https://mailtrap.io) - Email testing service
- [Ethereal Email](https://ethereal.email) - Fake SMTP service

---

## Current Status

The form currently logs submissions to the console. To enable email:
1. Choose an email service
2. Install the package
3. Add environment variables
4. Uncomment/add the email code in `src/app/api/contact/route.ts`
