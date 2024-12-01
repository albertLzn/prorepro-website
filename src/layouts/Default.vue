<template>
  <div class="flex flex-col mx-auto  default-container">
        <Navbar />
    <Header class="mb-5 mt-10" v-if="$route.path === '/'" />
    <div class="my-6">
      <slot />
    </div>

    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import Header from "@/components/Header";
import BottomNav from '../components/BottomNav.vue';

export default {
  name: "Default",
  components: {
    Header,
    Navbar: () => import("@/components/Navbar"),
    BottomNav
  },
  
};
</script>

<style scoped>
.default-container {
  height: 100vh;
  overflow: auto;
  background: url('../assets/bg-prorepro.jpeg') center;
  background-size: cover;
  }
</style>
