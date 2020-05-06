import React from "react"
import styled from "styled-components"
import { up } from "styled-breakpoints"
import moment from "moment-timezone"

import RichText from "../RichText/RichText"
import vars from "../../../theme/styles/vars"
import Countdown from "../Countdown/Countdown"
import Button from "../Button/Button"

import LineSVG from "../../../theme/img/line.svg"

const EventArticleComponent = ({ title, slug, dateTime, short, eventbriteLink, image, countries, article }) => {

    const tz = moment.tz.guess()
    const date = moment.tz(dateTime, tz).format('MMMM Do YYYY, h:mm a z')

    return(
        <Container>
            <Top>
                <Left>
                    <Image url={`${image}?w=1000`} />
                </Left>
                <Right>
                    <Content>
                        <Title>{title}</Title>
                        <Line src={LineSVG} />
                        <Text>
                            <Short>{short}</Short>
                            <Countdown date={dateTime} />
                            <Date>{date}</Date>
                            <Countries>
                                <p>Available in:</p>
                                { countries.map((country, index) => (<span key={index}>{country}, </span>) )}
                            </Countries>
                            <ButtonWrap>
                                <a href={eventbriteLink} target="_blank" rel="noopener noreferrer">
                                    <Button type="blue" text={"BUY TICKET"} icon="Eye" onClick={() => null} />
                                </a>
                            </ButtonWrap>
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
        height:640px;
    }

    ${up('sm')}{
        height:728px;
    }

    ${up('md')}{
        height:728px;
    }

    ${up('lg')}{
        flex-direction:row;
        height:640px;
    }

    ${up('xl')}{
        height:900px;
    }
`
const Left = styled.div`
    background-color:black;
    width:100%;

    ${up('xs')}{
        text-align:center;
        height:30%;
    }

    ${up('sm')}{
        height:40%;
    }
    
    ${up('md')}{
        height:50%;
    }
    
    ${up('lg')}{
        height:100%;
    }
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
    
    position:relative;

    ${up('xs')}{
        text-align:center;
        height:70%;
    }

    ${up('sm')}{
        height:60%;
    }
    
    ${up('md')}{
        height:50%;
    }
    
    ${up('lg')}{
        text-align:left;
        height:100%;
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
        font-size:40px;
        width:80%;
        margin-top:-24px;
    }

    ${up('md')}{
        font-size:50px;
        width:80%;
    }

    ${up('lg')}{
        position:absolute;
        font-size:60px;
        top:120px;
        left:-50px;
        width:100%;
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
const Line = styled.img`
    position:absolute;

    ${up('xs')}{
        display:none;
    }
    
    ${up('lg')}{
        display:block;
        top: 0px;
        left: -42px;
        width: 1490px;
    }
    
    ${up('xl')}{
        top: 164px;
        left: -42px;
        width: 1860px;
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
        top:260px;
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

    ${up('xs')}{
        padding-top:40px;
    }
    
    ${up('md')}{
        padding-top:80px;
    }

    ${up('xl')}{
        padding-left:0px;
        padding-right:0px;
    }
`

const Countries = styled.div`
    font-size:12px;
    line-height:18px;
    color:white;

    p{
        margin-bottom:0px;
    }

    span{
        font-weight:600;
    }
`

const ButtonWrap = styled.div`
    margin-top:20px;
`

export default EventArticleComponent