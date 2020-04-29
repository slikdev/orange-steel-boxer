import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import FeaturedNewsComponent from "../base/FeaturedNewsComponent/FeaturedNewsComponent"

const ContentfulFeaturedNewsComponent = ({ id, transition }) => {

    const data = useStaticQuery(
        graphql`
          query AllContentfulFeaturedNewsComponent{
            allContentfulFeaturedNewsComponent(limit:10){
              nodes{
                id
                title
                news{
                  updatedAt
                  slug
                  title
                  category{
                    title
                  }
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
    ).allContentfulFeaturedNewsComponent.nodes.find(item => item.id === id)

    return (
        <FeaturedNewsComponent 
            title={data.title} 
            news={data.news} 
        />
    )
}

export default ContentfulFeaturedNewsComponent