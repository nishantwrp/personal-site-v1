<template>
  <div>
    <v-app>
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
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default {
  name: "App",
  components: {
    NavBar,
    Footer
  },
  data() {
    return {
      haveScrolled: false
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
  },
  computed: {
    scrollfun() {
      if (this.haveScrolled === true) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style module lang="css">
.fullPage {
  height:100vh;
  width:100vw;
  text-align:center;
}

.loadingDiv {
  height:100%;
  width:100%;
}
</style>
