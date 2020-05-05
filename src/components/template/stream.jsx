import React from "react"
import { graphql, navigate, withPrefix } from "gatsby"
import styled from "styled-components"
import { up } from "styled-breakpoints"
import Cookies from "universal-cookie"
import axios from "axios"

import LogoWhiteIMG from "../../theme/img/logo-white.svg"
import vars from "../../theme/styles/vars"

class StreamPage extends React.Component  {

   constructor(props){
    super(props)
    this.timer = null
    const { pageContext } = this.props

    const cookies = new Cookies()
    let token = cookies.get('token')

    if(!token || token === undefined){
      const url = withPrefix(`/streams/${pageContext.slug}/gate`)
      navigate(url)
    }

   }

   componentDidMount(){
    const _this = this
    this.timer = setInterval(_this.tokenCheck, (30 * 1000))
    this.tokenCheck()
   }
   
   componentWillUnmount(){
    clearInterval(this.timer)
   }

   tokenCheck(){
    const cookies = new Cookies()
    let token = cookies.get('token')

    axios.put(`${process.env.GATSBY_API_URL}/tokens/${token}`)
      .then(response => {
        console.log(response)
        if(response.status !=+ 200){
          const url = withPrefix(`/streams/${this.props.pageContext.slug}/gate`)
          navigate(url)
        }
      })
      .catch(error => {
        console.log(error.response)
        if(error.response.status === 403){
          const url = withPrefix(`/streams/${this.props.pageContext.slug}/gate`)
          navigate(url)
        }
      })
   }

   render(){

    const { data, pageContext } = this.props

    const { title, youtubeId, image, short } = data.contentfulEvent

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
              <Image url={`${image.file.url}?w=1000`} />
            </Background>
          </Top>
          <Bottom>
            <Text>
              <Left>
                <Avatar url={`${image.file.url}?w=400`} />
              </Left>
              <Right>
                <H3>{title}</H3>
                <P>{short}</P>
              </Right>
            </Text>
          </Bottom>
        </Container>
    )

   }

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
  position:relative;

  ${up('xs')}{
    height:50%;
  }
  ${up('sm')}{
    height:50%;
  }
  ${up('md')}{
    height:60%;
  }
  ${up('lg')}{
    height:70%;
  }
  ${up('xl')}{
    height:80%;
  }

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
  background-color:${vars.ORANGE};
  display:flex;
  
  ${up('xs')}{
    height:50%;
  }
  ${up('sm')}{
    height:50%;
  }
  ${up('md')}{
    height:40%;
  }
  ${up('lg')}{
    height:30%;
    align-items:center;
    justify-content:center;
  }
  ${up('xl')}{
    height:20%;
  }
`

const Text = styled.div`
  display:flex;
  flex-direction:row;
  text-align:center;
  width:100%;
  max-width:1200px;
  margin-left:auto;
  margin-right:auto;
  padding-left:20px;
  padding-right:20px;

  ${up('md')}{
    width:75%;
  }

  ${up('lg')}{
    text-align:left;
    width:100%;
  }
`

const Left = styled.div`
  display:none;

  ${up('lg')}{
    display:flex;
  }
`

const Right = styled.div`
  ${up('lg')}{
    width:60%;
  }
`

const Avatar = styled.div`

  ${up('lg')}{
    width:160px;
    height:160px;
  }

  margin-right:30px;
  border-radius:12px;
  ${props => props.url ? `background-image:url(${props.url})` : ``};
  background-size:cover;
  background-position:center center;
`

const H3 = styled.h3`
  color:white;
  font-weight:600;
  font-size:40px;
  margin-top:-24px;
  margin-bottom:10px;

  ${up('lg')}{
    margin-top:10px;
  }
`

const P = styled.p`
  color:white;
  font-size:14px;
  line-height:20px;
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
    margin-top:80px;
  }
  
  ${up('sm')}{
    width:90%;
    margin-top:120px;
  }

  ${up('md')}{
    width:720px;
    margin-top:120px;
  }
  
  ${up('lg')}{
    margin-top:100px;
    width:540px;
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
      short
      image{
        file{
          url
        }
      }
    }
}
`