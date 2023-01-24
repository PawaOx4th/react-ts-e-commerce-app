import { useState } from "react"

export type InformationFormType = {
  email: string
  password: string
}

function useUserAuth() {
  const [informationForm, setInformationForm] = useState<InformationFormType>({
    email: "",
    password: "",
  })
  function onHandleChangeInformationForm(value: string, type: keyof InformationFormType) {
    setInformationForm((prev) => ({ ...prev, [type]: value }))
  }

  function onSubmitForm(email: string, password: string) {
    console.log("🐳  :", email, password)
  }

  return {
    informationForm,
    setInformationForm,
    onSubmitForm,
    onHandleChangeInformationForm,
  }
}

export default useUserAuth
