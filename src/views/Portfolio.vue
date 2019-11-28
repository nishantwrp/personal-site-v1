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
                <v-btn flat color="secondary">Repository</v-btn>
              </a>
            </v-card-actions>
          </v-card>
        </v-flex>
        <!-- Polls App -->
        <v-flex xs12 sm6 md4 lg4 xl4 style="padding:5px;">
          <v-card>
            <v-img
              src="https://www.elucidat.com/wp-content/uploads/2016/06/social-polling-learning.png"
              aspect-ratio="2.75"
              height="200px"
            ></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0" style="text-align:left">Polls App</h3>
                <div>
                  <ul style="text-align:left">
                    <li>VueJS</li>
                    <li>Vuetify UI</li>
                    <li>Django Rest Framework</li>
                    <li>drf-yasg Swagger Generator</li>
                  </ul>
                </div>
              </div>
            </v-card-title>

            <v-card-actions>
              <a href="https://github.com/nishantwrp/polls" target="_blank">
                <v-btn flat color="secondary">Repository</v-btn>
              </a>
               <a href="https://pollswrp.netlify.com/" target="_blank">
                <v-btn flat color="secondary">App</v-btn>
              </a>
            </v-card-actions>
          </v-card>
        </v-flex>
        <!-- Polls App -->
        <!-- sublime-backup -->
          <v-flex xs12 sm6 md4 lg4 xl4 style="padding:5px;">
          <v-card>
            <v-img
              src="https://wpvivid.com/wp-content/uploads/2019/02/wpvivid-banner.png"
              aspect-ratio="2.75"
              height="200px"
            ></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0" style="text-align:left">sublime-backup</h3>
                <div>
                  <ul style="text-align:left">
                    <li>A simple command line tool to backup / sync your sublime snippets</li>
                    <li>Click</li>
                    <li>Django Rest Framework</li>
                    <li>drf-yasg Swagger Generator</li>
                  </ul>
                </div>
              </div>
            </v-card-title>

            <v-card-actions>
              <a href="https://github.com/nishantwrp/sublime-backup-cli" target="_blank">
                <v-btn flat color="secondary">Repository</v-btn>
              </a>
               <a href="https://pypi.org/project/sublime-backup/" target="_blank">
                <v-btn flat color="secondary">Pypi</v-btn>
              </a>
            </v-card-actions>
          </v-card>
        </v-flex>
        <!-- sublime-backup -->
      </v-layout>
    </v-container>
      <v-layout row text-xs-center wrap>
        <v-flex xs12 sm6 md4 lg4 xl4 style="padding:5px;">
          <v-card>
            <v-img
              src="https://www.rcn.org.uk/-/media/royal-college-of-nursing/images/blog-800x400/general-blog-images/vote-in-the-egm.jpg"
              aspect-ratio="2.75"
              height="200px"
            ></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0" style="text-align:left">Lets Vote</h3>
                <div>
                  <ul style="text-align:left">
                    <li>Codefundo++ 2k19 Application</li>
                    <li>Django</li>
                    <li>Azure Blockchain Services</li>
                  </ul>
                </div>
              </div>
            </v-card-title>

            <v-card-actions>
              <a href="https://github.com/nishantwrp/Codefundo-2k19" target="_blank">
                <v-btn flat color="secondary">Repository</v-btn>
              </a>
            </v-card-actions>
          </v-card>
        </v-flex>
        <!-- Student Progress Analyser App -->
        <v-flex xs12 sm6 md4 lg4 xl4 style="padding:5px;">
          <v-card>
            <v-img
              src="https://www.itweb.co.za/static/pictures/2018/05/resized/-fs-Higher-Education-2018.xl.jpg"
              aspect-ratio="2.75"
              height="200px"
            ></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0" style="text-align:left">Student Progress Analyser</h3>
                <div>
                  <ul style="text-align:left">
                    <li>Django</li>
                    <li>Django Rest Framework</li>
                    <li>Sci-kit Learn</li>
                    <li>drf-yasg Swagger Generator</li>
                  </ul>
                </div>
              </div>
            </v-card-title>

            <v-card-actions>
              <a href="https://github.com/nishantwrp/Student-Management" target="_blank">
                <v-btn flat color="secondary">Repository</v-btn>
              </a>
            </v-card-actions>
          </v-card>
        </v-flex>
        <!-- Scraper App -->
        <v-flex xs12 sm6 md4 lg4 xl4 style="padding:5px;">
          <v-card>
            <v-img
              src="https://www.imperva.com/learn/wp-content/uploads/sites/13/2019/01/web-scraping-attack.jpg"
              aspect-ratio="2.75"
              height="200px"
            ></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0" style="text-align:left">GSOC Organizations</h3>
                <div>
                  <ul style="text-align:left">
                    <li>Scraped the organizations data from official gsoc archive using scrapy and displayed them on jekyll powered website</li>
                    <li>Scrapy</li>
                    <li>Jekyll</li>
                  </ul>
                </div>
              </div>
            </v-card-title>

            <v-card-actions>
              <a href="https://github.com/nishantwrp/gsoc-organizations-site" target="_blank">
                <v-btn flat color="secondary">Repository</v-btn>
              </a>
              <a href="https://gsoc-organizations.netlify.com/" target="_blank">
                <v-btn flat color="secondary">App</v-btn>
              </a>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
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
