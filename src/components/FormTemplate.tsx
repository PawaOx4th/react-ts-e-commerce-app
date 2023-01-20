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
type UserAuthenticateType = {
  email: string
  password: string
}

type FormTemplatePropTypes = {
  title: string
  onSubmit: (email: string, password: string) => void
} & ContainerStylePropTypes

function FormTemplate({ title, onSubmit, bgColor }: FormTemplatePropTypes) {
  const emailId = useId()
  const passwordId = useId()

  const [useAuthen, setUseAuthen] = useState<UserAuthenticateType>({ email: "", password: "" })

  return (
    <Container bgColor={bgColor}>
      <div>
        <TitleText>{title}</TitleText>
      </div>
      <Form
        onSubmit={(e) => {
          e.preventDefault()
          onSubmit(useAuthen.email, useAuthen.password)
        }}
      >
        <Label htmlFor={emailId}>
          Email &nbsp;
          <Input
            type='email'
            name=''
            id={emailId}
            required
            value={useAuthen.email}
            onChange={(e) => {
              setUseAuthen((prev) => ({
                ...prev,
                email: e.target.value,
              }))
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
            value={useAuthen.password}
            onChange={(e) => {
              setUseAuthen((prev) => ({
                ...prev,
                password: e.target.value,
              }))
            }}
          />
        </Label>

        <button type='submit'>{title}</button>
      </Form>
    </Container>
  )
}

export default FormTemplate
