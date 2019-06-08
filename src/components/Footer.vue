<template>
  <v-footer dark height="auto">
    <v-card flat tile class="indigo flex lighten-1 white--text text-xs-center">
      <v-card-text>
        <a v-for="profile in profiles" :href="profile.link" target="_blank">
          <v-btn :key="profile.icon" class="mx-3 white--text" icon>
            <v-icon size="24px">{{ profile.icon }}</v-icon>
          </v-btn>
        </a>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Source Code Of This Website Is Available Here
        <a
          href="https://github.com/nishantwrp/nishantwrp-website"
        >
          <v-btn small color="primary">GITHUB REPO</v-btn>
        </a>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy;2019 —
        <strong>Nishant Mittal</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    profiles: [
      { icon: "fab fa-facebook", link: "https://www.facebook.com/nishantwrp" },

      {
        icon: "fab fa-linkedin",
        link: "https://www.linkedin.com/in/nishantwrp/"
      },
      {
        icon: "fab fa-instagram",
        link: "https://www.instagram.com/nishantwrp/"
      },
      { icon: "fab fa-github", link: "https://www.github.com/nishantwrp" },
      { icon: "fas fa-envelope", link: "mailto:mittalnishant14@outlook.com" }
    ]
  })
};
</script>
<style module lang="css">
</style>
