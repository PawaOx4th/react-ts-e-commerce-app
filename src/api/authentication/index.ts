import { AxiosResponse } from "axios"
import client from "config/axiosConfig"
import { InformationFormType } from "hook/useUserAuth"
import { SignUpResponseType } from "./SignUp.type"

export interface SingUpParamType {
  username?: string
  email?: string
  password?: string
}

export async function onSignUp({ email, password }: InformationFormType) {
  try {
    const response = await client.post<
      SignUpResponseType,
      AxiosResponse<SignUpResponseType>,
      SingUpParamType
    >("/auth/local/register", {
      username: email,
      email,
      password,
    })

    console.log("🧊 response :", response)
  } catch (error) {
    if (error instanceof Error) {
      console.log("🔥 error :", error.message)
    }
  }
}
