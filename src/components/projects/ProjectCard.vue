<template>
  <a :href="project.link" target="_blank">
    <v-card :class="$style.projectCard">
      <v-img
        :alt="project.coverImage.title"
        :src="project.coverImage.file.url"
        contain="false"
        height="200px"
      ></v-img>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{ project.title }}</h3>
          <div :class="$style.markdownContent">
            <vue-markdown :source="project.shortDescription" />
          </div>
          <div>
            <router-link
              v-for="tag in project.tags"
              :key="tag.title"
              :to="tagUrl(tag.title)"
            >
              <v-chip outline color="primary">
                <span style="cursor: pointer;">{{ tag.title }}</span>
              </v-chip>
            </router-link>
          </div>
          <div v-if="project.relatedPosts.length">
            <div :class="$style.relatedPosts">
              <h3>Related Posts</h3>
              <ul>
                <li v-for="post in project.relatedPosts" :key="post.title">
                  <router-link :to="postUrl(post.title)">
                    {{ post.title }}
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </v-card-title>
    </v-card>
  </a>
</template>

<script>
import { slug } from "../../js/slugify";

export default {
  props: {
    project: {
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
};
</script>

<style module lang="css">
.projectCard {
  height: 100%;
}

.markdownContent p {
  margin-bottom: 0px;
}

.relatedPosts {
  padding-top: 5px;
  font-family: "Montserrat", "Helvetica Neue", Arial, sans-serif;
}
</style>
