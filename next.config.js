require("dotenv");
const path = require("path");

module.exports = (phase, { defaultConfig }) => {
  const dev = process.env.NODE_ENV === "development";
  // console.log("dev", dev);
  let nextConfig;

  if (dev) {
    nextConfig = {
      swcMinify: true,
      reactStrictMode: true,
      publicRuntimeConfig: {
        staticFolder: '/public',
      },
      pageExtensions: ['mdx', 'js', 'jsx', 'ts', 'tsx'],
      sassOptions: {
        includePaths: [path.join(__dirname, './public/assets')]
      },
    }
  } else {
    nextConfig = {
      swcMinify: true,
      reactStrictMode: true,
      publicRuntimeConfig: {
        staticFolder: '/public',
      },
      pageExtensions: ['mdx', 'js', 'jsx', 'ts', 'tsx'],
      sassOptions: {
        includePaths: [path.join(__dirname, './public/assets')]
      },
    }
  }

  return nextConfig
}
