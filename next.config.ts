import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML in out/ so GitHub Pages can host it (no Node server there).
  output: "export",
  // GitHub Pages serves this repo under /portfolio; the workflow sets it.
  basePath: process.env.PAGES_BASE_PATH || "",
  // Pages serves folder/index.html, so /career/ instead of /career.html.
  trailingSlash: true,
  // No image server on Pages.
  images: { unoptimized: true },
};

export default nextConfig;
