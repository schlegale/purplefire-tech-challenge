import { SendMail } from "@/utils/mail";

export async function POST(req: Request) {
  const { email } = await req.json();

  const emailBody = `
    <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
      <h2>Welcome to My World!</h2>
      <p>Hi,</p>
      <p>Thank you for subscribing! I'm thrilled to have you on board and excited to share my journey with you. Your support means the world to me, and I hope you'll find my work inspiring and insightful.</p>
      <p>I specialize in creating unique and engaging websites that cater to a variety of needs and preferences. Whether you're looking for the latest in web design trends or innovative solutions that stand out, I'm here to deliver excellence.</p>
      <p>To learn more about me and explore my portfolio, feel free to visit my LinkedIn profile:</p>
      <a href="https://www.linkedin.com/in/alejoschlegel/" target="_blank">https://www.linkedin.com/in/alejoschlegel/</a>
      <p>I'm looking forward to embarking on this exciting journey with you. Stay tuned for updates, insights, and more!</p>
      <p>Best regards,<br>Alejo Schlegel</p>
    </div>
  `;

  try {
    await SendMail({
      to: email,
      subject: "Welcome & Thank You for Subscribing!",
      body: emailBody,
    });

    return Response.json({ status: 200 });
  } catch (error) {
    return Response.json({ status: 500, error: error });
  }
}
