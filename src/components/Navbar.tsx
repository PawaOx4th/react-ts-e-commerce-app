import React from "react"
import { Outlet } from "react-router-dom"
import styled from "styled-components"

const ContainerNavbar = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  height: 3rem;
  background-color: ${(props) => props.theme.primary};
`

type NavbarPropTypes = {}

function Navbar({}: NavbarPropTypes) {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <ContainerNavbar>Navbar</ContainerNavbar>
      <Outlet />
    </div>
  )
}

export default Navbar
