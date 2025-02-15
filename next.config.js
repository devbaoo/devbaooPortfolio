/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    metadataBase: "https://devbaoo.azurewebsites.net/",  // Thay "yourdomain.com" bằng tên miền của bạn
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'user-images.githubusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.getlifegard.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.valuemetrix.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'github-production-user-asset-6210df.s3.amazonaws.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'buttons-animations-kv.vercel.app',
        pathname: '/**',
      },
    ],
  },
};
