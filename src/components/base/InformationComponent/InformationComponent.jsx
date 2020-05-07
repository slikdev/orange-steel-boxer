import React from "react"
import styled from "styled-components"
import { up } from "styled-breakpoints"

import RichText from "../RichText/RichText"

const InformationComponent = ({ title, slug, article }) => {

    return (
        <Container>
            <Title>{title}</Title>
            <Article>
                <RichText json={article.json} />
            </Article>
        </Container>
    )
}

export default InformationComponent

const Container = styled.div`
    width:100%;
    max-width:1024px;
    margin-left:auto;
    margin-right:auto;
    padding-left:20px;
    padding-right:20px;
    text-align:center;

    ${up('xl')}{
        padding-left:0px;
        padding-right:0px;
        margin-bottom:80px;
    }
`

const Title = styled.h3`

    ${up('xs')}{
        font-size:40px;
        margin-bottom:40px;
        padding-bottom:40px;
    }

    ${up('md')}{
        font-size:50px;
        margin-bottom:50px;
        padding-bottom:50px;
    }

    ${up('lg')}{
        font-size:70px;
        margin-bottom:70px;
        padding-bottom:70px;
    }
    
    ${up('xl')}{
        font-size:100px;
        margin-bottom:100px;
        padding-bottom:100px;
    }

    border-bottom:1px solid black;

`

const Article = styled.div`
    text-align:left;
`