import { onSignIn, onSignUp } from "api/authentication"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useLocalStorage } from "react-use"
import useAuthenticationStore from "src/store/authentication/authentication.store"
import useProfileStore from "src/store/profile/profile.store"
import { shallow } from "zustand/shallow"

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
  function onHandleChangeInformationForm(
    value: string,
    type: keyof InformationFormType,
  ) {
    setInformationForm((prev) => ({ ...prev, [type]: value }))
  }

  const { onSetJwt, onRemoveJwt } = useAuthenticationStore(
    (state) => ({
      onSetJwt: state.onSetJwt,
      onRemoveJwt: state.onRemoveJwt,
    }),
    shallow,
  )
  const { onUpdateUser, onRemoveUser } = useProfileStore(
    (state) => ({
      onUpdateUser: state.onUpdateUser,
      onRemoveUser: state.onRemoveUser,
    }),
    shallow,
  )

  async function onSubmitForm(email: string, password: string, type: AuthType) {
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
        data.user && onUpdateUser(data.user)
      }
      return [data, errorMsg] as const
    }

    return [null, "Type is not defined"] as const
  }

  const onSignOut = () => {
    const status = onRemoveJwt()
    onRemoveUser()
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
