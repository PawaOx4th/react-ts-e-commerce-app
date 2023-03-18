import clsx from "clsx";
import useUserAuth from "hook/useUserAuth";
import React, { useMemo } from "react";
import { GoSignOut } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { FULL_MENU_LIST } from "src/constraint/FULL_MENU_LIST";
import useAuthenticationStore from "src/store/authentication/authentication.store";
import useProfileStore from "src/store/profile/profile.store";
import theme from "style/theme";

// type NavbarPropTypes = {};

function Navbar() {
  /**
   *
   * @description Get jwt token from store.
   */
  const jwtToken = useAuthenticationStore((state) => state.jwt);
  const { onSignOut } = useUserAuth();

  /**
   *
   * @description For crate menu list follow user authentication status.
   */
  const menuList = useMemo(() => {
    if (jwtToken) {
      return FULL_MENU_LIST.filter(
        (item) => !(item.path === "/sign-in" || item.path === "/sign-up"),
      );
    }
    return FULL_MENU_LIST;
  }, [jwtToken]);

  /**
   * NOTE
   */
  const user = useProfileStore((state) => state.user);

  return (
    <div
      className={clsx(
        "flex sticky top-0",
        "w-full h-[4rem]",
        "bg-main-primary",
        "items-center justify-between flex-wrap py-4 px-8",
      )}
    >
      <div className='flex grow basis-12'>
        <HiShoppingBag color={theme.color.white} size='2rem' />
      </div>
      <div className='md:grow-[5rem]'>
        <ul
          className={clsx(
            "absolute left-0  w-screen md:w-auto bg-main-primary md:bg-transparent   top-[4rem] z-auto  md:inset-0 md:relative block md:flex",
            "justify-end items-center gap-8",
          )}
        >
          {menuList &&
            menuList.map((item) => (
              <li
                key={item.name}
                className={clsx(
                  "capitalize font-medium",
                  " select-none transition-all ",
                )}
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
            ))}

          {jwtToken && (
            <li
              className={clsx(
                "capitalize font-medium select-none transition-all text-main-white ",
              )}
            >
              <button
                type='button'
                className={clsx(
                  "flex items-center gap-2",
                  "hover:text-main-gray hover:bg-main-secondary/50 hover:rounded px-6 py-2 ",
                )}
                onClick={() => onSignOut()}
              >
                <GoSignOut size='1.5rem' />
              </button>
            </li>
          )}
          <li className='capitalize font-medium select-none transition-all text-main-white '>
            <div className={clsx("bg-main-secondary", "p-3", "rounded-full")}>
              {user?.username.slice(0, 2).toUpperCase()}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
