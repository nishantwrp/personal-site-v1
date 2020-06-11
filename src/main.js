// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';

import Vuetify from 'vuetify';
import colors from 'vuetify/es5/util/colors';
import 'vuetify/dist/vuetify.min.css';

import Vuex from 'vuex';
import codeforces from './store/codeforces';

import VueCookies from 'vue-cookies'

import VueMarkdown from 'vue-markdown';

const headLinks = [
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900'
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700,200'
  },
  {
    rel: 'stylesheet',
    href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css'
  }
]

export default function (Vue, { appOptions, router, head, isClient }) {
  // Links in <head> tag
  for (let headLink of headLinks) {
    head.link.push(headLink);
  }

  // Vuetify Config
  const vuetifyOpts = {
    theme: {
      primary: colors.indigo.base,
      secondary: colors.indigo.darken3,
      accent: colors.indigo.accent4
    },
    iconfont: "fa"
  }
  Vue.use(Vuetify, {
    theme: {
      primary: colors.indigo.base,
      secondary: colors.indigo.darken3,
      accent: colors.indigo.accent4
    },
    iconfont: "fa"
  });
  // appOptions.vuetify = new Vuetify(vuetifyOpts);

  // Vuex
  Vue.use(Vuex);
  appOptions.store = new Vuex.Store({
    modules: {
      codeforces
    }
  });

  Vue.use(VueCookies);

  // Markdown Parser
  Vue.component('vue-markdown', VueMarkdown);

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
