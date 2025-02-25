/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'randomuser.me',
          port: '',
          pathname: '/api/portraits/**',
        },
        {
          protocol: 'https',
          hostname: 'i.ibb.co.com',
          port: '',
          pathname: '**',
        },
      ],
    },
  };
  
  export default nextConfig;
  