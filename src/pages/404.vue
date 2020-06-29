<template>
  <Layout>
    <v-container :class="$style.topContainer">
      <v-container>
        <v-layout text-xs-center wrap>
          <v-flex xl12>
            <v-breadcrumbs class="justify-center" :items="items" divider=">"></v-breadcrumbs>
            <h1 :class="$style.text">Page Not Found</h1>
          </v-flex>
        </v-layout>
      </v-container>
      <v-divider></v-divider>

      <v-container style="text-align:center">
        <h2 :class="$style.text">Oops! Seems that the page you were looking for is not present.</h2>
      </v-container>
    </v-container>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "404"
  },
  data: () => ({
    items: [
      {
        text: "404",
        disabled: false,
        href: "/404/"
      }
    ]
  })
};
</script>

<style module lang="css">
.topContainer {
  padding-top:40px;
}

.text {
  color:#3f51b5;
  font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif;
}
</style>
