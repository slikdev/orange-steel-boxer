import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import MailchimpForm from "../base/MailchimpForm/MailchimpForm"

const ContentfulMailchimpComponent = ({ id }) => {

    const data = useStaticQuery(
        graphql`
          query AllContentfulMailchimpComponent{
            allContentfulMailchimpComponent(limit:10){
              nodes{
                id
                title
                description
                listURL
              }
            }
          }
        `
    ).allContentfulMailchimpComponent.nodes.find(item => item.id === id)

    return (
      <MailchimpForm 
        url={data.listURL} 
        title={data.title} 
        description={data.description}
      />
    )
}

export default ContentfulMailchimpComponent