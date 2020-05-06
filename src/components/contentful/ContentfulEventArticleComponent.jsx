import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import EventArticleComponent from "../base/EventArticleComponent/EventArticleComponent"

const ContentfulEventArticleComponent = ({ id, transition }) => {

    const data = useStaticQuery(
        graphql`
        query AllContentfulEventArticleComponent{
            allContentfulEventArticleComponent{
              nodes{
                id
                updatedAt
                event{
                  title
                  slug
                  dateTime
                  short
                  eventbriteLink
                  image{
                    file{
                      url
                    }
                  }
                  countries
                  article{
                    json
                  }
                }
              }
            }
          }
        `
    ).allContentfulEventArticleComponent.nodes.find(item => item.id === id)
    
    return (
        <EventArticleComponent 
            title={data.event.title} 
            slug={data.event.slug} 
            dateTime={data.event.dateTime} 
            short={data.event.short} 
            eventbriteLink={data.event.eventbriteLink} 
            image={data.event.image.file.url} 
            countries={data.event.countries} 
            article={data.event.article} 
        />
    )
}

export default ContentfulEventArticleComponent