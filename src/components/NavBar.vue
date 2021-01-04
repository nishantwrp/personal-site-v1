<template>
  <div>
    <v-toolbar
      v-if="scrolled === false"
      style="background-color: #fafafa !important; border-color: #fafafa !important;"
      flat
      fixed
    >
      <v-toolbar-title>
        <router-link to="/">
          <Logo :logosize="25" :logocolor="'#3f51b5'" />
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <div v-show="$vuetify.breakpoint.mdAndUp">
        <span v-for="page in pages" :key="page.title">
          <router-link v-if="page.internal" :to="page.link">
            <v-btn v-if="page.highlight" color="primary">{{
              page.title
            }}</v-btn>
            <v-btn v-else outline color="primary">{{ page.title }}</v-btn>
          </router-link>
          <span v-else v-on:click="redirectTo(page.link, page.title)">
            <v-btn v-if="page.highlight" color="primary">{{
              page.title
            }}</v-btn>
            <v-btn v-else outline color="primary">{{ page.title }}</v-btn>
          </span>
        </span>
      </div>

      <v-toolbar-side-icon
        color="primary"
        v-show="$vuetify.breakpoint.smAndDown"
        @click.stop="drawer = !drawer"
      ></v-toolbar-side-icon>
    </v-toolbar>
    <!-- Scrolled Down -->

    <v-toolbar v-if="scrolled === true" color="white" fixed>
      <v-toolbar-title>
        <router-link to="/">
          <Logo :logosize="25" :logocolor="'#3f51b5'" />
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <div v-show="$vuetify.breakpoint.mdAndUp">
        <span v-for="page in pages" :key="page.title">
          <router-link v-if="page.internal" :to="page.link">
            <v-btn v-if="page.highlight" color="primary">{{
              page.title
            }}</v-btn>
            <v-btn v-else outline color="primary">{{ page.title }}</v-btn>
          </router-link>
          <span v-else v-on:click="redirectTo(page.link, page.title)">
            <v-btn v-if="page.highlight" color="primary">{{
              page.title
            }}</v-btn>
            <v-btn v-else outline color="primary">{{ page.title }}</v-btn>
          </span>
        </span>
      </div>

      <v-toolbar-side-icon
        color="primary"
        v-show="$vuetify.breakpoint.smAndDown"
        @click.stop="drawer = !drawer"
      ></v-toolbar-side-icon>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" temporary fixed>
      <v-list class="pt-0" dense>
        <v-list-tile v-for="page in pages" :key="page.title">
          <router-link v-if="page.internal" :to="page.link">
            <v-list-tile-content>
              <v-list-tile-title>{{ page.title }}</v-list-tile-title>
            </v-list-tile-content>
          </router-link>
          <span
            v-else
            v-on:click="redirectTo(page.link, page.title)"
            style="color: #3f51b5; cursor: pointer;"
          >
            <v-list-tile-content>
              <v-list-tile-title>{{ page.title }}</v-list-tile-title>
            </v-list-tile-content>
          </span>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { socialLinkClick } from "../js/analytics";
import { RESUME_URL } from "../constants";

import Logo from "./Logo";

export default {
  components: {
    Logo
  },
  props: {
    scrolled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      drawer: null,
      pages: [
        {
          title: "Categories",
          link: "/categories/",
          highlight: false,
          internal: true
        },
        {
          title: "Projects",
          link: "/projects/",
          highlight: false,
          internal: true
        },
        {
          title: "Blog",
          link: "/posts/",
          highlight: false,
          internal: true
        },
        {
          title: "Resume",
          link: RESUME_URL,
          highlight: true,
          internal: false
        }
      ]
    };
  },
  methods: {
    redirectTo(link, label) {
      socialLinkClick(this, label);
      window.open(link, "_blank");
    }
  }
};
</script>

<style module lang="css">
a {
  text-decoration: none;
}
</style>
