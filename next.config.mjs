/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
    SPOONACULAR_API_KEY: process.env.SPOONACULAR_API_KEY,
  },
};

export default nextConfig;
