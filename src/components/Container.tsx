import React, { PropsWithChildren } from "react"
import styled from "styled-components"

const ContainerStyle = styled.div`
  margin: 0 auto;
  width: 100%;

  @media screen and (min-width: ${(props) => `${props.theme.breakpoints.sm}px`}) {
    width: 540px;
    background-color: lemonchiffon;
  }

  @media screen and (min-width: ${(props) => `${props.theme.breakpoints.md}px`}) {
    width: 960px;
  }

  @media screen and (min-width: ${(props) => `${props.theme.breakpoints.lg}px`}) {
    width: 1140px;
  }

  @media screen and (min-width: ${(props) => `${props.theme.breakpoints.xl}px`}) {
    width: 1920px;
  }
`

type ContainerPropTypes = {}

function Container({ children }: PropsWithChildren<ContainerPropTypes>) {
  return <ContainerStyle>{children}</ContainerStyle>
}

export default Container