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
    overflow: hidden;
`

const Low = styled.img`
    width: 100%;
    height: auto;
    position:absolute;
    top:0;
    left:0;
    z-index:1;
    filter: blur(2px);
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

class ProgressiveImage extends React.Component{

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
            gsap.to(this.image.current, { duration:.7, opacity:1, ease:"expo.out" })
        }
    }

    render(){

        const { width, height, url, lg, sm } = this.props

        return(
            <Image 
                width={width}
                height={height}
            >
            <High 
                id={`${this.hash}`}
                src={`${url}?w=${lg}`} 
                width={width} 
                ref={this.image} 
                onLoad={() => this.handleImageLoaded()}
            />
            <Low 
                src={`${url}?w=${sm}`} 
                width={sm}
                height={height}
            />
            </Image>
        )

    }
}

ProgressiveImage.propTypes = {
    sm: PropTypes.string.isRequired,
    lg: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    display: PropTypes.string,
}

ProgressiveImage.defaultProps = {
    width: '100%',
    height: 'auto',
    display: 'inline-block',
}

export default ProgressiveImage