import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ArticleSubmissionRequest {
  name: string;
  email: string;
  title: string;
  category: string;
  content: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, title, category, content }: ArticleSubmissionRequest = await req.json();

    console.log("Processing article submission from:", email);

    // Send email to admin with the article content
    const emailResponse = await resend.emails.send({
      from: "Cultural Blog <onboarding@resend.dev>",
      to: ["maithad113@gmail.com"],
      replyTo: email,
      subject: `New Blog Article Submission: ${title}`,
      html: `
        <h1>New Article Submission</h1>
        <p><strong>Submitted by:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Article Title:</strong> ${title}</p>
        <p><strong>Category:</strong> ${category}</p>
        <hr />
        <h2>Article Content:</h2>
        <div style="white-space: pre-wrap; background: #f5f5f5; padding: 20px; border-radius: 8px;">
          ${content.replace(/\n/g, '<br>')}
        </div>
        <hr />
        <p>Please review this article for publication on the blog.</p>
      `,
    });

    console.log("Article submission email sent successfully:", emailResponse);

    // Send confirmation email to submitter
    await resend.emails.send({
      from: "Cultural Blog <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for your article submission!",
      html: `
        <h1>Thank you for your submission, ${name}!</h1>
        <p>We have received your article submission:</p>
        <ul>
          <li><strong>Title:</strong> ${title}</li>
          <li><strong>Category:</strong> ${category}</li>
        </ul>
        <p>We will review your article and get back to you soon.</p>
        <p>Best regards,<br>The Cultural Blog Team</p>
      `,
    });

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-article-submission function:", error);
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
