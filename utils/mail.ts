import nodemailer from "nodemailer";

const { EMAIL_TOKEN, EMAIL } = process.env;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL,
    pass: EMAIL_TOKEN,
  },
});

export async function SendMail({
  to,
  subject,
  body,
}: {
  to: string;
  subject: string;
  body: string;
}) {
  try {
    await transporter.verify();
    await transporter.sendMail({
      from: EMAIL,
      to,
      subject,
      html: body,
    });
  } catch (error) {
    console.log(error);
  }
}
