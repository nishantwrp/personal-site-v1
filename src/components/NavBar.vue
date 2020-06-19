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
        <router-link v-for="page in pages" :key="page.title" :to="page.link">
          <v-btn outline color="primary">{{ page.title }}</v-btn>
        </router-link>
        <span
          v-for="externalLink in externalLinks"
          :key="externalLink.title"
          v-on:click="redirectTo(externalLink.link, externalLink.title)"
        >
          <v-btn color="primary">{{ externalLink.title }}</v-btn>
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
        <router-link v-for="page in pages" :key="page.title" :to="page.link">
          <v-btn outline color="primary">{{ page.title }}</v-btn>
        </router-link>
        <span
          v-for="externalLink in externalLinks"
          :key="externalLink.title"
          v-on:click="redirectTo(externalLink.link, externalLink.title)"
        >
          <v-btn color="primary">{{ externalLink.title }}</v-btn>
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
          <router-link :to="page.link">
            <v-list-tile-content>
              <v-list-tile-title>{{ page.title }}</v-list-tile-title>
            </v-list-tile-content>
          </router-link>
        </v-list-tile>

        <v-list-tile>
          <span v-for="externalLink in externalLinks" v-on:click="redirectTo(externalLink.link, externalLink.title)" :key="externalLink.title">
            <v-list-tile-content>
              <v-list-tile-title>{{ externalLink.title }}</v-list-tile-title>
            </v-list-tile-content>
          </span>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { socialLinkClick } from "../js/analytics";
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
          title: "Home",
          link: "/"
        },
        {
          title: "Categories",
          link: "/categories/"
        },
        {
          title: "Projects",
          link: "/categories/project/"
        },
        {
          title: "Blog",
          link: "/categories/blog/"
        }
      ],
      externalLinks: [
        {
          title: "Resume",
          link: "https://github.com/nishantwrp/my-cv/raw/master/nishantwrp.pdf"
        }
      ]
    };
  },
  methods: {
    redirectTo(link, label) {
      socialLinkClick(this, label);
      window.open(link, '_blank');
    }
  }
};
</script>

<style module lang="css">
a {
  text-decoration: none;
}
</style>
