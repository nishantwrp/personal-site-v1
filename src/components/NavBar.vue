<template>
  <div>
    <v-toolbar v-if="scrolled === false" color="white" flat fixed>
      <v-toolbar-title>
        <router-link to="/">
          <Logo :logosize="25" :logocolor="'#3f51b5'"/>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <div v-show="$vuetify.breakpoint.mdAndUp">
        <router-link to="/">
          <v-btn outline color="primary">Home</v-btn>
        </router-link>
        <router-link to="/portfolio">
          <v-btn outline color="primary">Portfolio</v-btn>
        </router-link>
        <router-link to="/contact">
          <v-btn outline color="primary">Contact</v-btn>
        </router-link>
        <a href="https://www.visualcv.com/nishantwrp/pdf/" target="_blank">
          <v-btn color="primary">DOWNLOAD CV</v-btn>
        </a>
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
          <Logo :logosize="25" :logocolor="'#3f51b5'"/>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <div v-show="$vuetify.breakpoint.mdAndUp">
        <router-link to="/">
          <v-btn outline color="primary">Home</v-btn>
        </router-link>
        <router-link to="/portfolio">
          <v-btn outline color="primary">Portfolio</v-btn>
        </router-link>
        <router-link to="/contact">
          <v-btn outline color="primary">Contact</v-btn>
        </router-link>
        <a href="https://www.visualcv.com/nishantwrp/pdf/" target="_blank">
          <v-btn color="primary">DOWNLOAD CV</v-btn>
        </a>
      </div>

      <v-toolbar-side-icon
        color="primary"
        v-show="$vuetify.breakpoint.smAndDown"
        @click.stop="drawer = !drawer"
      ></v-toolbar-side-icon>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" temporary fixed>
      <v-list class="pt-0" dense>
        <v-list-tile v-for="item in items" :key="item.title">
          <router-link :to="item.link">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </router-link>
        </v-list-tile>

        <v-list-tile>
          <a href="https://www.visualcv.com/nishantwrp/pdf/" target="_blank">
            <v-list-tile-content>
              <v-list-tile-title>Download CV</v-list-tile-title>
            </v-list-tile-content>
          </a>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
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
      items: [
        { title: "Home", icon: "dashboard", link: "/" },
        { title: "Portfolio", icon: "dashboard", link: "/portfolio" },
        { title: "Contact", icon: "question_answer", link: "/contact" }
      ]
    };
  }
};
</script>
<style module lang="css">
a {
  text-decoration: none;
}
</style>
