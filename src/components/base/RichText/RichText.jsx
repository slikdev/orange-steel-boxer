import React from "react"
import styled from "styled-components"
import { up } from "styled-breakpoints"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import VideoPlayer from "../VideoPlayer/VideoPlayer"
import vars from "../../../theme/styles/vars"

const RichText = ({ json }) => {

    const options = {
        renderNode: {
            [BLOCKS.HEADING_1]: (_, children) => <H1>{children}</H1>,
            [BLOCKS.HEADING_2]: (_, children) => <H2>{children}</H2>,
            [BLOCKS.HEADING_3]: (_, children) => <H3>{children}</H3>,
            [BLOCKS.PARAGRAPH]: (_, children) => <P>{children}</P>,
            [BLOCKS.UL_LIST]: (_, children) => <UL>{children}</UL>,
            [BLOCKS.OL_LIST]: (_, children) => <OL>{children}</OL>,
            [BLOCKS.EMBEDDED_ENTRY]: (node) => {
                console.log("EMBEDDED_ENTRY")
                console.log(node)
                if(node.data.target.sys.contentType.sys.id === "youtubeEmbed"){
                    return (
                        <VideoWrapper>
                            <YoutubeEmbed id={node.data.target.fields.id['en-US']} />
                        </VideoWrapper>
                    )
                }
            },
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                console.log("EMBEDDED_ASSET")
                console.log(node)
                if(node.data.target.fields.file['en-US'].contentType === "image/jpeg"){
                    return <IMG src={node.data.target.fields.file['en-US'].url} />
                }
                
                if(node.data.target.fields.file['en-US'].contentType === "video/mp4"){
                    return (
                        <VideoWrapper>
                            <VideoPlayer hash={`video-${node.data.target.sys.id}`} url={node.data.target.fields.file['en-US'].url} />
                        </VideoWrapper>
                    )
                }
            }
        }
    }

    return(
        <Container>
            { documentToReactComponents(json, options) }
        </Container>
    )
}

export default RichText

const Container = styled.div``

const H1 = styled.h1`

`

const H2 = styled.h2`

    ${up('xs')}{
        font-size:30px;
    }

    ${up('sm')}{

    }

    ${up('md')}{
        font-size:30px;
    }

    ${up('lg')}{
        font-size:50px;
    }

    ${up('xl')}{

    }

`

const H3 = styled.h3`

`

const P = styled.p`
    font-size: 16px;
    line-height: 28px;

    a{
        color:${vars.ORANGE};
    }
`

const UL = styled.ul``

const OL = styled.ol``

const IMG = styled.img`
    width:100%;
    margin-top:40px;
    margin-bottom:40px;
`

const VideoWrapper = styled.div`
    width:100%;
    margin-top:40px;
    margin-bottom:40px;
`

const ApectRatioBox = styled.div`
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    margin-bottom:30px;

    iframe{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`

const YoutubeEmbed = ({ id }) => (
    <ApectRatioBox>
        <iframe 
            title="youtube-player"
            width="560" 
            height="349"
            src={`https://www.youtube.com/embed/${id}`} 
            frameBorder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
        </iframe>
    </ApectRatioBox>
)