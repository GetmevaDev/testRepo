import React from "react"
import Helmet from "react-helmet"


export default function Head(){
  return(
    <Helmet>
      <meta property="og:title" content="Long Island City Pharmacy - Healthy Living Pharmacy LIC: 11101" />
      <meta property="og:description" content="Our Long Island City Pharmacy is the neighborhood healer with decades of experience. We merged homeopathic, holistic medicine with traditional pharmaceuticals." />
      <meta property="twitter:title" content="Long Island City Pharmacy - Healthy Living Pharmacy LIC: 11101" />
      <meta property="twitter:description" content="Our Long Island City Pharmacy is the neighborhood healer with decades of experience. We merged homeopathic, holistic medicine with traditional pharmaceuticals." />


      <link rel="preconnect"
            href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
              rel="stylesheet" />
      <link rel="stylesheet" type="text/css" charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

    </Helmet>
  )
}