# EmailJS Setup Guide

This guide will walk you through setting up EmailJS for the booking form.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add an Email Service

1. Once logged in, go to the **Email Services** section
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. **Copy the Service ID** - you'll need this later

## Step 3: Create an Email Template

1. Go to the **Email Templates** section
2. Click **Create New Template**
3. Use the following template structure:

### Template Subject:
```
New Service Booking Request - {{service_type}}
```

### Template Content:
```
You have received a new service booking request from your website:

Customer Information:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: {{from_name}}
Email: {{from_email}}
Phone: {{from_phone}}

Service Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Service Requested: {{service_type}}
Preferred Date: {{preferred_date}}
Preferred Time: {{preferred_time}}
Service Address: {{address}}

Additional Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This email was sent from the KCServices booking form.
Please respond to the customer at {{from_email}} or call them at {{from_phone}}.
```

4. Set the **To Email** field to: `unitedkcservices@gmail.com` (or your preferred email)
5. Set the **From Name** to: `{{from_name}}`
6. Set the **Reply To** to: `{{from_email}}`
7. Click **Save**
8. **Copy the Template ID** - you'll need this later

## Step 4: Get Your Public Key

1. Go to **Account** → **General** (or API Keys section)
2. Find your **Public Key**
3. **Copy the Public Key** - you'll need this later

## Step 5: Update the Configuration File

1. Open the file: `src/config/emailConfig.js`
2. Replace the placeholder values with your actual credentials:

```javascript
export const emailConfig = {
  serviceId: 'service_xxxxxxx',    // Your Service ID from Step 2
  templateId: 'template_xxxxxxx',  // Your Template ID from Step 3
  publicKey: 'xxxxxxxxxxxxx',      // Your Public Key from Step 4
};
```

## Step 6: Test the Integration

1. Make sure your development server is running:
   ```bash
   npm run dev
   ```

2. Open the website and click on "Book a Service"
3. Fill out the booking form with test data
4. Submit the form
5. Check your email inbox (the one you configured in Step 2)
6. You should receive an email with the booking details

## Troubleshooting

### Email not received?
- Check your spam/junk folder
- Verify all three credentials (Service ID, Template ID, Public Key) are correct
- Make sure your email service is properly connected in EmailJS dashboard
- Check the browser console for any error messages

### "Email service not configured" error?
- This means the Public Key is missing or incorrect
- Double-check the `emailConfig.js` file

### Template variables not showing correctly?
- Make sure the variable names in your template match exactly:
  - `{{from_name}}`, `{{from_email}}`, `{{from_phone}}`
  - `{{service_type}}`, `{{preferred_date}}`, `{{preferred_time}}`
  - `{{address}}`, `{{message}}`

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- 2 email services
- 2 email templates

If you need more, consider upgrading to a paid plan.

## Support

For more help, visit the [EmailJS Documentation](https://www.emailjs.com/docs/)
