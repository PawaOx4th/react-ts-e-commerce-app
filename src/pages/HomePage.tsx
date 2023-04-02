import clsx from "clsx";
import React, { useEffect } from "react";
import { formatCurrency } from "src/helpers";
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

  return (
    <div className={clsx("container mx-auto", "p-4")}>
      <div className={clsx("grid grid-flow-row grid-cols-12 gap-4")}>
        {products?.map((product) => (
          <div
            key={product.id}
            className={clsx(
              "col-span-6  md:col-span-4  xl:col-span-2",
              "border-gray-400-500 border",
              "rounded-b-lg",
              "flex flex-col",
            )}
          >
            <div
              className={clsx(
                "h-[200px] w-full",
                "bg-gray-200",
                "overflow-hidden",
              )}
            >
              <img
                src={product.img?.url}
                alt=''
                className={clsx(
                  "h-full w-full object-contain",
                  "hover:scale-110",
                  "transition-all",
                )}
              />
            </div>
            <div
              className={clsx(
                "p-2",
                "mt-4",
                "flex flex-col",
                "justify-between",
              )}
            >
              <div className='flex flex-col'>
                <span
                  className={clsx("text-md font-medium", "text-main-secondary")}
                >
                  {product.name}
                </span>
                <span className={clsx("text-xs", "text-gray-500")}>
                  in stock : {product.stock}
                </span>
              </div>
              <span
                className={clsx(
                  "text-sm font-medium",
                  "mt-4",
                  "text-main-secondary",
                )}
              >
                {product.price && formatCurrency(product.price)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
