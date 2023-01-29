import FormTemplate from "components/FormTemplate"
import useAuthenticationContext from "hook/useAuthenticationContext"
import useUserAuth from "hook/useUserAuth"
import React, { ComponentProps, useEffect, useId } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import clsx from "clsx"
import ShoppingBg from "assets/shoppingBackground.svg"

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
          "col-span-full sm:col-span-3 lg:col-span-6",
          "absolute -z-10 sm:relative sm:z-0",
          "w-full min-h-screen",
          "bg-gradient-to-t from-[#0093E9]/50 to-[#80D0C7]/50",
          "flex items-center justify-center",
        )}
      >
        <div className='bg_grid'></div>
        {/* <img src={ShoppingBg} alt='' className='aspect-square hidden lg:block' /> */}
      </div>
      <div className={clsx("col-span-full sm:col-span-9 lg:col-span-6")}>
        <FormTemplate
          buttonText='sign in'
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
