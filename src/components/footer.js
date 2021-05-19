import React from "react"
import { Pages } from "./Footer/Pages/Pages"
// import { Services } from "./Footer/Services/Services"
import { StoreHours } from "./Footer/StoreHours/StoreHours"
import { PaymentMethods } from "./Footer/PaymentMethods/PaymentMethods"
import { Logo } from "./Header-components/Logo/Logo"
import { SocialMedia } from "./Header-components/Social-Media/SocialMedia"
import { LastText } from "./Footer/LastText/LastText"
import LogoM from "../images/111.svg"
import * as classes from "./footerStyles.module.scss"

export function Footer(){
  return(
    <footer className={classes.siteFooter}>
      <div className={`container row ${classes.flexStyles}`}>
        <Pages />
        {/*<Services />*/}
        <StoreHours />
        <PaymentMethods />
      </div>
      <div className={`container row ${classes.lastBlock}`}>
        <Logo />
        <LastText />
        <SocialMedia className={classes.footerIcon} />
        <div className={`row manufacturer`}>
          <div className={`row adaptive-m`} style={{
            alignItems: `center`,
            marginLeft: 55,
            marginTop: 23,
          }}>
            <img src={LogoM} alt="" />
            <p>Web Design & Digital Marketing <br/>
              by <a href="https://robertgerov.com">Robert Gerov Media</a></p>
          </div>
        </div>
      </div>
    </footer>
  )
}