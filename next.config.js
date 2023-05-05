const withPlugins = require('next-compose-plugins');
const nextTranslate = require('next-translate-plugin')
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = withPlugins([
  nextTranslate(),
  {
    experimental: {
      appDir: true,
    },
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
      unoptimized: false
    },
    defaultLocale: 'en-US',
  }
])

module.exports = nextConfig;