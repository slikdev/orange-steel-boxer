import React from "react"
import styled from "styled-components"
import { up } from "styled-breakpoints"

import FacebookDarkIMG from "../../../theme/img/icons/Facebook_black.svg"
import YoutubeDarkIMG from "../../../theme/img/icons/Youtube_black.svg"
import VimeoDarkIMG from "../../../theme/img/icons/Vimeo_black.svg"
import InstaDarkIMG from "../../../theme/img/icons/Insta_black.svg"

const Footer = () => (
    <Container id="footer">
        <SMFooter>
            <SocialSection>
                <Social>
                    <a href="https://www.facebook.com/globalliveonline/" target="_blank" rel="noopener noreferrer">
                        <img src={FacebookDarkIMG} alt="facebook" />
                    </a>
                </Social>
                <Social>
                    <a href="https://vimeo.com/globalliveonline" target="_blank" rel="noopener noreferrer">
                        <img src={VimeoDarkIMG} alt="youtube" />
                    </a>
                </Social>
                <Social>
                    <a href="https://www.instagram.com/globalliveonline/" target="_blank" rel="noopener noreferrer">
                        <img src={InstaDarkIMG}  alt="instagram" />
                    </a>
                </Social>
            </SocialSection>
            <Section>
                <P><a href="/terms-and-conditions">Terms &amp; Conditions</a><br/></P>
                <P><a href="/faqs">FAQs</a><br/></P>
                <P><a href="/privacy-policy">Privacy Policy</a><br/></P>
            </Section>
            <Section>
                <P>2020 Global Live Media Pty Ltd</P>
            </Section>
        </SMFooter>
        <LGFooter>
            <Section>
                <P>2020 Global Live Media Pty Ltd</P>
                <P>|</P>
                <P><a href="/terms-and-conditions">Terms &amp; Conditions</a></P>
                <P><a href="/faqs">FAQs</a></P>
                <P><a href="/privacy-policy">Privacy Policy</a></P>
            </Section>
            <SocialSection>
                <Social>
                    <a href="https://www.facebook.com/globalliveonline/" target="_blank" rel="noopener noreferrer">
                        <img src={FacebookDarkIMG} alt="facebook" />
                    </a>
                </Social>
                <Social>
                    <a href="https://vimeo.com/globalliveonline" target="_blank" rel="noopener noreferrer">
                        <img src={VimeoDarkIMG} alt="youtube" />
                    </a>
                </Social>
                <Social>
                    <a href="https://www.instagram.com/globalliveonline/" target="_blank" rel="noopener noreferrer">
                        <img src={InstaDarkIMG}  alt="instagram" />
                    </a>
                </Social>
            </SocialSection>
        </LGFooter>
    </Container>
)

export default Footer

const Container = styled.div`
    width:100%;
    max-width:1280px;
    margin-left:auto;
    margin-right:auto;
    font-weight:600;
    position:relative;
    z-index:11;

    ${up('xs')}{
        margin-top:3px;
        margin-bottom:100px;
    }

    ${up('lg')}{
        margin-top:35px;
        margin-bottom:100px;
    }

`

const Section = styled.div`
    display:inline-block;
    width:100%;
    ${up('xs')}{
        margin-top:30px;
    }
    
    ${up('lg')}{
        margin-top:0px;
        margin-bottom:0px;
    }
`

const SocialSection = styled.div`
    display:inline-block;
    width:200px;
`

const SMFooter = styled.div`
    text-align:center;

    ${up('lg')}{
        display:none;
    }
`

const LGFooter = styled.div`
    display:none;

    ${up('lg')}{
        display:flex;
    }
`

const P = styled.p`
    display:block;
    margin-left:10px;
    margin-right:10px;

    a{
        color:black;
    }

    ${up('lg')}{
        display:inline-block;
    }
`

const Social = styled.div`
    display:inline-block;
    margin-left:14px;
    margin-right:14px;
    margin-top:14px;
`