import React from "react"
import styled from "styled-components"
import { up } from "styled-breakpoints"
import TransitionLink from "gatsby-plugin-transition-link"
import { gsap } from "gsap"
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"

const Container = styled.div`
    width:100%;
    height:750px;
    position: relative;
    background-color:#ebebeb;

    ${up('xs')} {
        height:600px;
    }
    
    ${up('sm')} {
        height:728px;
    }
    
    ${up('md')} {
        height:728px;
    }

    ${up('lg')} {
        height:900px;
    }
`

const SliderComponent = ({ slides }) => {

    return (
        <Container>
            {/* <div>THE SLIDER</div>
            {slides.map((slide, i) => (<div key={i}>{slide.title}</div>))} */}
        </Container>
    )

}

export default SliderComponent