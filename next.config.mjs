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
        {
          protocol: 'https',
          hostname: 'ibb.co.com',
          port: '',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com',
          port: '',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'avatars.githubusercontent.com',
          port: '',
          pathname: '**',
        },
      ],
    },
  };
  
  export default nextConfig;
  