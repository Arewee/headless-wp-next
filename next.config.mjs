/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '10134', // 🔥 ← din WordPress Local-port
          pathname: '/wp-content/uploads/**',
        },
      ],
    },
};

export default nextConfig;
