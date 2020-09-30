import React from "react"
import styled from "styled-components"
import { up } from "styled-breakpoints"
import { graphql, navigate, withPrefix } from "gatsby"
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
  position:fixed;
  top:0;
  width:100%;
  height:100%;
  pointer-events:none;
  opacity:0;

  ${up('xl')}{
    display:flex;
  }
`

const Circle = styled.img`
  display:none;
  position: absolute;
  top: 850px;
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
  top:300px;
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
  /* top:1000px; */
  top:-250px;
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

    if(process.env.GATSBY_MAINTENANCE === 'true'){
      if (typeof window !== "undefined") {
        const url = withPrefix(`/holding`)
        navigate(url)
      }
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

      document.getElementById("decorations").style.opacity = 0
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

    let c = document.getElementById('components').offsetHeight
    let f = document.getElementById('footer').offsetHeight
    let h = c + f
    let p = ((window.scrollY / h) * 100)

    if(h > 2)
      document.getElementById("decorations").style.opacity = 1

    document.getElementById("pause-graphic").style.transform = 'rotate(' + (((window.scrollY / window.innerHeight) * 360) / 10) + 'deg)'
    document.getElementById("pause-graphic").style.top = `${((p / 2) * 2)}px`

    
    document.getElementById("triangle-graphic").style.transform = 'rotate(' + ((((window.scrollY / window.innerHeight) * 360) / 30) * -1) + 'deg)'
    document.getElementById("triangle-graphic").style.top = `${(p * 10)}px`

    document.getElementById("circle-graphic").style.transform = 'scale(' + (((window.scrollY / window.innerHeight) * 0.4)) + ')'

  }

  render(){
    const { contentfulPage } = this.props.data
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
        identifier
        eventbriteId
        eventbriteLink
        videoType
    	  videoId
        category{
          title
        }
        dateAndTime
        timestamp
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