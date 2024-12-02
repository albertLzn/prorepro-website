<template>
  <main id="app">
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
  </main>
</template>

<script>
import Default from "@/layouts/Default.vue";
let images = ['./assets/bg-prorepro.jpeg', '../public/proreprologo2024.png']
export default {
  components: {
    Default
  },
 
};
</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
