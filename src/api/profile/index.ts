import client from "config/axiosConfig"
import { onHandleErrorFromApi } from "src/helpers"
import { ProfileType } from "src/store/profile/type"
import { AxiosReturn } from "types/Api.type"

export async function onGetProfileWithUserId(
  userId: string,
): AxiosReturn<ProfileType> {
  try {
    const { data } = await client.get(`/users/${userId}`)
    return [data, null]
  } catch (error) {
    return onHandleErrorFromApi(error)
  }
}
