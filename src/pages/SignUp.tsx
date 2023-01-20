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

function SignUp({}: Props) {
  const handleSignUp: ComponentProps<typeof FormTemplate>["onSubmit"] = (email, password) => {
    console.log("🐳 :", email, password)
  }
  return (
    <WrapperForm>
      <FormTemplate
        title={"SignUp"}
        onSubmit={(email: string, password: string) => handleSignUp(email, password)}
      />
    </WrapperForm>
  )
}

export default SignUp
