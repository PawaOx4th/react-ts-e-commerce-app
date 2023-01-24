import { InformationFormType } from "hook/useUserAuth"
import React, { useId, useState } from "react"
import styled from "styled-components"

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const TitleText = styled.span`
  font-size: 2rem;
  font-weight: 600;
`

const Input = styled.input`
  padding: 8px 12px;
  border-radius: 4px;
  outline: none;
  border: 2px solid #164e63;
`

const Label = styled.label`
  font-size: 20px;
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
  width: auto;
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
      <Form
        onSubmit={(e) => {
          e.preventDefault()
          onSubmit(email, password)
        }}
      >
        <Label htmlFor={emailId}>
          Email &nbsp;
          <Input
            type='email'
            name=''
            id={emailId}
            required
            value={email}
            onChange={(e) => {
              onChange(e.target.value, "email")
            }}
          />
        </Label>

        <Label htmlFor={passwordId}>
          Password &nbsp;
          <Input
            type='password'
            name=''
            id={passwordId}
            minLength={6}
            required
            value={password}
            onChange={(e) => {
              onChange(e.target.value, "password")
            }}
          />
        </Label>

        <button type='submit'>{title}</button>
      </Form>
    </Container>
  )
}

export default FormTemplate
