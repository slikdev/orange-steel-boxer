import React, { useState } from "react"
import { graphql } from "gatsby"
import { TransitionPortal } from "gatsby-plugin-transition-link"

import PageAnimation from "../base/PageAnimation/PageAnimation"
import SEO from "../global/seo"
import Layout from "../global/layout"
import contentfulComponents from "../contentful/components"
import Footer from "../base/Footer/Footer"

const Page = ({ pageContext, data }) => {

    const [ animate, setAnimate ] = useState(false)
    const { contentfulPage, events } = data
    const { meta, components  } = contentfulPage

    console.log(pageContext)

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
        return ( ContentfulComponent => <ContentfulComponent id={id} key={i} transition={transition} events={events.all} />)(contentfulComponents[__typename] )
    }

    return(
        <Layout>
            <SEO 
                title={meta.title} 
                description={meta.description} 
                image={ ( meta.image ? meta.image.file.url : null  )} 
            />
            <main>
            { components.map((component, i) => createContentfulComponent(component.id, component.__typename, i)) }
            <Footer />
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
      ... on ContentfulLineupComponent{
        __typename
        id
      }
      ... on ContentfulFeaturedNewsComponent{
        __typename
        id
      }
      ... on ContentfulCompanyListComponent{
        __typename
        id
      }
      ... on ContentfulEventListingComponent{
        __typename
        id
      }
      ... on ContentfulInstructionsComponent{
        __typename
        id
      }
      ... on ContentfulSliderComponent{
        __typename
        id
      }
    }
  }
  events:allContentfulEvent(limit:100){
    all:edges{
      event:node{
        title
        slug
        eventbriteId
        eventbriteLink
        youtubeId
        category{
          title
        }
        dateTime
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