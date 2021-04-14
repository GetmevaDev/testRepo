import * as React from "react"
import Head from "./Head"
import Header from "./header"
import "./layout.css"
import { Footer } from "./footer"
import { PopUp } from "./PopUp"
import { CallButton } from "./CallButton"

const Layout = ({marginSocialMedia, children }) => {


    return (
      <>
        <Head />
        <PopUp />
        <CallButton />
        <Header marginSocialMedia={marginSocialMedia} />
        <main>{children}</main>
        <Footer />
      </>
    )
}

export default Layout
