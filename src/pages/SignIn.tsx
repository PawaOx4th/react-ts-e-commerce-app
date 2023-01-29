import FormTemplate from "components/FormTemplate"
import useAuthenticationContext from "hook/useAuthenticationContext"
import useUserAuth from "hook/useUserAuth"
import React, { ComponentProps, useEffect, useId } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import clsx from "clsx"

type SignInPropsType = {}

function SignIn({}: SignInPropsType) {
  const { onSubmitForm, informationForm, onHandleChangeInformationForm } = useUserAuth()
  const { token } = useAuthenticationContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (token) {
      navigate("/")
    }
    return () => {}
  }, [token])

  return (
    <div className={clsx("min-h-screen w-full relative", "grid grid-flow-row grid-cols-12")}>
      <div
        className={clsx(
          "col-span-full md:col-span-6",
          "absolute -z-10 md:block",
          "w-full min-h-screen",
          "bg-gray-50",
        )}
      >
        lorem111
      </div>
      <div className={clsx("col-span-full md:col-span-6")}>
        <FormTemplate
          title={"SignIn"}
          onSubmit={(email: string, password: string) => onSubmitForm(email, password)}
          email={informationForm.email}
          password={informationForm.password}
          onChange={(value, type) => {
            onHandleChangeInformationForm(value, type)
          }}
        />
      </div>
    </div>
  )
}

export default SignIn
