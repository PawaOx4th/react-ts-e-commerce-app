import { useState } from "react"
import reactLogo from "./assets/react.svg"
import { Routes, Route } from "react-router-dom"

function HomePage() {
  return (
    <div>
      <h1>This is a homepage!</h1>
    </div>
  )
}

function AboutPage() {
  return (
    <div>
      <h1>This is a AboutPage!</h1>
    </div>
  )
}

function ErrorPage() {
  return (
    <div>
      <h2>
        <i>404 Page not found</i>
      </h2>
    </div>
  )
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/*  http://localhost:5172/about */}
        <Route path="about" element={<AboutPage />} caseSensitive />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App
