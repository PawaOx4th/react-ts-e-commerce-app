import React from "react"
import { NavLink, Outlet } from "react-router-dom"
import styled from "styled-components"
import { HiShoppingBag } from "react-icons/hi"
import theme from "style/theme"

const ContainerNavbar = styled.nav`
  display: block;
  position: sticky;
  top: 0;
  width: 100%;
  min-height: 4rem;
  background-color: ${(props) => props.theme.color.primary};
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  justify-content: space-between;
  flex-wrap: wrap;
`

const Ul = styled.ul`
  display: none;
  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}px) {
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
  }
`

const Li = styled.li`
  text-transform: capitalize;
  font-weight: 500;
  user-select: none;

  transition: all 0.45s cubic-bezier(0.19, 1, 0.22, 1);
  color: ${(props) => props.theme.color.secondary};
  /* cursor: pointer; */
  &:hover {
    /* background-color: ${(props) => props.theme.color.gray}; */
    color: ${(props) => props.theme.color.white};
  }
`

const ItemLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  padding: 0.5rem 1.275rem;
  &.active {
    background: ${(props) => props.theme.color.secondary};
    color: ${(props) => props.theme.color.white};
    border-radius: 4px;
  }
`

type NavbarPropTypes = {}

const menuList = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "sign in",
    path: "/signIn",
  },
  {
    name: "sign up",
    path: "/signUp",
  },
]
function Navbar({}: NavbarPropTypes) {
  return (
    <ContainerNavbar>
      <div
        style={{
          flexGrow: "1",
          flexBasis: "3rem",
        }}
      >
        <HiShoppingBag color={theme.color.white} size={"2rem"} />
      </div>
      <div
        style={{
          flexGrow: "5",
        }}
      >
        <Ul>
          {menuList.map((item) => {
            return (
              <Li
                key={item.name}
                style={{
                  listStyle: "none",
                }}
              >
                <ItemLink to={`${item.path}`}>{item.name}</ItemLink>
              </Li>
            )
          })}
        </Ul>
      </div>
    </ContainerNavbar>
  )
}

export default Navbar
