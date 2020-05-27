module.exports = {
  siteMetadata: {
    name: "Amorpheuz's Portfolio",
    description: "A blog and portfolio site for Yash Dave",
    keywords: ["tech", "blog"],
    siteUrl: "https://amorpheuz.github.io",
    siteImage: "/images/favicon-128x128.png",
    profileImage: `/images/favicon-64x64.png`,
    lang: `en`,
    config: {
      sidebarWidth: 280
    }
  },
  plugins: [
    {
      resolve: "@pauliescanlon/gatsby-theme-terminal",
      options: {
        source: ["posts", "projects"]
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://amorpheuz.github.io`,
      },
    }
  ]
};
