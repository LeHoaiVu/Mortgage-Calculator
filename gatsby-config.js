require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: 'Gatsby Contentful Starter',
        description: 'Official Contentful Gatsby Starter',
    },
    plugins: [
        'gatsby-transformer-sharp',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sharp',
        '@contentful/gatsby-transformer-contentful-richtext',
        'gatsby-plugin-image',
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID || 'fzzirg48hb5s',
                accessToken:
                    process.env.CONTENTFUL_ACCESS_TOKEN ||
                    'yPBhssM3pQaVz7uomeDYJ36m3QRPzeKWdDuK8YfaM-c',
                // host: process.env.CONTENTFUL_HOST,
            },
        },
    ],
}
