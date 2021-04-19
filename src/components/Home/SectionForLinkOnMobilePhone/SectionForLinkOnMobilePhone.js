import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import Vector from "../../../images/Vector.svg"
import GooglePlay from "../../../images/google-play-badge2.svg"
import AppStore from "../../../images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
import * as classes from "./sectionForLinkOnMobilePhone.module.scss"


export  function SectionForLinkOnMobilePhone(){

  const data = useStaticQuery(graphql`
      {
          strapiHomePage {
              Section_Mobile_Phone {
                  Title
                  List {
                      List_item
                      id
                  }
                  Link_App_Store
                  Link_Google_Play
                  Image {
                      alternativeText
                      url
                  }
              }
          }
      }
  `);

  const {Title, List, Link_App_Store, Link_Google_Play, Image} = data.strapiHomePage.Section_Mobile_Phone;

  return(
    <section>
      <div className={`container row ${classes.flexStyles}`}>
        <div className="list-block">
           <h2 className={classes.title}>{Title}</h2>
          <ul className={classes.listContainer}>
            {
              List.map(item => (
                <li className={classes.list} key={item.id}>
                  <img src={Vector} alt="" />
                  {item.List_item}
                </li>
              ))
            }
          </ul>
          <a className={classes.linkApp} href={Link_Google_Play}>
            <img src={GooglePlay} alt="" />
          </a>
          <a className={classes.linkApp} href={Link_App_Store}>
            <img src={AppStore} alt="" />
          </a>
        </div>
        <div className={classes.imageBlock}>
          <img src={Image[0].url} alt={Image[0].alternativeText} />
        </div>
      </div>
    </section>
  )
}