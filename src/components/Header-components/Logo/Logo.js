import React from "react"
import {graphql, useStaticQuery, Link} from "gatsby"
import * as classes from "./logo.module.scss"


export function Logo(){

  const data = useStaticQuery(graphql`
      {
          strapiSiteLogo {
              Link_Logo
              Image {
                  url
                  alternativeText
              }
          }
      }
  `)

  return(
    <div className={classes.logo}>
      <Link to={data.strapiSiteLogo.Link_Logo}>
        <img
          src={data.strapiSiteLogo.Image[0].url}
          alt={data.strapiSiteLogo.Image[0].alternativeText}
        />
      </Link>

    </div>
  )
}