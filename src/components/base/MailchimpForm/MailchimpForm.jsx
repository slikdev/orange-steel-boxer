import React from "react"
import styled from "styled-components"
import { up } from "styled-breakpoints"
import MailchimpSubscribe from "react-mailchimp-subscribe"

import vars from "../../../theme/styles/vars"

const MailchimpForm = ({ url }) => {

    const CustomForm = ({ status, message, onValidated }) => {

        let email

        const submit = () =>
          email &&
          email.value.indexOf("@") > -1 &&
          onValidated({
            EMAIL: email.value
          })
      
        return (
            <div>
                <Form status={status}>
                    <input
                        ref={node => (email = node)}
                        type="email"
                        placeholder="Your email"
                    />
                    {status !== "sending" &&<Button status={status} onClick={submit}>Submit</Button>}
                    {status === "sending" && 
                        <LoadingIndicator>
                            <svg width={38} height={38} viewBox="0 0 38 38" stroke="#E83F32">
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
                        </LoadingIndicator>
                    }
                </Form>
                <div>
                {status === "error" && (
                <div
                    style={{ color: "red", marginTop:10 }}
                    dangerouslySetInnerHTML={{ __html: message }}
                />
                )}
                {status === "success" && (
                <div
                    style={{ color: vars.GREEN, marginTop:10 }}
                    dangerouslySetInnerHTML={{ __html: message }}
                />
                )}
                </div>
            </div>
        );
    };

    return(
        <Container>
            <Title>Never miss a release</Title>
            <p>Make sure you don’t miss your favourite artist releases, sign up to our mailing list today</p>
            <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => (
                    <CustomForm
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </Container>

    )
}

export default MailchimpForm

const Container = styled.div`
    text-align:center;
    width:100%;
    max-width:1280px;
    margin-left:auto;
    margin-right:auto;
    text-align:center;

    ${up('xs')}{
        margin-bottom:50px;
        padding-left:10px;
        padding-right:10px;
    }

    ${up('sm')}{

    }

    ${up('md')}{
        margin-bottom:60px;
        padding-left:20px;
        padding-right:20px;
    }

    ${up('lg')}{
        margin-bottom:70px;
    }

    ${up('xl')}{
        margin-bottom:160px;
    }

`

const Title = styled.h3`

    margin-bottom:30px;

    ${up('xs')}{
        font-size:40px;
    }
    
    ${up('md')}{
        font-size:50px;
    }
    
    ${up('lg')}{
        font-size:70px;
    }

`

const Form = styled.div`
    display:inline-flex;
    ${props => props.status === "success" ? `border:1px solid ${vars.GREEN};` : `border:1px solid ${vars.ORANGE};`}
    border-radius:50px;
    padding:6px;
    margin-top:10px;
    align-items:center;
    justify-content:start;
    flex-direction:row;

    input{
        border:none;
        ::-webkit-input-placeholder {
            color: black;
            opacity:.4;
        }

        :-ms-input-placeholder { 
            color: black;
            opacity:.4;
        }

        ::placeholder {
            color: black;
            opacity:.4;
        }
    }


    ${up('xs')}{
        width:300px;

        input{
            margin-left:20px;
            margin-right:10px;
            width:150px;
        }
    }
    
    ${up('md')}{
        height:68px;
        width:480px;

        input{
            margin-left:20px;
            margin-right:10px;
            width:360px;
        }
    }

`

const Button = styled.button`
    ${ props => props.status === "success" ? `background-color:${vars.GREEN};` : `background-color:${vars.BLUE};`}
    border-radius:50px;
    border:none;
    color:white;

    ${up('xs')}{
        padding:18px 20px;
    }

    ${up('md')}{
        padding:18px 32px;
    }
`

const LoadingIndicator = styled.div`
    display:inline;
    flex:1;
`