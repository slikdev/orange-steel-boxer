import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import NavigationComponent from "../base/Navigation/NavigationComponent"

const ContentfulNavigationComponent = ({ id, transition }) => {
    
    const data = useStaticQuery(
        graphql`
          query AllContentfulNavigationComponent{
            allContentfulNavigationComponent(limit:10){
              nodes{
                id
                theme
                fixed
              }
            }
          }
        `
    ).allContentfulNavigationComponent.nodes.find(item => item.id === id)

    return <NavigationComponent 
              theme={data.theme} 
              fixed={data.fixed} 
              transition={transition} 
            />
}

export default ContentfulNavigationComponent