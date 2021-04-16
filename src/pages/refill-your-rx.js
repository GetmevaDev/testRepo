import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import SectionHeader from "../components/common/Section-Header/SectionHeader"
import { FormRefillYourRX } from "../components/RefillYourRX/FormRefillYourRX/FormRefillYourRX"





const RefillYourRX = ({data}) => {

    const {Title, Pretitle, Image} = data.strapiRefillsPage.Section_Header

  return(
    <Layout marginSocialMedia={'34%'}>
      <SectionHeader
        classSection={'aboutDr services'}
        pretitle={Pretitle}
        title={Title}
        image={Image}
      />
        <FormRefillYourRX />
    </Layout>
  )
}


export default RefillYourRX
export const query = graphql`
    {
        strapiRefillsPage {
            Section_Header {
                Title
                Pretitle
                Image {
                    alternativeText
                    url
                }
            }
        }
    }
`