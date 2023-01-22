import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./style/index.css"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import theme from "style/theme"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
