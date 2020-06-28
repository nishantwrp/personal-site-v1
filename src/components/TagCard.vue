<template>
  <router-link :to="tagUrl(tag.title)">
    <v-card :class="$style.tagCard">
      <v-img
        :alt="tag.coverImage.title"
        contain="false"
        :src="tag.coverImage.file.url"
        height="200px"
      ></v-img>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{ tag.title }}</h3>
          <div>{{ tag.description }}</div>
        </div>
      </v-card-title>
    </v-card>
  </router-link>
</template>

<script>
import { slug } from "../js/slugify";

export default {
  props: {
    tag: {
      type: Object,
      required: true
    }
  },
  methods: {
    tagUrl(title) {
      return "/categories/" + slug(title) + "/";
    }
  }
}
</script>

<style module lang="css">
.tagCard {
  height: 100%;
}
</style>
