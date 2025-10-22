import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface PhotoSubmissionRequest {
  name: string;
  email: string;
  title: string;
  category: string;
  photoBase64: string;
  photoFilename: string;
  photoMimeType: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, title, category, photoBase64, photoFilename, photoMimeType }: PhotoSubmissionRequest = await req.json();

    console.log("Processing photo submission from:", email);

    // Send email to admin with the photo attached
    const emailResponse = await resend.emails.send({
      from: "Cultural Gallery <onboarding@resend.dev>",
      to: ["maithad113@gmail.com"],
      replyTo: email,
      subject: `New Gallery Photo Submission: ${title}`,
      html: `
        <h1>New Photo Submission</h1>
        <p><strong>Submitted by:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Photo Title:</strong> ${title}</p>
        <p><strong>Category:</strong> ${category}</p>
        <p>Please review the attached photo for inclusion in the gallery.</p>
      `,
      attachments: [
        {
          filename: photoFilename,
          content: photoBase64,
        },
      ],
    });

    console.log("Photo submission email sent successfully:", emailResponse);

    // Send confirmation email to submitter
    await resend.emails.send({
      from: "Cultural Gallery <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for your photo submission!",
      html: `
        <h1>Thank you for your submission, ${name}!</h1>
        <p>We have received your photo submission:</p>
        <ul>
          <li><strong>Title:</strong> ${title}</li>
          <li><strong>Category:</strong> ${category}</li>
        </ul>
        <p>We will review your submission and get back to you soon.</p>
        <p>Best regards,<br>The Cultural Gallery Team</p>
      `,
    });

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-photo-submission function:", error);
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
