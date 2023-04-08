import clsx from "clsx";
import React from "react";
import { formatCurrency } from "src/helpers";

type ProductCardPropsType = {
  image?: string;
  name?: string;
  stock: number;
  price?: number;
};

function ProductCard({ image, name, stock, price }: ProductCardPropsType) {
  return (
    <div
      className={clsx(
        "border-gray-400-500 border",
        "rounded-b-lg",
        "flex flex-col",
        "h-full",
        "w-full",
      )}
    >
      <div
        className={clsx(
          // "h-[200px] w-full",
          "bg-gray-200",
          "overflow-hidden",
        )}
      >
        <img
          src={image}
          alt=''
          className={clsx(
            "h-full w-full object-contain",
            "hover:scale-110",
            "transition-all",
            "aspect-square",
          )}
        />
      </div>
      <div className={clsx("p-2", "mt-4", "flex flex-col", "justify-between")}>
        <div className='flex flex-col'>
          <span className={clsx("text-md font-medium", "text-main-secondary")}>
            {name}
          </span>
          <span className={clsx("text-xs", "text-gray-500")}>
            in stock : {stock}
          </span>
        </div>
        <span
          className={clsx("text-sm font-medium", "mt-4", "text-main-secondary")}
        >
          {price && formatCurrency(price)}
        </span>
      </div>
    </div>
  );
}

export default ProductCard;
