import React, { useMemo } from "react"
import { NavLink, Outlet } from "react-router-dom"
import styled from "styled-components"
import { HiShoppingBag } from "react-icons/hi"
import theme from "style/theme"
import useAuthenticationContext from "hook/useAuthenticationContext"
import useUserAuth from "hook/useUserAuth"
import clsx from "clsx"

type NavbarPropTypes = {}

const fullMenuList = [
  {
    name: "home",
    path: "/",
    private: false,
  },
  {
    name: "about",
    path: "/about",
    private: true,
  },
  {
    name: "sign in",
    path: "/signIn",
    private: false,
  },
  {
    name: "sign up",
    path: "/signUp",
    private: false,
  },
]

const pathForToken = ["/about"]

function Navbar({}: NavbarPropTypes) {
  const { token } = useAuthenticationContext()
  const { onSignOut } = useUserAuth()

  const menuList = useMemo(() => {
    if (token) {
      return fullMenuList.filter((item) => !(item.path === "/signIn" || item.path === "/signUp"))
    } else return fullMenuList
  }, [token])

  return (
    <div
      className={clsx(
        "flex sticky top-0",
        "w-full min-h-[4rem]",
        "bg-main-primary",
        "items-center justify-between flex-wrap py-4 px-8",
      )}
    >
      <div className='flex grow basis-12'>
        <HiShoppingBag color={theme.color.white} size={"2rem"} />
      </div>
      <div className='grow-[5rem]'>
        <ul className={clsx("hidden md:flex", "justify-end gap-8")}>
          {menuList &&
            menuList.map((item) => {
              return (
                <li
                  key={item.name}
                  className={clsx("capitalize font-medium", " select-none transition-all ")}
                >
                  <NavLink
                    to={`${item.path}`}
                    className={clsx(
                      "no-underline text-main-white",
                      "hover:text-main-gray hover:bg-main-secondary/50 hover:rounded py-2 px-6",
                      "[&.active]:bg-main-secondary [&.active]:text-main-white [&.active]:rounded",
                    )}
                  >
                    {item.name}
                  </NavLink>
                </li>
              )
            })}
          {token && (
            <li
              className={clsx(
                "capitalize font-medium select-none transition-all text-main-gray hover:text-main-white",
              )}
            >
              <button onClick={() => onSignOut()}>Sign Out</button>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
