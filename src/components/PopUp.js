import React, {useState} from "react"
import useLocalStorage from "use-local-storage";
import ReactMarkdown from "react-markdown"
import {graphql, useStaticQuery} from "gatsby"
import CloseWarning from "../images/CloseWarning.svg"
import * as  classes from "./popup.module.scss"



export function PopUp(){

  const [cleanPopUp, setCleanPopUp] = useLocalStorage("PopUpOff", true);



  const removeCard = () => {
    setCleanPopUp(false)
  }

  console.log(cleanPopUp);


  const data = useStaticQuery(graphql`
      {
          strapiPopUpWarning {
              Text
              Name_Link
              Link
              Switch_PopUp
              MaxWidthBlock
          }
      }
  `)

  const {Text, Name_Link, Link, Switch_PopUp, MaxWidthBlock} = data.strapiPopUpWarning;

  return(
    <div style={{
      opacity: (cleanPopUp && Switch_PopUp)  ?  1 : (cleanPopUp === false || Switch_PopUp === false) ? 0 : null,
      pointerEvents: (cleanPopUp && Switch_PopUp) ? `auto` : (cleanPopUp === false || Switch_PopUp === false) ? `none` : null,
    }} className={classes.overlay}>
      <div style={{
        maxWidth: MaxWidthBlock ? `${MaxWidthBlock}px` : 439,
        transform: `scale(${cleanPopUp  ? 1 : (cleanPopUp === false || Switch_PopUp === false) ? 0 : null})`,
        transition: '.5s'
      }} className={classes.cardWarning}>
        <button onClick={removeCard} className={classes.buttonClose} type={`button`}>
          <img src={CloseWarning} alt="" />
        </button>
        <ReactMarkdown source={Text} />
        <a className={classes.linkWarning} href={Link}>{Name_Link}</a>
      </div>
    </div>
  )
}