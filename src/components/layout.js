import React from "react"
import "../styles/main.scss"
import Header from "./header/header.main"
import Navigation from "./header/header.nav"

const Layout = ({ children }) => (
  <>
    <main className="primary">
      <Header />
      <Navigation />
      {children}
    </main>
  </>
)

export default Layout
