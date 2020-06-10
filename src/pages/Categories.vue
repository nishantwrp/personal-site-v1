<template>
  <Layout>
    <v-container :class="$style.topContainer">
      <v-container>
        <v-layout text-xs-center wrap>
          <v-flex xl12>
            <v-breadcrumbs class="justify-center" :items="items" divider=">"></v-breadcrumbs>
            <h1 :class="$style.text">Categories</h1>
          </v-flex>
        </v-layout>
      </v-container>
      <v-divider></v-divider>
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex v-for="tag in tagsContent" :key="tag.node.title">
            <router-link to="/">
              <v-card>
                <v-img :src="tag.node.coverImage.file.url" height="200px"></v-img>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{ tag.node.title }}</h3>
                    <div>{{ tag.node.description }}</div>
                  </div>
                </v-card-title>
              </v-card>
            </router-link>
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>
  </Layout>
</template>

<page-query>
query {
  allContentfulTag {
    edges {
      node {
        title
        description
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
export default {
  metaInfo: {
    title: "Categories"
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
        href: "/categories"
      }
    ]
  }),
  computed: {
    tagsContent() {
      return this.$page.allContentfulTag.edges;
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
