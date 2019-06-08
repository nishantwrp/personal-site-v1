<template>
  <v-container>
    <v-container>
      <v-layout text-xs-center wrap>
        <v-flex xl12>
          <v-breadcrumbs justify-center :items="items" divider=">"></v-breadcrumbs>
          <h1
            style="color:#3f51b5;font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif;"
          >Page Not Found</h1>
        </v-flex>
      </v-layout>
    </v-container>
    <v-divider></v-divider>

    <v-container style="text-align:center">
      <h2
        style="color:#3f51b5;font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif;"
      >Oops! We Can't Seem To Find The Page You're Looking For</h2>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        text: "404",
        disabled: false,
        href: "/404"
      }
    ]
  })
};
</script>
