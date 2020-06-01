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
                listURL
              }
            }
          }
        `
    ).allContentfulMailchimpComponent.nodes.find(item => item.id === id)

    return (
      <MailchimpForm 
        url={data.listURL} 
        title="Never miss an event" 
        description="Make sure you don’t miss your favourite events, sign up to our mailing list today" 
      />
    )
}

export default ContentfulMailchimpComponent