"use client"

import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactSchema } from "@/lib/schema"
import { useState } from "react"
import { JobBudgetOptions, JobInterstOptions } from "@/lib/constants"
import { sendMail } from "../actions"

import Button from "@/components/button"
import Input from "@/components/form/input"
import TextArea from "@/components/form/text-area"
import SelectOption from "@/components/form/select-option"
import ResponseModal from "./response-modal"

type ContactProps = {
  name: string
  email: string
  intersted_in: {
    id: number
    label: string
  }
  budget: {
    id: number
    label: string
  }
  details: string
}

const Form = () => {
  const [showModal, setShowModal] = useState(false)

  const [pending, setPending] = useState(false)
  const [success, setSuccess] = useState(false)
  const {
    register,
    getValues,
    setValue,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactProps>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit: SubmitHandler<ContactProps> = async (data) => {
    const { intersted_in, budget, ...rest } = data

    setShowModal(true)
    try {
      setSuccess(false)
      setPending(true)
      const res: any = await sendMail({
        ...rest,
        intersted_in: intersted_in.label,
        budget: budget.label,
      })
      if (res?.id) {
        reset()
        setSuccess(true)
      } else {
        throw new Error(res?.message)
      }
    } catch (e) {
      console.log(e)
      setSuccess(false)
    } finally {
      setPending(false)
    }
  }

  return (
    <>
      {showModal ? (
        <ResponseModal
          show={showModal}
          setShow={setShowModal}
          loading={pending}
          success={success}
        />
      ) : null}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 p-4 md:p-6 border border-primary/10 rounded-lg w-full lg:w-[60%]"
      >
        <span className="text-lg font-medium">Your data</span>
        <Input
          register={register("name")}
          name="name"
          placeholder="Name*"
          error={errors.name?.message}
        />
        <Input
          register={register("email")}
          name="email"
          placeholder="Email*"
          error={errors.email?.message}
        />
        <span className="text-lg font-medium">You are intersted in</span>
        <SelectOption
          options={JobInterstOptions}
          value={getValues("intersted_in")}
          onClick={(option) =>
            setValue("intersted_in", option, { shouldValidate: true })
          }
          error={errors.intersted_in?.message}
        />
        <span className="text-lg font-medium">Budget in USD</span>
        <SelectOption
          options={JobBudgetOptions}
          value={getValues("budget")}
          onClick={(option) =>
            setValue("budget", option, { shouldValidate: true })
          }
          error={errors.budget?.message}
        />
        <span className="text-lg font-medium">Describe your project</span>
        <TextArea
          placeholder="Project details"
          register={register("details")}
          error={errors.details?.message}
        />
        <Button
          name="Send Message"
          className="px-6 py-2 mt-8 mb-4 self-start text-xl capitalize font-semibold rounded-full text-primary-muted"
          disabled={pending}
        />
      </form>
    </>
  )
}

export default Form
