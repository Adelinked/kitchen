/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer");

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  compiler: {
    removeConsole: isProd,
  },
  /*experimental: {
    webVitalsAttribution: ["CLS", "LCP"],
    // optimizeCss: true,
  },*/
  images: {
    minimumCacheTTL: 1000 * 60 * 60 * 24 * 7,
  },
  webpack(config, { dev, isServer }) {
    // Code splitting
    config.optimization.splitChunks.cacheGroups = {
      default: false,
      vendors: false,
    };

    config.optimization.splitChunks.chunks = "async";
    config.optimization.splitChunks.minSize = 20000;
    config.optimization.splitChunks.maxAsyncRequests = 5;
    config.optimization.splitChunks.maxInitialRequests = 3;

    //Only minimize the bundle in production
    if (!dev && !isServer) {
      config.optimization.minimize = true;
      config.optimization.concatenateModules = true;
      config.optimization.usedExports = true;
    }
    return config;
  },
};

module.exports = withContentlayer({ ...nextConfig });
