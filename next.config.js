const SWPrechcheWebpackPlugin = require('sw-precache-webpack-plugin')
const withOffline = require('next-offline')

const nextConfig = {
    webpack: config => {
        config.plugins.push(
            new SWPrechcheWebpackPlugin({
                minify: 'true',
                staticFileGlobsIgnorePatterns: [/\.next\//],
                runtimeCaching: [{
                    handler: 'networkFirst',
                    urlPattern: /^https?.*/
                }]
            })
        )
        return config
    }
}

module.exports = withOffline(nextConfig)