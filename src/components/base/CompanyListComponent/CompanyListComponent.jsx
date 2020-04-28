import React from "react"
import styled from "styled-components"
import { up } from "styled-breakpoints"

const CompanyListComponent = ({ title, align, companies }) => {

    return(
        <Container align={align}>
            <Title>{title}</Title>
            <Companies>
                {companies.map((company, i) => {
                    return(
                        <Company key={i}>
                            <a  href={company.link} target="_blank" rel="noopener noreferrer">
                                <img src={company.logo.file.url} alt={company.title} />
                            </a>
                        </Company>
                    )
                })}
            </Companies>
        </Container>
    )
}

export default CompanyListComponent

const Container = styled.div`
    width:100%;
    max-width:1280px;
    margin-left:auto;
    margin-right:auto;
    text-align:center;

    ${up('xs')}{
        margin-bottom:30px;
    }

    ${up('md')}{
        margin-bottom:35px;
    }

    ${up('lg')}{
        margin-bottom:40px;
    }

    ${up('xl')}{
        margin-bottom:80px;
    }

`

const Title = styled.h3`
    padding:0;
    margin:0;
    margin-bottom:30px;
    opacity:.4;
`

const Companies = styled.div`
    display:flex;
    width:100%;
    flex-direction:row;
    flex-wrap:wrap;

    ${up('lg')}{
        flex-wrap:nowrap;
    }
    
`

const Company = styled.div`

    ${up('xs')}{
        width:50%;
        margin-bottom:20px;
    }

    ${up('lg')}{
        width:100%;
        margin-bottom:0px;
    }

    img{
        width:100%;
    }
`