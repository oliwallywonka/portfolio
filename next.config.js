/*const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    })

    return config
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/",
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig*/

module.exports = {
  reactStricMode: true,
  swcMinify: true
}
