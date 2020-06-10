require('dotenv').config()

var slugify = require('slugify')

function slug(title) {
  return slugify(title, {lower: true});
}

module.exports = {
  siteName: 'Nishant Mittal',
  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-114654874-2'
      }
    },
    {
      use: 'gridsome-plugin-pwa',
      options: {
        title: 'Nishant Mittal',
        shortName: 'nishantwrp',
        icon: 'src/favicon.png',
        disableServiceWorker: false
      }
    },
    {
      use: '@gridsome/source-contentful',
      options: {
        space: process.env.CONTENTFUL_SPACE,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful'
      }
    }
  ],
  templates: {
    ContentfulTag: [
      {
        path: (node) => {
          return '/categories/' + slug(node.title);
        },
        component: './src/templates/Tag.vue'
      }
    ]
  }
}
