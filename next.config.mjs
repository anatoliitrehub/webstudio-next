/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/webstudio-next",
  images: {
    unoptimized: true,
    loader: "akamai",
    path: "",
  },
  //   assetPrefix: "./",
};

export default nextConfig;
