import React from "react"
import styled from "styled-components"
import { up } from "styled-breakpoints"
import moment from "moment-timezone"

import RichText from "../RichText/RichText"
import vars from "../../../theme/styles/vars"
import Countdown from "../Countdown/Countdown"

const EventArticleComponent = ({ title, slug, dateTime, short, eventbriteId, eventbriteLink, category, image, countries, article }) => {

    const tz = moment.tz.guess()
    const date = moment.tz(dateTime, tz).format('MMMM Do YYYY, h:mm:ss a z')

    return(
        <Container>
            <Top>
                <Left>
                    <Image url={`${image}?w=1000`} />
                </Left>
                <Right>
                    <Content>
                        <Title>{title}</Title>
                        <Text>
                            <Short>{short}</Short>
                            <Countdown date={dateTime} />
                            <Date>{date}</Date>
                        </Text>
                    </Content>
                </Right>
            </Top>
            <Article>
                <RichText json={article.json} />
            </Article>
        </Container>
    )

}

const Container = styled.div``

const Top = styled.div`
    display:flex;
    width:100%; 
    flex-direction:column;

    ${up('xs')}{
        height:550px;
    }

    ${up('sm')}{
        height:728px;
    }

    ${up('md')}{
        height:728px;
    }

    ${up('lg')}{
        flex-direction:row;
        height:580px;
    }

    ${up('xl')}{
        height:900px;
    }
`
const Left = styled.div`
    background-color:black;
    width:100%;
    height:100%;
`

const Image = styled.div`
    width:100%;
    height:100%;
    ${props => props.url ? `background-image:url(${props.url});` : ''}
    background-size:cover;
    background-position:center center;
    opacity:.8;
`

const Right = styled.div`
    background-color:${vars.ORANGE};
    width:100%;
    height:100%;
    position:relative;

    ${up('xs')}{
        text-align:center;
    }
    
    ${up('lg')}{
        text-align:left;
    }
`

const Content = styled.div`

    display:block;
    position: relative;
    text-align:center;

    ${up('xs')}{
        width:100%;
        height:100%;
    }
    
    ${up('lg')}{
        width:100%;
        text-align:left;
    }
    
    ${up('xl')}{
        width:640px;
    }
`

const Title = styled.h1`
    margin:0;
    padding:0;
    color:white;

    ${up('xs')}{
        font-size:40px;
        line-height:40px;
        position:relative;
        width:90%;
        margin-left:auto;
        margin-right:auto;
        margin-top:-24px;
    }

    ${up('sm')}{
        font-size:50px;
        width:80%;
        margin-top:-24px;
    }

    ${up('md')}{
        font-size:50px;
        width:80%;
    }

    ${up('lg')}{
        position:absolute;
        font-size:70px;
        top:120px;
        left:-50px;
        width:90%;
        line-height:70px;
        margin-top:0px;
    }

    ${up('xl')}{
        font-size:100px;
        top:190px;
        left:-50px;
        width:60%;
        line-height:100px;
    }
`

const Text = styled.div`

    ${up('xs')}{
        position:relative;
        padding-top:10px;
        width:90%;
        margin-left:auto;
        margin-right:auto;
    }
    
    ${up('sm')}{
        padding-top:20px;
    }
    
    ${up('lg')}{
        position:absolute;
        padding-top:0px;
        margin-left:0;
        width:75%;
        left:60px;
        top:280px;
    }

    ${up('xl')}{
        left:100px;
        top:480px;
    }
`

const Short = styled.p`
    margin:0;
    padding:0;
    color:white;

    ${up('xs')}{
        font-size:14px;
        line-height:18px;
    }
`

const CountdownWrap = styled.div`
    text-align:center;

`

const Date = styled.span`
    color:white;
    display:block;
    margin-top:20px;
    margin-bottom:20px;
    font-size:12px;
    text-transform:uppercase;
    font-weight:600;
`

const Article = styled.div`
    width:100%;
    max-width:1024px;
    margin-left:auto;
    margin-right:auto;
    padding-left:20px;
    padding-right:20px;
    padding-top:80px;
    padding-bottom:80px;

    ${up('xl')}{
        padding-left:0px;
        padding-right:0px;
        padding-top:120px;
        padding-bottom:120px;
    }
`

export default EventArticleComponent