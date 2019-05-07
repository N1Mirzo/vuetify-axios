<template>
  <v-navigation-drawer
    :value="value"
    @input="$emit('input', $event)"
    :clipped="$vuetify.breakpoint.lgAndUp"
    fixed
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
