import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import ArticleComponent from "../base/ArticleComponent/ArticleComponent"

const ContentfulArticleComponent = ({ id, transition }) => {

    const data = useStaticQuery(
        graphql`
          query AllContentfulArticleComponent{
            allContentfulArticleComponent{
              nodes{
                id
                updatedAt
                title
                short
                category{
                  title
                }
                standout
                image{
                  file{
                    url
                  }
                }
                body{
                  json
                }
              }
            }
          }
        `
    ).allContentfulArticleComponent.nodes.find(item => item.id === id)

    return (
        <ArticleComponent 
            title={data.title} 
            short={data.short} 
            category={data.category.title}
            standout={data.standout}
            image={data.image.file.url}
            body={data.body}
            date={data.updatedAt}
        />
    )
}

export default ContentfulArticleComponent