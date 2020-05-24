<template>
  <Layout>
    <v-container style="padding-top:40px;" >
      <v-container>
        <v-layout text-xs-center wrap>
          <v-flex xl12>
            <v-breadcrumbs class="justify-center" :items="items" divider=">"></v-breadcrumbs>
            <h1
              style="color:#3f51b5;font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif;"
            >Hi, Welcome To My Website</h1>
          </v-flex>
        </v-layout>
      </v-container>
      <v-divider></v-divider>
      <v-container>
        <v-layout row text-xs-center wrap>
          <v-flex xl4 lg4 md4 sm6 xs12>
            <v-avatar size="150px" color="grey lighten-4">
              <img src="https://avatars3.githubusercontent.com/u/36989112?s=460&v=4" />
            </v-avatar>
          </v-flex>
          <v-flex
            xl8
            lg8
            md8
            sm6
            xs12
            style="font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif;padding:5px;"
          >
            <p>Hello, I'm Nishant Mittal, studying Computer Science And Engineering at IIT(BHU) Varanasi, from Sangrur,Punjab. I have cleared the JEE Mains and Advanced Exams with national ranks ~900 each.</p>
            <p>I am really passionate about Competitive Programming and Web Development. I am currently exploring the field of Machine Learning. I love to learn about new technologies related to the field of Computer Science. I have worked with technologies like Django, VueJS, Angular, Electron, Sci-kit Learn, Git.</p>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container>
        <v-layout row text-xs-center wrap>
          <v-flex xs12 sm12 md4 lg4 xl4 style="padding:5px;">
            <v-card>
              <v-img
                src="https://miro.medium.com/max/782/1*CfoaTsTqWZ4RkBTAdfAE6g.jpeg"
                aspect-ratio="2.75"
                height="200px"
              ></v-img>

              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0" style="text-align:left">Competitive Programming</h3>
                  <div>
                    <ul style="text-align:left">
                      <li>
                        An Expert Level programmer on
                        <a :href="handle">Codeforces</a>
                        (Max Rating - {{maxrating}})
                      </li>
                      <li>A Division 1 programmer on Codechef</li>
                    </ul>
                  </div>
                </div>
              </v-card-title>

              <v-card-actions>
                <a href="https://www.stopstalk.com/user/profile/nishantwrp" target="_blank">
                  <v-btn flat color="secondary">View Profile</v-btn>
                </a>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs12 sm12 md4 lg4 xl4 style="padding:5px;">
            <v-card>
              <v-img
                src="https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png"
                aspect-ratio="2.75"
                height="200px"
              ></v-img>

              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0" style="text-align:left">Web Development</h3>
                  <div>
                    <ul style="text-align:left">
                      <li>
                        <a
                          href="https://summerofcode.withgoogle.com/projects/#4778102950985728"
                        >GSoC'20 with Oppia</a>
                      </li>
                      <li>An active open source contributor</li>
                      <li>Secured 1st position in Microsoft Codefundo++ 2k19 in the institute</li>
                      <li>Secured 3rd position in Microsoft Codefundo++ 2k18 in the institute</li>
                    </ul>
                  </div>
                </div>
              </v-card-title>

              <v-card-actions>
                <a href="https://www.github.com/nishantwrp" target="_blank">
                  <v-btn flat color="secondary">View Profile</v-btn>
                </a>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs12 sm12 md4 lg4 xl4 style="padding:5px;">
            <v-card>
              <v-img
                src="https://hackernoon.com/drafts/e11c20yk.png"
                aspect-ratio="2.75"
                height="200px"
              ></v-img>

              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0" style="text-align:left">Machine Learning</h3>
                  <div>
                    <ul style="text-align:left">
                      <li>Secured 1st position in Technex ML Ware 2k18 in the institute</li>
                    </ul>
                  </div>
                </div>
              </v-card-title>

              <v-card-actions>
                <a href="https://www.kaggle.com/nishantwrp" target="_blank">
                  <v-btn flat color="secondary">View Profile</v-btn>
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
  })
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
