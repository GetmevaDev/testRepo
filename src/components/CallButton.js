import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import CallImage from "../images/call.svg"
import * as classes from "./callButtonStyle.module.scss"
export function CallButton(){
  const data = useStaticQuery(graphql`
      {
          strapiContacts {
              Phone
              Switch_Button_Call
          }
      }
  `)
  return(
    data.strapiContacts.Switch_Button_Call ?
    <div className={classes.callBlock}>
      <a href={`tel:${data.strapiContacts.Phone}`}>
        <img src={CallImage} alt="call" />
      </a>
    </div> : null
  )
}