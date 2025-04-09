import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { fname, lname, email, phone, subject, message } =
      await request.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465, // SSL port
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, // thebizincorp@gmail.com
        pass: process.env.EMAIL_PASS, // App Password if 2FA is enabled
      },
      tls: {
        rejectUnauthorized: true,
        minVersion: "TLSv1.2",
      },
    });

    const mailOptions = {
      from: `"BizInCorp Contact" <${process.env.EMAIL_USER}>`, // "BizInCorp Contact" <thebizincorp@gmail.com>
      to: "info@thebizincorp.com",
      replyTo: email, // User's email for replies
      subject: `Contact Form: ${subject}`,
      text: `
        Hello,

        You’ve received a new message from your website’s contact form:

        First Name: ${fname}
        Last Name: ${lname}
        Email: ${email}
        Phone: ${phone}
        Subject: ${subject}
        Message: ${message}

        Regards,
        BizInCorp Team
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p>Hello,</p>
        <p>You’ve received a new message from your website’s contact form:</p>
        <p><strong>First Name:</strong> ${fname}</p>
        <p><strong>Last Name:</strong> ${lname}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p>Regards,<br/>BizInCorp Team</p>
        <p><small>This is an automated message. Please reply directly to the sender’s email above.</small></p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email", details: error.message },
      { status: 500 }
    );
  }
}
