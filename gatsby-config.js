module.exports = {
	siteMetadata: {
		title: 'Topicfly',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Topicfly',
				short_name: 'topicfly',
				start_url: '/',
				background_color: '#663399',
				theme_color: '#663399',
				display: 'minimal-ui',
				icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
			},
		},
		'gatsby-plugin-offline',
		`gatsby-transformer-remark`,
		`gatsby-plugin-postcss`,
	],
}
