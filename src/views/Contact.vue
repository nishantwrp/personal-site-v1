<template>
  <v-container>
    <v-container>
      <v-layout text-xs-center wrap>
        <v-flex xl12>
          <v-breadcrumbs class="justify-center" :items="items" divider=">"></v-breadcrumbs>
          <h1
            style="color:#3f51b5;font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif;"
          >Contact Me</h1>
        </v-flex>
      </v-layout>
    </v-container>
    <v-divider></v-divider>

    <v-container>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-img
              src="https://www.flydubai.com/en/media/contact-us-2-710x473_tcm8-18919_w710.jpg"
              height="300px"
            >
              <v-layout column fill-height>
                <v-spacer></v-spacer>

                <v-card-title class="white--text pl-5 pt-5">
                  <div class="display-1 pl-5 pt-5">Nishant Mittal</div>
                </v-card-title>
              </v-layout>
            </v-img>

            <v-list two-line>
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon color="indigo">fas fa-phone-volume</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>941-790-7862</v-list-tile-title>
                  <v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>

              <v-divider inset></v-divider>

              <v-list-tile>
                <v-list-tile-action>
                  <v-icon color="indigo">fas fa-envelope</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>mittalnishant14@outlook.com</v-list-tile-title>
                  <v-list-tile-sub-title>Personal</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>

              <v-list-tile>
                <v-list-tile-action>
                  <v-icon color="indigo">fas fa-envelope</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>nishantmittal.cse18@itbhu.ac.in</v-list-tile-title>
                  <v-list-tile-sub-title>Institute</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>

              <v-divider inset></v-divider>

              <v-list-tile>
                <v-list-tile-action>
                  <v-icon color="indigo">fas fa-compass</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>IIT BHU</v-list-tile-title>
                  <v-list-tile-sub-title>Varanasi</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
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
        text: "Contact",
        disabled: false,
        href: "/contact"
      }
    ]
  })
};
</script>
