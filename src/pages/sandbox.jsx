import React from "react"

import ProgressiveImage from "../components/base/ProgressiveImage/ProgressiveImage"

const Sandbox = ({}) => (
  <div>
    <div>
      <ProgressiveImage 
        width="100px"
        height="100px"
        lg="100"
        sm="10"
        url={"//images.ctfassets.net/hp2vgzfid873/4TNyoatCWxg7JUmut7Anfj/e7f8742b97613f0fb6a0612c1b7bfef8/Event-Detail_02_D.jpg"}
      />
    </div>
    <div>
      <ProgressiveImage 
        width="800px"
        height="800px"
        lg="800"
        sm="10"
        url="//images.ctfassets.net/hp2vgzfid873/dWM3iWKXRX6UdyeNVIwXt/f603e48330479bd7a05a73ea7a9ade8c/Event-Detail_03_D.jpg"
      />
    </div>
    <div>
      <ProgressiveImage 
        width="400px"
        height="400px"
        lg="800"
        sm="10"
        url="//images.ctfassets.net/hp2vgzfid873/18ArsEDCNrAiUNISUmsVKe/d946569bdc08ddfc15bfc48aaf567dcb/Event-Detail_01_D.jpg"
      />
    </div>
    <div>
      <ProgressiveImage 
        width="800px"
        lg="1600"
        sm="10"
        url="//images.ctfassets.net/hp2vgzfid873/3sdzOKXPlhm9yMmJmS8kku/cf340ae9517fd64e360bbc98d4309674/rufus-du-sol-press-photo-by-LeFawnHawk.jpg"
      />
    </div>
  </div>
    
)

export default Sandbox