import React from "react"
import styled from "styled-components"
import { up } from "styled-breakpoints"
import moment from "moment-timezone"

import vars from "../../../theme/styles/vars"

const EventCard = ({ title, dateTime, image, slug, category }) => {

    const date = moment(dateTime)
    const tz = moment.tz.guess()

    const day = date.tz(tz).format('DD')
    const month = date.tz(tz).format('MMM')
    const time = date.tz(tz).format('h:mm a')

    return(
        <Container>
            <Text>
                <Category>{category}</Category>
                <Title>{title}</Title>
            </Text>
            <DateBox>
                <Time>{time}</Time>
                <Day>{day}</Day>
                <Month>{month}</Month>
            </DateBox>
            <ImageWrap>
                <Image background={`${image}?h=900`}  />
            </ImageWrap>
        </Container>
    )
}

export default EventCard

const Container = styled.div`
    width:100%;
    height:575px;

    ${up('md')}{
        padding-left:10px;
        padding-right:10px;
    }

    ${up('lg')}{
        padding-left:0px;
        padding-right:0px;
    }
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

const DateBox = styled.div`
    width:110px;
    height:110px;
    background-color:${vars.ORANGE};
    border-radius:12px;
    position:absolute;
    z-index:6;
    right:26px;
    bottom:212px;
    text-align:center;
    color:white;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    top:220px;

    ${up('lg')} {
        top:380px;
    }
`

const Time = styled.span`
    display:block;
    width:100%;
    padding:0;
    margin:0;
    font-size:12px;
`

const Day = styled.span`
    display:block;
    width:100%;
    padding:0;
    margin:0;
    font-size:40px;
    font-weight:600;
    margin-top:4px;
    margin-bottom:4px;
`

const Month = styled.span`
    display:block;
    width:100%;
    padding:0;
    margin:0;
    font-size:12px;
    text-transform:uppercase;
    font-weight:600;
`

const Text = styled.div`
    position:absolute;
    top:296px;
    text-align:left;

    ${up('lg')}{
        top:456px;
    }
`

const Category = styled.p`
    display: block;
    position:relative;
    text-transform:uppercase;
    color:${vars.ORANGE};
    letter-spacing:4px;
    font-size:12px;
    font-weight:600;
    margin-top:23px;
`

const Title = styled.h4`
    position:relative;
    display: block;
    position:relative;
    text-transform:uppercase;
    font-size:28px;
    font-weight:600;
    margin-top:23px;
`