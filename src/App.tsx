import { useState } from "react"
import reactLogo from "assets/react.svg"
import { Routes, Route } from "react-router-dom"
import HomePage from "pages/HomePage"
import AboutPage from "pages/AboutPage"
import ErrorPage from "pages/ErrorPage"
import SignIn from "pages/SignIn"
import SignUp from "pages/SignUp"
import Navbar from "components/Navbar"

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<HomePage />} caseSensitive />
        <Route path='about' element={<AboutPage />} caseSensitive />
      </Route>
      <Route path='signin' element={<SignIn />} caseSensitive />
      <Route path='signup' element={<SignUp />} caseSensitive />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  )
}

export default App
