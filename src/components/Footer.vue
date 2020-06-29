<template>
  <v-footer dark height="auto">
    <v-card flat tile class="indigo flex lighten-1 white--text text-xs-center">
      <v-card-text>
        <span v-for="profile in profiles" :key="profile.link" v-on:click="redirectTo(profile.link, profile.label)">
          <v-btn :key="profile.icon" class="mx-3 white--text" icon>
            <v-icon size="24px">{{ profile.icon }}</v-icon>
          </v-btn>
        </span>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        Made with
        <span style="color: #e25555; font-size: 18px;">&#9829;</span> by
        <strong>
          <span
            v-on:click="redirectTo('https://github.com/nishantwrp/nishantwrp-website', 'Source Code')"
            style="color: white; cursor: pointer;"
          >nishantwrp</span>
        </strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import { socialLinkClick } from "../js/analytics";

export default {
  data: () => ({
    profiles: [
      {
        label: "Facebook",
        icon: "fab fa-facebook",
        link: "https://www.facebook.com/nishantwrp"
      },
      {
        label: "Linkedin",
        icon: "fab fa-linkedin",
        link: "https://www.linkedin.com/in/nishantwrp/"
      },
      {
        label: "Twitter",
        icon: "fab fa-twitter",
        link: "https://twitter.com/nishantwrp"
      },
      {
        label: "Github",
        icon: "fab fa-github",
        link: "https://www.github.com/nishantwrp"
      },
      {
        label: "Mail",
        icon: "fas fa-envelope",
        link: "mailto:admin@nishantwrp.com"
      }
    ]
  }),
  methods: {
    redirectTo(link, label) {
      socialLinkClick(this, label);
      window.open(link, '_blank');
    }
  }
};
</script>
