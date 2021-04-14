import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import { Contacts } from "../../common/Contacts/Contacts"
import * as classes from "./sectionContacts.module.scss"


export function SectionContacts(){

  const data = useStaticQuery(graphql`
      {
          strapiHomePage {
              Section_Contacts {
                  Title
                  Pretitle
              }
          }
          mapContact: strapiContacts {
              Key_Map
          }
      }
  `)

  return(
    data.strapiHomePage.Section_Contacts ? <section className={classes.sectionContacts}>
      <div className={`container row ${classes.flexStyles}`}>
        <div className={classes.contact}>
          <h3 style={{textAlign: `left`}} className={`pretitileSection`}>{data.strapiHomePage.Section_Contacts.Pretitle}</h3>
          <h2 style={{textAlign: `left`, marginBottom: 34}} className={`titleSection`}>{data.strapiHomePage.Section_Contacts.Title}</h2>
          <Contacts />
        </div>
        <div className={classes.map}>
          <iframe
            src={data.mapContact.Key_Map}
            width="600" height="450" style={{ border:0, }} allowFullScreen="" loading="lazy"/>
        </div>
      </div>
    </section> : null
  )
}