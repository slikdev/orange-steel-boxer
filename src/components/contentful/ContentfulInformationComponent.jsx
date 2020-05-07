import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import InformationComponent from "../base/InformationComponent/InformationComponent"

const ContentfulInformationComponent = ({ id }) => {

    const data = useStaticQuery(
        graphql`
          query AllContentfulInformationComponent{
            allContentfulInformationComponent{
              nodes{
                id
                updatedAt
                title
                slug
                article{
                  json
                }
              }
            }
          }
        `
    ).allContentfulInformationComponent.nodes.find(item => item.id === id)

    return <InformationComponent title={data.title} slug={data.slug} article={data.article} />
}

export default ContentfulInformationComponent