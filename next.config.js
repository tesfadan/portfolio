/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/",
        permanent: true
      },
      {
        source: "/portfolio",
        destination: "/",
        permanent: true
      },
      {
        source: "/portfolio/:path*",
        destination: "/",
        permanent: true
      },
      {
        source: "/projects",
        destination: "/",
        permanent: true
      },
      {
        source: "/projects/:path*",
        destination: "/",
        permanent: true
      }
    ];
  },
  turbopack: {
    root: __dirname
  }
};

module.exports = nextConfig;
