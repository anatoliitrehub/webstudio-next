/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: "export",
  basePath: "/webstudio-next",
  images: {
    // unoptimized: true,
    loader: "akamai",
    path: "",
  },
  assetPrefix: isProd ? "https://anatoliitrehub.github.io" : undefined,
};

export default nextConfig;
