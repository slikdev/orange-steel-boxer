import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import LineupComponent from "../base/LineupComponent/LineupComponent"

const ContentfulLineupComponent = ({ id, events }) => {

    const data = useStaticQuery(
        graphql`
          query AllContentfulLineupComponent{
            allContentfulLineupComponent{
              nodes{
                id
                title
              }
            }
          }
        `
    ).allContentfulLineupComponent.nodes.find(item => item.id === id)

    let clean = []
        
    events.forEach((event) => {
        clean.push(event.event)
    })

    return <LineupComponent title={data.title} events={clean} />
}

export default ContentfulLineupComponent