// next.config.js
const withVideos = require('next-videos');

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config, options) {
        return config;
    }
};

module.exports = withVideos(nextConfig);
