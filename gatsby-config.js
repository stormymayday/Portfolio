/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: 'Aidar',
		description: 'Hello and welcome to my portfolio website!',
		author: 'Aidar',
		siteUrl: 'https://www.aaidar.dev'
	},
	plugins: [
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `assets`,
				path: `${__dirname}/src/assets/`
			}
		},
		{
			resolve: `gatsby-source-strapi`,
			options: {
				apiURL: `http://localhost:1337`,
				queryLimit: 1000, // Default to 100
				//  ONLY ADD TO ARRAY IF YOU HAVE DATA IN STRAPI !!!!
				contentTypes: [ `jobs`, `projects` ],
				singleTypes: [ `about` ]
			}
		},
		{
			resolve: `gatsby-plugin-prefetch-google-fonts`,
			options: {
				fonts: [
					{
						family: `Roboto`,
						variants: [ `400`, `700` ]
					},
					{
						family: `Open Sans`
					}
				]
			}
		}
	]
};
