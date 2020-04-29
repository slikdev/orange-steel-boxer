import React from "react"
import styled from "styled-components"
import { up } from "styled-breakpoints"
import TransitionLink from "gatsby-plugin-transition-link"
import { gsap } from "gsap"
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"

import vars from "../../../theme/styles/vars"
import Button from "../Button/Button"
import ProgressiveImage from "../ProgressiveImage/ProgressiveImage"

import OrangeBubbleIMG from "./img/orange-bubble.svg"
import BlueBubbleIMG from "./img/blue-bubble.svg"
import GreenBubbleIMG from "./img/green-bubble.svg"
import CircleTextIMG from "./img/circle-text.svg"
import PlayIMG from "./img/play.svg"

class SliderComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = { index: 0 }
        this.timer = null
    }

    componentDidMount(){

        const { slides } = this.props
        const _this = this
        const titleHeight = document.getElementById('title').offsetHeight;

        gsap.registerPlugin(DrawSVGPlugin)

        gsap.to("#circle-text", { rotation:"360", repeat:-1, duration:14, ease:"none" })

        gsap.set("#line", { drawSVG:"0%" })
        gsap.set("#orange-background", { opacity:( slides[this.state.index].color === "ORANGE" ? 1 : 0 ) })
        gsap.set("#blue-background", { opacity:( slides[this.state.index].color === "BLUE" ? 1 : 0 ) })
        gsap.set("#green-background", { opacity:( slides[this.state.index].color === "GREEN" ? 1 : 0 ) })

        gsap.set("#orange-circle", { scale: 0, opacity:0 })
        gsap.set("#blue-circle", { scale: 0, opacity:0 })
        gsap.set("#green-circle", { scale: 0, opacity:0 })

        gsap.set("#artist", { opacity: 0, x:100 })
        gsap.set("#title", { opacity:0, y:50 })
        gsap.set("#description", { opacity:0 })
        gsap.set("#pagination", { opacity:0, y:10 })

        gsap.to("#orange-background", {opacity: ( this.props.slides[this.state.index].color === "ORANGE" ? 1 : 0 ), duration:1.5, ease:"sine.out"})
        gsap.to("#green-background", {opacity: ( this.props.slides[this.state.index].color === "GREEN" ? 1 : 0 ), duration:1.5, ease:"sine.out"})
        gsap.to("#blue-background", {opacity: ( this.props.slides[this.state.index].color === "BLUE" ? 1 : 0 ), duration:1.5, ease:"sine.out"})

        gsap.to("#orange-circle", {opacity: ( this.props.slides[this.state.index].color === "ORANGE" ? 1 : 0 ), scale:1, duration:1, ease:"sine.out", delay:.5})
        gsap.to("#green-circle", {opacity: ( this.props.slides[this.state.index].color === "GREEN" ? 1 : 0 ), scale:1, duration:1, ease:"sine.out", delay:.5})
        gsap.to("#blue-circle", {opacity: ( this.props.slides[this.state.index].color === "BLUE" ? 1 : 0 ), scale:1, duration:1, ease:"sine.out", delay:.5})

        gsap.to("#line", { drawSVG:"100%", duration: 2, ease:"sine.out", delay:1 })
        gsap.to("#artist", { opacity: 1, x: 0, duration: 1.5, ease:"expo.out", delay:1.5 })
        gsap.to("#title", { opacity: 1, y: 0, duration: 1, ease:"expo.out", delay:1.5 })
        gsap.to("#description", { opacity: 1, duration: 1, y:0, ease:"sine.out", delay:1.8 })
        gsap.to("#pagination", { opacity: 1, y: 0, duration: .7, ease:"expo.out", delay:2.2 })

        this.timer = setInterval(() => _this.next(), 9000)

    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    next(){
        let next = this.state.index + 1

        if(next >= this.props.slides.length)
            next = 0

        this.change(next)
    }

    select(index){
        clearInterval(this.timer)
        this.change(index)
    }

    change(index){
        const _this = this
        gsap.to("#line", { drawSVG:0, duration: 1.6, ease:"sine.out" })
        gsap.to("#artist", { opacity: 0, x: -100, duration: 1, ease:"expo.out" })
        gsap.to("#title", { opacity: 0, duration: 1, ease:"expo.out" })
        gsap.to("#description", { opacity: 0, duration: .5, ease:"sine.out" })
        gsap.to("#pagination", { opacity: 0, y: 0, duration: 1, ease:"expo.out" })

        gsap.to("#orange-circle", { scale:0, opacity:0, duration:1, ease:"sine.out", delay: .5})
        gsap.to("#green-circle", { scale:0, opacity:0, duration:1, ease:"sine.out", delay: .5})
        gsap.to("#blue-circle", { scale:0, opacity:0, duration:1, ease:"sine.out", delay: .5})

        gsap.delayedCall( 1, () => {

            gsap.set("#artist", { opacity: 0, x:100 })
            gsap.set("#title", { y:50 })

            _this.setState({ index:index }, () => {

                gsap.to("#orange-background", {opacity: ( this.props.slides[this.state.index].color === "ORANGE" ? 1 : 0 ), duration:1.5, ease:"sine.out"})
                gsap.to("#green-background", {opacity: ( this.props.slides[this.state.index].color === "GREEN" ? 1 : 0 ), duration:1.5, ease:"sine.out"})
                gsap.to("#blue-background", {opacity: ( this.props.slides[this.state.index].color === "BLUE" ? 1 : 0 ), duration:1.5, ease:"sine.out"})

                gsap.to("#orange-circle", {opacity: ( this.props.slides[this.state.index].color === "ORANGE" ? 1 : 0 ), scale:1, duration:1, ease:"sine.out", delay:.5})
                gsap.to("#green-circle", {opacity: ( this.props.slides[this.state.index].color === "GREEN" ? 1 : 0 ), scale:1, duration:1, ease:"sine.out", delay:.5})
                gsap.to("#blue-circle", {opacity: ( this.props.slides[this.state.index].color === "BLUE" ? 1 : 0 ), scale:1, duration:1, ease:"sine.out", delay:.5})

                gsap.to("#line", { drawSVG:"100%", duration: 2, ease:"sine.out", delay:1 })
                gsap.to("#artist", { opacity: 1, x: 0, duration: 1.5, ease:"expo.out", delay:1.5 })
                gsap.to("#title", { opacity: 1, y: 0, duration: 1, ease:"expo.out", delay:1.5 })
                gsap.to("#description", { opacity: 1, duration: 1, ease:"sine.out", delay:1.8 })
                gsap.to("#pagination", { opacity: 1, y: 0, duration: .7, ease:"expo.out", delay:2.2 })

            })

        })
    }

    render(){

        const { slides } = this.props

        return (
            <Container>
                <Content>
                    <ButtonWrap id="button">
                        <Button type="blue" text={slides[this.state.index].ctaText} icon="Eye" onClick={() => null} />
                    </ButtonWrap>
                    <Pagination id="pagination">
                    { slides.map((slide, index) => {
                        return <Pill key={index} onClick={() => this.select(index)} selected={this.state.index === index ? true : false} />
                    })}
                    </Pagination>
                    <Circle id="circle">
                        <img src={PlayIMG} />
                        <CircleText id="circle-text"></CircleText>
                    </Circle>
                    <Text>
                        <TextWrap>
                            <Title id="title">{slides[this.state.index].title}</Title>
                            <Description id="description">{slides[this.state.index].description}</Description>
                        </TextWrap>
                    </Text>
                </Content>
                <Decorations>
                    {/* <Artist id="artist" src={slides[this.state.index].image.file.url} /> */}
                    <Artist id="artist">
                        <ProgressiveImage 
                            width="100%"
                            height="100%"
                            sm="10"
                            lg="1000"
                            url={slides[this.state.index].image.file.url}
                        />
                    </Artist>
                </Decorations>
                <Background>
                    <Line>
                        <svg viewBox="0 0 5120 500">
                            <path
                                d="M0 298.1h2516c2.4 0 4.6-1.3 5.8-3.4l22.8-42.1c2.8-5.2 10.6-4.3 12.1 1.5l36.6 142c1.8 6.8 11.6 6.5 12.8-.5L2673 30.4c1.4-7.5 12.2-7.1 13 .5l47.9 438.3c.8 7.6 11.8 7.9 13 .4l40.4-241.3c1.2-7 11.1-7.4 12.9-.5l13.7 55.1c1.6 6.4 10.5 6.7 12.6.5l5.3-15.4c2-5.8 10-6 12.3-.4l12.7 31.1H5120"
                                fill="none"
                                stroke="#fff"
                                strokeMiterlimit={10}
                                id="line"
                            />
                        </svg>
                    </Line>
                    <OrangeCircle id="orange-circle" src={OrangeBubbleIMG} />
                    <BlueCircle id="blue-circle" src={BlueBubbleIMG} />
                    <GreenCircle id="green-circle" src={GreenBubbleIMG} />
                    <OrangeBackground id="orange-background" />
                    <BlueBackground id="blue-background" />
                    <GreenBackground id="green-background" />
                </Background>
            </Container>
        )

    }
}


export default SliderComponent

const Container = styled.div`
    width:100%;
    height:750px;
    position: relative;
    background-color:#ebebeb;
    display:flex;

    ${up('xs')} {
        height:550px;
        margin-bottom:30px;
    }
    
    ${up('sm')} {
        height:728px;
    }
    
    ${up('md')} {
        height:728px;
        margin-bottom:35px;
    }

    ${up('lg')} {
        height:580px;
        margin-bottom:40px;
    }
    
    ${up('xl')} {
        height:900px;
        margin-bottom:80px;
    }
`

const Background = styled.div`
    width:100%;
    height:100%;
    position:absolute;
    overflow:hidden;
    top:0;
    left:0;
    z-index:1;
`

const OrangeBackground = styled.div`
    width:100%;
    height:100%;
    background-color:${vars.ORANGE};
    position:absolute;
    top:0;
    left:0;
    opacity:0;
    z-index:1;
`

const BlueBackground = styled.div`
    width:100%;
    height:100%;
    background-color:${vars.BLUE};
    position:absolute;
    top:0;
    left:0;
    opacity:0;
    z-index:2;
`

const GreenBackground = styled.div`
    width:100%;
    height:100%;
    background-color:${vars.GREEN};
    position:absolute;
    top:0;
    left:0;
    opacity:0;
    z-index:4;
`

const OrangeCircle = styled.img`
    position:absolute;
    z-index:4;
    opacity:0;

    ${up('xs')} {
        width:75%;
        bottom:-40px;
        left:0;
        right:0;
        margin-left:auto;
        margin-right:auto;
    }

    ${up('sm')} {
        width:90%;
        bottom:-0px;
    }

    ${up('md')} {
        width:90%;
        left:50%;
    }

    ${up('lg')} {
        left:50%;
        width:50%;
    }

    ${up('xl')} {
        left:50%;
        width:50%;
        max-width: 800px;
        top:40px;
        margin-left:-120px;
    }
`

const BlueCircle = styled.img`
    position:absolute;
    z-index:5;
    opacity:0;

    ${up('xs')} {
        width:75%;
        bottom:-40px;
        left:0;
        right:0;
        margin-left:auto;
        margin-right:auto;
    }

    ${up('sm')} {
        width:90%;
        bottom:-0px;
    }

    ${up('md')} {
        width:90%;
        left:50%;
    }

    ${up('lg')} {
        left:50%;
        width:50%;
    }

    ${up('xl')} {
        left:50%;
        width:50%;
        max-width: 800px;
        top:40px;
        margin-left:-120px;
    }
`

const GreenCircle = styled.img`
    position:absolute;
    z-index:6;
    opacity:0;

    ${up('xs')} {
        width:75%;
        bottom:-40px;
        left:0;
        right:0;
        margin-left:auto;
        margin-right:auto;
    }

    ${up('sm')} {
        width:90%;
        bottom:-0px;
    }

    ${up('md')} {
        width:90%;
        left:50%;
    }

    ${up('lg')} {
        left:50%;
        width:50%;
    }

    ${up('xl')} {
        left:50%;
        width:50%;
        max-width: 800px;
        top:40px;
        margin-left:-120px;
    }
`

const Line = styled.div`
    position:absolute;
    z-index:8;

    ${up('xs')}{
        left:50%;
        bottom:54px;
        margin-left:-860px;
        width: 1816px;
        height: 186px;
    }

    ${up('sm')}{
        bottom:130px;
        margin-left:-840px;
    }

    ${up('md')}{
        bottom: 390px;
        margin-left: -1290px;
        width: 2560px;
        height: 225px;
    }

    ${up('lg')}{
        bottom: 240px;
        margin-left: -1440px;
        width: 3000px;
        height: 264px;
    }

    ${up('xl')}{
        bottom: 470px;
        margin-left: -1600px;
        width: 3200px;
        height: 264px;
    }
`

const Content = styled.div`
    position:relative;
    z-index:10;
    width:100%;
    height:100%;
    max-width:1280px;
    margin-left:auto;
    margin-right:auto;
`

const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${up('xs')} {
        width:100%;
        height:70%;
        text-align:center;
        padding-left:16px;
        padding-right:16px;
    }

    ${up('sm')} {
        width:100%;
        height:60%;
    }

    ${up('md')} {
        width:70%;
        height:100%;
        text-align:left;
    }

    ${up('lg')} {
        width:60%;
        height:100%;
        padding-left:20px;
        padding-right:20px;
    }

    ${up('xl')} {
        width:50%;
        height:100%;
        padding-left:0px;
        padding-right:0px;
    }
`

const TextWrap = styled.div`
    overflow-y:hidden;

    ${up('xs')} {
        position:relative;
    }

    ${up('sm')} {

    }

    ${up('md')} {
        position:absolute;
        width:60%;
        top:197px;
    }

    ${up('lg')} {
        top:151px;
        padding-left:20px;
    }

    ${up('xl')} {
        padding-left:0px;
        left:0;
        top:250px;
        width:50%;
    }
`

const Title = styled.h1`
    padding:0;
    margin:0;
    color:white;

    ${up('xs')} {
        font-size:40px;
        line-height:40px;
        margin-bottom:18px;
    }

    ${up('sm')} {
        font-size:40px;
    }

    ${up('md')} {
        font-size:70px;
        line-height:64px;
        margin-bottom:30px;
    }

    ${up('lg')} {
        font-size:80px;
        line-height:74px;
    }

    ${up('xl')} {
        font-size:90px;
        line-height:96px;
    }
`

const Description = styled.p`
    padding:0;
    margin:0;
    color:white;

    ${up('xs')} {
        font-size:14px;
        line-height:18px;
        width:100%;
    }

    ${up('sm')} {
        font-size:14px;
    }

    ${up('md')} {
        font-size:16px;
        line-height:24px;
        width:70%;
    }

    ${up('lg')} {
        font-size:16px;
        width:85%;
    }

    ${up('xl')} {
        font-size:18px;
        line-height:26px;
        width:90%;
    }
`

const Decorations = styled.div`
    position:absolute;
    width:100%;
    max-width:1280px;
    height:100%;
    margin-left:auto;
    margin-right:auto;
    right:0;
    left:0;
    z-index:5;
`

const Artist = styled.div`
    position:absolute;
    bottom:-3px;
    z-index:4;

    ${up('xs')} {
        width:65%;
        right:0px;
        left:0px;
        margin-left:auto;
        margin-right:auto;
    }

    ${up('sm')} {
        width:80%;
    }

    ${up('md')} {
        right:-100px;
        width:65%;
        margin-right:0px;
    }

    ${up('lg')} {
        right:0px;
        width:40%;
    }

    ${up('xl')} {
        width:50%;
    }

`

const Circle = styled.div`
    display:none;
    position:absolute;
    
    bottom:-150px;
    width:300px;
    height:300px;

    ${up('md')}{
        right:0px;
        display:block;
        transform:scale(.5);
    }
    
    ${up('lg')}{
        right:70px;
        transform:scale(.7);
    }
    
    ${up('xl')}{    
        right:0px;
        transform:scale(1);
    }

    img{
        position:absolute;
        left:110px;
        top:90px;
    }
`

const CircleText = styled.div`

    background-image:url(${CircleTextIMG});
    background-repeat:no-repeat;
    width:300px;
    height:300px;

    ${up('lg')}{
        
    }
    
    ${up('xl')}{
        
    }
    
`

const ButtonWrap = styled.div`
    position:absolute;

    ${up('xs')} {
        width:100%;
        bottom:20px;
        left:0;
        text-align:center;
    }

    ${up('sm')} {

    }

    ${up('md')} {
        text-align:left;
        bottom:-20px;
        left:0px;
        bottom: -24px;
        left: 40px;
    }

    ${up('lg')} {
        left: 20px;
    }

    ${up('xl')} {
        left: 0px;
    }
`

const Pagination = styled.div`
    display:flex;
    margin-left:auto;
    margin-right:auto;
    position:absolute;
    width:260px;

    ${up('xs')}{
        display:none;
    }
   
    ${up('sm')}{
        display:flex;
        bottom:370px;
        left:0;
        right:0;
    }

    ${up('md')}{
        bottom:80px;
        left:36px;
        right:auto;
    }

    ${up('lg')}{
        bottom:60px;
        left:20px;
    }

    ${up('xl')}{
        bottom:170px;
        left:00px;
    }
`

const Pill = styled.div`
    width:100%;
    height:2px;
    margin-left:4px;
    margin-right:4px;
    background-color:white;
    cursor: pointer;
    ${props => props.selected ? "border-top:2px solid white;" : ""};
    ${props => props.selected ? "border-bottom:2px solid white;" : ""};
    ${props => props.selected ? "opacity:1" : "opacity:.7"};

    &:hover{
        opacity:.3;
    }
`