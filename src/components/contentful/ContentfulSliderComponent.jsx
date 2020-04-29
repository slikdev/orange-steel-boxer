import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { up } from "styled-breakpoints"
import { Preload } from "react-preload"

import SliderComponent from "../base/SliderComponent/SliderComponent"

const ContentfulSliderComponent = ({ id, transition }) => {

    const data = useStaticQuery(
        graphql`
          query AllContentfulSliderComponent{
            allContentfulSliderComponent(limit:10){
              nodes{
                id
                slides{
                  title
                  description
                  color
                  link
                  ctaText
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
    ).allContentfulSliderComponent.nodes.find(item => item.id === id)

    const { slides } = data

    const loadingIndicator = (<div>Loading...</div>)
    let images = []

    slides.forEach((slide) => {
      images.push(slide.image.file.url)
    })
    

    return(
      <Container>
        <Preload
          loadingIndicator={
            (
              <LoadingIndicator>
                <svg width={38} height={38} viewBox="0 0 38 38" stroke="#E83F32">
                  <g
                    transform="translate(1 1)"
                    strokeWidth={2}
                    fill="none"
                    fillRule="evenodd"
                  >
                    <circle strokeOpacity={0.5} cx={18} cy={18} r={18} />
                    <path d="M36 18c0-9.94-8.06-18-18-18">
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 18 18"
                        to="360 18 18"
                        dur="1s"
                        repeatCount="indefinite"
                      />
                    </path>
                  </g>
                </svg>
              </LoadingIndicator>
            )
          }
          images={images}
          autoResolveDelay={3000}
          onError={() => console.log('image load error')}
          onSuccess={() => console.log('image load success')}
          resolveOnError={true}
          mountChildren={true}
        >
          <SliderComponent transition={transition} slides={slides} />
        </Preload>
      </Container>
    )

}

export default ContentfulSliderComponent


const Container = styled.div`
    width:100%;
    height:750px;
    position: relative;
    background-color:#ebebeb;
    display:flex;

    ${up('xs')} {
        height:550px;
        margin-bottom:30px;
    }
    
    ${up('sm')} {
        height:728px;
    }
    
    ${up('md')} {
        height:728px;
        margin-bottom:35px;
    }

    ${up('lg')} {
        height:580px;
        margin-bottom:40px;
    }
    
    ${up('xl')} {
        height:900px;
        margin-bottom:80px;
    }
`

const LoadingIndicator = styled.div`
  position:absolute;
  top:50%;
  left:50%;
  margin-top:-19px;
  margin-left:-19px;
`