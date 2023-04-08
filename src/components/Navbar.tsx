import clsx from "clsx";
import useUserAuth from "hook/useUserAuth";
import React, { useEffect, useMemo, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoSignOut } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useMedia } from "react-use";
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
  const user = useProfileStore((state) => state.user ?? null);

  /**
   *
   * @description Toggle navbar menu.
   */
  const [isOpen, setIsOpen] = useState(false);
  const handleUpdateIsOpen = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  const isDeskTopScreen = useMedia("(min-width: 768px)");
  useEffect(() => {
    if (isDeskTopScreen) {
      setIsOpen(false);
    }
  }, [isDeskTopScreen]);

  return (
    <div
      className={clsx(
        "sticky top-0 z-10 flex",
        "min-h-[4rem] w-full",
        "bg-main-primary",
        "flex-wrap items-center justify-between px-8 py-4",
      )}
    >
      <div className='z-10 flex grow basis-8 items-stretch justify-between '>
        <HiShoppingBag color={theme.color.white} size='2rem' />
        <div className={clsx("block md:hidden")}>
          {isOpen ? (
            <IoMdClose
              className={clsx("h-full text-3xl text-white")}
              onClick={() => handleUpdateIsOpen()}
            />
          ) : (
            <GiHamburgerMenu
              onClick={() => handleUpdateIsOpen()}
              className={clsx("h-[100%] ")}
              size={24}
              color='#fff'
            />
          )}
        </div>
      </div>
      <div className='md:grow-[5]'>
        {/* top-[3.5rem] */}
        <ul
          className={clsx(
            isOpen ? "top-[3.5rem] opacity-100" : "-top-[100vh] opacity-50",
            "absolute left-0 z-auto  h-screen w-screen  bg-main-primary md:relative  md:inset-0  md:h-full md:w-auto md:bg-transparent",
            "items-center gap-4 md:gap-8",
            "px-8 py-4 md:p-0",
            "flex flex-col md:flex-row",
            "justify-start md:justify-end",
            "transition-all duration-300 ease-in-out md:opacity-100",
          )}
        >
          {menuList &&
            menuList.map((item) => (
              <li
                key={item.name}
                className={clsx(
                  "font-medium capitalize",
                  " select-none transition-all ",
                  "flex h-12 w-full md:h-auto md:w-auto",
                )}
              >
                <NavLink
                  to={`${item.path}`}
                  className={clsx(
                    "text-main-white no-underline",
                    "h-full w-full px-6 py-2 hover:rounded hover:bg-main-secondary/50 hover:text-main-gray md:w-auto",
                    "[&.active]:rounded [&.active]:bg-main-secondary [&.active]:text-main-white",
                    "flex items-center",
                  )}
                  onClick={() => handleUpdateIsOpen()}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

          {jwtToken && (
            <li
              className={clsx(
                "select-none font-medium capitalize text-main-white transition-all ",
              )}
            >
              <button
                type='button'
                className={clsx(
                  "flex items-center gap-2",
                  "px-6 py-2 hover:rounded hover:bg-main-secondary/50 hover:text-main-gray ",
                )}
                onClick={() => onSignOut()}
              >
                <GoSignOut size='1.5rem' />
              </button>
            </li>
          )}
          <li className='select-none font-medium capitalize text-main-white transition-all '>
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
