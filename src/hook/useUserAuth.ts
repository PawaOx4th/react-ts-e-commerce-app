import { onSignIn, onSignUp } from "api/authentication"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useLocalStorage } from "react-use"
import useAuthenticationStore from "src/store/authentication/authentication.store"

export type InformationFormType = {
  email: string
  password: string
}

export type AuthType = "signIn" | "signUp"

function useUserAuth() {
  const [informationForm, setInformationForm] = useState<InformationFormType>({
    email: "",
    password: "",
  })
  const navigate = useNavigate()

  const [, setValue] = useLocalStorage("token")
  function onHandleChangeInformationForm(value: string, type: keyof InformationFormType) {
    setInformationForm((prev) => ({ ...prev, [type]: value }))
  }

  const { onSetJwt, onRemoveJwt } = useAuthenticationStore()

  async function onSubmitForm(email: string, password: string, type: AuthType) {
    // setValue(email)
    // onSetToken(email)
    // navigate(0)
    if (type === "signUp") {
      const [data, errorMsg] = await onSignUp({
        email,
        password,
      })
      return [data, errorMsg] as const
    }

    if (type === "signIn") {
      const [data, errorMsg] = await onSignIn({
        email,
        password,
      })

      if (data?.jwt) {
        onSetJwt(data.jwt)
      }
      return [data, errorMsg] as const
    }

    return [null, "Type is not defined"] as const
  }

  function onSignOut() {
    const status = onRemoveJwt()
    if (status) {
      navigate("/")
    }
  }

  return {
    informationForm,
    setInformationForm,
    onSubmitForm,
    onHandleChangeInformationForm,
    onSignOut,
  }
}

export default useUserAuth
