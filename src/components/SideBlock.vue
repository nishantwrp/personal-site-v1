<template>
  <v-container style="border: 1px solid indigo">
    <div>{{ title }}</div>
    <slot></slot>
  </v-container>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="css" module>
</style>