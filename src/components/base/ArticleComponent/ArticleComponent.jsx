import React from "react"
import styled from "styled-components"
import { up } from "styled-breakpoints"

import RichText from "../RichText/RichText"

const ArticleComponent = ({ title, short, category, standout, image, body }) => {

    return(
        <div>
            <div>{title}</div>
            <RichText json={body.json} />
        </div>
    )
}

export default ArticleComponent