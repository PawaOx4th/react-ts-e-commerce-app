import React from "react"
import styled from "styled-components"

const ContainerHome = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

function HomePage() {
  return (
    <ContainerHome>
      <h1>This is a homepage!</h1>
    </ContainerHome>
  )
}

export default HomePage
