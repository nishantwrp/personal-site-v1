<template>
  <div>
    <span :class="[$style.logotext,$style.noselect]" :style="logostyle">
      <div :class="$style.loadingdiv">NM</div>
    </span>
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
        "font-size:" +
        this.logosize +
        "px;color:" +
        this.logocolor +
        ";border:" +
        this.logosize / 25 +
        "px solid " +
        this.logocolor +
        ";padding:" +
        this.logosize / 5 +
        "px;"
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
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.logotext {
  font-family: "New Walt Disney";
  border-radius: 50%;
}
.loadingdiv {
  display: inline-block;
  animation: spin 2s linear infinite;
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
