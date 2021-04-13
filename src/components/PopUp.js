import React, {useState} from "react"
import useLocalStorage from "use-local-storage";

import ReactMarkdown from "react-markdown"
import {graphql, useStaticQuery} from "gatsby"
import { useCookies } from 'react-cookie';
import CloseWarning from "../images/CloseWarning.svg"
import * as  classes from "./popup.module.scss"



export function PopUp(){

  const [cleanPopUp, setCleanPopUp] = useLocalStorage("PopUpOff", "true");



  //  localStorage.setItem('PopUpOff', "true")
  //
  //  const session = localStorage.getItem('PopUpOff')
  //
  // const [handleCard, setHandleCard] = useState(session)
  //
  // const toggleLocalStorage = () => {
  //     localStorage.setItem('PopUpOff', "false")
  //     const session = localStorage.getItem('PopUpOff');
  //     setHandleCard(session)
  // }
  //
  // console.log(handleCard)

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
      opacity: (cleanPopUp&& Switch_PopUp)  ?  1 :  0,
      pointerEvents: cleanPopUp   && Switch_PopUp ? `auto` : `none`,
    }} className={classes.overlay}>
      <div style={{
        maxWidth: MaxWidthBlock ? `${MaxWidthBlock}px` : 439,
        transform: `scale(${cleanPopUp  ? 1 : 0})`,
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