/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "images.unsplash.com",
      "sparksgallery.com",
      "i0.wp.com",
      "static.spotapps.co",
      "ballastpoint.com",
      "image.shutterstock.com",
      "www.restaurantnews.com",
      "popmenucloud.com",
      "images.squarespace-cdn.com",
      "images.pexels.com",
      "s3.us-west-1.amazonaws.com"
    ],
  },
};

module.exports = nextConfig;
