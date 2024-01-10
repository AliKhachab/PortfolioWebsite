"use server";

import { Resend } from "resend";
import { validateString } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const message = formData.get("message");
  const senderEmail = formData.get("senderEmail");

  console.log(senderEmail);

  if (!validateString(senderEmail, 500)) {
    console.log("false 0");
    return {
      error: "Invalid email address",
    };
  }

  if (!validateString(message, 5000)) {
    console.log("false 1");
    return {
      error: "Invalid message",
    };
  }
  try {
    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "a.khachab620@gmail.com",
        subject: "Message from contact form",
        reply_to: senderEmail as string,
        text: message as string,
      });
  } catch (error) {
    console.log(error);
  }

};
