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
                  dateAndTime
                  identifier
                  short
                  eventbriteLink
                  eventbriteId
                  image{
                    file{
                      url
                    }
                  }
                  countries
                  article{
                    json
                  }
                  socialLinks
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
            dateAndTime={data.event.dateAndTime} 
            identifier={data.event.identifier} 
            short={data.event.short} 
            eventbriteLink={data.event.eventbriteLink} 
            eventbriteId={data.event.eventbriteId} 
            image={data.event.image.file.url} 
            countries={data.event.countries} 
            article={data.event.article} 
            socialLinks={data.event.socialLinks} 
        />
    )
}

export default ContentfulEventArticleComponent