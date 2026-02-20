import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init({
  publicKey: "sjJ8kK6U9wFjY0zX9",
});

// EmailJS service and template IDs
export const EMAILJS_SERVICE_ID = "service_1rruujp";
export const EMAILJS_TEMPLATE_ID = "template_rkcpzhg";

// LeadFlow CRM configuration
const LEADFLOW_URL = "https://wetryleadflow.com/api/webhooks/leads";
const LEADFLOW_API_KEY = "lf_lRyHo1ENukt9VsG9gYT8EKeDA_nKuoQ1";

// Debug mode for troubleshooting
const DEBUG_MODE = false;

interface EmailFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  city?: string;
}

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

// Send data to LeadFlow CRM
const sendToLeadflow = async (formData: EmailFormData): Promise<boolean> => {
  try {
    const nameParts = formData.name.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    const leadflowData = {
      firstName,
      lastName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      source: 'website-contact',
      customFields: {
        city: formData.city,
        woonplaats: formData.city
      }
    };

    if (DEBUG_MODE) {
      console.log('Sending data to Leadflow CRM:', leadflowData);
    }

    const response = await fetch(LEADFLOW_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": LEADFLOW_API_KEY
      },
      body: JSON.stringify(leadflowData)
    });

    if (!response.ok) {
      const errorText = await response.text();
      if (DEBUG_MODE) {
        console.error(`Leadflow error (${response.status}):`, errorText);
      }
      return false;
    }

    if (DEBUG_MODE) {
      console.log('Leadflow submission successful');
    }
    return true;
  } catch (error) {
    if (DEBUG_MODE) {
      console.error('Leadflow submission failed:', error);
    }
    return false;
  }
};

// Main send function with dual submission
export const sendEmail = async (formData: EmailFormData) => {
  // Send to all services in parallel
  const [emailJSSuccess, leadflowSuccess] = await Promise.all([
    sendViaEmailJS(formData),
    sendToLeadflow(formData)
  ]);

  if (DEBUG_MODE) {
    console.log('Email submission results:', {
      emailJS: emailJSSuccess,
      leadflow: leadflowSuccess
    });
  }

  // Only throw error if ALL methods fail
  if (!emailJSSuccess && !leadflowSuccess) {
    throw new Error('Failed to send contact form data');
  }

  // Return success even if only one method succeeded
  return { emailJSSuccess, leadflowSuccess };
};
