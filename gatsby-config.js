const path = require("path");

module.exports = {
  siteMetadata: {
    title: "love-exercise的跑步记录",
    siteUrl: "https://run.kai666666.top",
    description: "Keep昵称：love-exercise",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-responsive-iframe",
          "gatsby-remark-smartypants",
          "gatsby-remark-widows",
          "gatsby-remark-external-links",
          {
            resolve: "gatsby-remark-autolink-headers",
            options: {
              className: "header-link",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        precision: 8,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
};
