<template>
  <Layout>
    <v-container :class="$style.topContainer">
      <v-container>
        <v-layout text-xs-center wrap>
          <v-flex xl12>
            <v-breadcrumbs
              class="justify-center"
              :items="items"
              divider=">"
            ></v-breadcrumbs>
            <h1 :class="$style.text">Posts</h1>
            <p :class="$style.text">Blog posts by me.</p>
          </v-flex>
        </v-layout>
      </v-container>
      <v-divider></v-divider>
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex
            v-for="post in postsContent"
            :key="post.node.title"
            xs12
            sm12
            md4
            lg4
            xl4
          >
            <PostCard :post="post.node" />
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>
  </Layout>
</template>

<page-query>
query {
  allContentfulPost {
    edges {
      node {
        title
        tags {
          title
        }
        shortDescription
        coverImage {
          title
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
import PostCard from "../components/PostCard";

export default {
  metaInfo: {
    title: "Posts",
    meta: [
      {
        name: "description",
        content: "Blog posts by nishantwrp."
      }
    ]
  },
  data: () => ({
    items: [
      {
        text: "Home",
        disabled: false,
        href: "/"
      },
      {
        text: "Posts",
        disabled: false,
        href: "/posts/"
      }
    ]
  }),
  methods: {
    tagUrl(title) {
      return "/categories/" + slug(title) + "/";
    }
  },
  computed: {
    postsContent() {
      return this.$page.allContentfulPost.edges;
    }
  },
  components: {
    PostCard
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
</style>
