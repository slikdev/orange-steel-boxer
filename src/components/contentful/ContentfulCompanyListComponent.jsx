import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import CompanyListComponent from "../base/CompanyListComponent/CompanyListComponent"

const ContentfulCompanyListComponent = ({ id, transition }) => {
    
    const data = useStaticQuery(
        graphql`
         query AllContentfulCompanyListComponent{
            allContentfulCompanyListComponent(limit:10){
              nodes{
                id
                title
                align
                companies{
                  title
                  link
                  logo{
                    file{
                      url
                    }
                  }
                }
              }
            }
          }
        `
    ).allContentfulCompanyListComponent.nodes.find(item => item.id === id)

    return <CompanyListComponent title={data.title} align={data.align} companies={data.companies} />

}

export default ContentfulCompanyListComponent
