<template>
  <v-app id="app">
    <link 
      rel="preload" 
      as="image" 
      href="../public/proreprologo2024.png"
      type="image/png"
      crossorigin="anonymous"
    >
    <Default>
      <router-view />
    </Default>
  </v-app>
</template>

<script>
import Default from "@/layouts/Default.vue";

export default {
  name: 'App',
  components: {
    Default
  }
};
</script>