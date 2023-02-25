import clsx from "clsx"
import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"

type Props = {}

function SelfTest({}: Props) {
  const navigate = useNavigate()
  useEffect(() => {
    const isCheckModeDevelopment = import.meta.env.MODE === "development"

    if (!isCheckModeDevelopment) {
      return navigate("/", { replace: true })
    }
  }, [])

  return (
    <div
      className={clsx("w-3/5 mx-auto  py-20 h-auto my-8", "border-2 border-pink-600 border-dashed")}
    >
      SelfTest
    </div>
  )
}

export default SelfTest
