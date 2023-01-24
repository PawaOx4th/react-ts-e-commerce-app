import { useLocalStorage } from "react-use"
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

  const [, setValue] = useLocalStorage("token")
  function onHandleChangeInformationForm(value: string, type: keyof InformationFormType) {
    setInformationForm((prev) => ({ ...prev, [type]: value }))
  }

  function onSubmitForm(email: string, password: string) {
    setValue(email)
  }

  return {
    informationForm,
    setInformationForm,
    onSubmitForm,
    onHandleChangeInformationForm,
  }
}

export default useUserAuth
