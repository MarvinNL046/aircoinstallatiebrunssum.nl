import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init({
  publicKey: "sjJ8kK6U9wFjY0zX9",
});

// EmailJS service and template IDs
export const EMAILJS_SERVICE_ID = "service_1rruujp";
export const EMAILJS_TEMPLATE_ID = "template_rkcpzhg";

// GoHighLevel webhook configuration
const WEBHOOK_URL = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL || "https://services.leadconnectorhq.com/hooks/k90zUH3RgEQLfj7Yc55b/webhook-trigger/54670718-ea44-43a1-a81a-680ab3d5f67f";

// Debug mode for troubleshooting
const DEBUG_MODE = false;

interface EmailFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  city?: string;
}

// Send data to GoHighLevel webhook
const sendToWebhook = async (formData: EmailFormData): Promise<boolean> => {
  try {
    const webhookData = {
      data: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        city: formData.city || "Brunssum", // Default to Brunssum if not provided
        message: formData.message
      }
    };

    if (DEBUG_MODE) {
      console.log('Sending to webhook:', webhookData);
    }

    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(webhookData)
    });

    if (!response.ok) {
      if (DEBUG_MODE) {
        console.error('Webhook response not OK:', response.status, response.statusText);
      }
      return false;
    }
    
    if (DEBUG_MODE) {
      console.log('Webhook sent successfully');
    }
    
    return true;
  } catch (error) {
    if (DEBUG_MODE) {
      console.error('Webhook sending failed:', error);
    }
    return false;
  }
};

// Send via EmailJS
const sendViaEmailJS = async (formData: EmailFormData): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
      contact_number: Math.random() * 100000 | 0,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    if (response.status !== 200) {
      if (DEBUG_MODE) {
        console.error('EmailJS response not OK:', response.status);
      }
      return false;
    }

    if (DEBUG_MODE) {
      console.log('EmailJS sent successfully');
    }

    return true;
  } catch (error) {
    if (DEBUG_MODE) {
      console.error('EmailJS sending failed:', error);
    }
    return false;
  }
};

// Main send function with dual submission
export const sendEmail = async (formData: EmailFormData) => {
  // Send to both services in parallel
  const [emailJSSuccess, webhookSuccess] = await Promise.all([
    sendViaEmailJS(formData),
    sendToWebhook(formData)
  ]);
  
  if (DEBUG_MODE) {
    console.log('Email submission results:', {
      emailJS: emailJSSuccess,
      webhook: webhookSuccess
    });
  }
  
  // Only throw error if BOTH methods fail
  if (!emailJSSuccess && !webhookSuccess) {
    throw new Error('Failed to send contact form data');
  }
  
  // Return success even if only one method succeeded
  return { emailJSSuccess, webhookSuccess };
};
