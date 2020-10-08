// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';

import Vuetify from 'vuetify';
import colors from 'vuetify/es5/util/colors';
import 'vuetify/dist/vuetify.min.css';

import VueMarkdown from 'vue-markdown';

const headLinks = [
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Montserrat:400,700,200|Balsamiq+Sans'
  },
  {
    rel: 'stylesheet',
    href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css'
  },
  {
    rel: 'stylesheet',
    href: '/prism/prism.css'
  },
  {
    rel: 'stylesheet',
    href: '/style.css'
  }
]

const headScripts = [
  {
    src: '/prism/prism.js',
    body: false
  }
]

export default function (Vue, { appOptions, router, head, isClient }) {
  // Links in <head> tag
  for (let headLink of headLinks) {
    head.link.push(headLink);
  }

  // Scripts in <head> or <body> tag
  for (let headScript of headScripts) {
    head.script.push(headScript);
  }

  // Vuetify Config
  Vue.use(Vuetify, {
    theme: {
      primary: colors.indigo.base,
      secondary: colors.indigo.darken3,
      accent: colors.indigo.accent4
    },
    iconfont: "fa"
  });

  // Markdown Parser
  Vue.component('vue-markdown', VueMarkdown);

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
