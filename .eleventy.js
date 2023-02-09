module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('CNAME');
	eleventyConfig.addPassthroughCopy('favicon.ico');
};
