import React, { useState } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { up } from "styled-breakpoints"
import Cookies from "universal-cookie"

import LogoWhiteIMG from "../../theme/img/logo-white.svg"
import vars from "../../theme/styles/vars"

const StreamPage = ({ pageContext, data }) => {

    console.log(pageContext)
    console.log(data)
    const { title, dateTime, youtubeId, image } = data.contentfulEvent

    const cookies = new Cookies();
    console.log('The token is:' + cookies.get('token')); 

    return (
        <Container>
          <Top>
            <Inner>
              <Logo src={LogoWhiteIMG} />
              <Player>
                <YoutubeEmbed id={youtubeId} autoplay={true} />
              </Player>
            </Inner>
            <Background>
              <Image url={image.file.url} />
            </Background>
          </Top>
          <Bottom></Bottom>
        </Container>
    )

}

export default StreamPage

const Container = styled.div`
  display:flex;
  width:100vw;
  height:100vh;
  background-color:black;
  flex-direction:column;
`

const Top = styled.div`
  width:100%;
  height:80%;
  position:relative;
`

const Background = styled.div`
  width:100%;
  height:100%;
  display:block;
  position:absolute;
  overflow:hidden;
  z-index:1;
  top:0;
`
const Image = styled.div`
  width:100%;
  height:100%;
  ${props => props.url ? `background-image:url(${props.url})` : ``};
  background-size:cover;
  background-position:center center;
  opacity: 0.15;
  filter: blur(5px);
  transform:scale(1.1);
`

const Bottom = styled.div`
  width:100%;
  height:20%;
  background-color:${vars.ORANGE};
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

const Inner = styled.div`
  display:flex;
  width:100%;
  height:100%;
`

const Player = styled.div`
  margin-left:auto;
  margin-right:auto;
  margin-top:20px;

  ${up('xs')}{
    width:90%;
    margin-top:120px;
  }
  
  ${up('sm')}{
    width:90%;
    margin-top:100px;
  }

  ${up('md')}{
    width:720px;
    margin-top:200px;
  }
  
  ${up('lg')}{
    margin-top:110px;
    width:600px;
  }

  ${up('xl')}{
    margin-top:160px;
    width:1200px;
  }
  
  z-index:10;
  position:relative;
`

const ApectRatioBox = styled.div`
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    margin-bottom:30px;

    iframe{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`

const YoutubeEmbed = ({ id, autoplay }) => (
    <ApectRatioBox>
        <iframe 
            width="560" 
            height="349"
            src={`https://www.youtube.com/embed/${id}${(autoplay ? '?autoplay=1' : '')}`} 
            frameBorder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
        </iframe>
    </ApectRatioBox>
)

export const streamQuery = graphql`
query StreamQuery($slug:String!){
    contentfulEvent(slug:{eq:$slug}){
      title
      id
      eventbriteId
      title
      dateTime
      youtubeId
      image{
        file{
          url
        }
      }
    }
}
`