import { AxiosResponse } from "axios";
import client from "config/axiosConfig";
import { InformationFormType } from "hook/useUserAuth";
import { onHandleErrorFromApi } from "src/helpers";
import { AxiosReturnType } from "types/Api.type";
import { SignUpResponseType, SingInResponseType } from "./authentication.type";

export interface SingUpParamType {
  username?: string;
  email?: string;
  password?: string;
}

export async function onSignUp({
  email,
  password,
}: InformationFormType): AxiosReturnType<SignUpResponseType> {
  try {
    const response = await client.post<
      SignUpResponseType,
      AxiosResponse<SignUpResponseType>,
      SingUpParamType
    >("/auth/local/register", {
      username: email,
      email,
      password,
    });

    return [response.data, null];
  } catch (error) {
    return onHandleErrorFromApi(error);
  }
}

export async function onSignIn({
  email,
  password,
}: InformationFormType): AxiosReturnType<SingInResponseType> {
  try {
    const response = await client.post<SingInResponseType>("/auth/local", {
      identifier: email,
      password,
    });

    return [response.data, null];
  } catch (error) {
    return onHandleErrorFromApi(error);
  }
}
