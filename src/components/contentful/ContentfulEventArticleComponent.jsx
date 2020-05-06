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
                  eventbriteId
                  eventbriteLink
                  category{
                    title
                  }
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
            eventbriteId={data.event.eventbriteId} 
            eventbriteLink={data.event.eventbriteLink} 
            category={data.event.category.title} 
            image={data.event.image.file.url} 
            countries={data.event.countries} 
            article={data.event.article} 
        />
    )
}

export default ContentfulEventArticleComponent