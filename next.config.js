/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/planner3",
};

module.exports = nextConfig;

const withVideos = require('next-videos')

module.exports = withVideos()