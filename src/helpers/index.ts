import axios from "axios"
import { APIResponseErrorType } from "types/Api.type"

export function definedStore(storeName: string) {
  return {
    name: "e-commerce-app",
    store: storeName,
    enabled: import.meta.env.MODE === "development" ? true : false,
  }
}

export function onHandleErrorFromApi(error: unknown): [null, string] {
  if (axios.isAxiosError<APIResponseErrorType>(error)) {
    return [null, error.response?.data?.error?.message ?? "Error"]
  }
  return [null, (error as Error).message]
}
