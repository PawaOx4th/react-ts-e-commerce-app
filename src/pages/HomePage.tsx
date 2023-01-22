import React from "react"
import styled from "styled-components"

const ContainerHome = styled.div`
  width: 100%;
  min-height: calc(100vh - 68px);
`

function HomePage() {
  return (
    <ContainerHome>
      <h1>This is a homepage!</h1>
    </ContainerHome>
  )
}

export default HomePage
