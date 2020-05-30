const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer");
const withOffline = require("next-offline");

module.exports = withPlugins([
	[
		withBundleAnalyzer,
		{
			enabled: process.env.ANALYZE === "true"
		}
	],

	[
		withOffline,
		{
			workboxOpts: {
				swDest: process.env.NEXT_EXPORT
					? "service-worker.js"
					: "static/service-worker.js",
				runtimeCaching: [
					{
						urlPattern: /^https?.*/,
						handler: "NetworkFirst",
						options: {
							cacheName: "offlineCache",
							expiration: {
								maxEntries: 200
							}
						}
					}
				]
			},
			experimental: {
				async rewrites() {
					return [
						{
							source: "/service-worker.js",
							destination: "/_next/static/service-worker.js"
						}
					];
				}
			}
		}
	]
]);
