<template>
  <span :class="[$style.logotext, $style.noselect]">
    <div :class="$style.loadingdiv">NM</div>
  </span>
</template>

<style module lang="css">
@font-face {
  font-family: "New Walt Disney";
  src: url("/fonts/New Walt Disney.ttf") format("truetype");
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
  font-size: 50px;
  color: #3f51b5;
  border: 2px solid #3f51b5 ;
  padding: 10px;
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
