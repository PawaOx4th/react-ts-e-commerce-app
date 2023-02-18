import { Authentication } from "context/auth"
import useAuthenticationContext from "hook/useAuthenticationContext"
import React, { useContext, useEffect, useState } from "react"
import { Navigate, Outlet, useNavigate } from "react-router-dom"

type PrivateRoutePropsType = {}

function PrivateRoute({}: PrivateRoutePropsType) {
  const { token } = useAuthenticationContext()
  const navigate = useNavigate()
  useEffect(() => {
    if (!token) {
      navigate("/sign-in")
    }
  }, [token])
  return token ? <Outlet /> : <Navigate to={"/sign-in"} />
}

export default PrivateRoute
