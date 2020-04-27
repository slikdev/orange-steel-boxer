import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import SliderComponent from "../base/SliderComponent/SliderComponent"

const ContentfulSliderComponent = ({ id, transition }) => {

    const data = useStaticQuery(
        graphql`
          query AllContentfulSliderComponent{
            allContentfulSliderComponent(limit:10){
              nodes{
                id
                slides{
                  title
                  description
                  color
                  link
                  ctaText
                  image{
                    file{
                      url
                    }
                  }
                }
              }
            }
          }
        `
    ).allContentfulSliderComponent.nodes.find(item => item.id === id)

    const { slides } = data
    
    return(
        <SliderComponent transition={transition} slides={slides} />
    )

}

export default ContentfulSliderComponent