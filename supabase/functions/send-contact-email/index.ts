import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message }: ContactEmailRequest = await req.json();

    console.log("Sending contact form submission:", { name, email, subject });

    // Send email to admin with reply-to set to sender
    const adminEmailResponse = await resend.emails.send({
      from: `${name} via Contact Form <onboarding@resend.dev>`,
      to: ["maithad113@gmail.com"],
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("Admin email sent successfully:", adminEmailResponse);

    // Send WhatsApp notification using Meta's API
    const whatsappToken = Deno.env.get("WHATSAPP_ACCESS_TOKEN");
    const whatsappPhoneId = Deno.env.get("WHATSAPP_PHONE_NUMBER_ID");
    
    if (whatsappToken && whatsappPhoneId) {
      try {
        const whatsappResponse = await fetch(
          `https://graph.facebook.com/v18.0/${whatsappPhoneId}/messages`,
          {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${whatsappToken}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              messaging_product: "whatsapp",
              to: "94115633444", // WhatsApp number in international format
              type: "text",
              text: {
                body: `New Contact Form Submission\n\nFrom: ${name} (${email})\nSubject: ${subject}\nMessage: ${message}`,
              },
            }),
          }
        );

        const whatsappData = await whatsappResponse.json();
        console.log("WhatsApp notification sent:", whatsappData);
      } catch (whatsappError: any) {
        console.error("WhatsApp notification failed:", whatsappError.message);
        // Don't fail the entire request if WhatsApp fails
      }
    } else {
      console.log("WhatsApp credentials not configured, skipping notification");
    }

    return new Response(JSON.stringify({ 
      adminEmail: adminEmailResponse,
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
