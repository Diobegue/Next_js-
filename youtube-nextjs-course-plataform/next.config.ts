import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
   remotePatterns: [
    {
      port: '',
      protocol: "https",
      hostname: "i.ytimg.com",
    },
  ],
  },
};

export default nextConfig;
 
  