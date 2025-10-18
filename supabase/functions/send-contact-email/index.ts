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

    // Send email to your Gmail with reply-to set to sender
    const adminEmailResponse = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["maithad113@gmail.com"],
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><strong>WhatsApp:</strong> Send notification to 0115633444</p>
      `,
    });

    // Send confirmation email to the sender
    const senderEmailResponse = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: [email],
      subject: "We received your message!",
      html: `
        <h2>Thank you for contacting us, ${name}!</h2>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <p><strong>Your message:</strong></p>
        <p><em>${subject}</em></p>
        <p>${message}</p>
        <hr>
        <p>Best regards,<br>The Team</p>
      `,
    });

    console.log("Emails sent successfully:", { adminEmailResponse, senderEmailResponse });

    return new Response(JSON.stringify({ success: true, adminEmailResponse, senderEmailResponse }), {
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
