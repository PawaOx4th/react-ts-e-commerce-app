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
      navigate("/signIn")
    }
  }, [token])
  return token ? <Outlet /> : <Navigate to={"/signIn"} />
}

export default PrivateRoute
