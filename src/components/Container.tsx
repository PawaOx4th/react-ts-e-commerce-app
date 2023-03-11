import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const ContainerStyle = styled.div`
  margin: 0 auto;
  width: 100%;
  min-height: calc(100vh - 74px);

  @media screen and (min-width: ${(props) =>
      `${props.theme.breakpoints.sm}px`}) {
    width: 540px;
  }

  @media screen and (min-width: ${(props) =>
      `${props.theme.breakpoints.md}px`}) {
    width: 960px;
  }

  @media screen and (min-width: ${(props) =>
      `${props.theme.breakpoints.lg}px`}) {
    width: 1140px;
  }

  @media screen and (min-width: ${(props) =>
      `${props.theme.breakpoints.xl}px`}) {
    width: 1920px;
  }
`;

type ContainerPropType = {};

function Container({ children }: PropsWithChildren<ContainerPropType>) {
  return <ContainerStyle>{children}</ContainerStyle>;
}

export default Container;
