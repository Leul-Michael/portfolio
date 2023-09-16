"use server"

import { Resend } from "resend"

import ContactTemplate from "@/components/form/template/contact-template"

type FormDataProps = {
  name: string
  email: string
  intersted_in: string
  budget: string
  details: string
}

const resend = new Resend(process.env.RESEND_SECRET)

export async function sendMail(formData: FormDataProps) {
  const data = await resend.emails.send({
    from: `${formData.name} <onboarding@resend.dev>`,
    to: "leulmic18@gmail.com",
    subject: "Contact form request.",
    react: ContactTemplate({ ...formData }),
  })

  return data
}
