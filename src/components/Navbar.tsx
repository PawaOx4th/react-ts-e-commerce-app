import clsx from "clsx"
import useAuthenticationContext from "hook/useAuthenticationContext"
import useUserAuth from "hook/useUserAuth"
import React, { useMemo } from "react"
import { GoSignOut } from "react-icons/go"
import { HiShoppingBag } from "react-icons/hi"
import { NavLink } from "react-router-dom"
import { FULL_MENU_LIST } from "src/constraint/FULL_MENU_LIST"
import theme from "style/theme"

type NavbarPropTypes = {}

function Navbar({}: NavbarPropTypes) {
  const { token } = useAuthenticationContext()
  const { onSignOut } = useUserAuth()

  const menuList = useMemo(() => {
    if (token) {
      return FULL_MENU_LIST.filter((item) => !(item.path === "/sign-in" || item.path === "/signUp"))
    } else return FULL_MENU_LIST
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
        <ul className={clsx("hidden md:flex", "justify-end items-center gap-8")}>
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
              className={clsx("capitalize font-medium select-none transition-all text-main-white ")}
            >
              <button
                className={clsx(
                  "flex items-center gap-2",
                  "hover:text-main-gray hover:bg-main-secondary/50 hover:rounded px-6 py-2 ",
                )}
                onClick={() => onSignOut()}
              >
                <GoSignOut size={"1.5rem"} />
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
