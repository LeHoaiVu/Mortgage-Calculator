import { graphql } from 'gatsby'
import get from 'lodash/get'
import React from 'react'
import Seo from '../components/seo'
import ServicesPage from '../components/services'

class Services extends React.Component {
    render() {
        const data = get(this, 'props.data')

        //services which get from graphql query
        const services = data && data.allContentfulMortgageCalculator.edges

        return (
            <>
                <Seo title="Mortgage Calculator" services={services} />
                {services && <ServicesPage services={services} />}
            </>
        )
    }
}

export default Services

export const pageQuery = graphql`
    query Services {
        allContentfulMortgageCalculator {
            edges {
                node {
                    title
                    subtitle
                }
            }
        }
    }
`
