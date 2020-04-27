import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

function SEO({ title, description, keywords, image, meta, lang }) {

  return (
    <Helmet>
      <title>{ title }</title>
      <meta name="title" content={ title }/>
      <meta name="description" content={ description }/>
      <meta name="keywords" content={ keywords }/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content={ title }/>
      <meta property="og:description" content={ description }/>
      <meta property="og:image" content={ image }/>
      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:title" content={ title }/>
      <meta property="twitter:description" content={ description }/>
      <meta property="twitter:image" content={ image }/>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  title: ``,
  description: ``,
  keywords: ``,
  image: ``,
}

SEO.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  keywords: PropTypes.string,
  image: PropTypes.string,
}

export default SEO
