# Contact Form Setup Guide

## Overview
This contact form sends emails to `cometicare@gmail.com` using a Vercel serverless function with Gmail SMTP.

## Features
- ✅ Form validation (name, email, message required)
- ✅ Bot protection (user-agent filtering)
- ✅ Professional email templates
- ✅ Auto-reply to users
- ✅ Error handling and user feedback
- ✅ Responsive design

## Setup Steps

### 1. Gmail Configuration
1. Go to your Gmail account settings
2. Enable 2-Factor Authentication
3. Generate an App Password:
   - Go to Security → App passwords
   - Select "Mail" and "Other (Custom name)"
   - Name it "Cometic Contact Form"
   - Copy the generated 16-character password

### 2. Vercel Environment Variables
1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add these variables:
   - `GMAIL_USER`: `cometicare@gmail.com`
   - `GMAIL_APP_PASSWORD`: `[your_gmail_app_password]`

### 3. Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy - the API will automatically work

## How It Works
1. User fills out the contact form
2. Form validates input (client-side + server-side)
3. Data sent to `/api/contact` endpoint
4. Serverless function sends email to `cometicare@gmail.com`
5. Auto-reply sent to user's email
6. Success/error message displayed to user

## Security Features
- Input validation and sanitization
- Bot detection (user-agent filtering)
- Rate limiting (Vercel built-in)
- Environment variable protection
- HTTPS only (Vercel default)

## Email Templates
- **Business Email**: Professional format with all form data
- **User Confirmation**: Thank you message with contact info

## Troubleshooting
- Check Vercel function logs for errors
- Verify Gmail app password is correct
- Ensure environment variables are set
- Check spam folder for test emails

## Customization
- Modify email templates in `api/contact.js`
- Adjust validation rules in `Contact.tsx`
- Change styling in the component
- Add reCAPTCHA for additional bot protection
