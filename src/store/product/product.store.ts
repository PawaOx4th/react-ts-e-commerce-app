import { onGetProduct } from "api/products";
import { ProductDataType } from "api/products/product.type";
import { definedStore } from "src/helpers";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type ProductStoreType = {
  products: ProductDataType[] | null;
  onFetchProducts: () => Promise<boolean>;
};

const useProductStore = create<ProductStoreType>()(
  devtools(
    (set) => ({
      products: null,
      onFetchProducts: async () => {
        const [data, error] = await onGetProduct();

        if (error && data === null) {
          set({ products: null });
          return false;
        }
        set({ products: data?.data ?? null }, false, "onFetchProducts");
        return true;
      },
    }),
    definedStore("useProductStore"),
  ),
);

export default useProductStore;
