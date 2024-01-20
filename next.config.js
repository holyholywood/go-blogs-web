/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "via.placeholder.com",
      "dummyimage.com",
      "i.pravatar.cc",
      "ui-avatars.com",
      "127.0.0.1",
      "localhost",
      "api-ngeblog.ditotisi.com",
      "placehold.co",
      "image.ditotisi.com",
    ],
    minimumCacheTTL: 1500000,
  },
};

module.exports = nextConfig;
