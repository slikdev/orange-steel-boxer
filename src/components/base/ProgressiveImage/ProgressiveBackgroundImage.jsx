import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { gsap } from "gsap"

const Image = styled.div`
    display:${props => props.display};
    width: ${props => props.width};
    height: ${props => props.height};
    position:relative;
    background-color: ${props => props.color};
    overflow: hidden;
    ${props => props.src ? `background-image:url(${props.src})` : ``};
    background-size: ${props => props.size};
    background-position:${props => props.position};
    background-repeat:no-repeat;
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

class ProgressiveBackgroundImage extends React.Component{

    constructor(props){
        super(props)
        this.hash = this.makeid(20)
        this.state = { loaded: false }
        this.image = React.createRef()
    }

    makeid(length) {
        var result = ''
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        var charactersLength = characters.length
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength))
        }
        return result
    }

    componentDidMount() {
        const img = this.image.current
        if (img && img.complete) {
            this.handleImageLoaded();
        }
     }

     handleImageLoaded() {
        if (!this.state.loaded) {
            this.setState({ loaded: true })
            gsap.to(this.image.current, { duration:1.5, opacity:1, delay:.5, ease:"expo.out" })
        }
    }

    render(){

        const { width, height, url, lg, sm, size, position, color } = this.props

        return(
            <Image 
                width={width}
                height={height}
                src={`${url}?w=${sm}`} 
                size={size}
                position={position}
                color={color}
            >
            <High 
                id={`${this.hash}`}
                src={`${url}?w=${lg}`} 
                width={width} 
                ref={this.image} 
                onLoad={() => this.handleImageLoaded()}
            />
            </Image>
        )

    }
}

ProgressiveBackgroundImage.propTypes = {
    sm: PropTypes.string.isRequired,
    lg: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    display: PropTypes.string,
    size: PropTypes.string,
    position: PropTypes.string,
    color: PropTypes.string,
}

ProgressiveBackgroundImage.defaultProps = {
    width: '100px',
    height: '100px',
    size: '100% auto',
    position: 'top left',
    display: 'inline-block',
    color: 'white',
}

export default ProgressiveBackgroundImage