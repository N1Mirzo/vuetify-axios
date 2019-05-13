<template>
  <v-navigation-drawer
    disable-route-watcher
    :value="value"
    @input="$emit('input', $event)"
    :clipped="$vuetify.breakpoint.lgAndUp"
    fixed
    dark
    app
  ></v-navigation-drawer>
</template>

<script>
export default {
  name: "Aside",
  props: ["value"],
  data() {
    return {};
  }
};
</script>

<style>
</style>
