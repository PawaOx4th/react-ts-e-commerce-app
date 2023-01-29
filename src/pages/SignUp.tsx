import clsx from "clsx"
import FormTemplate from "components/FormTemplate"
import useUserAuth from "hook/useUserAuth"
import React, { ComponentProps, useId } from "react"
import styled from "styled-components"

type Props = {}

function SignUp({}: Props) {
  const { informationForm, onSubmitForm, onHandleChangeInformationForm } = useUserAuth()
  return (
    <div className={clsx("min-h-screen w-full relative", "grid grid-flow-row grid-cols-12")}>
      <div
        className={clsx(
          "col-span-full sm:col-span-3 lg:col-span-6",
          "absolute -z-10 sm:relative sm:z-0",
          "w-full min-h-screen",
          "bg-gradient-to-t from-[#b721ff]/50 to-[#21d4fd]/50",
          "flex items-center justify-center",
        )}
      >
        <div className='bg_grid'></div>
        {/* <img src={ShoppingBg} alt='' className='aspect-square hidden lg:block' /> */}
      </div>
      <div className={clsx("col-span-full sm:col-span-9 lg:col-span-6")}>
        <FormTemplate
          buttonText='sign up'
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

export default SignUp
