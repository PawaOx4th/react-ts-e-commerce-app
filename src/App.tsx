import { useState } from "react"
import reactLogo from "assets/react.svg"
import { Routes, Route } from "react-router-dom"
import HomePage from "pages/HomePage"
import AboutPage from "pages/AboutPage"
import ErrorPage from "pages/ErrorPage"
import SignIn from "pages/SignIn"
import SignUp from "pages/SignUp"
import Navbar from "components/Navbar"
import Layout from "components/Layout"
import AuthenticationProvider from "context/AuthenticationProvider"
import PrivateRoute from "components/PrivateRoute"

function App() {
  return (
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
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </AuthenticationProvider>
  )
}

export default App
