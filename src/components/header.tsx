import React from "react"

const Header = () => {
  return (
    <header className="fixed z-[99] top-0 left-0 w-full h-full md:px-16 px-5 flex flex-col">
      <div className="flex justify-between items-center gap-4 flex-wrap py-2">
        <h1 className="lg:text-[2rem] md:text-[1.65rem] text-[1.25rem] font-bold">
          Leul Michael ©
        </h1>
      </div>
    </header>
  )
}

export default Header
