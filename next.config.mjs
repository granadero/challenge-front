import path from "path";

export default {
  sassOptions: {
    includePaths: [path.join(process.cwd(), "styles")],
  },
  images: {
    dangerouslyAllowSVG: true,
    unoptimized: true,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ["mlstatic.com", "localhost:3000"],
  },
};
