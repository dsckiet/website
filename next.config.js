const withPlugins = require("next-compose-plugins");
const withOffline = require("next-offline");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true"
});

module.exports = withPlugins(
	[withBundleAnalyzer],
	[[withOffline, { dontAutoRegisterSw: true }]]
);
