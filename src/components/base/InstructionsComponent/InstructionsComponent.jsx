import React from "react"
import styled from "styled-components"
import { up } from "styled-breakpoints"

import vars from "../../../theme/styles/vars"

import LineSVG from "./img/line.svg"

const InstructionsComponent = ({ title, description, step, instructions, image }) => {

    return(
        <Container>
            <Box>
                <Image url={image} />
                <Content>
                    <Top>
                        <Description>{description}</Description>
                        <Line src={LineSVG} />
                        <Title>{title}</Title>
                    </Top>
                    <Bottom>
                        {step.map((s, i) => (
                            <Step key={i}>
                                <StepNumber>{(i + 1)}</StepNumber>
                                <StepText>
                                    <StepTitle>{s}</StepTitle>
                                    <StepInstruction>{instructions[i]}</StepInstruction>
                                </StepText>
                            </Step>
                        ))}
                    </Bottom>
                </Content>  
            </Box>
        </Container>
    )
}

export default InstructionsComponent

const Container = styled.div`
    width:100%;
    max-width:1280px;
    margin-left:auto;
    margin-right:auto;

    ${up('xs')}{
        margin-top:60px;
        margin-bottom:30px;
        padding-left:10px;
        padding-right:10px;
    }

    ${up('sm')}{

    }

    ${up('md')}{
        margin-top:70px;
        margin-bottom:35px;
        padding-left:20px;
        padding-right:20px;
    }

    ${up('lg')}{
        margin-top:80px;
        margin-bottom:40px;
    }

    ${up('xl')}{
        margin-top:160px;
        margin-bottom:50px;
        padding-left:0px;
        padding-right:0px;
    }

`
const Box = styled.div`
    background-color:${vars.ORANGE};
    border-radius:12px;
    display:flex;
    width:100%;

    ${up('xs')}{
        flex-direction:column;
    }
    
    ${up('lg')}{
        flex-direction:row;
        height:760px;
    }
    
    ${up('xl')}{
        height:870px;
    }
    
`

const Image = styled.div`
    ${props => props.url ? `background-image:url(${props.url});` : ''}
    background-size:cover;
    background-position:top center;

    ${up('xs')}{
        width:100%;
        height:236px;
        border-top-right-radius:12px;
        border-top-left-radius:12px;
    }

    ${up('sm')}{

    }

    ${up('md')}{
        width:100%;
        height:535px;
    }

    ${up('lg')}{
        width:680px;
        height:760px;
        border-bottom-left-radius:12px;
        border-top-right-radius:0px;
    }

    ${up('xl')}{
        width:760px;
        height:870px;
    }
`

const Content = styled.div`
   
    ${up('lg')}{
        width:calc(100% - 680px);
        border-bottom-left-radius:0px;
        border-top-right-radius:12px;
        border-bottom-right-radius:12px;
    }

    ${up('xl')}{
        width:calc(100% - 760px);
    }
`

const Bottom = styled.div`
    display:flex;
    flex-direction:column;
    padding-top:20px;
    padding-bottom:20px;
    flex-wrap:wrap;

    ${up('xs')}{
        padding-bottom:40px;
    }

    ${up('md')}{
        flex-direction:row;
        padding-bottom:20px;
    }

    ${up('lg')}{
        flex-direction:column;
    }
`

const Step = styled.div`
    width:86%;
    margin-left:auto;
    margin-right:auto;
    margin-top:20px;
    margin-bottom:20px;
    display:flex;
    flex-direction:column;

    ${up('md')}{
        width:42%;
        flex-direction:row;
    }
    
    ${up('lg')}{
        width:86%;
    }
    
    ${up('xl')}{
        width:86%;
        margin-top:26px;
        margin-bottom:26px;
    }
`
const StepNumber = styled.div`
    width:40px;
    height:40px;
    background-color:${vars.DARK_ORANGE};
    border-radius:20px;
    align-items:center;
    justify-content:center;
    text-align:center;
    color:white;
    flex: 0 0 auto;
    padding-top:10px;
    font-weight:600;

    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;

    ${up('md')}{
        margin-left: 0px;
        margin-right: 0px;
        margin-bottom: 0px;
    }
`

const StepText = styled.div`
    padding-left:10px;
    padding-right:10px;
    text-align:center;

    ${up('md')}{
        text-align:left;
    }
`

const StepTitle = styled.div`
    color:white;
    font-weight:600;
    font-size:18px;
    margin-bottom:8px;
`

const StepInstruction = styled.div`
    font-size:14px;
    line-height:18px;
    color:white;
`

const Top = styled.div`
    text-align:center;
    color:white;
    position:relative;

    ${up('xs')}{
        margin-top:-66px;
        padding-left:10px;
        padding-right:10px;
    }
    
    ${up('sm')}{
        padding-left:20px;
        padding-right:20px;
    }
    
    ${up('md')}{
        padding-left:100px;
        padding-right:100px;
    }
    
    ${up('lg')}{
        margin-top:0px;
        padding-left:0px;
        padding-right:0px;
        height:240px;
        text-align:left;
        right:0;
    }
    
    ${up('xl')}{
        height:340px;
    }
    

`

const Title = styled.h3`
    padding:0;
    margin:0;
    font-size:40px;
    font-weight:600;

    ${up('lg')}{
        position:absolute;
        width:110%;
        font-size:50px;
        right:80px;
        top:110px;
        display:block;
    }
    
    ${up('xl')}{
        position:absolute;
        width:120%;
        font-size:70px;
        right:60px;
        top:170px;
    }
`

const Description = styled.p`
    font-size:18px;
    font-weight:600;
    margin-top:0px;
    margin-bottom:20px;

    ${up('lg')}{
        position:absolute;
        top:60px;
        right:212px;
        display:block;
        width: 300px;
    }
    
    ${up('xl')}{
        position:absolute;
        top:100px;
        right:280px;
        display:block;
        width: 400px;
    }
`

const Line = styled.img`
    display:none;
    position:absolute;

    ${up('lg')}{
        display:block;
        top: 10px;
        right: -120px;
        width: 630px;
    }
    
    ${up('xl')}{
        top: 10px;
        right: -282px;
        width: 960px;
    }
`