import { Navigate, Outlet } from "react-router-dom"
import useAuthenticationStore from "src/store/authentication/authentication.store"

type PrivateRoutePropsType = {}

function PrivateRoute({}: PrivateRoutePropsType) {
  const jwtToken = useAuthenticationStore((state) => state.jwt)
  // const location = useLocation()

  // const isCheckBeforeRouteIsPrivate = useMemo(() => {
  //   const response = FULL_MENU_LIST.filter((route) => route.private).map((route) => route.path)
  //   return response.includes(location.pathname)
  // }, [location])

  // if (isCheckBeforeRouteIsPrivate) return <Navigate to={"/"} />

  return jwtToken ? <Outlet /> : <Navigate to={"/"} />
}

export default PrivateRoute
