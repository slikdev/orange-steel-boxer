import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"

const ContentfulNavigationComponent = ({ id, transition }) => {
    return (
        <nav>
            <li>
                <TransitionLink to="/" exit={transition.exit} entry={transition.entry}>GO HOME</TransitionLink>
            </li>
            <li>
            <TransitionLink to="/articles/about" exit={transition.exit} entry={transition.entry}>GO ABOUT</TransitionLink>
            </li>
        </nav>
    )
}

export default ContentfulNavigationComponent