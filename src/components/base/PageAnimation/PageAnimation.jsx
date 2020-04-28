import React from "react"
import Lottie from "react-lottie"
import { isMobile, isTablet } from "react-device-detect"

import widescreenAnimationData from "./page-transition-landscape.json"
import portraitAnimationData from "./page-transition-portrait.json"

class PageAnimation extends React.Component {

  render () {

    let animationData = widescreenAnimationData

    if(window.innerWidth > window.innerHeight){
      animationData = widescreenAnimationData
      console.log('widescreen')
    }else{
      animationData = portraitAnimationData
      console.log('portrait')
    }

    const options = {
      loop: false,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }

    return (
      <div style={{ display:this.props.playing ? 'block' : 'none' }}>
       <Lottie 
          options={options}
          height={'100vh'}
          width={'100vw'}
          isStopped={!this.props.playing}
          class="page-transition-lottie"
        />
      </div>
    )
  }

}

export default PageAnimation