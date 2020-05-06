import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import EventListingComponent from "../base/EventListingComponent/EventListingComponent"

const ContentfulEventListingComponent = ({ id, transition }) => {
    
    const data = useStaticQuery(
        graphql`
          query AllContentfulEventListingComponent{
            allContentfulEventListingComponent(limit:100){
              nodes{
                id
                title
                events{
                  title
                  slug
                  visible
                  eventbriteLink
                  dateTime
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
    ).allContentfulEventListingComponent.nodes.find(item => item.id === id) 

    const events = []

    data.events.forEach((event) => {
      if(event.visible)
        events.push(event)
    })

    return (
      <React.Fragment>
        <EventListingComponent hash={id} title={data.title} events={events}  />
      </React.Fragment>
    )
}

export default ContentfulEventListingComponent