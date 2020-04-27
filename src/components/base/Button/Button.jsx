import React from "react"
import styled from "styled-components"
import { up } from "styled-breakpoints"
import vars from "../../../theme/styles/vars"

import EyeIcon from "../../../theme/img/icons/Eye.svg"

const Styles = {

    Inline: styled.p`
        text-transform:uppercase;
        color:${props => props.color || "#000"};
        font-size:14px;
        letter-spacing:4px;
        font-weight: 600;
        text-decoration:none !important;
        transition: opacity .25s ease-in-out;
        &:hover{
            opacity:.5;
        }
    `,

    Icon: styled.img`
        display:inline-block;
        width:12px;
        margin-right:8px;
    `,

    DarkOrange: styled.div`
        text-align:center;
        display:inline-block !important;
        background-color:${vars.DARK_ORANGE};
        padding:2px 20px;
        line-height:32px;
        border-radius:20px;
        font-weight:600;
        text-transform:uppercase;
        color:white !important;
        font-size:12px;
        letter-spacing:2px;
        display:flex;
        transition: background-color .25s ease-in-out;

        &:hover{
            background-color:${vars.BLUE};
        }

        ${up('sm')} {
            padding:4px 16px;

            img{
                margin-top:3px;
                display:inline-block;
            }
        }
    `,
    
    Blue: styled.div`
        text-align:center;
        display:inline-block;
        background-color:${vars.BLUE};
        padding:12px 32px;
        border-radius:32px;
        line-height:30px;
        font-weight:600;
        text-transform:uppercase;
        color:white !important;
        font-size:14px;
        letter-spacing:2px;
        transition: background-color .25s ease-in-out;
        box-shadow: 0px -2px 7px 0px rgba(0,0,0,0.09);
        &:hover{
            background-color:${vars.DARK_BLUE};
        }
    `,

}

const Button = ({ type, text, icon, onClick}) => {
    
    let dom = ``

    switch(type){

        case "inline":
            dom = <Styles.Inline>{text}</Styles.Inline>
        break;
        
        case "dark-orange":
            dom = (<Styles.DarkOrange>{icon && <Styles.Icon src={EyeIcon} />} {text}</Styles.DarkOrange>)
        break;
        
        case "blue":
            dom = (<Styles.Blue>{icon && <Styles.Icon src={EyeIcon} />} {text}</Styles.Blue>)
        break;

        default:
            dom = <Styles.Inline>{text}</Styles.Inline>
        break;

    }

    return dom
}

export default Button