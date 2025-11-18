import  nodemailer  from 'nodemailer';
 
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { fullName, company, email, option, budget, details } = data;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // App password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission from ${fullName}`,
      text: `
        Name: ${fullName}
        Company: ${company}
        Email: ${email}
        Option: ${option}
        Project Budget: ${budget}
        Project Details: ${details}
      `,
    };

    // Send mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Mail sent!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: "Failed to send mail." });
  }
}
