<template>
  <v-container>
    <h2>
      <span :class="$style.projectType">
        <u>{{ title }}</u>
      </span>
    </h2>
    <h4>
      {{ description }}
    </h4>
    <v-container fluid grid-list-md :class="$style.projectSectionCards">
      <v-layout row wrap>
        <v-flex v-for="data in objects" :key="data.title" xs12 sm12 md4 lg4 xl4>
          <ProjectCard v-if="type === 'project'" :project="data" />
          <PostCard v-if="type === 'post'" :post="data" />
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
import PostCard from "./PostCard";
import ProjectCard from "./ProjectCard";

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    objects: {
      type: Array,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  components: {
    PostCard,
    ProjectCard
  }
};
</script>

<style lang="css" module>
.projectType {
  color: #3f51b5;
  font-family: "Montserrat", "Helvetica Neue", Arial, sans-serif;
}

.projectSectionCards {
  padding-left: 0px;
  padding-right: 0px;
}
</style>
