import React from "react"
import { Outlet } from "react-router-dom"

type Props = {}

function Navbar({}: Props) {
  return (
    <div>
      Navbar
      <Outlet />
    </div>
  )
}

export default Navbar
