import React from "react"
import styled from "styled-components"

class VideoPlayer extends React.Component  {

    constructor(props) {
        super(props)
        this.player = null
    }
    
    componentDidMount() {
        if (typeof window !== "undefined" && typeof document !== "undefined") {
            const plyr = require("plyr")
            this.player = new plyr(`#${this.props.hash}`)
        }
    }

    render(){
        return(
            <Video id={this.props.hash} muted controls playsInline>
                <source src={this.props.url} type="video/mp4" />
            </Video>
        )
    }
}

export default VideoPlayer

const Video = styled.video`
  width:100%;
`