// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/ and create an account
// 2. Create an email service (Gmail, Outlook, etc.)
// 3. Create an email template with the following variables:
//    - from_name, from_email, from_phone, service_type, 
//    - preferred_date, preferred_time, address, message
// 4. Replace the values below with your actual credentials

export const emailConfig = {
    serviceId: 'service_f8zhcrh',        // EmailJS service ID
    templateId: 'template_603p10y',      // EmailJS template ID
    publicKey: 'yTR14-Ind3KAqc2hd',      // EmailJS public key
};

// Example template format for EmailJS:
/*
Subject: New Service Booking Request - {{service_type}}

You have received a new service booking request:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{from_phone}}
Service: {{service_type}}
Preferred Date: {{preferred_date}}
Preferred Time: {{preferred_time}}
Address: {{address}}

Additional Details:
{{message}}
*/
