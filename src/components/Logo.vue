<template>
  <div>
    <span
      :class="[$style.logotext,$style.noselect]"
      :style="logostyle"
      v-show="$vuetify.breakpoint.smAndUp"
    >Nishant Mittal</span>
    <span
      :class="[$style.logotext,$style.noselect]"
      :style="logostyle"
      v-show="$vuetify.breakpoint.xs"
    >NM</span>
  </div>
</template>
<script>
export default {
  props: {
    logosize: {
      type: Number,
      default: 50
    },
    logocolor: {
      type: String,
      default: "black"
    }
  },
  computed: {
    logostyle() {
      return (
        // "font-size:" +
        // this.logosize +
        // "px;color:" +
        // this.logocolor +
        // ";border:" +
        // this.logosize / 25 +
        // "px solid " +
        // this.logocolor +
        // ";padding:" +
        // this.logosize / 5 +
        // "px;"
        "font-size:" + this.logosize + "px;color:" + this.logocolor + ";"
      );
    }
  }
};
</script>
<style module lang="css">
@font-face {
  font-family: "New Walt Disney";
  src: url("../assets/fonts/New Walt Disney.ttf") format("truetype");
}

.logotext {
  font-family: "New Walt Disney";
}
.noselect {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
