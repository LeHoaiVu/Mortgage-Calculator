import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Seo = (props) => {
    const { lang = 'en', title, services } = props

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
        />
    )
}

export default Seo
