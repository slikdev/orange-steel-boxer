import React from "react"
import styled from "styled-components"
import { up } from "styled-breakpoints"

const EventCard = ({ title, dateTime, image, slug, category }) => (
    <Container>
        <ImageWrap>
            <Image background={`${image}?h=900`}  />
        </ImageWrap>
    </Container>
)

export default EventCard

const Container = styled.div`
    width:100%;
`

const ImageWrap = styled.div`
    border-radius:12px;
    overflow:hidden;
`

const Image = styled.div`
    width:100%;
    min-height:300px;
    background-color:#F4F4F4;
    
    ${props => props.background ? `background-image:url(${props.background});` : ''}
    background-size:cover;
    background-position:center center;
    background-repeat:no-repeat;
    transition: all .2s ease-in-out;
    

    ${up('lg')}{
        height:450px;
        background-size:auto 100%;
    }

    &:hover{
        transform: scale(1.1);
    }
`