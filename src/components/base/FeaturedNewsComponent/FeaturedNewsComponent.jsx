import React from "react"
import styled from "styled-components"
import { up } from "styled-breakpoints"

const FeaturedNewsComponent = ({ title, news }) => {

    return( 
        <Container>
            <Title>{title}</Title>
            <NewsContainer>
            {news.map((item, index) => {
                return(
                    <NewsItem key={index}>
                        <NewsText>
                            <NewsCategory>{item.category.title}</NewsCategory>
                            <NewsTitle>{item.title}</NewsTitle>
                        </NewsText>
                        <NewsImage url={item.image.file.url} />
                    </NewsItem>
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
`

const NewsItem = styled.div`
    width:calc(100% - 20px);
    height:350px;
    position:relative;
    border-radius:12px;
    margin:10px;
    display:flex;
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