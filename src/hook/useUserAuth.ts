import { useLocalStorage } from "react-use"
import { useState } from "react"
import { redirect, useNavigate } from "react-router-dom"
import useAuthenticationContext from "./useAuthenticationContext"

export type InformationFormType = {
  email: string
  password: string
}

function useUserAuth() {
  const [informationForm, setInformationForm] = useState<InformationFormType>({
    email: "",
    password: "",
  })
  const navigate = useNavigate()
  const { onSetToken, onDeleteToken } = useAuthenticationContext()

  const [, setValue] = useLocalStorage("token")
  function onHandleChangeInformationForm(value: string, type: keyof InformationFormType) {
    setInformationForm((prev) => ({ ...prev, [type]: value }))
  }

  function onSubmitForm(email: string, password: string) {
    setValue(email)
    onSetToken(email)
    navigate(0)
  }

  function onSignOut() {
    onDeleteToken()
    navigate(0)
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
