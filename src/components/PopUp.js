// import React, {useState} from "react"
// import ReactMarkdown from "react-markdown"
// import {graphql, useStaticQuery} from "gatsby"
// import { useCookies } from 'react-cookie';
// import CloseWarning from "../images/CloseWarning.svg"
// import * as  classes from "./popup.module.scss"
//
//
//
// export function PopUp(){
//   const [handleCard, getHandleCard] = useState('false')
//
//
//   const removeCard = () => {
//     getHandleCard('true');
//
//   }
//   localStorage.setItem('PopUpOff', handleCard.toString());
//   const session = localStorage.getItem('PopUpOff');
//   console.log(session)
//
//   const data = useStaticQuery(graphql`
//       {
//           strapiPopUpWarning {
//               Text
//               Name_Link
//               Link
//               Switch_PopUp
//               MaxWidthBlock
//           }
//       }
//   `)
//
//   const {Text, Name_Link, Link, Switch_PopUp, MaxWidthBlock} = data.strapiPopUpWarning;
//
//   return(
//     <div style={{
//       opacity: handleCard && Switch_PopUp && session === 'false' ? 1 : 0,
//       pointerEvents: handleCard && Switch_PopUp && session === 'false' ? `auto` : `none`,
//     }} className={classes.overlay}>
//       <div style={{
//         maxWidth: MaxWidthBlock ? `${MaxWidthBlock}px` : 439,
//         transform: `scale(${handleCard ? 1 : 0})`,
//         transition: '.5s'
//       }} className={classes.cardWarning}>
//         <button onClick={removeCard} className={classes.buttonClose} type={`button`}>
//           <img src={CloseWarning} alt="" />
//         </button>
//         <ReactMarkdown source={Text} />
//         <a className={classes.linkWarning} href={Link}>{Name_Link}</a>
//       </div>
//     </div>
//   )
// }