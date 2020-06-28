<template>
  <router-link :to="postUrl(post.title)">
    <v-card :class="$style.postCard">
      <v-img
        :alt="post.coverImage.title"
        :src="post.coverImage.file.url"
        contain="false"
        height="200px"
      ></v-img>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{ post.title }}</h3>
          <div>{{ post.shortDescription }}</div>
          <div>
            <router-link v-for="tag in post.tags" :key="tag.title" :to="tagUrl(tag.title)">
              <v-chip outline color="primary">
                <span style="cursor: pointer;">{{ tag.title }}</span>
              </v-chip>
            </router-link>
          </div>
        </div>
      </v-card-title>
    </v-card>
  </router-link>
</template>

<script>
import { slug } from "../js/slugify";

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    tagUrl(title) {
      return "/categories/" + slug(title) + "/";
    },
    postUrl(title) {
      return "/posts/" + slug(title) + "/";
    }
  }
}
</script>

<style module lang="css">
.postCard {
  height: 100%;
}

.postTags {
  position: absolute;
  bottom: 16px;
}
</style>
