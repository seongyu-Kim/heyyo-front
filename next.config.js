/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  async rewrites() {
    return [
      {
        source: "/api/users/register",
        destination: "http://15.165.120.144:8080/api/users/register",
      },
      {
        source: "/api/users/duplicate/nicknames/:nickname",
        destination:
            "http://15.165.120.144:8080/api/users/duplicate/nicknames/:nickname",
      },
      {
        source: "/api/users/duplicate/emails/:email",
        destination:
            "http://15.165.120.144:8080/api/users/duplicate/emails/:email",
      },
      {
        source: "/api/users/sms/:phoneNumber",
        destination: "http://15.165.120.144:8080/api/users/sms/:phoneNumber",
      },
      {
        source: "/api/users/login",
        destination: "http://15.165.120.144:8080/api/users/login",
      },
      {
        source: "/api/logout",
        destination: "http://15.165.120.144:8080/api/logout",
      },
      {
        source: "/api/users/passwords/:name/:email",
        destination:
            "http://15.165.120.144:8080/api/users/passwords/:name/:email",
      },
      {
        source: "/api/group-studies/recent",
        destination: "http://15.165.120.144:8080/api/group-studies/recent",
      },
      {
        source: "/api/group-studies/best",
        destination: "http://15.165.120.144:8080/api/group-studies/best",
      },
      {
        source: "/api/group-studies/recommend",
        destination: "http://15.165.120.144:8080/api/group-studies/recommend",
      },
    ];
  },
};

module.exports = nextConfig;
