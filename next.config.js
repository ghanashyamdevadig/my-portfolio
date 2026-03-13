const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/my-portfolio" : "",
  assetPrefix: isProd ? "/my-portfolio/" : "",
};

module.exports = nextConfig;
