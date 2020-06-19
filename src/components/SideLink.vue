<template>
  <v-contatiner>
    <v-layout row wrap text-xs-center>
      <v-flex style="margin: 10px 0px;">
        <div :class="$style.descriptionText">{{ link.description }}</div>
        <a v-on:click="redirectTo(link.link, link.title)">
          <v-btn color="secondary" class="white--text">
            {{ link.title }}
            <v-icon right dark>{{ link.icon }}</v-icon>
          </v-btn>
        </a>
      </v-flex>
    </v-layout>
  </v-contatiner>
</template>

<script>
import { postLinkClick } from "../js/analytics";

export default {
  props: {
    link: {
      type: Object,
      required: true
    }
  },
  methods: {
    redirectTo(link, label) {
      postLinkClick(this, document.title, label);
      window.location.href = link;
    }
  }
};
</script>

<style module lang="css">
.descriptionText {
  font-family: "Balsamiq Sans", "Helvetica Neue", Arial, sans-serif;
}
</style>