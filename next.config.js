const withPlugins = require('next-compose-plugins')

// you may tweak other base Next options in this object
// we are using it to tell Next to also handle .md and .mdx files
const nextConfig = { pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx', 'md'] }

module.exports = withPlugins(
  [
  ],
  nextConfig
)