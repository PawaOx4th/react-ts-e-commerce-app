import React, { useEffect } from "react";
import useProductStore from "src/store/product/product.store";
import styled from "styled-components";
import { shallow } from "zustand/shallow";

const ContainerHome = styled.div`
  width: 100%;
  /* min-height: calc(100vh - 50px); */
`;

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
    <ContainerHome>
      <ul>
        {products?.map((item) => (
          <li key={item.id}>
            {item.name}
            <img
              src={item.img?.url}
              alt={item.name}
              loading='lazy'
              width={300}
              height={300}
            />
          </li>
        ))}
      </ul>
    </ContainerHome>
  );
}

export default HomePage;
