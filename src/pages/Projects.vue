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
            <h1 :class="$style.text">Projects</h1>
            <p :class="$style.text">Things I've worked on.</p>
          </v-flex>
        </v-layout>
      </v-container>
      <v-divider></v-divider>
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex
            v-for="projectType in projectTypes"
            :key="projectType.title"
            xl12
          >
            <CardSection
              type="project"
              :title="projectType.title"
              :description="projectType.description"
              :objects="projectType.projects"
            />
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>
  </Layout>
</template>

<page-query>
query {
  allContentfulProject {
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

  allContentfulProjectType {
    edges {
      node {
        title
        description
      }
    }
  }
}
</page-query>

<script>
import { PROJECT_TYPES } from "../constants";
import CardSection from "../components/CardSection";

export default {
  metaInfo: {
    title: "Projects",
    meta: [
      {
        name: "description",
        content: "Things nishantwrp has worked on."
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
        text: "Projects",
        disabled: false,
        href: "/projects/"
      }
    ]
  }),
  methods: {
    getProjectTypeDescription(projectType) {
      let description = "";
      this.$page.allContentfulProjectType.edges.map(({ node }) => {
        if (node.title === projectType) {
          description = node.description;
        }
      });
      return description;
    },
    getProjects(projectType) {
      const projects = [];
      this.$page.allContentfulProject.edges.map(({ node }) => {
        if (node.type.title === projectType) {
          projects.push(node);
        }
      });
      return projects;
    }
  },
  computed: {
    projectTypes() {
      return PROJECT_TYPES.map(projectType => {
        return {
          title: projectType,
          description: this.getProjectTypeDescription(projectType),
          projects: this.getProjects(projectType)
        };
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
</style>
