import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { up } from "styled-breakpoints"
import moment from "moment-timezone"

const FeaturedNewsComponent = ({ title, news }) => {

    return( 
        <Container>
            <Title>{title}</Title>
            <NewsContainer>
            {news.map((item, index) => {

                const date = moment(item.updatedAt)

                return(
                    <Link  key={index}  to={`/news/${item.slug}`}>
                        <NewsItem>
                            <NewsText>
                                <NewsCategory>{item.category.title}</NewsCategory>
                                <NewsTitle>{item.title}</NewsTitle>
                                <NewsDate>
                                    <TimeIcon width={18} height={18} viewBox="0 0 24 24">
                                        <defs>
                                            <path
                                            d="M12 0c6.617 0 12 5.383 12 12s-5.383 12-12 12S0 18.617 0 12 5.383 0 12 0zm0 1.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5zm.75 3v7.19l4.28 4.28-1.06 1.06-4.72-4.72V4.5h1.5z"
                                            id="prefix__a"
                                            />
                                        </defs>
                                        <g fill="none" fillRule="evenodd">
                                            <mask id="prefix__b" fill="#fff">
                                            <use xlinkHref="#prefix__a" />
                                            </mask>
                                            <use fill="#FFF" fillRule="nonzero" xlinkHref="#prefix__a" />
                                            <g mask="url(#prefix__b)" fill="#FFF">
                                            <path d="M0 0h24v24H0z" />
                                            </g>
                                        </g>
                                    </TimeIcon>
                                    <span>{date.startOf('day').fromNow()}</span>
                                    </NewsDate>
                            </NewsText>
                            <NewsImage url={item.image.file.url} />
                        </NewsItem>
                    </Link>
                )
            })}
            </NewsContainer>
        </Container>
    )
}

export default FeaturedNewsComponent

const Container = styled.div`
    width:100%;
    max-width:1280px;
    margin-left:auto;
    margin-right:auto;
    text-align:center;

    ${up('xs')}{
        margin-top:30px;
        margin-bottom:30px;
    }
    
    ${up('sm')}{

    }

    ${up('md')}{
        margin-top:35px;
        margin-bottom:35px;
    }
    
    ${up('lg')}{
        text-align:left;
        margin-top:40px;
        margin-bottom:40px;
    }

    ${up('xl')}{
        margin-top:160px;
        margin-bottom:160px;
    }

`

const Title = styled.h3`
    margin:0;
    padding:0;

    ${up('xs')}{
        font-size:40px;
        font-weight:600;
        margin-bottom:30px;
    }

    ${up('sm')}{

    }

    ${up('md')}{
        font-size:50px;
        font-weight:600;
    }

    ${up('lg')}{
        font-size:60px;
        font-weight:600;
        margin-left:10px;
    }

    ${up('xl')}{
        font-size:70px;
        font-weight:600;
    }

`

const NewsContainer = styled.div`
    display:flex;
    flex-direction:column;

    ${up('md')}{
        flex-direction:row;
    }

    a{
        display:flex;
        width:100%;
    }
`

const NewsItem = styled.div`
    width:calc(100% - 20px);
    height:350px;
    position:relative;
    border-radius:12px;
    margin:10px;
    display:flex;
    ${props => props.flex ? `flex:${props.flex}` : ``}
    background-color:black;
    overflow:hidden;
`

const NewsImage = styled.div`
    ${props => props.url ? `background-image:url(${props.url})` : ``};
    background-size:cover;
    background-position:center center;
    width:100%;
    height:100%;
    transition: all .2s ease-in-out;
    position:absolute;
    top:0;
    left:0;
    z-index:0;
    opacity:.8;

    &:hover{
        transform: scale(1.1);
        opacity:.5;
        filter: blur(2px);
    }
`

const NewsText = styled.div`
    display:flex;
    flex-direction:column;
    position:relaitve;
    z-index:1;
    width:90%;
    height:100%;
    pointer-events:none;
    padding:20px;
    text-align:left;
    justify-content:center;
    align-items:start;

    ${up('md')}{
        width:60%;
    }
`

const NewsCategory = styled.p`
    text-transform:uppercase;
    color:white;
    letter-spacing:4px;
    font-size:12px;
    font-weight:600;
`

const NewsTitle = styled.h4`
    font-size:30px;
    color:white;
    padding:0;
    margin:0;
`

const TimeIcon = styled.svg`
    margin-right:4px;
    position:absolute;
    left:0;
    top:-9px;
`

const NewsDate = styled.div`
    font-size:12px;
    color:white;
    padding:0;
    margin:0;
    margin-top:20px;
    line-height:0px;
    position:relative;
    padding-left:24px;

    span{
        display:inline-block;
    }
`