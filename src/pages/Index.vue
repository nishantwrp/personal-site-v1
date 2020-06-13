<template>
  <Layout>
    <v-container :class="$style.topContainer">
      <v-container>
        <v-layout text-xs-center wrap>
          <v-flex xl12>
            <v-breadcrumbs class="justify-center" :items="items" divider=">"></v-breadcrumbs>
            <h1 :class="$style.text">Hi, Welcome To My Website</h1>
          </v-flex>
        </v-layout>
      </v-container>
      <v-divider></v-divider>
      <v-container>
        <v-layout row text-xs-center wrap>
          <v-flex xl4 lg4 md4 sm6 xs12>
            <v-avatar size="150px" color="grey lighten-4">
              <img :src="introContent.photoUrl" />
            </v-avatar>
          </v-flex>
          <v-flex xl8 lg8 md8 sm6 xs12 :class="$style.blackText">
            <p
              v-for="paraContent in introContent.content.content"
              :key="paraContent.content.value"
            >{{ paraContent.content[0].value }}</p>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container>
        <h2 style="text-align: center !important;" :class="$style.text">Latest Posts</h2>
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
        <v-container style="text-align: center !important">
          <router-link to="/categories/">
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
        content
      }
    }
  }

  posts: allContentfulPost(limit: 3){
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
  metaInfo: {
    title: "Home"
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
    postsContent() {
      return this.$page.posts.edges;
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
