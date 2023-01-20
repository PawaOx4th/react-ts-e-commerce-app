import FormTemplate from "components/FormTemplate"
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
  const handleSignIn: ComponentProps<typeof FormTemplate>["onSubmit"] = (email, password) => {
    console.log("🐳 :", email, password)
  }
  return (
    <WrapperForm>
      <FormTemplate
        bgColor='#41CBBF'
        title={"SignIn"}
        onSubmit={(email: string, password: string) => handleSignIn(email, password)}
      />
    </WrapperForm>
  )
}

export default SignIn
