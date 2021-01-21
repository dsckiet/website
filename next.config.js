const withPlugins = require("next-compose-plugins");
const withOffline = require("next-offline");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true"
});

module.exports = withPlugins(
	[[withBundleAnalyzer], [withOffline, { dontAutoRegisterSw: true }]],
	{
		target: "serverless",
		images: {
			loader: "cloudinary",
			path: "https://res.cloudinary.com/dsc-kiet/image/fetch"
		}
	}
);
