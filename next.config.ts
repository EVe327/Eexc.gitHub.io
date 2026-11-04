import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // ========== 重点 basePath ==========
  // 如果仓库名字正好是：EVe327.github.io
  // basePath 注释掉，留空
  // 如果仓库名字不是用户名.github.io，例如仓库名叫 blog
  // basePath: "/blog"
  basePath: "",
};

export default nextConfig;
