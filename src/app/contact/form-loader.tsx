import { Skeleton } from "@/components/skeleton"
import React from "react"

const FormLoader = () => {
  return (
    <div className="flex flex-col gap-8 p-4 md:p-6 border border-primary/10 rounded-lg w-full lg:w-[60%]">
      <Skeleton className="w-[60%] h-[45px]" />
      <Skeleton className="w-[60%] h-[45px]" />
      <div className="flex items-center gap-4 lg:gap-16">
        <Skeleton className="w-[100px] h-[45px] rounded-full" />
        <Skeleton className="w-[100px] h-[45px] rounded-full" />
        <Skeleton className="w-[100px] h-[45px] rounded-full" />
        <Skeleton className="w-[100px] h-[45px] rounded-full" />
      </div>
      <div className="flex items-center gap-4 lg:gap-16">
        <Skeleton className="w-[100px] h-[45px] rounded-full" />
        <Skeleton className="w-[100px] h-[45px] rounded-full" />
        <Skeleton className="w-[100px] h-[45px] rounded-full" />
        <Skeleton className="w-[100px] h-[45px] rounded-full" />
      </div>
      <Skeleton className="w-full h-[200px]" />
      <Skeleton className="w-[100px] h-[45px] rounded-full" />
    </div>
  )
}

export default FormLoader
