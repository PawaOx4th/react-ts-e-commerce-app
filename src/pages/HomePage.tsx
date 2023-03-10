import { onGetProduct } from "api/products"
import { ProductsType } from "api/products/product.type"
import { useEffect, useState } from "react"
import styled from "styled-components"

const ContainerHome = styled.div`
  width: 100%;
  /* min-height: calc(100vh - 50px); */
`

function HomePage() {
  const [product, setProduct] = useState<ProductsType>()
  useEffect(() => {
    const abortController = new AbortController()
    const fetchProduct = async () => {
      const res = await onGetProduct()
      res[0] && setProduct(res[0])
    }

    fetchProduct()

    return () => {
      abortController.abort()
    }
  }, [])

  return (
    <ContainerHome>
      <pre>
        <code>{JSON.stringify(product, null, 2)}</code>
      </pre>
    </ContainerHome>
  )
}

export default HomePage
