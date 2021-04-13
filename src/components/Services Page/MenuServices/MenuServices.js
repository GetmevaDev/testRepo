import React from "react"
import {graphql, useStaticQuery, Link} from "gatsby"
import * as classes from "./menuServices.module.scss"



export function MenuServices(){

  const data = useStaticQuery(graphql`
      {
          allStrapiServices {
              nodes {
                  Title
                  slug
              }
          }
          navMenu: strapiNavMneuForServices {
              Services_Menu {
                  Name_Services
                  id
                  Link_Services
              }
          }
      }
  `);

  return(
    <div>
      <ul className={classes.menuContainer}>
        {
          data.navMenu.Services_Menu.map(item =>(
            <li key={item.id}>
              <Link activeStyle={{
                background: '#F07F21',
                color: '#fff',
              }} to={item.Link_Services}>{item.Name_Services}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}