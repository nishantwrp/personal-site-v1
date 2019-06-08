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

      <router-view style="padding-top:40px;" :maxrating="themax"></router-view>

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
      maxrating: 0
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
      .get(`https://codeforces.com/api/user.rating?handle=nishantwrp`)
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
        document.querySelector("#falseapp").classList.add("hideit");
        document.querySelector("#mainapp").classList.remove("hideit");
      })
      .catch(e => {
        console.log(e);
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
    }
  }
};
</script>
<style>
.hideit {
  display: none;
}
</style>
