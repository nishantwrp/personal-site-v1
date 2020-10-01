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
        <v-icon size="18px">fas fa-code</v-icon>
        with
        <v-icon size="18px">fas fa-heart</v-icon>
        and
        <v-icon size="18px">fas fa-coffee</v-icon>
        by
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
import { FACEBOOK_URL, LINKEDIN_URL, TWITTER_URL, GITHUB_URL, EMAIL } from "../constants";

export default {
  data: () => ({
    profiles: [
      {
        label: "Facebook",
        icon: "fab fa-facebook",
        link: FACEBOOK_URL
      },
      {
        label: "Linkedin",
        icon: "fab fa-linkedin",
        link: LINKEDIN_URL
      },
      {
        label: "Twitter",
        icon: "fab fa-twitter",
        link: TWITTER_URL
      },
      {
        label: "Github",
        icon: "fab fa-github",
        link: GITHUB_URL
      },
      {
        label: "Mail",
        icon: "fas fa-envelope",
        link: "mailto:" + EMAIL
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
