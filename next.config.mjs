/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: isGithubPages ? "/danang-golf-tour" : "",
  assetPrefix: isGithubPages ? "/danang-golf-tour/" : "",
};

export default nextConfig;
