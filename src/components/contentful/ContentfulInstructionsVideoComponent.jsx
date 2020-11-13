import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import InstructionsVideoComponent from "../base/InstructionsVideoComponent/InstructionsVideoComponent"
 
const ContentfulInstructionsVideoComponent = ({ id, transition }) => {

    const data = useStaticQuery(
        graphql`
        query AllContentfulInstructionsVideoComponent{
            allContentfulInstructionsVideoComponent(limit:10){
              nodes{
                id
                video{
                  file{
                    url
                  }
                }
              }
            }
        }
        `
    ).allContentfulInstructionsVideoComponent.nodes.find(item => item.id === id)

    const { video } = data

    return (<InstructionsVideoComponent video={video} />)
}

export default ContentfulInstructionsVideoComponent