import type { NextConfig } from "next";
import path from "path";
import dotenv from "dotenv";

// Load the shared .env from packages/prisma
dotenv.config({ path: path.resolve(__dirname, "../../packages/prisma/.env") });

const nextConfig: NextConfig = {
  /* your config options */
};

export default nextConfig;
