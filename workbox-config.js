module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,css,png,jpg,js,json,md}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};