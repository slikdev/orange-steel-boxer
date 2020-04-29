import React from "react"
import styled from "styled-components"
import { up } from "styled-breakpoints"

const Footer = ({ }) => (
    <Container>
        <span>2020 Global Live Media Pty Ltd</span>
    </Container>
)

export default Footer

const Container = styled.div`
    width:100%;
    max-width:1280px;
    margin-left:auto;
    margin-right:auto;
    font-weight:600;

    ${up('xs')}{
        margin-top:3px;
        margin-bottom:100px;
    }
    
    ${up('md')}{

    }

    ${up('sm')}{

    }

    ${up('lg')}{
        margin-top:35px;
        margin-bottom:100px;
    }

    ${up('xl')}{
        
    }

`