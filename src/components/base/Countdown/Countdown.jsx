import React from "react"
import styled from "styled-components"
import moment from "moment-timezone"

import vars from "../../../theme/styles/vars"

class Countdown extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            days:0,
            hours:0,
            mins:0,
            seconds:0,
        }

        this.timer = null
    }

    componentDidMount(){
        setInterval(() => this.calculateTime(), 1000)
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    calculateTime(){

        const tz = moment.tz.guess()
        const date = moment.tz(this.props.date, tz)
        const now = new Date()
        const diff = (date.valueOf() / 1000) - (now.getTime() / 1000)
        const duration = moment.duration(diff * 1000, 'milliseconds')

        this.setState({
            days: duration.days(),
            hours: duration.hours(),
            mins: duration.minutes(),
            seconds: duration.seconds(),
        })
        
    }

    render(){
        return(
            <Container>
                <Box>
                    <Number>{this.state.days}</Number>
                    <Label>days</Label>
                </Box>
                <Box>
                    <Number>{this.state.hours}</Number>
                    <Label>hours</Label>
                </Box>
                <Box>
                    <Number>{this.state.mins}</Number>
                    <Label>mins</Label>
                </Box>
                <Box>
                    <Number>{this.state.seconds}</Number>
                    <Label>seconds</Label>
                </Box>
            </Container>
        )
    }

}

export default Countdown

const Container = styled.div`
    display:inline-flex;
    flex-direction:row;
    height:68px;
    margin-top:20px;
    max-width:312px;
`

const Box = styled.div`
    background-color:${vars.DARK_ORANGE};
    margin:2px;
    width:68px;
    height:100%;
    border-radius:12px;
    position:relative;
    text-align:center;
`

const Number = styled.span`
    color:white;
    font-weight:600;
    font-size:30px;
    padding-top:12px;
    display:inline-block;
`

const Label = styled.span`
    color:white;
    font-weight:600;
    font-size:9px;
    display:block;
    position:absolute;
    bottom:10px;
    text-transform:uppercase;
    margin-left:auto;
    margin-right:auto;
    left:0;
    right:0;
`