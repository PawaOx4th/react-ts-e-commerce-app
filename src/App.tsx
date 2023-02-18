import React from "react"
import Layout from "components/Layout"
import PrivateRoute from "components/PrivateRoute"
import AuthenticationProvider from "context/auth"
import GlobalLoadingProvider from "context/loading/GlobalLoadingProvider"
import AboutPage from "pages/AboutPage"
import ErrorPage from "pages/ErrorPage"
import HomePage from "pages/HomePage"
import PleaseConfirmPage from "pages/PleaseConfirmPage"
import SignIn from "pages/SignIn"
import SignUp from "pages/SignUp"
import { Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <GlobalLoadingProvider>
      <ToastContainer />
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
