import clsx from "clsx"
import FormTemplate from "components/FormTemplate"
import { GlobalLoading } from "components/molecules/GlobalLoading"
import { GlobalLoadingContext } from "context/loading/globalLoadingContext"
import { useGlobalLoading } from "hook/useGlobalLoading"
import useUserAuth from "hook/useUserAuth"
import React, { ComponentProps, useContext, useId, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

type Props = {}

function SignUp({}: Props) {
  const { informationForm, onSubmitForm, onHandleChangeInformationForm } = useUserAuth()
  const { onUpdateIsOpen } = useGlobalLoading()
  const navigate = useNavigate()

  const handleSubmitForm = async (...props: Parameters<typeof onSubmitForm>) => {
    onUpdateIsOpen()
    const [data, errorMsg] = await onSubmitForm(props[0], props[1])
    console.log("🍉 DATA :", data)
    console.log("🍉 ERROR :", errorMsg)

    // onUpdateIsOpen()

    // const dummy = data?.user?.email
    // navigate(`/please-confirm?email=${dummy}`)
  }
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
      </div>
      <div className={clsx("col-span-full sm:col-span-9 lg:col-span-6")}>
        <FormTemplate
          buttonText='sign up'
          onSubmit={(email: string, password: string) => {
            handleSubmitForm(email, password)
          }}
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
