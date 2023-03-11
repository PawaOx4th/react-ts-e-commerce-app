import client from "config/axiosConfig";
import { onHandleErrorFromApi } from "src/helpers";
import { AxiosReturnType } from "types/Api.type";
import { ProductsType } from "./product.type";

export async function onGetProduct(): AxiosReturnType<ProductsType> {
  try {
    const response = await client.get<ProductsType>("/products", {
      params: {
        populate: "*",
      },
    });
    return [response.data, null];
  } catch (error) {
    return onHandleErrorFromApi(error);
  }
}
