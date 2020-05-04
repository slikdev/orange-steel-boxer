import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import EventListingComponent from "../base/EventListingComponent/EventListingComponent"

const ContentfulEventListingComponent = ({ id, transition }) => {
    
    const data = useStaticQuery(
        graphql`
          query AllContentfulEventListingComponent{
            allContentfulEventListingComponent(limit:10){
              nodes{
                id
                title
                events{
                  title
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

    return (
      <React.Fragment>
        <EventListingComponent hash={id} title={data.title} events={data.events}  />
      </React.Fragment>
    )
}

export default ContentfulEventListingComponent