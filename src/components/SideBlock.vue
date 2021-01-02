<template>
  <v-card :class="$style.cardStyle" style="margin:20px;">
    <v-card-title primary-title>
      <div v-if="displayTitle" :class="$style.title">{{ title }}</div>
      <div :class="$style.content">
        <slot></slot>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false
    },
    displayTitle: {
      type: Boolean,
      required: false,
      default: true
    }
  }
};
</script>

<style lang="css" module>
.cardStyle {
  margin: 20px;
}

.title {
  font-size: 18px;
  font-family: 'Balsamiq Sans', cursive;
}

.content {
  margin: 5px 0px;
  width: 100%;
}
</style>
