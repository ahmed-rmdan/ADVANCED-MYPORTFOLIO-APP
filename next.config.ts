import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   devIndicators: {
    appIsrStatus: false,
  },
  experimental: {
    nextScriptWorkers: false,

  },
    
};

export default nextConfig;
