<template>
  <Layout>
    <v-container :class="$style.topContainer">
      <v-container>
        <v-layout text-xs-center wrap>
          <v-flex xl12>
            <v-breadcrumbs class="justify-center" :items="items" divider=">"></v-breadcrumbs>
            <h1 :class="$style.text">{{ postContent.title }}</h1>
            <p :class="$style.text">{{ postContent.shortDescription }}</p>
          </v-flex>
        </v-layout>
      </v-container>
      <v-divider></v-divider>
      <v-container>
        <v-layout row wrap>
            <v-flex xl12>
               <v-img :src="postContent.coverImage.file.url" contain="false" height="300px">
               </v-img>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xl10 lg10 md10 sm12 xs12>
            <vue-markdown :source="postContent.content" />
          </v-flex>
          <v-flex xl2 l2 md2 sm12 xs12>
              <SideBlock title="Tags">
                hi
              </SideBlock>
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  post: contentfulPost(id: $id) {
    title
    date
    tags {
        title
    }
    shortDescription
    coverImage {
        file {
            url
        }
    }
    content
    links {
        icon
        description
        link
        title
    }
    }
}
</page-query>

<script>
import { slug } from "../js/slugify";
import SideBlock from '../components/SideBlock';

export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  },
  components: {
    SideBlock
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
        disabled: true
      }
    ]
  }),
  computed: {
    postContent() {
      return this.$page.post;
    }
  },
  mounted() {
    this.createBreadcrumb();
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
        text: this.postContent.title,
        disabled: false,
        href: this.postUrl(this.postContent.title)
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
</style>
