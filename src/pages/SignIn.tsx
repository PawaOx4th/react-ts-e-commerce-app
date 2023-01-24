import FormTemplate from "components/FormTemplate"
import useUserAuth from "hook/useUserAuth"
import React, { ComponentProps, useId } from "react"
import styled from "styled-components"

const WrapperForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  gap: 1.275rem;
`

type Props = {}

function SignIn({}: Props) {
  const { onSubmitForm, informationForm, onHandleChangeInformationForm } = useUserAuth()

  return (
    <WrapperForm>
      <FormTemplate
        bgColor='#41CBBF'
        title={"SignIn"}
        onSubmit={(email: string, password: string) => onSubmitForm(email, password)}
        email={informationForm.email}
        password={informationForm.password}
        onChange={(value, type) => {
          onHandleChangeInformationForm(value, type)
        }}
      />
    </WrapperForm>
  )
}

export default SignIn
