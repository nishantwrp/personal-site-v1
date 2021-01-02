require("dotenv").config();

var slugify = require("slugify");

function slug(title) {
  return slugify(title, { lower: true });
}

module.exports = {
  siteName: "Nishant Mittal",
  siteUrl: "https://www.nishantwrp.com",
  plugins: [
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-114654874-2"
      }
    },
    {
      use: "gridsome-plugin-pwa",
      options: {
        title: "Nishant Mittal",
        shortName: "nishantwrp",
        icon: "src/favicon.png",
        disableServiceWorker: false
      }
    },
    {
      use: "@gridsome/source-contentful",
      options: {
        space: process.env.CONTENTFUL_SPACE,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: "cdn.contentful.com",
        environment: "master",
        typeName: "Contentful"
      }
    },
    {
      use: "gridsome-plugin-gitalk",
      options: {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        repo: "nishantwrp-website",
        owner: "nishantwrp",
        admin: ["nishantwrp"],
        distractionFreeMode: true
      }
    },
    {
      use: "@gridsome/plugin-sitemap"
    },
    {
      use: "gridsome-plugin-robots"
    },
    {
      use: "gridsome-plugin-monetization",
      options: {
        paymentPointer: "$ilp.uphold.com/GWLyAddY39LY",
        global: true
      }
    }
  ],
  templates: {
    ContentfulTag: [
      {
        path: node => {
          return "/categories/" + slug(node.title);
        },
        component: "./src/templates/Tag.vue"
      }
    ],
    ContentfulPost: [
      {
        path: node => {
          return "/posts/" + slug(node.title);
        },
        component: "./src/templates/Post.vue"
      }
    ]
  }
};
