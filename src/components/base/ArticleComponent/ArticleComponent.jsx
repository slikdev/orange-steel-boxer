import React from "react"
import styled from "styled-components"
import { up } from "styled-breakpoints"
import moment from "moment-timezone"

import RichText from "../RichText/RichText"

const ArticleComponent = ({ title, short, category, standout, image, body, date }) => {

    const time = moment(date)

    return(
        <Container>
            <Top>
                <Title>{title}</Title>
                <Short>{short}</Short>
            </Top>
            <Bottom>
                <Date>{time.format("Do MMMM YYYY")}</Date>
                <Category>{category}</Category>
                <Content>
                    <Left>
                        <Standout>{standout}</Standout>
                    </Left>
                    <Right>
                        <RichText json={body.json} />
                    </Right>
                </Content>
            </Bottom>
        </Container>
    )
}

export default ArticleComponent

const Container = styled.div`
    width:100%;
    max-width:1024px;
    margin-left:auto;
    margin-right:auto;
    padding-left:20px;
    padding-right:20px;

    ${up('xl')}{
        padding-left:0px;
        padding-right:0px;
    }
`

const Top = styled.div`
    border-bottom:1px solid black;
    padding-bottom:50px;
    margin-bottom:50px;
`

const Bottom = styled.div`
    
`
const Content = styled.div`
    padding-top:50px;
    padding-bottom:50px;
    display:flex;
    flex-direction:column;

    ${up('lg')}{
        flex-direction:row;
    }
`

const Left = styled.div`

    ${up('lg')}{
        width:30%;
        margin-right:60px;
    }
`

const Right = styled.div`
    width:100%;

    ${up('lg')}{
        width:70%;
    }
`

const Title = styled.h3`

    ${up('xs')}{
        font-size:30px;
    }

    ${up('md')}{
        font-size:40px;
    }

    ${up('lg')}{
        font-size:50px;
        margin-bottom:40px;
    }

`

const Short = styled.p`
    line-height:24px;
`

const Date = styled.p`
    font-weight:300;
    text-transform:uppercase;
    letter-spacing:4px;
    display:inline-block;

    ${up('lg')}{
        margin-right:70px;
    }
`

const Category = styled.p`
    font-weight:300;
    text-transform:uppercase;
    letter-spacing:4px;
    display:inline-block;
`

const Standout = styled.p`
    font-size:18px;
    font-weight:600;
    line-height:24px;
    margin-top:0px;
    margin-bottom:30px;
`