import React from "react"
import styled from "styled-components"
import { up } from "styled-breakpoints"

import vars from "../theme/styles/vars"
import MailchimpForm from "../components/base/MailchimpForm/MailchimpForm"

import BackgroundIMG from "../theme/img/holding.jpg"
import LogoWhiteIMG from "../theme/img/logo-white.svg"
import FacebookIMG from "../theme/img/icons/Facebook.svg"
import VimeoIMG from "../theme/img/icons/Vimeo.svg"
import InstaIMG from "../theme/img/icons/Insta.svg"

const url = "https://live.us8.list-manage.com/subscribe/post?u=dde9688bae455e3685c1cad15&amp;id=7ca971e0b2"

const HoldingPage = () => (
    <Container>
        <Logo src={LogoWhiteIMG} />
        <Content>
            <Title>The best seat<br/>in the house</Title>
            <Description>Live music launching soon.</Description>
            <MailchimpForm 
                url={url} 
                mode="light" 
            />
            <Social>
                <Icon>
                    <a href="https://www.facebook.com/globalliveonline" target="_blank" rel="noopener noreferrer">
                        <img src={FacebookIMG} />
                    </a>
                </Icon>
                <Icon>
                    <a href="https://vimeo.com/globalliveonline" target="_blank" rel="noopener noreferrer">
                        <img src={VimeoIMG} />
                    </a>
                </Icon>
                <Icon>
                    <a href="https://www.instagram.com/globalliveonline" target="_blank" rel="noopener noreferrer">
                        <img src={InstaIMG} />
                    </a>
                </Icon>
            </Social>
        </Content>
    </Container>
)

export default HoldingPage

const Container = styled.div`
    background-color:${vars.ORANGE};
    background-image:url(${BackgroundIMG});
    background-size:cover;
    background-position:center center;
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
`

const Content = styled.div`
    text-align:center;
`

const Title = styled.h1`
    color:white;
    margin:0;

    ${up('xs')}{
        font-size:40px;
        line-height:40px;
        margin-bottom:20px;
    }
    
    ${up('sm')}{
        margin-bottom:20px;
    }
    
    ${up('md')}{
        font-size:70px;
        line-height:70px;
    }
    
    ${up('lg')}{
        margin-bottom:20px;
    }
    
    ${up('xl')}{
        font-size:100px;
        line-height:100px;
        margin-bottom:20px;
    }

`

const Description = styled.p`
    font-size:16px;
    color:white;
    margin:0;
    margin-bottom:20px;

    ${up('lg')}{
        font-size:18px;
    }

    ${up('xl')}{

    }
`

const Logo = styled.img`

    display:block;
    position:absolute;

    ${up('xs')}{
        width:180px;
        left:50%;
        margin-left:-90px;
        top:20px;
    }

    ${up('lg')}{
        width:252px;
        top:30px;
        left:50%;
        margin-left:-126px;
    }

`

const Social = styled.div`
    display:flex;
    flex-direction:row;
    max-width:280px;
    margin-left:auto;
    margin-right:auto;
`

const Icon = styled.div`
    flex:1;
    transition: opacity .25s ease-in-out;

    &:hover{
        opacity:0.4;
    }
`