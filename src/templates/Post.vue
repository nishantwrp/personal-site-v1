<template>
  <Layout>
    <v-container :class="$style.topContainer">
      <v-container>
        <v-layout text-xs-center wrap>
          <v-flex xl12>
            <h1 :class="$style.text">{{ postContent.title }}</h1>
            <p :class="$style.text">{{ postContent.shortDescription }}</p>
          </v-flex>
        </v-layout>
      </v-container>
      <v-divider></v-divider>
      <v-container>
        <v-layout row wrap>
          <v-flex xl12>
            <v-img
              :alt="postContent.coverImage.title"
              :src="postContent.coverImage.file.url"
              contain="false"
              height="300px"
            ></v-img>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xl9 lg9 md12 sm12 xs12>
            <vue-markdown
              :class="[$style.montserrat, $style.postContent]"
              :source="postContent.content"
            />
          </v-flex>
          <v-flex xl3 lg3 md12 sm12 xs12>
            <SideBlock :displayTitle="false" v-if="postContent.links.length">
              <SideLink
                v-for="externalLink in postContent.links"
                :key="externalLink.link"
                :title="postContent.title"
                :link="externalLink"
              />
            </SideBlock>
            <SideBlock title="Tags">
              <router-link
                v-for="tag in postContent.tags"
                :key="tag.title"
                :to="tagUrl(tag.title)"
              >
                <v-chip outline color="primary">
                  <span style="cursor: pointer;">{{ tag.title }}</span>
                </v-chip>
              </router-link>
            </SideBlock>
            <SideBlock title="Written On">
              <span :class="$style.montserrat">{{ postContent.date }}</span>
            </SideBlock>
            <SideBlock title="Share">
              <v-btn round color="primary" v-on:click="shareToTwitter()">
                <v-icon>fab fa-twitter</v-icon>
              </v-btn>
              <v-btn round color="primary" v-on:click="shareToLinkedin()">
                <v-icon>fab fa-linkedin-in</v-icon>
              </v-btn>
              <v-btn round color="primary" v-on:click="shareToReddit()">
                <v-icon>fab fa-reddit-alien</v-icon>
              </v-btn>
            </SideBlock>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container>
        <Gitalk :config="gitalkConfig" />
      </v-container>
    </v-container>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  post: contentfulPost(id: $id) {
    gitalkId
    title
    date: date(format: "DD MMM, YYYY")
    tags {
        title
    }
    shortDescription
    hasCanonicalUrl
    canonicalUrl
    metaTags
    coverImage {
        title
        file {
            url
        }
    }
    content
    links {
        icon
        description
        link
        title
    }
  }

  metadata {
    siteUrl
    siteName
  }
}
</page-query>

<script>
import { slug } from "../js/slugify";
import { sharePost } from "../js/analytics";
import SideBlock from "../components/SideBlock";
import SideLink from "../components/SideLink";

export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: "author",
          content: "Nishant Mittal"
        },
        {
          name: "description",
          content: this.postContent.shortDescription
        },
        {
          name: "keywords",
          content: this.postContent.metaTags
        },
        {
          property: "og:type",
          content: "article"
        },
        {
          property: "og:title",
          content: this.postContent.title
        },
        {
          property: "og:description",
          content: this.postContent.shortDescription
        },
        {
          property: "og:image",
          content: "https:" + this.postContent.coverImage.file.url
        },
        {
          property: "og:site_name",
          content: this.$page.metadata.siteName
        },
        {
          property: "og:url",
          content:
            this.$page.metadata.siteUrl + this.postUrl(this.postContent.title)
        },
        {
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          name: "twitter:title",
          content: this.postContent.title
        },
        {
          name: "twitter:description",
          content: this.postContent.shortDescription
        },
        {
          name: "twitter:creator",
          content: "@nishantwrp"
        },
        {
          name: "twitter:site",
          content: "@nishantwrp"
        },
        {
          name: "twitter:image",
          content: "https:" + this.postContent.coverImage.file.url
        }
      ],
      link: this.getLinkMeta
    };
  },
  components: {
    SideBlock,
    SideLink
  },
  computed: {
    postContent() {
      return this.$page.post;
    },
    gitalkConfig() {
      return {
        title: this.postContent.title,
        id: this.postContent.gitalkId
      };
    },
    getLinkMeta() {
      if (this.postContent.hasCanonicalUrl) {
        return [
          {
            rel: "canonical",
            href: this.postContent.canonicalUrl
          }
        ];
      }

      return [];
    }
  },
  mounted() {
    // This statement triggers the syntax highlighter because it doesn't
    // get triggered automatically sometimes.
    window.Prism.highlightAll();
  },
  methods: {
    tagUrl(title) {
      return "/categories/" + slug(title) + "/";
    },
    postUrl(title) {
      return "/posts/" + slug(title) + "/";
    },
    shareToTwitter() {
      sharePost(this, "Twitter", this.postContent.title);

      const url = new URL("https://www.twitter.com/share");
      url.searchParams.append("text", this.postContent.title);
      url.searchParams.append(
        "url",
        this.$page.metadata.siteUrl + this.postUrl(this.postContent.title)
      );
      url.searchParams.append("via", "nishantwrp");
      window.open(url.toString(), "twitter-share", "width=550,height=550");
    },
    shareToLinkedin() {
      sharePost(this, "LinkedIn", this.postContent.title);

      const url = new URL("https://www.linkedin.com/shareArticle");
      url.searchParams.append("mini", true);
      url.searchParams.append(
        "url",
        this.$page.metadata.siteUrl + this.postUrl(this.postContent.title)
      );
      window.open(url.toString(), "linkedin-share", "width=550,height=550");
    },
    shareToReddit() {
      sharePost(this, "Reddit", this.postContent.title);

      const url = new URL("https://www.reddit.com/submit");
      url.searchParams.append("title", this.postContent.title);
      url.searchParams.append(
        "url",
        this.$page.metadata.siteUrl + this.postUrl(this.postContent.title)
      );
      window.open(url.toString(), "reddit-share", "width=550,height=550");
    }
  }
};
</script>

<style module lang="css">
.topContainer {
  padding-top: 40px;
}

.montserrat {
  font-family: "Montserrat", "Helvetica Neue", Arial, sans-serif;
}

.postContent img {
  max-width: 100% !important;
  height: auto !important;
}

.text {
  color: #3f51b5;
  font-family: "Montserrat", "Helvetica Neue", Arial, sans-serif;
}

p {
  overflow-wrap: break-word;
}
</style>
