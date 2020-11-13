import React from "react"
import styled from "styled-components"
import { up } from "styled-breakpoints"
import { InView } from "react-intersection-observer"

import vars from "../../../theme/styles/vars"

const InstructionsVideoComponent = ({ video }) => {

    return(
        <Container>
            <InView as="div" onChange={(inView, entry) => {
                inView ? document.getElementById('how-to-video').play() : document.getElementById('how-to-video').pause()
            }}> 
                <VideoMask>
                    <Video id="how-to-video" muted playsInline loop>
                        <source src={video.file.url} type="video/mp4" />
                    </Video>
                </VideoMask>
            </InView>
        </Container>
    )
} 

export default InstructionsVideoComponent

const Container = styled.div`
    width:100%;
    max-width:1280px;
    margin-left:auto;
    margin-right:auto;

    ${up('xs')}{
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

const VideoMask = styled.div`

    ${up('xs')}{
        display:block;
        -webkit-transform: translateZ(0);
        background-color:black;
        border-radius: 20px; 
        overflow: hidden; 
        height: 168px;
    }

    ${up('sm')}{
        width: 100%;
        height: 200px;
    }

    ${up('md')}{
        width: 100%;
        height: 410px;
        
    }
    
    ${up('lg')}{
        height: 720px;
        
    }
`

const Video = styled.video`
    width:100%;
    height:auto;
    opacity:.95;
    -webkit-transform: translateZ(0);

    ${up('md')}{
        position:absolute;
    }
    
`