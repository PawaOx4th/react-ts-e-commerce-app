import clsx from "clsx";
import ProductCard from "components/molecules/ProductCard";
import React, { useEffect, useMemo, useState } from "react";
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

  useEffect(() => {
    onFetchProducts();
  }, []);
  const [keyword, setKeyword] = useState("");

  const productsFiltered = useMemo(() => {
    if (!keyword) return products;

    return products?.filter((product) =>
      product.name!.toLowerCase().includes(keyword.toLowerCase()),
    );
  }, [keyword, products]);

  return (
    <div className={clsx("container mx-auto", "p-4")}>
      <div>
        <input
          type='text'
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
      <div className={clsx("grid grid-flow-row grid-cols-12 gap-4 @container")}>
        {productsFiltered && productsFiltered.length > 0 ? (
          productsFiltered?.map((product) => (
            <div
              className={clsx(
                "col-span-6  @md:col-span-4  @4xl:col-span-3 @6xl:col-span-2",
              )}
            >
              <ProductCard
                key={product.id}
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
              Product is not matched.
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
