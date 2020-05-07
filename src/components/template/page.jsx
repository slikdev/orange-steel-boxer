import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { up } from "styled-breakpoints"
import { graphql } from "gatsby"
import { TransitionPortal } from "gatsby-plugin-transition-link"

import PageAnimation from "../base/PageAnimation/PageAnimation"
import SEO from "../global/seo"
import Layout from "../global/layout"
import contentfulComponents from "../contentful/components"
import Footer from "../base/Footer/Footer"

import CircleSVG from "../../theme/img/circle.svg"
import TriangleSVG from "../../theme/img/triangle.svg"
import PauseSVG from "../../theme/img/pause.svg"

const Main = styled.main`
  position:relative;
  z-index:10;
`

const Components = styled.div`
  position:relative;
  z-index:11;
`

const Decorations = styled.div`
  display:none;
  overflow:hidden;
  position:absolute;
  top:0;
  width:100%;
  height:100%;

  ${up('xl')}{
    display:flex;
  }
`

const Circle = styled.img`
  display:none;
  position: absolute;
  top: 3340px;
  right: 50%;
  margin-right: 650px;
  z-index:1;
  transition: all .2s ease-out;

  ${up('xl')}{
    display:block;
  }
`
const Triangle = styled.img`
  display:none;
  position:absolute;
  top:2550px;
  left:50%;
  margin-left:600px;
  z-index:2;
  transition: all .2s ease-out;
  
  ${up('xl')}{
    display:block;
  }
`
const Pause = styled.div`
  display:none;
  position:absolute;
  top:1000px;
  right:50%;
  margin-right:680px;
  z-index:3;
  transition: all .2s ease-out;
  
  ${up('xl')}{
    display:block;
  }
`

const PauseInner = styled.img`
  transform:rotate(40deg);
`

class Page extends React.Component{

  constructor(props){
    super(props)
    this.state = { animate: false }

    this.transition = {
      exit: {
        length: 3,
        trigger: ({ exit }) => this.setState({ animate:true })
      },
      entry: {
        delay: .8,
      },
    }
  }

  createContentfulComponent(id, __typename, i) {
    return ( ContentfulComponent => <ContentfulComponent id={id} key={i} transition={this.transition} events={this.props.data.events.all} />)(contentfulComponents[__typename] )
  }

  componentDidMount(){
    const _this = this
    setTimeout(() => {
      let c = document.getElementById('components').offsetHeight
      let f = document.getElementById('footer').offsetHeight
      document.getElementById('decorations').style.height = `${(c + f + 300)}px`
      _this.shapes()
    }, 10)
    
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      if(window.innerWidth > 1280){
        _this.shapes()
        window.addEventListener('scroll', () => this.shapes())
      }
    }
  }

  componentWillUnmount(){
    // window.removeEventListener('scroll', () => this.shapes())
  }

  shapes(){
    document.getElementById("pause-graphic").style.transform = 'rotate(' + (((window.scrollY / window.innerHeight) * 360) / 10) + 'deg)'
    document.getElementById("triangle-graphic").style.transform = 'rotate(' + ((((window.scrollY / window.innerHeight) * 360) / 30) * -1) + 'deg)'
    document.getElementById("circle-graphic").style.transform = 'scale(' + (((window.scrollY / window.innerHeight) * 0.4)) + ')'
  }

  render(){
    const { contentfulPage, events } = this.props.data
    const { meta, components  } = contentfulPage

    return(
      <Layout>
          <SEO 
              title={meta.title} 
              description={meta.description} 
              image={ ( meta.image ? meta.image.file.url : null  )} 
          />
          <Main>
            <Components id="components">
            { components.map((component, i) => this.createContentfulComponent(component.id, component.__typename, i)) }
            </Components>
            <Footer />
            <Decorations id="decorations">
              <Pause id="pause-graphic">
                <PauseInner src={PauseSVG} />
              </Pause>
              <Triangle id="triangle-graphic" src={TriangleSVG} />
              <Circle id="circle-graphic" src={CircleSVG} />
            </Decorations>
          </Main>
          <TransitionPortal>
            <PageAnimation playing={this.state.animate} />
          </TransitionPortal>
      </Layout>
    )
  }


}

// const Page = ({ pageContext, data }) => {

//     const [ animate, setAnimate ] = useState(false)
//     const { contentfulPage, events } = data
//     const { meta, components  } = contentfulPage

//     const transition = {
//       exit: {
//         length: 3,
//         trigger: ({ exit }) => setAnimate(true)
//       },
//       entry: {
//         delay: .8,
//       },
//     }

//     useEffect(() => {
//       if (typeof window !== "undefined" && typeof document !== "undefined") {
//         if(window.innerWidth > 1280){
//           window.addEventListener('scroll', function(e) {
//             document.getElementById("pause-graphic").style.transform = 'rotate(' + (((window.scrollY / window.innerHeight) * 360) / 10) + 'deg)'
//             document.getElementById("triangle-graphic").style.transform = 'rotate(' + ((((window.scrollY / window.innerHeight) * 360) / 30) * -1) + 'deg)'
//             document.getElementById("circle-graphic").style.transform = 'scale(' + (((window.scrollY / window.innerHeight) * 0.4)) + ')'
//           })
//         }
//       }
//     })

//     function createContentfulComponent(id, __typename, i) {
//         return ( ContentfulComponent => <ContentfulComponent id={id} key={i} transition={transition} events={events.all} />)(contentfulComponents[__typename] )
//     }

//     return(
//         <Layout>
//             <SEO 
//                 title={meta.title} 
//                 description={meta.description} 
//                 image={ ( meta.image ? meta.image.file.url : null  )} 
//             />
//             <Main>
//               <Components>
//               { components.map((component, i) => createContentfulComponent(component.id, component.__typename, i)) }
//               </Components>
//               <Footer />
//               <Decorations>
//                 <Pause id="pause-graphic">
//                   <PauseInner src={PauseSVG} />
//                 </Pause>
//                 <Triangle id="triangle-graphic" src={TriangleSVG} />
//                 <Circle id="circle-graphic" src={CircleSVG} />
//               </Decorations>
//             </Main>
//             <TransitionPortal>
//               <PageAnimation playing={animate} />
//             </TransitionPortal>
//         </Layout>
//     )
// }

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
      ... on ContentfulInformationComponent{
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
      ... on ContentfulEventArticleComponent{
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
      ... on ContentfulMailchimpComponent{
        __typename
        id
      }
    }
  }
  events:allContentfulEvent(limit:100, filter:{visible:{eq:true}}){
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