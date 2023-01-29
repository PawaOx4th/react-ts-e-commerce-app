import { InformationFormType } from "hook/useUserAuth"
import React, { useId } from "react"
import styled from "styled-components"
import { Input, Label } from "./atom"
import clsx from "clsx"

const TitleText = styled.span`
  font-size: 2rem;
  font-weight: 600;
`

export type ContainerStylePropTypes = { bgColor?: string }
const Container = styled.div<ContainerStylePropTypes>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  background-color: ${(props) => props.bgColor ?? "#f8fafc"};
  height: 100%;
  width: 100%;
  padding: 2rem;
  border-radius: 6px;
`

type FormTemplatePropTypes = {
  title: string
  email: string
  password: string
  onChange: (value: string, type: keyof InformationFormType) => void
  onSubmit: (email: string, password: string) => void
} & ContainerStylePropTypes

function FormTemplate({
  title,
  onSubmit,
  bgColor,
  email,
  password,
  onChange,
}: FormTemplatePropTypes) {
  const emailId = useId()
  const passwordId = useId()

  return (
    <Container bgColor={bgColor}>
      <div>
        <TitleText>{title}</TitleText>
      </div>
      <form
        className={clsx("flex", "flex-col", "gap-1", "w-full sm:w-[65%]")}
        onSubmit={(e) => {
          e.preventDefault()
          onSubmit(email, password)
        }}
      >
        <div className='block relative'>
          <Input
            type='email'
            name=''
            id={emailId}
            required
            value={email}
            placeholder={"Email are Username"}
            onChange={(e) => {
              onChange(e.target.value, "email")
            }}
            className={clsx(
              "peer",
              "py-2 px-3 rounded outline-none mt-5",
              "border-2 border-solid focus:border-main-primary",
              "w-full",
            )}
          />
          <Label
            htmlFor={emailId}
            className={clsx(
              "text_small",
              "absolute top-0 left-0",
              "peer-placeholder-shown:font-normal font-medium",
              "transition-all",
              "peer-focus:text-main-primary peer-focus:uppercase",
            )}
          >
            Email &nbsp;
          </Label>
        </div>

        <div className='block relative mt-5'>
          <Input
            type='password'
            name=''
            id={passwordId}
            required
            value={password}
            placeholder={"Email are Username"}
            onChange={(e) => {
              onChange(e.target.value, "password")
            }}
            className={clsx(
              "peer",
              "py-2 px-3 rounded outline-none mt-5",
              "border-2 border-solid focus:border-main-primary",
              "w-full",
            )}
          />
          <Label
            htmlFor={passwordId}
            className={clsx(
              "text_small",
              "absolute top-0 left-0",
              "peer-placeholder-shown:font-normal font-medium",
              "transition-all",
              "peer-focus:text-main-primary peer-focus:uppercase",
            )}
          >
            Password &nbsp;
          </Label>
        </div>

        <button type='submit'>{title}</button>
      </form>
    </Container>
  )
}

export default FormTemplate
