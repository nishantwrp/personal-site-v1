<template>
  <div>
    <div style="height:100vh;width:100vw;text-align:center;" :class="[hideClassLoading]">
      <table style="height:100%;width:100%;">
        <tr style="height:100%;width:100%;">
          <td>
            <LoadingLogo />
          </td>
        </tr>
      </table>
    </div>
    <v-app :class="[hideClassApp]">
      <NavBar :scrolled="scrollfun" />
      <slot />
      <Footer />
    </v-app>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import LoadingLogo from "../components/LoadingLogo";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
    LoadingLogo
  },
  data() {
    return {
      haveScrolled: false,
    };
  },
  mounted: function() {
    document.addEventListener(
      "scroll",
      function() {
        if (window.scrollY >= 50) {
          this.haveScrolled = true;
        } else {
          this.haveScrolled = false;
        }
      }.bind(this)
    );
    this.$store.dispatch('get_codeforces_data');
  },
  computed: {
    scrollfun() {
      if (this.haveScrolled === true) {
        return true;
      } else {
        return false;
      }
    },
    hideClassLoading() {
      if (this.$store.getters.isCodeforcesLoaded) {
        return 'hideit';
      }
    },
    hideClassApp() {
      if (!this.$store.getters.isCodeforcesLoaded) {
        return 'hideit';
      }
    }
  }
};
</script>

<style>
body {
  height: 100vh;
  width: 100vw;
  text-align: center;
}

.hideit {
  display: none !important;
}
</style>
