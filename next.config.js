const fs = require("fs");
const blogPostsFolder = "./content/blogPosts";

const getPathsForPosts = () => {
  return fs
    .readdirSync(blogPostsFolder)
    .map((blogName) => {
      const trimmedName = blogName.substring(0, blogName.length - 3);
      return {
        [`/blog/post/${trimmedName}`]: {
          page: "/blog/post/[slug]",
          query: {
            slug: trimmedName,
          },
        },
      };
    })
    .reduce((acc, curr) => {
      return { ...acc, ...curr };
    }, {});
};

module.exports = {
  distDir: 'build',
  // loader: "akamai",
  // path: "",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "external-content.duckduckgo.com**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com**",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  webpack: (configuration) => {
    configuration.module.rules.push({
      test: /\.md$/,
      use: "frontmatter-markdown-loader",
    });
    return configuration;
  },
  async exportPathMap(defaultPathMap) {
    // console.log(getPathsForPosts())
    return {
      ...defaultPathMap,
      ...getPathsForPosts(),
    };
  },
};
