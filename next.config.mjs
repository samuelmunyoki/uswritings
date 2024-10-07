/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'ukwritings.com',
            pathname: '**',
          },
        ],
    },
};

export default nextConfig;
