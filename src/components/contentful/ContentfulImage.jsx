import React from "react"

import ProgressiveImage from "../base/ProgressiveImage/ProgressiveImage"

const ContentfulImage = ({ id, name, width }) => {
    const high = `//${process.env.GATSBY_CONTENTFUL_IMAGE_URL}/${process.env.GATSBY_CONTENTFUL_SPACE_ID}/${id}/${process.env.GATSBY_CONTENTFUL_IMAGE_TOKEN}/${name}`
    const low = ``

    console.log(high)
    console.log(low)

    return <div />
}

export default ContentfulImage