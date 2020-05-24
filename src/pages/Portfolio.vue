<template>
  <Layout>
    <v-container style="padding-top:40px;">
      <v-container>
        <v-layout text-xs-center wrap>
          <v-flex xl12>
            <v-breadcrumbs class="justify-center" :items="items" divider=">"></v-breadcrumbs>
            <h1
              style="color:#3f51b5;font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif;"
            >My Portfolio</h1>
          </v-flex>
        </v-layout>
      </v-container>
      <v-divider></v-divider>

      <v-container>
        <v-layout v-for="projectsInRow in projects" row text-xs-center wrap :key="projectsInRow">
          <v-flex
            v-for="project in projectsInRow"
            :key="project"
            xs12
            sm6
            md4
            lg4
            xl4
            style="padding:5px;"
          >
            <v-card>
              <v-img :src="project.image" aspect-ratio="2.75" height="200px"></v-img>

              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0" style="text-align:left">{{ project.title }}</h3>
                  <div>
                    <ul style="text-align:left">
                      <li v-for="x in project.description" :key="x">{{ x }}</li>
                    </ul>
                  </div>
                </div>
              </v-card-title>

              <v-card-actions>
                <a v-for="link in project.links" :href="link.link" :key="link" target="_blank">
                  <v-btn flat color="secondary">{{ link.title }}</v-btn>
                </a>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>
  </Layout>
</template>

<script>
import { Projects } from "../data/projects.js";

export default {
  metaInfo: {
    title: "Portfolio"
  },
  data: () => ({
    items: [
      {
        text: "Home",
        disabled: false,
        href: "/"
      },
      {
        text: "Portfolio",
        disabled: false,
        href: "/portfolio"
      }
    ],
    projects: []
  }),
  mounted() {
    for (let i = 0; i < Projects.length; i += 3) {
      var projectsInOneRow = [];
      for (let j = 0; j < 3; j++) {
        if (j + i === Projects.length) break;
        projectsInOneRow.push(Projects[j + i]);
      }
      this.projects.push(projectsInOneRow);
    }
  }
};
</script>
