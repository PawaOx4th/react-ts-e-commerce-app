import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import useProfileStore from "src/store/profile/profile.store"
import styled from "styled-components"
import Container from "./Container"
import Navbar from "./Navbar"

const LayoutStyle = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.color.white};
`

type LayoutPropsType = {}

function Layout({}: LayoutPropsType) {
  const onGetProfile = useProfileStore((state) => state.onGetProfile)

  useEffect(() => {
    let isMounted = false
    ;(async () => {
      !isMounted && (await onGetProfile())
    })()

    return () => {
      isMounted = true
    }
  }, [])

  return (
    <LayoutStyle>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </LayoutStyle>
  )
}

export default Layout
