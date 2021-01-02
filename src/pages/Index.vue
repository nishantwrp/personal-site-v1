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
            <h1 :class="$style.text">Hi, Welcome To My Website</h1>
          </v-flex>
        </v-layout>
      </v-container>
      <v-divider></v-divider>
      <v-container>
        <v-layout row text-xs-center wrap>
          <v-flex xl4 lg4 md12 sm12 xs12>
            <v-avatar size="150px" color="grey lighten-4">
              <img alt="Nishant Mittal" :src="introContent.photoUrl" />
            </v-avatar>
          </v-flex>
          <v-flex xl8 lg8 md12 sm12 xs12 :class="$style.blackText">
            <vue-markdown :source="introContent.bio" />
          </v-flex>
        </v-layout>
      </v-container>
      <v-container>
        <h2 style="text-align: center !important;" :class="$style.text">
          Latest Blog Posts
        </h2>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex
              v-for="post in blogPosts"
              :key="post.title"
              xs12
              sm12
              md12
              lg4
              xl4
            >
              <PostCard :post="post" />
            </v-flex>
          </v-layout>
        </v-container>
        <v-container style="text-align: center !important">
          <router-link to="/categories/blog/">
            <v-btn outline color="primary">Show All</v-btn>
          </router-link>
        </v-container>
      </v-container>
    </v-container>
  </Layout>
</template>

<page-query>
query {
  allContentfulIntro {
    edges {
      node {
        photoUrl
        bio
      }
    }
  }

  posts: allContentfulPost {
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
import PostCard from "../components/PostCard";

export default {
  metaInfo: {
    title: "Home",
    meta: [
      {
        name: "description",
        content:
          "Nishant Mittal.This is my personal website and it contains my blog posts and the projects I have worked on."
      },
      {
        name: "keywords",
        content:
          "nishantwrp, portfolio, developer, web, blog, projects, nishant mittal"
      }
    ]
  },
  data: () => ({
    items: [
      {
        text: "Home",
        disabled: false,
        href: "/"
      }
    ]
  }),
  computed: {
    introContent() {
      return this.$page.allContentfulIntro.edges[0].node;
    },
    blogPosts() {
      const allPosts = this.$page.posts.edges;
      let blogPosts = [];

      for (const { node } of allPosts) {
        const tags = node.tags.map(tag => tag.title);
        if (tags.includes("Blog")) {
          blogPosts.push(node);

          // A maximum of three posts.
          if (blogPosts.length === 3) {
            break;
          }
        }
      }

      return blogPosts;
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

.blackText {
  font-family: "Montserrat", "Helvetica Neue", Arial, sans-serif;
}
</style>
