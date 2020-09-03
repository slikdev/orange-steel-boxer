import React from "react"
import styled from "styled-components"
import { up } from "styled-breakpoints"

import vars from "../../../theme/styles/vars"

import FacebookIMG from "../../../theme/img/icons/Facebook.svg"
import YoutubeIMG from "../../../theme/img/icons/Youtube.svg"
import InstaIMG from "../../../theme/img/icons/Insta.svg"
import TwitterIMG from "../../../theme/img/icons/Twitter.svg"
import SpotifyIMG from "../../../theme/img/icons/Spotify.svg"

export default class SocialLinks extends React.Component  {

    renderIcon(url) {

        if(url.includes('facebook'))
            return <IconImg src={FacebookIMG} />

        if(url.includes('youtube'))
            return <IconImg src={YoutubeIMG} />

        if(url.includes('instagram'))
            return <IconImg src={InstaIMG} />

        if(url.includes('twitter'))
            return <IconImg src={TwitterIMG} />
        
        if(url.includes('spotify'))
            return <IconImg src={SpotifyIMG} />
    
    }

    render(){

        const { links } = this.props

        return(
            <React.Fragment>
            {links && 
                <Wrapper>
                    <Label>Follow on</Label>
                    <Icons>
                    {links.map((link,i) => {
                        return (
                            <Icon key={i} href={link} target="_blank">
                            {this.renderIcon(link)}
                            </Icon>
                        )
                    })}
                    </Icons>
                </Wrapper>
            }
            </React.Fragment>
        )
    }

}

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    text-align:center;

    ${up('md')}{
        flex-direction:row;
        text-align:left;
    }
`

const Label = styled.div`
    font-weight:bold;
    text-transform:uppercase;
    padding-top:16px;
    margin-bottom:12px;

    ${up('md')}{
        margin-right:12px;
    }
`

const Icons = styled.div`
    flex-direction:row;
    display:flex;
    align-items:center;
    justify-content:center;
`

const Icon = styled.a`    
    margin:6px;
    width:40px;
    height:40px;
    border-radius:20px;
    background-color:${vars.ORANGE};
    display:flex;
    align-items:center;
    justify-content:center;

    &:hover{
        background-color:${vars.BLUE};
    }
`

const IconImg = styled.img`
    width:20px;
`