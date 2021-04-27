import React from "react"

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import * as classes from "./sectionHeader.module.scss"


export default function SectionHeader({pretitle, title, specialization, text, linkReadMore, images, image, map, classSection}){

  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

  return(
    <section
      className={`${classes.sectionHeader} ${classSection} ${image && image.length !== 0 ? '' : classes.mb }`}>
      <div
        className={`container-big row ${classes.flexStyles} 
         ${image  ? classes.stylesWithoutImage : ''}`}>
        <div className={`aboutPageFlex ${classes.blockText }`}>
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
          images ? <Swiper

            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}

            className={`block-images slider-styles`}>
              {
                images.map(img => (
                  <SwiperSlide>
                    <img src={img.url} alt={img.alternativeText} />
                  </SwiperSlide>
                ))
              }
              <button className={`swiper-button-next`} type={`button`}></button>
              <button className={`swiper-button-prev`} type={`button`}></button>
          </Swiper> : null
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