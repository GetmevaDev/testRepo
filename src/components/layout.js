import * as React from "react"
import Head from "./Head"
import Header from "./header"
import "./layout.css"
import { Footer } from "./footer"
// import { PopUp } from "./PopUp"

const Layout = ({marginSocialMedia, children }) => {


  return (
    <>
      <Head />
      {/*<PopUp />*/}
      <Header marginSocialMedia={marginSocialMedia} />
        <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
