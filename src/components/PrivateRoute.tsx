import { Authentication } from "context/auth"
import React, { useContext, useEffect, useState } from "react"
import { Navigate, Outlet } from "react-router-dom"

type PrivateRoutePropsType = {}

function PrivateRoute({}: PrivateRoutePropsType) {
  const { token } = useContext(Authentication)

  return token ? <Outlet /> : <Navigate to={"/signIn"} />
}

export default PrivateRoute
