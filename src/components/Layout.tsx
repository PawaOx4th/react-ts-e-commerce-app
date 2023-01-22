import React from "react"
import { Outlet } from "react-router-dom"
import Container from "./Container"
import Navbar from "./Navbar"

type Props = {}

function Layout({}: Props) {
  return (
    <div>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </div>
  )
}

export default Layout
