import React from "react"
import styled from "styled-components"
import { up } from "styled-breakpoints"

const EventListingComponent = ({ title, events }) => {

    return(
        <Container>
            <Title>{title}</Title>
            <Carousel>

            </Carousel>
        </Container>
    )
}

export default EventListingComponent

const Container = styled.div`

    width:100%;
    max-width:1280px;
    margin-left:auto;
    margin-right:auto;
    
    ${up('xs')} {
        text-align:center;
        margin-top:60px;
        margin-bottom:30px;
    }
    
    ${up('sm')} {

    }

    ${up('md')} {
        text-align:left;
        margin-top:65px;
        margin-bottom:35px;
    }
    ${up('lg')} {
        margin-top:80px;
        margin-bottom:40px;
    }
    ${up('xl')} {
        margin-top:160px;
        margin-bottom:80px;
    }

`

const Title = styled.h2`
    margin:0;
    padding:0;
`

const Carousel = styled.div`

`