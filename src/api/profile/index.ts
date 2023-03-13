import client from "config/axiosConfig";
import { onHandleErrorFromApi } from "src/helpers";
import { ProfileType } from "src/store/profile/type";
import { AxiosReturnType } from "types/Api.type";

export async function onGetUserProfile(): AxiosReturnType<ProfileType> {
  try {
    const { data } = await client.get<ProfileType>("/users/me");
    return [data, null];
  } catch (error) {
    return onHandleErrorFromApi(error);
  }
}
