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

  return <div>SelfTest</div>
}

export default SelfTest
