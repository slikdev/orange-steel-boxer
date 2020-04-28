import React, { useState } from "react"
import { graphql } from "gatsby"
import { TransitionPortal } from "gatsby-plugin-transition-link"

import PageAnimation from "../base/PageAnimation/PageAnimation"
import SEO from "../global/seo"
import Layout from "../global/layout"
import contentfulComponents from "../contentful/components"

const Page = ({ pageContext, data }) => {

    const [ animate, setAnimate ] = useState(false)
    const { contentfulPage } = data
    const { meta, components } = contentfulPage

    const transition = {
      exit: {
        length: 3,
        trigger: ({ exit }) => setAnimate(true)
      },
      entry: {
        delay: .8,
      },
    }

    function createContentfulComponent(id, __typename, i) {
        return ( ContentfulComponent => <ContentfulComponent id={id} key={i} transition={transition} />)(contentfulComponents[__typename] )
    }

    return(
        <Layout>
            <SEO 
                title={meta.title} 
                description={meta.description} 
                image={meta.image.file.url} 
            />
            <main>
            { components.map((component, i) => createContentfulComponent(component.id, component.__typename, i)) }
            </main>
            <TransitionPortal>
              <PageAnimation playing={animate} />
            </TransitionPortal>
        </Layout>
    )
}

export default Page 

export const pageQuery = graphql`
query PageQuery($contentful_id:String!){
	contentfulPage(contentful_id:{eq:$contentful_id}) {
    name
    slug
    prefix
    meta{
      title
      description
      image{
        file{
          url
        }
      }
    }
    components{
      ... on ContentfulNavigationComponent{
        __typename
        id
      }
      ... on ContentfulArticleComponent{
        __typename
        id
      }
      ... on ContentfulEventListingComponent{
        __typename
        id
      }
      ... on ContentfulSliderComponent{
        __typename
        id
      }
    }
  }
}
`