import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import InstructionsComponent from "../base/InstructionsComponent/InstructionsComponent"

const ContentfulInstructionsComponent = ({ id, transition }) => {

    const data = useStaticQuery(
        graphql`
        query AllContentfulInstructionsComponent{
            allContentfulInstructionsComponent(limit:10){
              nodes{
                id
                title
                description
                step
                instructions
                image{
                  file{
                    url
                  }
                }
              }
            }
        }
        `
    ).allContentfulInstructionsComponent.nodes.find(item => item.id === id)

    const { title, description, step, instructions, image } = data

    return (
        <InstructionsComponent 
            title={title} 
            description={description} 
            step={step} 
            instructions={instructions} 
            image={image.file.url} 
        />
    )
}

export default ContentfulInstructionsComponent