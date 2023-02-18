import axios, { Axios, AxiosError, AxiosResponse } from "axios"
import client from "config/axiosConfig"
import { InformationFormType } from "hook/useUserAuth"
import { APIResponseErrorType, AxiosReturn } from "types/Api.type"
import { SignUpResponseType } from "./SignUp.type"

export interface SingUpParamType {
  username?: string
  email?: string
  password?: string
}

export async function onSignUp({
  email,
  password,
}: InformationFormType): AxiosReturn<SignUpResponseType> {
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

    return [response.data, null]
  } catch (error) {
    if (axios.isAxiosError<APIResponseErrorType>(error)) {
      return [null, error.response?.data?.error?.message ?? "Error"]
    }
    return [null, (error as Error).message]
  }
}

export async function onSignIn({
  email,
  password,
}: InformationFormType): AxiosReturn<SignUpResponseType> {
  try {
    const response = await client.post<SignUpResponseType>("/auth/local", {
      identifier: email,
      password,
    })

    console.log("🍉 RESPONSE :", response)

    return [response.data, null]
  } catch (error) {
    if (axios.isAxiosError<APIResponseErrorType>(error)) {
      return [null, error.response?.data?.error?.message ?? "Error"]
    }
    return [null, (error as Error).message]
  }
}
