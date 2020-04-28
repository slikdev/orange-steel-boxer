import React from "react"
import styled from "styled-components"
import { up } from "styled-breakpoints"
import TransitionLink from "gatsby-plugin-transition-link"

import Button from "../Button/Button"

import LogoWhiteIMG from "./icons/logo-white.svg"
import LogoDarkIMG from "./icons/logo-dark.svg"
import FacebookIMG from "./icons/Facebook.svg"
import YoutubeIMG from "./icons/Youtube.svg"
import InstaIMG from "./icons/Insta.svg"
import FacebookDarkIMG from "./icons/Facebook_black.svg"
import YoutubeDarkIMG from "./icons/Youtube_black.svg"
import InstaDarkIMG from "./icons/Insta_black.svg"

const Nav = styled.div`
    max-width:1280px;
    width:calc(100% - 20px);
    display:flex;
    flex-direction:row;
    z-index:1000;
    margin-left:auto;
    margin-right:auto;
    left:0;
    right:0;
    ${props => props.fixed === true ? "position: absolute;" : "position: relative;"}
    padding-top:15px;
    padding-bottom:15px;
    padding-left:10px;
    padding-right:10px;

    ${up('md')} {
        width:calc(100% - 80px);
        padding-left:40px;
        padding-right:40px;
        padding-top:46px;
        padding-bottom:46px;
    }
    
    ${up('lg')} {
        width:calc(100% - 40px);
        padding-left:0px;
        padding-right:0px;
        padding-top:46px;
        padding-bottom:46px;
    }
    
    ${up('xl')} {
        width:1280px;
        padding-left:0px;
        padding-right:0px;
        padding-top:46px;
        padding-bottom:46px;
    }
`

const Events = styled.div`
    display:flex;
    width:100%;
    justify-content:flex-end;
    padding-left:14px;
    text-align:right;

    ${up('xs')} {
        display:none;
    }
    
    ${up('sm')} {
        display:block;
    }

`

const Logo = styled.div`
    display:flex;
    width:100%;
    text-align:center;

    a{
        margin-left:auto;
        margin-right:auto;
        display:flex;
    }
`
    
 const SocialIcons = styled.div`
    display:none;
    width:100%;

    ${up('md')} {
        display:flex;
        justify-content:left;
        align-items:center;
    }
`

const Social = styled.div`
    margin-right:42px;
    text-align:left;
    transition: opacity .25s ease-in-out;

    &:hover{
        opacity:0.4;
    }
`

const LogoLight = styled.img`
    width:180px;

    ${up('xs')} {
        margin-left:auto;
        margin-right:auto;
    }
    
    ${up('sm')} {
        margin-left:auto;
        margin-right:auto;
    }

    ${up('md')} {
        width:100%;
        max-width:300px;
        margin-left:auto;
        margin-right:auto;
    }
`

const SMButton = styled.div`
    ${up('xs')} {
        display:none;
    }
    ${up('sm')} {
        display:block;
    }
    ${up('md')} {
        display:block;
    }
    ${up('lg')} {
        display:none;
    }
`

const LGButton = styled.div`
    display:none;
    ${up('lg')} {
        display:block;
    }
`

const NavigationComponent = ({ theme, fixed, transition }) => (
    <Nav fixed={fixed}>
        <SocialIcons>
            <Social>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src={theme === 'light' ? FacebookIMG : FacebookDarkIMG} alt="facebook" />
                </a>
            </Social>
            <Social>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    <img src={theme === 'light' ? YoutubeIMG : YoutubeDarkIMG} alt="youtube" />
                </a>
            </Social>
            <Social>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={theme === 'light' ? InstaIMG : InstaDarkIMG}  alt="instagram" />
                </a>
            </Social>
        </SocialIcons>
        <Logo>
            <TransitionLink
                to="/"
                exit={transition.exit}
                entry={transition.entry}
            >
                <LogoLight src={theme === 'light' ? LogoWhiteIMG : LogoDarkIMG} />
            </TransitionLink>
        </Logo>
        <Events>
            <SMButton>
                <TransitionLink
                    to="/events"
                    exit={transition.exit}
                    entry={transition.entry}
                >
                    <Button type="dark-orange" text="events" icon="Eye" onClick={() => null} />
                </TransitionLink>
            </SMButton>
            <LGButton>
                <TransitionLink
                    to="/events"
                    exit={transition.exit}
                    entry={transition.entry}
                >
                    <Button type="dark-orange" text="explore events" icon="Eye" onClick={() => null} />
                </TransitionLink>
            </LGButton>
        </Events>
    </Nav>
)

export default NavigationComponent