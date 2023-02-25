import Layout from "components/Layout"
import PrivateRoute from "components/PrivateRoute"

import GlobalLoadingProvider from "context/loading/GlobalLoadingProvider"
import AboutPage from "pages/AboutPage"
import ErrorPage from "pages/ErrorPage"
import HomePage from "pages/HomePage"
import PleaseConfirmPage from "pages/PleaseConfirmPage"
import SelfTest from "pages/SelfTest"
import SignIn from "pages/SignIn"
import SignUp from "pages/SignUp"
import { Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <GlobalLoadingProvider>
      <ToastContainer position={"bottom-right"} />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} caseSensitive />
          <Route element={<PrivateRoute />}>
            <Route path='about' element={<AboutPage />} caseSensitive />
          </Route>
        </Route>
        <Route path='sign-in' element={<SignIn />} caseSensitive />
        <Route path='sign-up' element={<SignUp />} caseSensitive />
        <Route path='please-confirm' element={<PleaseConfirmPage />} caseSensitive />
        <Route path='test' element={<SelfTest />} caseSensitive />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </GlobalLoadingProvider>
  )
}

export default App
