<template>
  <v-footer dark height="auto">
    <v-card flat tile class="indigo flex lighten-1 white--text text-xs-center">
      <v-card-text>
        <a v-for="profile in profiles" :key="profile.link" :href="profile.link" target="_blank">
          <v-btn :key="profile.icon" class="mx-3 white--text" icon>
            <v-icon size="24px">{{ profile.icon }}</v-icon>
          </v-btn>
        </a>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        Made with <span style="color: #e25555; font-size: 18px;">&#9829;</span> by
        <strong><a href="https://github.com/nishantwrp/nishantwrp-website" style="color: white" target="_blank">nishantwrp</a></strong>
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
