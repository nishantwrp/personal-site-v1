<template>
  <Layout>
    <v-container :class="$style.topContainer">
      <v-container>
        <v-layout text-xs-center wrap>
          <v-flex xl12>
            <v-breadcrumbs class="justify-center" :items="items" divider=">"></v-breadcrumbs>
            <h1 :class="$style.text">{{ tagContent.title }}</h1>
            <p :class="$style.text">{{ tagContent.description }}</p>
          </v-flex>
        </v-layout>
      </v-container>
      <v-divider></v-divider>
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex v-for="post in postsContent" :key="post.node.title">
            <router-link :to="postUrl(post.node.title)">
              <v-card>
                <v-img :src="post.node.coverImage.file.url" contain="false" height="200px"></v-img>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{ post.node.title }}</h3>
                    <div>{{ post.node.shortDescription }}</div>
                    <div>
                      <router-link
                        v-for="tag in post.node.tags"
                        :key="tag.title"
                        :to="tagUrl(tag.title)"
                      >
                        <v-chip outline color="primary">
                          <span style="cursor: pointer;">{{ tag.title }}</span>
                        </v-chip>
                      </router-link>
                    </div>
                  </div>
                </v-card-title>
              </v-card>
            </router-link>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container :class="$style.noPosts" v-if="!postsContent.length">No posts in this category yet.</v-container>
    </v-container>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  tag: contentfulTag(id: $id) {
     title
     description
  }

  allPosts: allContentfulPost(filter: {tags: {contains: [$id]}}) {
    edges {
      node {
        title
        tags {
          title
        }
        shortDescription
        coverImage {
          file {
            url
          }
        }
      }
    }
  }
}
</page-query>

<script>
import { slug } from "../js/slugify";

export default {
  metaInfo() {
    return {
      title: this.$page.tag.title
    };
  },
  data: () => ({
    items: [
      {
        text: "Home",
        disabled: false,
        href: "/"
      },
      {
        text: "Categories",
        disabled: false,
        href: "/categories/"
      }
    ]
  }),
  computed: {
    tagContent() {
      return this.$page.tag;
    },
    postsContent() {
      return this.$page.allPosts.edges;
    }
  },
  mounted() {
    this.createBreadcrumb();
  },
  watch: {
    $route: function() {
      this.items.pop();
      this.createBreadcrumb();
    }
  },
  methods: {
    tagUrl(title) {
      return "/categories/" + slug(title) + "/";
    },
    postUrl(title) {
      return "/posts/" + slug(title) + "/";
    },
    createBreadcrumb() {
      this.items.push({
        text: this.tagContent.title,
        disabled: false,
        href: this.tagUrl(this.tagContent.title)
      });
    }
  }
};
</script>

<style module lang="css">
.topContainer {
  padding-top: 40px;
}

.text {
  color: #3f51b5;
  font-family: "Montserrat", "Helvetica Neue", Arial, sans-serif;
}

.noPosts {
  text-align: center;
  color: #3f51b5;
  font-size: 20px;
  font-family: "Montserrat", "Helvetica Neue", Arial, sans-serif;
}
</style>
