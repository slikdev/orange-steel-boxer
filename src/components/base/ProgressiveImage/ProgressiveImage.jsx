import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { gsap } from "gsap"

const Image = styled.div`
    display:${props => props.display};
    width: ${props => props.width};
    height: ${props => props.height};
    position:relative;
    background-color:gray;
`

const Low = styled.img`
    width: 100%;
    height: auto;
    position:absolute;
    top:0;
    left:0;
    z-index:1;
`

const High = styled.img`
    width: ${props => props.width};
    height: auto;
    position:relative;
    top:0;
    left:0;
    z-index:10;
    opacity:0;
`

const ProgressiveImage = ({ url, width, height, lg, sm, alt }) => {

    function makeid(length) {
        var result = ''
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        var charactersLength = characters.length
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength))
        }
        return result
    }

    const hash = `image-${makeid(20)}`

    return(
        <Image 
            width={width}
            height={height}
        >
            <High 
                id={hash}
                src={`${url}?w=${lg}`} 
                width={width} 
                onLoad={() => {
                    gsap.to(`#${hash}`, { duration:.7, opacity:1, ease:"expo.out" })
                }}  
                alt={alt}
            />
            <Low 
                src={`${url}?w=${sm}`} 
                width={sm}
                height={height}
                alt={alt}
            />
        </Image>
    )
}

ProgressiveImage.propTypes = {
    sm: PropTypes.string.isRequired,
    lg: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    display: PropTypes.string,
    alt: PropTypes.string,
}

ProgressiveImage.defaultProps = {
    width: '100%',
    height: 'auto',
    display: 'inline-block',
    alt: ''
}

export default ProgressiveImage