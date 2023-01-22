import React from "react"
import { Outlet } from "react-router-dom"
import styled from "styled-components"
import Container from "./Container"
import Navbar from "./Navbar"

const LayoutStyle = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.color.white};
`

type LayoutPropsType = {}

function Layout({}: LayoutPropsType) {
  return (
    <LayoutStyle>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </LayoutStyle>
  )
}

export default Layout
