import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RECIPIENT_EMAIL = "jdjeevan26@gmail.com";

interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const data: ContactPayload = await request.json();

    // Validation
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const submissionTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "short",
    });

    // Check for SMTP configuration
    const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASS;
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT) || 465;

    const emailSubject = `🚀 New Lead: ${data.name} — ${data.service || "General Inquiry"}`;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #050B14; color: #E8F0F8; margin: 0; padding: 24px; }
            .card { max-width: 600px; margin: 0 auto; background: #0B132B; border: 1px solid #1E2D4A; border-radius: 16px; overflow: hidden; }
            .header { background: linear-gradient(135deg, #2FD8F0 0%, #3B82F6 50%, #8B5CF6 100%); padding: 24px 32px; color: #050B14; }
            .header h1 { margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px; }
            .header p { margin: 4px 0 0 0; font-size: 13px; font-weight: 600; opacity: 0.9; }
            .body { padding: 32px; }
            .field-group { margin-bottom: 20px; }
            .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #7B8CA8; font-weight: 600; margin-bottom: 6px; }
            .value { font-size: 15px; color: #FFFFFF; font-weight: 500; }
            .value a { color: #2FD8F0; text-decoration: none; }
            .badge { display: inline-block; padding: 4px 12px; background: rgba(47, 216, 240, 0.15); border: 1px solid rgba(47, 216, 240, 0.4); border-radius: 999px; color: #2FD8F0; font-size: 13px; font-weight: 600; }
            .message-box { background: #070D1F; border: 1px solid #1A2744; border-radius: 12px; padding: 18px; margin-top: 8px; font-size: 14px; line-height: 1.6; color: #D1DCE8; white-space: pre-wrap; }
            .footer { padding: 20px 32px; background: #070D1F; border-top: 1px solid #142038; font-size: 12px; color: #62728D; text-align: center; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <h1>Avenio Solutions — New Lead Submission</h1>
              <p>Received via avenio.in contact form on ${submissionTime}</p>
            </div>
            <div class="body">
              <div class="field-group">
                <div class="label">Requested Service</div>
                <div class="value"><span class="badge">${data.service || "Not Specified"}</span></div>
              </div>

              <div style="display: flex; gap: 24px; margin-bottom: 20px;">
                <div style="flex: 1;">
                  <div class="label">Full Name</div>
                  <div class="value">${data.name}</div>
                </div>
                <div style="flex: 1;">
                  <div class="label">Email Address</div>
                  <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
                </div>
              </div>

              <div style="display: flex; gap: 24px; margin-bottom: 20px;">
                <div style="flex: 1;">
                  <div class="label">Phone / WhatsApp</div>
                  <div class="value">${data.phone || "Not provided"}</div>
                </div>
                <div style="flex: 1;">
                  <div class="label">Company</div>
                  <div class="value">${data.company || "Not provided"}</div>
                </div>
              </div>

              <div class="field-group">
                <div class="label">Project Details &amp; Message</div>
                <div class="message-box">${data.message}</div>
              </div>
            </div>
            <div class="footer">
              Hit "Reply" in your email client to directly reply to ${data.name} (${data.email}).
            </div>
          </div>
        </body>
      </html>
    `;

    const textContent = `
NEW INQUIRY FROM AVENIO WEBSITE
--------------------------------------------
Service:  ${data.service || "Not specified"}
Name:     ${data.name}
Email:    ${data.email}
Phone:    ${data.phone || "N/A"}
Company:  ${data.company || "N/A"}
Time:     ${submissionTime}

Message:
${data.message}
--------------------------------------------
Reply directly to: ${data.email}
    `.trim();

    if (smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"Avenio Website" <${smtpUser}>`,
        to: RECIPIENT_EMAIL,
        replyTo: data.email,
        subject: emailSubject,
        text: textContent,
        html: htmlContent,
      });

      console.log(`[Email Sent] Delivered to ${RECIPIENT_EMAIL} from ${data.email}`);
    } else {
      console.log(`[Form Submission Received for ${RECIPIENT_EMAIL}]:`, data);
      console.log(
        "Notice: To enable live email delivery to jdjeevan26@gmail.com, set SMTP_USER and SMTP_PASS (Gmail App Password) in your .env.local file."
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Message received successfully.",
    });
  } catch (error) {
    console.error("Error processing contact submission:", error);
    return NextResponse.json(
      { error: "Unable to process message at this time." },
      { status: 500 }
    );
  }
}
