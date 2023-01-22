import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import { useLocalStorage } from "react-use"

type PrivateRoutePropsType = {}

function PrivateRoute({}: PrivateRoutePropsType) {
  const [value] = useLocalStorage("token")
  return value ? <Outlet /> : <Navigate to={"/signIn"} />
}

export default PrivateRoute
