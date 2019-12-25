<template>
  <div>
    <div style="height:100vh;width:100vw;text-align:center" id="falseapp">
      <table style="height:100%;width:100%">
        <tr style="height:100%;width:100%">
          <td>
            <LoadingLogo logocolor="#3f51b5"/>
          </td>
        </tr>
      </table>
    </div>
    <v-app id="mainapp" class="hideit">
      <NavBar :scrolled="scrollfun"/>

      <router-view style="padding-top:40px;" :maxrating="themax" :handle="handle"></router-view>

      <Footer/>
    </v-app>
  </div>
</template>

<script>
import LoadingLogo from "./components/LoadingLogo";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import axios from "axios";
export default {
  name: "App",
  components: {
    NavBar,
    Footer,
    LoadingLogo
  },
  data() {
    return {
      haveScrolled: false,
      allratings: [],
      maxrating: 0,
      codeforces_account: 'nishantwrp'
    };
  },
  mounted: function() {
    document.addEventListener(
      "scroll",
      function() {
        if (window.scrollY >= 50) {
          this.haveScrolled = true;
        } else {
          this.haveScrolled = false;
        }
      }.bind(this)
    );
    axios
      .get(`https://codeforces.com/api/user.rating?handle=nishantwrp`, {timeout : 2000})
      .then(response => {
        // JSON responses are automatically parsed.
        this.allratings = response.data.result;
        var i = 0;
        while (i < this.allratings.length) {
          if (this.maxrating < this.allratings[i].newRating) {
            this.maxrating = this.allratings[i].newRating;
          }
          i += 1;
        }
        axios
          .get(`https://codeforces.com/api/user.rating?handle=nishantwrp_2`, {timeout: 2000})
          .then(response => {
            var second_profile_ratings = response.data.result;
            var i = 0;
            while (i < second_profile_ratings.length) {
              if (this.maxrating < second_profile_ratings[i].newRating) {
                this.maxrating = second_profile_ratings[i].newRating;
                this.codeforces_account = 'nishantwrp_2';
              }
              i += 1;
            }
          })
        document.querySelector("#falseapp").classList.add("hideit");
        document.querySelector("#mainapp").classList.remove("hideit");
      })
      .catch(e => {
        console.log(e);
        document.querySelector("#falseapp").classList.add("hideit");
        document.querySelector("#mainapp").classList.remove("hideit");
      });
  },
  computed: {
    scrollfun() {
      if (this.haveScrolled === true) {
        return true;
      } else {
        return false;
      }
    },
    themax() {
      return this.maxrating;
    },
    handle() {
      return "https://www.codeforces.com/profile/" + this.codeforces_account;
    }
  }
};
</script>
<style>
.hideit {
  display: none;
}
</style>
