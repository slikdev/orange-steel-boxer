import React, { useState } from "react"
import { graphql } from "gatsby"

const StreamPage = ({ pageContext, data }) => {

    console.log(pageContext)
    console.log(data)
    const { title, dateTime, id } = data.contentfulEvent

    return (
        <div>This is the stream {title}</div>
    )

}

export default StreamPage

export const streamQuery = graphql`
query StreamQuery($slug:String!){
    contentfulEvent(slug:{eq:$slug}){
      title
      id
      eventbriteId
      title
      dateTime
      youtubeId
      image{
        file{
          url
        }
      }
    }
}
`