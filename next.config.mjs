/** @type {import('next').NextConfig} */
const gtaSlugs = ["mississauga", "oakville", "vaughan", "markham", "brampton", "pickering", "king-city"];
const redirects = gtaSlugs.map((slug) => ({
  source: `/mobile-detailing-gta/${slug}`,
  destination: `/${slug}`,
  permanent: true,
}));

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return redirects;
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", port: "", pathname: "/**" },
    ],
  },
};

export default nextConfig;
