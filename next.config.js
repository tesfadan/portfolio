/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true
  },
  turbopack: {
    root: __dirname
  }
};

module.exports = nextConfig;
