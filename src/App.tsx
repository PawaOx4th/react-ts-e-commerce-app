import axios from "axios"
import Layout from "components/Layout"
import PrivateRoute from "components/PrivateRoute"
import client from "config/axiosConfig"
import AuthenticationProvider from "context/auth"
import GlobalLoadingProvider from "context/loading/GlobalLoadingProvider"
import AboutPage from "pages/AboutPage"
import ErrorPage from "pages/ErrorPage"
import HomePage from "pages/HomePage"
import PleaseConfirmPage from "pages/PleaseConfirmPage"
import SignIn from "pages/SignIn"
import SignUp from "pages/SignUp"
import { useEffect } from "react"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <GlobalLoadingProvider>
      <AuthenticationProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} caseSensitive />
            <Route element={<PrivateRoute />}>
              <Route path='about' element={<AboutPage />} caseSensitive />
            </Route>
          </Route>
          <Route path='signIn' element={<SignIn />} caseSensitive />
          <Route path='signUp' element={<SignUp />} caseSensitive />
          <Route path='please-confirm' element={<PleaseConfirmPage />} caseSensitive />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </AuthenticationProvider>
    </GlobalLoadingProvider>
  )
}

export default App
