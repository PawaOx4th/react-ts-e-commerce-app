import { GlobalLoading } from "components/molecules/GlobalLoading"
import React, { PropsWithChildren, useMemo, useState } from "react"
import { GlobalLoadingContext, GlobalLoadingContextType } from "./globalLoadingContext"

type GlobalLoadingProvider = {}

export default function GlobalLoadingProvider({
  children,
}: PropsWithChildren<GlobalLoadingProvider>) {
  const [isOpen, setIsOpen] = useState(false)

  const value = useMemo<GlobalLoadingContextType>(() => {
    return {
      isOpen: isOpen,
      onUpdateIsOpen: () => setIsOpen((prevIsOpen) => !prevIsOpen),
    }
  }, [isOpen])

  return (
    <GlobalLoadingContext.Provider value={value}>
      <GlobalLoading isOpen={value.isOpen} />
      {children}
    </GlobalLoadingContext.Provider>
  )
}
