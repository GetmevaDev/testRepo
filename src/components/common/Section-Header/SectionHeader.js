import React from "react"

import Slider from "react-slick";

import * as classes from "./sectionHeader.module.scss"


export default function SectionHeader({pretitle, title, specialization, text, linkReadMore, images, image, map, classSection}){



  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return(
    <section
      className={`${classes.sectionHeader} ${classSection} ${image && image.length !== 0 ? '' : classes.mb }`}>
      <div
        className={`container-big row ${classes.flexStyles} 
         ${image  ? classes.stylesWithoutImage : ''}`}>
        <div className={classes.blockText}>
          {
            pretitle ? <>
              <h4 className={classes.pretitle}>{pretitle}</h4>
            </> : null
          }
          {
            title ? <>
            <h2 className={classes.title}>{title}</h2>
            </> : null
          }
          {
            title ? <>
              <h3 className={classes.specialization}>{specialization}</h3>
            </> : null
          }

          {
            text ? <>
            <p className={classes.text}>{text}</p>
            </> : null
          }
          {
            linkReadMore ? <>
              <a className={classes.link} href={linkReadMore}>Read More</a>
            </> : null
          }
        </div>
        {
          images ? <div className={`${classes.blockImages } slider-styles`}>

            <Slider {...settings}>
              {
                images.map(img => (
                  <img src={img.url} alt={img.alternativeText} />
                ))
              }
            </Slider>


          </div> : null
        }
        {
          image && image.length !== 0 ? <div className={classes.blockPhoto}>
            <img src={image[0].url} alt={image[0].alternativeText} />

          </div> : null
        }
        {
          !images && !image ?  <iframe
            className={classes.map}
            src={map}
            width="600" height="450" style={{ border:0 }} allowFullScreen="" loading="lazy"
          /> : null
        }

      </div>
    </section>
  )
}