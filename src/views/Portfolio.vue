<template>
  <v-container>
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
      <v-layout row text-xs-center wrap>
        <v-flex xs12 sm6 md4 lg4 xl4 style="padding:5px;">
          <v-card>
            <v-img
              src="http://breezeworks-corporate-website.s3.amazonaws.com/wp-content/uploads/2014/02/webiste.png"
              aspect-ratio="2.75"
              height="200px"
            ></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0" style="text-align:left">This Website</h3>
                <div>
                  <ul style="text-align:left">
                    <li>VueJS</li>
                    <li>Vuetify UI</li>
                  </ul>
                </div>
              </div>
            </v-card-title>

            <v-card-actions>
              <a href="https://github.com/nishantwrp/nishantwrp-website" target="_blank">
                <v-btn flat color="secondary">View Repo</v-btn>
              </a>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
export default {
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
    ]
  })
};
</script>
