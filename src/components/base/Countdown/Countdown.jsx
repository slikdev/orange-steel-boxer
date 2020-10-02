import React from "react"
import styled from "styled-components"
import { up } from "styled-breakpoints"
import moment from "moment-timezone"
import CountdownComponent from "react-countdown"

import vars from "../../../theme/styles/vars"

class Countdown extends React.Component {

    state = {
        days:0,
        hours:0,
        mins:0,
        seconds:0,
        timer: null
    }

    componentDidMount(){
        this.calculateTime()
        let interval = setInterval(() => this.calculateTime(), 1000)
        this.setState({ interval: interval })
    }

    componentWillUnmount(){
        clearInterval(this.state.interval)
    }

    calculateTime(){

        const local = moment(this.props.date).tz(moment.tz.guess())

        const now = new Date()
        const diff = (local.valueOf() / 1000) - (now.getTime() / 1000)
        const duration = moment.duration(diff * 1000, 'milliseconds')


        this.setState({
            months: duration.months(),
            days: duration.days(),
            hours: duration.hours(),
            mins: duration.minutes(),
            seconds: duration.seconds(),
        })
        
    }

    render(){

        console.log(this.props.date)

        const renderer = ({ days, hours, minutes, seconds, completed }) => {

            return(
                <>
                    {!completed && 
                    <React.Fragment>
                        <Box>
                            <Number>{days}</Number>
                            <Label>days</Label>
                        </Box>
                        <Box>
                            <Number>{hours}</Number>
                            <Label>hours</Label>
                        </Box>
                        <Box>
                            <Number>{minutes}</Number>
                            <Label>mins</Label>
                        </Box>
                        <Box>
                            <Number>{seconds}</Number>
                            <Label>seconds</Label>
                        </Box>
                    </React.Fragment>
                    }
                </>
            )

        }

        

        let st = moment(this.props.date).toDate()

        return(
            <Container>
                <CountdownComponent 
                    date={st}
                    renderer={renderer}
                />
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

    ${up('md')}{
        max-width:352px;
    }


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