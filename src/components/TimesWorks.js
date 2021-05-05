import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import * as classes from "./timeWorks.module.scss"

const TimesWorks = () => {

  const data = useStaticQuery(graphql`
      {
          strapiHomePage {
              TimeWorks {
                  Switch_warning
                  Text
                  id
              }
          }
      }
  `)


  return(
    data.strapiHomePage.TimeWorks.Switch_warning ?  <section className={classes.sectionTime}>
      <p>{data.strapiHomePage.TimeWorks.Text}</p>
    </section> : null
  )
}


export default TimesWorks