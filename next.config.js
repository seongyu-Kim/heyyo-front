/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/api/users/register",
        destination: "http://3.35.176.114:8080/api/users/register",
      },
      {
        source: "/api/users/duplicate/nicknames/:nickname",
        destination:
          "http://3.35.176.114:8080/api/users/duplicate/nicknames/:nickname",
      },
      {
        source: "/api/users/duplicate/emails/:email",
        destination:
          "http://3.35.176.114:8080/api/users/duplicate/emails/:email",
      },
      {
        source: "/api/users/sms/:phoneNumber",
        destination: "http://3.35.176.114:8080/api/users/sms/:phoneNumber",
      },
      {
        source: "/api/users/login",
        destination: "http://3.35.176.114:8080/api/users/login",
      },
      {
        source: "/api/logout",
        destination: "http://3.35.176.114:8080/api/logout",
      },
    ];
  },
};

module.exports = nextConfig;
