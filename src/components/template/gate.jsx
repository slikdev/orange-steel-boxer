import React, { useState } from "react"
import { graphql, navigate, withPrefix } from "gatsby"
import styled from "styled-components"
import { up } from "styled-breakpoints"
import moment from "moment-timezone"
import { useQueryParam, StringParam } from "use-query-params"
import { useForm } from 'react-hook-form'
import axios from "axios"
import Cookies from "universal-cookie"

import Button from "../base/Button/Button"
import vars from "../../theme/styles/vars"
import LogoWhiteIMG from "../../theme/img/logo-white.svg"

import MailIMG from "../../theme/img/icons/Mail.svg"
import LockIMG from "../../theme/img/icons/Unlock.svg"

const GatePage = ({ pageContext, data }) => {

    const { dateTime, image, eventbriteId } = data.contentfulEvent
    const { register, handleSubmit, errors, reset } = useForm()
    const [ loading, setLoading ] = useState(false)
    const [ email, setEmail ] = useQueryParam("email", StringParam);
    const [ code, setCode ] = useQueryParam("code", StringParam);

    const onSubmit = data => { 

        setLoading(true)

        axios.post(`${process.env.GATSBY_API_URL}/tickets/${eventbriteId}/redeem`, data)
            .then((response) => {

                const cookies = new Cookies();
                cookies.set('token', response.data._id, { path: '/' });

                if (typeof window !== "undefined") {
                    const url = withPrefix(`/streams/${pageContext.slug}/`)
                    navigate(url)
                }

            })
            .catch(error => {

                if(error.response.status === 403){
                    alert('Code already in use. Please log out of other sessions.')
                    reset()
                    setLoading(false)
                }
                
                if(error.response.status === 404){
                    alert('Code not found.')
                    reset()
                    setLoading(false)
                }
            })
    }

    return (
        <Container>
            <Top url={`${image.file.url}?w=1000`} />
            <Bottom>
                <Logo src={LogoWhiteIMG} />
                <Content>
                    <Inner>
                        <Text>
                            <H1>Ready to enjoy the show?</H1>
                            <P>Simply login below with your email address and unique code you recieved. Please do not share this code, it is a single customer only.</P>
                        </Text>
                        <Form onSubmit={handleSubmit(onSubmit)} autocomplete="off">
                            <Input defaultValue={email} autocomplete="off" name="email" placeholder="Email address" ref={register({ required: true })} error={errors.email} icon={MailIMG} />
                            <Input defaultValue={code} autocomplete="off" name="code" placeholder="Unique code" ref={register({ required: true })}  error={errors.code} icon={LockIMG} />
                            {!loading && <Submit type="submit">
                                <Button type="blue" text={"Sign in"} icon="Eye" onClick={() => null} />
                            </Submit>}
                            {loading &&
                                <LoadingIndiciator>
                                    <svg width={38} height={38} viewBox="0 0 38 38" stroke="#FFFFFF">
                                        <g
                                            transform="translate(1 1)"
                                            strokeWidth={2}
                                            fill="none"
                                            fillRule="evenodd"
                                        >
                                            <circle strokeOpacity={0.5} cx={18} cy={18} r={18} />
                                            <path d="M36 18c0-9.94-8.06-18-18-18">
                                            <animateTransform
                                                attributeName="transform"
                                                type="rotate"
                                                from="0 18 18"
                                                to="360 18 18"
                                                dur="1s"
                                                repeatCount="indefinite"
                                            />
                                            </path>
                                        </g>
                                    </svg>
                                </LoadingIndiciator>
                            }
                        </Form>
                    </Inner>
                </Content>
            </Bottom>
        </Container>
    )

}

export default GatePage

export const gateQuery = graphql`
query GateQuery($slug:String!){
    contentfulEvent(slug:{eq:$slug}){
      title
      id
      eventbriteId
      title
      dateTime
      image{
        file{
          url
        }
      }
    }
}
`

const Container = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    flex-direction:column;
    background-color:black;

    ${up('lg')}{
        flex-direction:row;
    }

`

const LoadingIndiciator = styled.div`
    margin-top:20px;

    ${up('lg')}{
        margin-left:20px;
    }
`


const Top = styled.div`
    width:100%;
    ${props => props.url ? `background-image:url(${props.url})` : ``};
    background-size:cover;
    background-position:center center;
    position:relative;
    opacity:0.6;

    ${up('xs')}{
        height:25%;
    }
    
    ${up('sm')}{
        height:25%;
    }
    
    ${up('md')}{
        height:50%;
    }
    
    ${up('lg')}{
        height:100%;
    }
`

const Logo = styled.img`

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
        left:0;
        margin-left:-126px;
    }

`

const Bottom = styled.div`
    width:100%;
    background-color:${vars.ORANGE};
    z-index:10;

    ${up('xs')}{
        height:75%;
    }
    
    ${up('sm')}{
        height:75%;
    }
    
    ${up('md')}{
        height:50%;
    }

    ${up('lg')}{
        position:relative;
        height:100%;
    }
`

const Content = styled.div`
    width:100%;
    height:100%;
    text-align:center;
    padding-left:30px;
    padding-right:30px;

    ${up('md')}{
        padding-left:40px;
        padding-right:40px;
    }
    
    ${up('lg')}{
        padding-left:20px;
        padding-right:20px;
        display:flex;
        align-items:center;
        justify-content:center;
    }

    ${up('xl')}{
        padding-left:80px;
        padding-right:80px;
    }
`

const Inner = styled.div`

    ${up('lg')}{
        text-align:left;
        margin-top:100px;
    }
`

const Text = styled.div`

    ${up('lg')}{
        margin-left:10px;
    }
`


const H1 = styled.h1`
    color:white;
    font-weight:600;
    margin:0;
    padding:0;
    margin-bottom:20px;
    max-width:600px;

    ${up('xs')}{
        font-size:30px;
        margin-top:-20px;
    }

    ${up('md')}{
        font-size:60px;
        margin-top:-40px;
    }

    ${up('lg')}{
        margin-top:0px;
    }
`

const P = styled.p`
    color:white;
    margin:0;
    padding:0;
    font-size:14px;
    max-width:600px;

    ${up('md')}{
        font-size:16px;
        line-height:24px;
    }
`

const Form = styled.form`

    margin-left:auto;
    margin-right:auto;
    margin-top:20px;
    margin-bottom:20px;
    max-width:400px;

     ${up('xs')}{
         width:100%;
     }

     ${up('md')}{
         width:60%;
     }

     ${up('lg')}{
        width:75%;
        margin-left:0px;
     }
`

const Input = styled.input`
    background-color:${vars.DARK_ORANGE};
    display:block;
    width:calc(100% - 20px);
    margin:10px;
    border-radius:50px;
    text-align:left;
    display:flex;
    justify-content:start;
    align-items: center;
    border:none;
    padding-left:20px;
    padding-right:20px;
    color:white;
    transition: all .2s ease-in-out;
    ${ props => props.error ? `border:2px solid ${vars.YELLOW}` : `border:none`};

    ${up('xs')}{
        height:50px;
    }

    ${up('md')}{
        height:60px;
    }

    &:focus{
        background-color:${vars.VERY_DARK_ORANGE};
    }

    ${props => props.icon ? `background-image:url(${props.icon})` : `background-image:none`};
    background-repeat:no-repeat;
    background-position: 94% center;
    background-size:20px auto;

`

const Submit = styled.button`
    border:none;
    background:none;
    margin-top:20px;
    margin-bottom:20px;
`