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
            <h1 :class="$style.text">{{ tagContent.title }}</h1>
            <p :class="$style.text">{{ tagContent.description }}</p>
          </v-flex>
        </v-layout>
      </v-container>
      <v-divider></v-divider>
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex xl12 v-if="posts.length">
            <CardSection
              title="Posts"
              description=""
              :objects="posts"
              type="post"
            />
          </v-flex>
          <v-flex xl12 v-if="projects.length">
            <CardSection
              title="Projects"
              description=""
              :objects="projects"
              type="project"
            />
          </v-flex>
        </v-layout>
      </v-container>
      <v-container :class="$style.noPosts" v-if="!((posts.length) || (projects.length))"
        >Nothing in this category yet.</v-container
      >
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
          title
          file {
            url
          }
        }
      }
    }
  }

  allProjects: allContentfulProject(filter: {tags: {contains: [$id]}}) {
    edges {
      node {
        title
        link
        coverImage {
          title
          file {
            url
          }
        }
        shortDescription
        relatedPosts {
          title
        }
        tags {
          title
        }
        type {
          title
        }
      }
    }
  }
}
</page-query>

<script>
import CardSection from "../components/CardSection";

export default {
  metaInfo() {
    return {
      title: this.$page.tag.title,
      meta: [
        {
          name: "description",
          content: this.$page.tag.description
        }
      ]
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
    posts() {
      return this.$page.allPosts.edges.map(item => item.node);
    },
    projects() {
      return this.$page.allProjects.edges.map(item => item.node);
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
    createBreadcrumb() {
      this.items.push({
        text: this.tagContent.title,
        disabled: false,
        href: this.tagUrl(this.tagContent.title)
      });
    }
  },
  components: {
    CardSection
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
