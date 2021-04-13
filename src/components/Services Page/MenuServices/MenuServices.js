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
          navMenu: strapiNavigationMenu {
              Menu_Items {
                  Page
                  Submenu{
                      Link_Page
                      Page
                  }
              }
          }
      }
  `);

  return(
    <div>
      <ul className={classes.menuContainer}>
        {
          data.navMenu.Menu_Items[1].Submenu.map(item =>(
            <li>
              <Link activeStyle={{
                background: '#F07F21',
                color: '#fff',
              }} to={item.Link_Page}>{item.Page}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}