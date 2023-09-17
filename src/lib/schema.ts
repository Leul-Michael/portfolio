import * as z from "zod"

export const contactSchema = z
  .object({
    name: z.string().nonempty("Your name is required."),
    email: z
      .string({
        required_error: "Your Email is required.",
      })
      .email("Invalid email format."),
    intersted_in: z
      .object(
        {
          id: z.number(),
          label: z.string(),
        },
        { required_error: "Please select the stack you're intersted." }
      )
      .required(),
    budget: z
      .object(
        {
          id: z.number(),
          label: z.string(),
        },
        {
          required_error: "Please select your budget.",
        }
      )
      .required(),
    details: z.union([z.string(), z.literal("")]),
  })
  .refine(
    (data) =>
      (data.intersted_in.id !== 4 && data.details.length <= 0) ||
      (data.intersted_in.id === 4 && data.details.length > 0),
    {
      message: "Please describe the project you're interseted in details.",
      path: ["details"],
    }
  )
