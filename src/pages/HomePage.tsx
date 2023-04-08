import { ProductDataType } from "api/products/product.type";
import clsx from "clsx";
import ProductCard from "components/molecules/ProductCard";
import React, { useEffect, useId, useRef, useState } from "react";
import useProductStore from "src/store/product/product.store";
import { shallow } from "zustand/shallow";

function HomePage() {
  const { products, onFetchProducts } = useProductStore(
    (state) => ({
      products: state.products,
      onFetchProducts: state.onFetchProducts,
    }),
    shallow,
  );

  const keywordRef = useRef<HTMLInputElement>(null);
  const [productsList, setProductList] = useState<typeof products>([]);

  useEffect(() => {
    if (!products) onFetchProducts();
    else setProductList(products);
  }, [products]);
  const [keyword, setKeyword] = useState("");

  const onCompareByProductName = (
    product: ProductDataType,
    compareString: string,
  ) => product.name!.toLowerCase().includes(compareString.toLowerCase().trim());

  const onFilterProduct = (param: string) => (product: ProductDataType) =>
    onCompareByProductName(product, param);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!keywordRef.current) return;

    const keywordValue = keywordRef.current.value;
    const filteredProducts = products?.filter(onFilterProduct(keywordValue));

    setProductList(filteredProducts ?? null);
    if (filteredProducts?.length === 0) setKeyword(keywordValue);
  };

  const keywordId = useId();
  return (
    <div className={clsx("container mx-auto", "p-4")}>
      <form onSubmit={handleSearch} className={clsx("my-10", "block")}>
        <div className={clsx("flex", "gap-2", "h-12", "justify-center")}>
          <label
            htmlFor={keywordId}
            className={clsx("border", "inline-block", "h-full w-[32ch]")}
          >
            <input
              ref={keywordRef}
              className={clsx("h-full w-full", "p-2")}
              id={keywordId}
              type='text'
            />
          </label>
          <button
            type='submit'
            className={clsx(
              "h-12",
              "bg-blue-600",
              "w-28",
              "font-medium text-white",
              "rounded-md",
            )}
          >
            search
          </button>
        </div>
      </form>
      <div className={clsx("grid grid-flow-row grid-cols-12 gap-4 @container")}>
        {productsList && productsList.length > 0 ? (
          productsList?.map((product) => (
            <div
              key={product.id}
              className={clsx(
                "col-span-6  @md:col-span-4  @4xl:col-span-3 @6xl:col-span-2",
              )}
            >
              <ProductCard
                image={product.img?.url}
                name={product.name}
                stock={product.stock ?? 0}
                price={product.price}
              />
            </div>
          ))
        ) : (
          <div className={clsx("col-span-full", "text-center", "py-10")}>
            <span className={clsx("text-2xl", "text-gray-300")}>
              Product is not matched by{" "}
              <strong>
                <i>{keyword}</i>
              </strong>{" "}
              !!
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
